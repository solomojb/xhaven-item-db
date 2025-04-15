import { createContext, PropsWithChildren, ReactNode, useContext, useMemo } from "react"
import { BuildingLevel, ClassesInUse, FCClasses, gameTypeState, GHClasses, GloomhavenItem, GloomhavenItemSlot, ItemManagementType, ItemsInUse, ItemsOwnedBy, ItemViewDisplayType, JOTLClasses, SpecialUnlockTypes } from "../../State";
import { useRecoilValue } from "recoil";
import { useLocalStateVariable } from "./LocalStateVariable";
import { useGetGame, GameType } from "../../games";
import { useGameStateVariable } from "./GameStateVariable";
import { AllGames, Expansions } from "../../games/GameType";

const fixItemsOwnedBy = (oldItemsOwnedBy: any) => {
    if (Array.isArray(oldItemsOwnedBy)) {
        const newItemsOwnedBy: ItemsOwnedBy = {};
        oldItemsOwnedBy.forEach((value, index) => {
            if (value && value.length) {
                newItemsOwnedBy[index] = value;
            }
        });
        return newItemsOwnedBy;
    }
    return oldItemsOwnedBy;
};

const fixSpecialUnlocks = (
    oldSpecialUnlocks: any,
    _gameType: GameType,
    spoilerObj: any
) => {
    if (spoilerObj.envelopeX) {
        delete spoilerObj.envelopeX;
        return [SpecialUnlockTypes.EnvelopeX];
    }
    return oldSpecialUnlocks;
};

const fixedItemsInUseCount = (
    oldItemsInUseCount: ItemsInUse,
    _gameType: GameType,
    spoilerObj?: any
) => {
    const oldItemsInUse: ItemsInUse = spoilerObj["itemsInUse"];
    if (oldItemsInUse) {
        const newItemsInUseCount: ItemsInUse = {};
        Object.entries(oldItemsInUse).forEach(([itemId, value]) => {
            const id = parseInt(itemId, 10);
            let count = 0;
            if (value & Math.pow(2, 0)) {
                count += 1;
            }
            if (value & Math.pow(2, 1)) {
                count += 1;
            }
            if (value & Math.pow(2, 2)) {
                count += 1;
            }
            if (value & Math.pow(2, 3)) {
                count += 1;
            }
            console.log(id, value, count);
            newItemsInUseCount[id] = count;
        });
        delete spoilerObj["itemsInUse"];
        return newItemsInUseCount;
    }
    return oldItemsInUseCount;
};

function shouldAddGameGH(classesInUse: ClassesInUse[]): boolean {
    const value = Object.values(GHClasses).some((classType) => {
        return classesInUse.includes(classType);
    });
    return value;
}

function shouldAddGameFC(classesInUse: ClassesInUse[]): boolean {
    const value = Object.values(FCClasses).some((classType) => {
        return classesInUse.includes(classType);
    });
    return value;
}

function shouldAddGameJOTL(classesInUse: ClassesInUse[]): boolean {
    const value = Object.values(JOTLClasses).some((classType) => {
        return classesInUse.includes(classType);
    });
    return value;
}

const fixIncludedGames = (old: any, gameType: GameType, spoilerObj: any) => {
    const newGames = Object.assign([], old);
    if (!newGames || newGames.length === 0) {
        const classesInUse = spoilerObj["classesInUse"];
        if (classesInUse) {
            if (shouldAddGameGH(classesInUse)) {
                newGames.push(GameType.Gloomhaven);
            }
            if (shouldAddGameFC(classesInUse)) {
                newGames.push(Expansions.ForgottenCircles);
            }
            if (shouldAddGameJOTL(classesInUse)) {
                newGames.push(GameType.JawsOfTheLion);
            }
        }
        const items = spoilerObj["item"];
        if (
            items &&
            gameType === GameType.Gloomhaven &&
            !newGames.includes(Expansions.ForgottenCircles)
        ) {
            const value = items.some((item: any) => item >= 153);
            if (value) {
                newGames.push(Expansions.ForgottenCircles);
            }
        }
        const soloClass = spoilerObj["soloClass"];
        if (gameType === GameType.Gloomhaven && soloClass && soloClass.length) {
            newGames.push(Expansions.GHSoloScenarios);
        }
    }
    if (!newGames.includes(gameType)) {
        newGames.push(gameType);
    }
    return newGames;
};

