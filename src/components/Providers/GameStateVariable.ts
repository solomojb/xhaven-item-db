import { useCallback, useMemo, useState } from "react";
import { GameType } from "../../games";

export const useGameStateVariable = <T>(gameType: GameType, defaultV: T): [T, (newVal: T) => void] => {
    const [valueByGame, setValueByGame] = useState<Record<GameType, T>>({ fh: defaultV, gh: defaultV, jotl: defaultV, gh2e: defaultV });

    const value = useMemo(() => {
        return valueByGame[gameType];
    }, [gameType, valueByGame])

    const setValue = useCallback((newClass: T) => {
        setValueByGame(current => {
            const copy = { ...current };
            copy[gameType] = newClass;
            return copy
        });
    }, [gameType]);

    return useMemo(() => ([value, setValue]), [value, setValue]);

}
