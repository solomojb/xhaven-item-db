import { useCallback, useMemo } from "react";
import { AllGames } from "../games/GameType";
import {
  ClassesInUse,
  CSAClasses,
  CSClasses,
  FCClasses,
  FHClasses,
  GHClasses,
  JOTLClasses,
  TOAClasses,
} from "../State/Types";
import { useXHavenDB } from "../components/Providers/XHavenDBProvider";
import { useGetGames } from "../games";

interface Return {
  removeClasses: (classes: ClassesInUse | ClassesInUse[], removingGame?: AllGames) => void,
  removeItemsFromOwner: (itemsId: number[] | number, owner: ClassesInUse, removingGame?: AllGames) => void,
  itemsOwnedByClass: (owner: ClassesInUse | undefined) => number[],
  getClassesForGame: (gameType: AllGames) => GHClasses[] | JOTLClasses[] | FHClasses[] | FCClasses[] | CSClasses[] | CSAClasses[] | TOAClasses[]
  getClassesToRemove: (removingGame: AllGames) => ClassesInUse[],
  getRemovingItemCount: (removingGame: AllGames) => number,
}

export const useRemovePlayerUtils = (): Return => {
  const { classesInUse, setClassesInUse: setClassesInUseBy, itemsOwnedBy, setItemsOwnedBy, specialUnlocks, items } = useXHavenDB();
  const games = useGetGames();

  const itemsOwnedByClass = useCallback(
    (owner: ClassesInUse | undefined) => {
      if (!owner) {
        return [];
      }
      const itemIds: number[] = [];
      Object.entries(itemsOwnedBy).forEach(([itemId, owners]) => {
        if (owners && owners.includes(owner)) {
          itemIds.push(parseInt(itemId));
        }
      });
      return itemIds;
    },
    [itemsOwnedBy]
  );

  const removeItemsFromOwner = useCallback(
    (
      itemsId: number[] | number,
      owner: ClassesInUse,
      removingGame?: AllGames
    ) => {
      const newItemsOwnedBy = Object.assign({}, itemsOwnedBy);
      const itemsToRemove = !Array.isArray(itemsId) ? [itemsId] : itemsId;
      itemsToRemove.forEach((itemId) => {
        const owners = newItemsOwnedBy[itemId];
        const copyOwners = Object.assign([], owners);
        if (copyOwners.includes(owner)) {
          copyOwners.splice(copyOwners.indexOf(owner), 1);
        }
        if (copyOwners.length) {
          newItemsOwnedBy[itemId] = copyOwners;
        } else {
          delete newItemsOwnedBy[itemId];
        }
      });
      if (removingGame) {
        const gameItems = items.filter(
          (item) => item.gameType === removingGame
        );
        gameItems.forEach(({ id }) => {
          delete newItemsOwnedBy[id];
        });
      }
      setItemsOwnedBy(newItemsOwnedBy);
    },
    [itemsOwnedBy, setItemsOwnedBy, items]
  );

  const removeClasses = useCallback(
    (classes: ClassesInUse | ClassesInUse[], removingGame?: AllGames) => {
      const classesToRemove = !Array.isArray(classes) ? [classes] : classes;
      const newClassesInUse = Object.assign([], classesInUse);
      classesToRemove.forEach((classToRemove) => {
        removeItemsFromOwner(
          itemsOwnedByClass(classToRemove),
          classToRemove,
          removingGame
        );
        const index = newClassesInUse.indexOf(classToRemove);
        if (index !== -1) {
          newClassesInUse.splice(index, 1);
        }
      });
      setClassesInUseBy(newClassesInUse);
    },
    [
      classesInUse,
      itemsOwnedByClass,
      removeItemsFromOwner,
      setClassesInUseBy,
    ]
  );

  const getClassesForGame = useCallback(
    (gameType: AllGames) => {
      return games[gameType].gameClasses(specialUnlocks);
    },
    [games, specialUnlocks]
  );

  const getClassesToRemove = useCallback(
    (removingGame: AllGames) => {
      const classes: ClassesInUse[] = getClassesForGame(removingGame);
      return classes.filter((c) => classesInUse.includes(c));
    },
    [classesInUse, getClassesForGame]
  );

  const getRemovingItemCount = useCallback(
    (removingGame: AllGames) => {
      const classesToRemove = getClassesToRemove(removingGame);
      let itemCount = 0;
      classesToRemove.forEach((classToRemove) => {
        const items = itemsOwnedByClass(classToRemove);
        itemCount += items.length;
      });
      return itemCount;
    },
    [getClassesToRemove, itemsOwnedByClass]
  );

  return useMemo(
    () => ({
      removeClasses,
      removeItemsFromOwner,
      itemsOwnedByClass,
      getClassesForGame,
      getClassesToRemove,
      getRemovingItemCount,
    }),
    [
      removeClasses,
      removeItemsFromOwner,
      itemsOwnedByClass,
      getClassesForGame,
      getClassesToRemove,
      getRemovingItemCount,
    ]
  );
};
