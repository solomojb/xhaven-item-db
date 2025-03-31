import { createContext, PropsWithChildren, ReactNode, useContext, useMemo } from "react"
import { gameTypeState, GloomhavenItemSlot, ResourceTypes, SortDirection, SortProperty } from "../../State";
import { useGameStateVariable } from "./GameStateVariable";
import { useRecoilValue } from "recoil";

interface Data {
    slots: GloomhavenItemSlot[];
    setSlots: (slots: GloomhavenItemSlot[]) => void;

    resources: ResourceTypes[];
    setResources: (resources: ResourceTypes[]) => void;

    availableOnly: boolean;
    setAvailableOnly: (available: boolean) => void;

    searchStr: string;
    setSearchStr: (searchStr: string) => void;

    sortDirection: SortDirection;
    setSortDirection: (sortDir: SortDirection) => void;

    sortProperty: SortProperty;
    setSortProperty: (sortOn: SortProperty) => void;
}

const context = createContext<Data | undefined>(undefined);

export const useFilter = () => {
    const result = useContext(context);
    if (!result) {
        throw Error("Please use inside a FilterProvider");
    }
    return result;
}

const { Provider } = context;

const defaultFilteredSlots: GloomhavenItemSlot[] = [];
const defaultResourceTypes: ResourceTypes[] = [];

export const FilterProvider = (props: PropsWithChildren<ReactNode>) => {
    const { children } = props;
    const gameType = useRecoilValue(gameTypeState);
    const [slots, setSlots] = useGameStateVariable<GloomhavenItemSlot[]>(gameType, defaultFilteredSlots)
    const [resources, setResources] = useGameStateVariable<ResourceTypes[]>(gameType, defaultResourceTypes)
    const [availableOnly, setAvailableOnly] = useGameStateVariable<boolean>(gameType, false)
    const [searchStr, setSearchStr] = useGameStateVariable<string>(gameType, '')
    const [sortDirection, setSortDirection] = useGameStateVariable<SortDirection>(gameType, SortDirection.ascending);
    const [sortProperty, setSortProperty] = useGameStateVariable<SortProperty>(gameType, SortProperty.Id);

    const value = useMemo(() => ({
        slots, setSlots,
        resources, setResources,
        availableOnly, setAvailableOnly,
        searchStr, setSearchStr,
        sortDirection, setSortDirection,
        sortProperty, setSortProperty,

    }), [availableOnly, resources, slots, searchStr, setAvailableOnly, setResources, setSlots, setSearchStr, setSortDirection, setSortProperty, sortDirection, sortProperty])


    return <Provider value={value}>{children}</Provider>
}