interface Data {
    itemManagementType: ItemManagementType;
    setItemManagementType: (type: ItemManagementType) => void;

    classesInUse: ClassesInUse[];
    setClassesInUse: (newClasses: ClassesInUse[]) => void;

    itemsOwnedBy: ItemsOwnedBy;
    setItemsOwnedBy: (newItems: ItemsOwnedBy) => void;

    specialUnlocks: SpecialUnlockTypes[],
    setSpecialUnlocks: (newSpecialUnlocks: SpecialUnlockTypes[]) => void,

    all: boolean;
    setAll: (all: boolean) => void;

    discount: number;
    setDiscount: (discount: number) => void;

    displayAs: ItemViewDisplayType;
    setDisplayAs: (type: ItemViewDisplayType) => void;

    item: number[];
    setItem: (item: number[]) => void;

    itemsInUseCount: ItemsInUse;
    setItemsInUseCount: (itemsInUseCount: ItemsInUse) => void;

    prosperity: number;
    setProsperity: (prosperity: number) => void;

    includeGames: AllGames[];
    setIncludeGames: (includeGames: AllGames[]) => void;

    buildingLevel: BuildingLevel;
    setBuildingLevel: (buildingLevel: BuildingLevel) => void;

    scenarioCompleted: number[];
    setScenarioCompleted: (scenarioCompleted: number[]) => void;

    soloClass: ClassesInUse[];
    setSoloClass: (scenarioCompleted: ClassesInUse[]) => void;


    selectedClass: ClassesInUse | undefined;
    setSelectedClass: (newClass: ClassesInUse | undefined) => void;

    selectedItem: GloomhavenItem | undefined;
    setSelectedItem: (newItem: GloomhavenItem | undefined) => void;

    classToDelete: ClassesInUse | undefined;
    setClassToDelete: (classToDelete: ClassesInUse | undefined) => void;

    confirmSpecialUnlockOpen: string | undefined;
    setConfirmSpecialUnlockOpen: (classToDelete: string | undefined) => void;

    removingGame: AllGames | undefined;
    setRemovingGame: (removingGame: AllGames | undefined) => void;


    items: GloomhavenItem[];
    filterSlots: GloomhavenItemSlot[];
    resources: string[];
}

const context = createContext<Data | undefined>(undefined);

export const useXHavenDB = () => {
    const result = useContext(context);
    if (!result) {
        throw Error("Please use inside a XHavenDataDBProvider");
    }
    return result;
}

const { Provider } = context;

const defaultClassesInUse: ClassesInUse[] = [];
const defaultItemsOwnedBy: ItemsOwnedBy = {};
const defaultSpecialUnlocks: SpecialUnlockTypes[] = [];
const defaultItem: number[] = [];
const defaultItemInUseCount: ItemsInUse = {};
const defaultScenarioCompleted: number[] = [];
const defaultSoloClass: ClassesInUse[] = [];
const defaultIncludeGames: AllGames[] = [];
const defaultBuildingLevel: BuildingLevel = {
    cm: 1,
    tp: -1,
    jw: -1,
    en: -1,

}



