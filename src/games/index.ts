import { useMemo } from "react";
import { GameType, Expansions, AllGames } from "./GameType";
import { FHClass } from "./fh/FHClass";
import { GHClass } from "./gh/GHClass";
import { JOTLClass } from "./jotl/JOTLClass";

export const allGamesTitles: Record<AllGames, string> = {
	[GameType.Gloomhaven]: "Gloomhaven",
	[GameType.JawsOfTheLion]: "Jaws of the Lion",
	[GameType.Frosthaven]: "Frosthaven",
	[Expansions.ForgottenCircles]: "Forgotten Circles",
	[Expansions.CrimsonScales]: "Crimson Scales",
	[Expansions.CrimsonScalesAddon]: "Crimson Scales Addon",
	[Expansions.GHSoloScenarios]: "Gloomhaven Solo Scenarios",
	[Expansions.FHSoloScenarios]: "Frosthaven Solo Scenarios",
	[Expansions.TrailOfAshes]: "Trail of Ashes"
}

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
	return Object.entries(games).map(([value, { title: text }]) => (
		{ text, value }
	));
}

export { GameType, Expansions };
