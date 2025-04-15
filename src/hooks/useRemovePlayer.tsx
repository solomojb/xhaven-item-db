import { useCallback, useMemo } from "react";
import { gameInfo } from "../games/GameInfo";
import { AllGames } from "../games/GameType";
import {
  ClassesInUse,
} from "../State/Types";
import { useXHavenDB } from "../components/Providers/XHavenDBProvider";

export const useRemovePlayerUtils = () => {
  const { classesInUse, setClassesInUse: setClassesInUseBy, itemsOwnedBy, setItemsOwnedBy, specialUnlocks, selectedClass, setSelectedClass, items } = useXHavenDB();

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
      let clearClassSelection = false;
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

        const newSelectedClass = selectedClass;
        if (newSelectedClass === classToRemove) {
          clearClassSelection = true;
        }
      });
      if (clearClassSelection) {
        setSelectedClass(undefined);
      }
      setClassesInUseBy(newClassesInUse);
    },
    [
      classesInUse,
      itemsOwnedByClass,
      removeItemsFromOwner,
      selectedClass,
      setClassesInUseBy,
      setSelectedClass,
    ]
  );

  const getClassesForGame = useCallback(
    (gameType: AllGames) => {
      return gameInfo[gameType].gameClasses(specialUnlocks);
    },
    [specialUnlocks]
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

  const anyGameItemsOwned = useCallback(
    (gameType: AllGames) => {
      const gameItemIds = items
        .filter((item) => item.gameType === gameType)
        .map((item) => item.id.toString());
      return gameItemIds.filter((id) => itemsOwnedBy[id]).length;
    },
    [itemsOwnedBy, items]
  );

  const functions = useMemo(
    () => ({
      removeClasses,
      removeItemsFromOwner,
      itemsOwnedByClass,
      getClassesForGame,
      getClassesToRemove,
      getRemovingItemCount,
      anyGameItemsOwned,
    }),
    [
      removeClasses,
      removeItemsFromOwner,
      itemsOwnedByClass,
      getClassesForGame,
      getClassesToRemove,
      getRemovingItemCount,
      anyGameItemsOwned,
    ]
  );
  return functions;
};
