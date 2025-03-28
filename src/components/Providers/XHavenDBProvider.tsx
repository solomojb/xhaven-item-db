import { createContext, PropsWithChildren, ReactNode, useCallback, useContext, useMemo, useState } from "react"
import { gameTypeState, ItemManagementType } from "../../State";
import { getDefaultValue, storeValue } from "../../State/CommonState";
import { useRecoilValue } from "recoil";

interface Data {
    itemManagementType: ItemManagementType;
    setItemManagementType: (type: ItemManagementType) => void;
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
    const defaultItemManagementType = getDefaultValue<ItemManagementType>(gameType, "itemManagementType", ItemManagementType.None)
    const [itemManagementType, setItemManagementType] = useState<ItemManagementType>(defaultItemManagementType);

    const localSetItemManagementType = useCallback((itemManagementType: ItemManagementType) => {
        setItemManagementType(itemManagementType);
        storeValue<ItemManagementType>(gameType, "itemManagmentType", itemManagementType);
    }, []);

    const value = useMemo(() => ({
        itemManagementType,
        setItemManagementType: localSetItemManagementType,
    }), [itemManagementType, localSetItemManagementType])

    return <Provider value={value}>{children}</Provider>
}
