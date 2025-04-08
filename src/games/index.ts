import { useMemo } from "react";
import { GameType, Expansions } from "./GameType";
import { FHClass } from "./fh/FHClass";
import { GHClass } from "./gh/GHClass";
import { JOTLClass } from "./jotl/JOTLClass";

export const useGetGames = () => {
	return useMemo(() => ({
		[GameType.Gloomhaven]: new GHClass(),
		[GameType.JawsOfTheLion]: new JOTLClass(),
		[GameType.Frosthaven]: new FHClass(),
	}), []);
}

export const useGetGame = (gameType: GameType) => {
	const games = useGetGames();
	return games[gameType];
}


export const useGamePulldownOptions = () => {
	const games = useGetGames();
	return Object.values(games).map(({ title: text, gameType: value }) => (
		{ text, value }
	));
}

export { GameType, Expansions };