export const XHavenDBProvider = (props: PropsWithChildren<ReactNode>) => {
    const { children } = props;
    const gameType = useRecoilValue(gameTypeState);
    const [itemManagementType, setItemManagementType] = useLocalStateVariable<ItemManagementType>(gameType, "itemManagementType", ItemManagementType.None);
    const [classesInUse, setClassesInUse] = useLocalStateVariable<ClassesInUse[]>(gameType, "classesInUse", defaultClassesInUse);
    const [itemsOwnedBy, setItemsOwnedBy] = useLocalStateVariable<ItemsOwnedBy>(gameType, "itemsOwnedBy", defaultItemsOwnedBy, fixItemsOwnedBy);
    const [specialUnlocks, setSpecialUnlocks] = useLocalStateVariable<SpecialUnlockTypes[]>(gameType, "specialUnlocks", defaultSpecialUnlocks, fixSpecialUnlocks);
    const [all, setAll] = useLocalStateVariable<boolean>(gameType, "all", false);
    const [discount, setDiscount] = useLocalStateVariable<number>(gameType, "discount", 0);
    const [displayAs, setDisplayAs] = useLocalStateVariable<ItemViewDisplayType>(gameType, "displayAs", ItemViewDisplayType.List);
    const [item, setItem] = useLocalStateVariable<number[]>(gameType, "item", defaultItem);
    const [itemsInUseCount, setItemsInUseCount] = useLocalStateVariable<ItemsInUse>(gameType, "itemsInUseCount", defaultItemInUseCount, fixedItemsInUseCount);
    const [prosperity, setProsperity] = useLocalStateVariable<number>(gameType, "prosperity", 1);
    const [scenarioCompleted, setScenarioCompleted] = useLocalStateVariable<number[]>(gameType, "scenarioCompleted", defaultScenarioCompleted);
    const [soloClass, setSoloClass] = useLocalStateVariable<ClassesInUse[]>(gameType, "soloClass", defaultSoloClass);
    const [includeGames, setIncludeGames] = useLocalStateVariable<AllGames[]>(gameType, "includeGames", defaultIncludeGames, fixIncludedGames);
    const [buildingLevel, setBuildingLevel] = useLocalStateVariable<BuildingLevel>(gameType, "buildingLevel", defaultBuildingLevel);

    const [selectedClass, setSelectedClass] = useGameStateVariable<ClassesInUse | undefined>(gameType, undefined)
    const [selectedItem, setSelectedItem] = useGameStateVariable<GloomhavenItem | undefined>(gameType, undefined)
    const [classToDelete, setClassToDelete] = useGameStateVariable<ClassesInUse | undefined>(gameType, undefined)
    const [confirmSpecialUnlockOpen, setConfirmSpecialUnlockOpen] = useGameStateVariable<string | undefined>(gameType, undefined)
    const [removingGame, setRemovingGame] = useGameStateVariable<AllGames | undefined>(gameType, undefined)

    const { items, resources, filterSlots } = useGetGame(gameType);

    const value = useMemo(() => ({
        itemManagementType, setItemManagementType,
        classesInUse, setClassesInUse,
        itemsOwnedBy, setItemsOwnedBy,
        items,
        resources,
        filterSlots,
        specialUnlocks, setSpecialUnlocks,
        all, setAll,
        discount, setDiscount,
        displayAs, setDisplayAs,
        item, setItem,
        itemsInUseCount, setItemsInUseCount,
        prosperity, setProsperity,
        scenarioCompleted, setScenarioCompleted,
        soloClass, setSoloClass,
        includeGames, setIncludeGames,
        buildingLevel, setBuildingLevel,
        selectedClass, setSelectedClass,
        selectedItem, setSelectedItem,
        classToDelete, setClassToDelete,
        confirmSpecialUnlockOpen, setConfirmSpecialUnlockOpen,
        removingGame, setRemovingGame,
    }), [
        itemManagementType, setItemManagementType,
        classesInUse, setClassesInUse,
        itemsOwnedBy, setItemsOwnedBy,
        specialUnlocks, setSpecialUnlocks,
        all, setAll,
        discount, setDiscount,
        displayAs, setDisplayAs,
        item, setItem,
        itemsInUseCount, setItemsInUseCount,
        prosperity, setProsperity,
        scenarioCompleted, setScenarioCompleted,
        soloClass, setSoloClass,
        includeGames, setIncludeGames,
        buildingLevel, setBuildingLevel,
        selectedClass, setSelectedClass,
        selectedItem, setSelectedItem,
        classToDelete, setClassToDelete,
        confirmSpecialUnlockOpen, setConfirmSpecialUnlockOpen,
        removingGame, setRemovingGame,
        items,
        filterSlots,
        resources,
    ])


    return <Provider value={value}>{children}</Provider>
}
