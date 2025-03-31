import { GloomhavenItem } from "../State/Types";
import { useRecoilValue } from "recoil";
import {
  itemState,
  allState,
  prosperityState,
  soloClassState,
  scenarioCompletedState,
  includeGameState,
  buildingLevelState,
} from "../State";
import { useCallback } from "react";
import { useXHavenDB } from "../components/Providers/XHavenDBProvider";
import { useFilter } from "../components/Providers/FilterProvider";

export const useIsItemShown = (): ((item: GloomhavenItem) => boolean) => {
  const { itemsOwnedBy, specialUnlocks, selectedClass } = useXHavenDB();
  const { slots, resources, availableOnly, searchStr } = useFilter();
  const item = useRecoilValue(itemState);
  const all = useRecoilValue(allState);
  const prosperity = useRecoilValue(prosperityState);
  const soloClass = useRecoilValue(soloClassState);
  const scenarioCompleted = useRecoilValue(scenarioCompletedState);
  const includeGames = useRecoilValue(includeGameState);
  const buildingLevels = useRecoilValue(buildingLevelState);
  const craftsmanLevel = buildingLevels["cm"];
  const jewelerLevel = buildingLevels["jw"];
  const tradingPostLevel = buildingLevels["tp"];
  const enhancerLevel = buildingLevels["en"];

  const isItemShown = useCallback(
    ({
      id,
      soloItem,
      unlockProsperity = 0,
      unlockScenario = 0,
      gameType,
      slot,
      name,
      resources: itemResources,
      desc,
      count,
      specialUnlock,
      alwaysShown = false,
      unlockCrafstmanLevel = 0,
      unlockTradingPostLevel = 0,
      unlockJewelerLevel = 0,
      unlockEnhancerLevel = 0,
      importedItem,
    }: GloomhavenItem) => {
      if (!includeGames.includes(gameType)) {
        return false;
      }

      if (specialUnlock && !specialUnlocks.includes(specialUnlock)) {
        return false;
      }

      if (!all && importedItem) {
        if (
          unlockTradingPostLevel !== undefined &&
          unlockTradingPostLevel !== Number.MAX_VALUE &&
          tradingPostLevel < unlockTradingPostLevel
        ) {
          return false;
        }
        if (
          unlockScenario !== undefined &&
          unlockScenario !== Number.MAX_VALUE &&
          !scenarioCompleted.includes(unlockScenario)
        ) {
          return false;
        }
        if (
          unlockEnhancerLevel !== undefined &&
          unlockEnhancerLevel !== Number.MAX_VALUE &&
          enhancerLevel < unlockEnhancerLevel
        ) {
          return false;
        }
        if (!item.includes(id)) {
          return false;
        }
      }
      const show =
        all ||
        prosperity >= unlockProsperity ||
        scenarioCompleted.includes(unlockScenario) ||
        (soloItem && soloClass.includes(soloItem)) ||
        item.includes(id) ||
        craftsmanLevel >= unlockCrafstmanLevel ||
        tradingPostLevel >= unlockTradingPostLevel ||
        jewelerLevel >= unlockJewelerLevel ||
        enhancerLevel >= unlockEnhancerLevel ||
        alwaysShown;

      if (show) {
        if (slots.length > 0 && !slots.includes(slot)) {
          return false;
        }
        if (resources.length > 0) {
          if (itemResources) {
            const itemResourceTypes = Object.keys(itemResources);
            if (!resources.some((r) => itemResourceTypes.indexOf(r) >= 0)) {
              return false;
            }
          } else {
            return false;
          }
        }
        if (searchStr.length > 2) {
          if (
            !name.match(new RegExp(searchStr, "i")) &&
            !desc.match(new RegExp(searchStr, "i"))
          ) {
            return false;
          }
        }
        if (selectedClass) {
          const owners = itemsOwnedBy[id];
          if (!owners || !owners.includes(selectedClass)) {
            return false;
          }
        }
        if (availableOnly) {
          const owners = itemsOwnedBy[id];
          if (owners) {
            if (count === owners.length) {
              return false;
            }
          }
        }
      }
      return show;
    },
    [
      all,
      availableOnly,
      includeGames,
      item,
      itemsOwnedBy,
      prosperity,
      resources,
      scenarioCompleted,
      searchStr,
      selectedClass,
      slots,
      soloClass,
      specialUnlocks,
      craftsmanLevel,
      jewelerLevel,
      tradingPostLevel,
      enhancerLevel,
    ]
  );

  return isItemShown;
};
