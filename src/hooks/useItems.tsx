import { GloomhavenItem, SortDirection, SortProperty } from "../State/Types";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useIsItemShown } from "./useIsItemShown";
import { useXHavenDB } from "../components/Providers/XHavenDBProvider";
import { useFilter } from "../components/Providers/FilterProvider";
import { useRecoilValue } from "recoil";
import { gameTypeState } from "../State";
import { useGetGame } from "../games";

export function compareItems<T>(a: T, b: T) {
  if (a === b) {
    return 0;
  } else {
    return a > b ? 1 : -1;
  }
}

const getItemUse = ({ consumed, spent, lost }: GloomhavenItem) => {
  if (spent) {
    return "a";
  }
  if (consumed) {
    return "b";
  }
  if (lost) {
    return "c";
  }
  return "d";
};

const useItems = (): Array<GloomhavenItem> => {
  const { items } = useXHavenDB();
  const isItemShown = useIsItemShown();
  const { sortDirection, sortProperty } = useFilter();
  const currentGameType = useRecoilValue(gameTypeState);
  const game = useGetGame(currentGameType);
  const { gameFilters } = game;
  const allGames = useMemo(() => [currentGameType, ...gameFilters], [currentGameType, gameFilters]);

  const [sortedItems, setSortedItems] = useState<GloomhavenItem[]>([]);
  const [filteredItems, setFilteredItems] = useState<GloomhavenItem[]>([]);

  const doSort = useCallback(
    (itemA: GloomhavenItem, itemB: GloomhavenItem) => {
      let value = 0;
      switch (sortProperty) {
        case SortProperty.Name:
          value = compareItems(itemA.name, itemB.name);
          break;
        case SortProperty.Slot:
          value = compareItems(itemA.slot, itemB.slot);
          break;
        case SortProperty.Cost: {
          if (itemA.cost && itemB.cost) {
            value = compareItems(itemA.cost, itemB.cost);
          } else if (itemA.cost) {
            return -1;
          } else {
            return 1;
          }
        }
          break;
        case SortProperty.Id: {
          const itemAIndex = allGames.findIndex(
            (item) => item === itemA.gameType
          );
          const itemBIndex = allGames.findIndex(
            (item) => item === itemB.gameType
          );
          value = compareItems(itemAIndex, itemBIndex);
          if (value === 0) {
            value = compareItems(itemA.id, itemB.id);
          }
          break;
        }
        case SortProperty.Use:
          value = compareItems(getItemUse(itemA), getItemUse(itemB));
          break;
      }
      return sortDirection === SortDirection.ascending ? value : value * -1;
    },
    [sortDirection, sortProperty, allGames]
  );

  useEffect(() => {
    if (!items) {
      return;
    }
    const itemsCopy = Object.assign([], items);
    itemsCopy.sort(doSort);
    setSortedItems(itemsCopy);
  }, [items, doSort]);

  useEffect(() => {
    setFilteredItems(sortedItems.filter(isItemShown));
  }, [sortedItems, isItemShown]);

  return filteredItems;
};

export default useItems;
