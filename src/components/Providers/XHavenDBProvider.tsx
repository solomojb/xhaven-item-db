import { createContext, PropsWithChildren, ReactNode, useContext, useMemo } from "react"
import { ClassesInUse, gameTypeState, GloomhavenItem, GloomhavenItemSlot, ItemManagementType, ItemsOwnedBy, SpecialUnlockTypes } from "../../State";
import { useRecoilValue } from "recoil";
import { useLocalStateVariable } from "./LocalStateVariable";
import { gameDataTypes, GameType } from "../../games";
import { useGameStateVariable } from "./GameStateVariable";

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


interface Data {
    itemManagementType: ItemManagementType;
    setItemManagementType: (type: ItemManagementType) => void;

    classesInUse: ClassesInUse[];
    setClassesInUse: (newClasses: ClassesInUse[]) => void;

    itemsOwnedBy: ItemsOwnedBy;
    setItemsOwnedBy: (newItems: ItemsOwnedBy) => void;

    specialUnlocks: SpecialUnlockTypes[],
    setSpecialUnlocks: (newSpecialUnlocks: SpecialUnlockTypes[]) => void,

    selectedClass: ClassesInUse | undefined;
    setSelectedClass: (newClass: ClassesInUse | undefined) => void;

    selectedItem: GloomhavenItem | undefined;
    setSelectedItem: (newItem: GloomhavenItem | undefined) => void;


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


export const XHavenDBProvider = (props: PropsWithChildren<ReactNode>) => {
    const { children } = props;
    const gameType = useRecoilValue(gameTypeState);
    const [itemManagementType, setItemManagementType] = useLocalStateVariable<ItemManagementType>(gameType, "itemManagementType", ItemManagementType.None);
    const [classesInUse, setClassesInUse] = useLocalStateVariable<ClassesInUse[]>(gameType, "classesInUse", defaultClassesInUse);
    const [itemsOwnedBy, setItemsOwnedBy] = useLocalStateVariable<ItemsOwnedBy>(gameType, "itemsOwnedBy", defaultItemsOwnedBy, fixItemsOwnedBy);
    const [specialUnlocks, setSpecialUnlocks] = useLocalStateVariable<SpecialUnlockTypes[]>(gameType, "specialUnlocks", defaultSpecialUnlocks, fixSpecialUnlocks);

    const [selectedClass, setSelectedClass] = useGameStateVariable<ClassesInUse | undefined>(gameType, undefined)
    const [selectedItem, setSelectedItem] = useGameStateVariable<GloomhavenItem | undefined>(gameType, undefined)

    const { items, resources, filterSlots } = useMemo(() => {
        return gameDataTypes[gameType];
    }, [gameType])

    const value = useMemo(() => ({
        itemManagementType,
        setItemManagementType,
        classesInUse,
        setClassesInUse,
        itemsOwnedBy,
        setItemsOwnedBy,
        items,
        resources,
        filterSlots,
        specialUnlocks,
        setSpecialUnlocks,
        selectedClass,
        setSelectedClass,
        selectedItem,
        setSelectedItem
    }), [
        itemManagementType, setItemManagementType,
        classesInUse, setClassesInUse,
        itemsOwnedBy, setItemsOwnedBy,
        specialUnlocks, setSpecialUnlocks,
        selectedClass, setSelectedClass,
        selectedItem, setSelectedItem,
        items,
        filterSlots,
        resources,
    ])


    return <Provider value={value}>{children}</Provider>
}
