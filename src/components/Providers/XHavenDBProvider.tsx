import { createContext, PropsWithChildren, ReactNode, useCallback, useContext, useMemo, useState } from "react"
import { ClassesInUse, gameTypeState, GloomhavenItem, GloomhavenItemSlot, ItemManagementType, ItemsOwnedBy, SpecialUnlockTypes } from "../../State";
import { useRecoilValue } from "recoil";
import { useLocalStateVariable } from "./LocalStateVariable";
import { gameDataTypes, GameType } from "../../games";


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


export const XHavenDBProvider = (props: PropsWithChildren<ReactNode>) => {
    const { children } = props;
    const gameType = useRecoilValue(gameTypeState);
    const [itemManagementType, setItemManagementType] = useLocalStateVariable<ItemManagementType>(gameType, "itemManagmentType", ItemManagementType.None);
    const [classesInUse, setClassesInUse] = useLocalStateVariable<ClassesInUse[]>(gameType, "classesInUse", []);
    const [itemsOwnedBy, setItemsOwnedBy] = useLocalStateVariable<ItemsOwnedBy>(gameType, "itemsOwnedBy", {}, fixItemsOwnedBy);
    const [specialUnlocks, setSpecialUnlocks] = useLocalStateVariable<SpecialUnlockTypes[]>(gameType, "specialUnlocks", [], fixSpecialUnlocks);
    const [selectedClassByGame, setSelectedClassByGame] = useState<Record<GameType, ClassesInUse | undefined>>({ fh: undefined, gh: undefined, jotl: undefined });

    const { items, resources, filterSlots } = useMemo(() => {
        return gameDataTypes[gameType];
    }, [gameType])

    const selectedClass = useMemo(() => {
        return selectedClassByGame[gameType];
    }, [gameType])

    const setSelectedClass = useCallback((newClass: ClassesInUse | undefined) => {
        setSelectedClassByGame(current => {
            const copy = { ...current };
            copy[gameType] = newClass;
            return copy
        });
    }, [gameType]);

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
    }), [itemManagementType, setItemManagementType, classesInUse, setClassesInUse, specialUnlocks, setSpecialUnlocks, selectedClass, setSelectedClass, items])

    return <Provider value={value}>{children}</Provider>
}
