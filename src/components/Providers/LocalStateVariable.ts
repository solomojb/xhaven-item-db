import { useCallback, useEffect, useMemo, useState } from "react";
import { GameType } from "../../games";
import { getDefaultValue, storeValue } from "../../State/CommonState";

type FixUpFunction<T> = (old: any, gameType: GameType, spoilerObj?: any) => T;

export function useLocalStateVariable<T>(gameType: GameType, keyName: string, defaultV: T, fixUp?: FixUpFunction<T>): [T, (newVal: T) => void] {
    const [value, setValue] = useState<T>(defaultV);

    useEffect(() => {
        const defaultFromStorage = getDefaultValue<T>(gameType, keyName, defaultV, fixUp)
        setValue(defaultFromStorage);
    }, [gameType]);

    const localValue = useCallback((newVal: T) => {
        setValue(newVal);
        storeValue<T>(gameType, keyName, newVal);
    }, [gameType]);

    return useMemo(() => ([value, localValue]), [value, localValue]);

}
