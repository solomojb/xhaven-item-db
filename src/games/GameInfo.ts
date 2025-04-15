import {
	ClassesInUse,
	CSAClasses,
	CSClasses,
	FCClasses,
	FHClasses,
	GHClasses,
	JOTLClasses,
	TOAClasses,
} from "../State";
import { AllGames, Expansions, GameType } from "./GameType";

export interface GameInfo {
	addItemsToGames?: AllGames[];
	title: string;
	gameClasses: () => ClassesInUse[];
	soloGameType?: GameType;
}

export const gameInfo: Record<AllGames, GameInfo> = {
	[GameType.Gloomhaven]: {
		title: "Gloomhaven",
		addItemsToGames: [GameType.Frosthaven],
		gameClasses: () => Object.values(GHClasses),
	},
	[GameType.JawsOfTheLion]: {
		title: "Jaws of the Lion",
		gameClasses: () => Object.values(JOTLClasses),
	},
	[GameType.Frosthaven]: {
		title: "Frosthaven",
		gameClasses: () => Object.values(FHClasses),
	},
	[Expansions.ForgottenCircles]: {
		title: "Forgotten Circles",
		addItemsToGames: [GameType.Gloomhaven, GameType.Frosthaven],
		gameClasses: () => Object.values(FCClasses),
	},
	[Expansions.CrimsonScales]: {
		title: "Crimson Scales",
		addItemsToGames: [GameType.Gloomhaven],
		gameClasses: () => Object.values(CSClasses),
	},
	[Expansions.CrimsonScalesAddon]: {
		title: "Crimson Scales Addon",
		addItemsToGames: [GameType.Gloomhaven],
		gameClasses: () => Object.values(CSAClasses),
	},
	[Expansions.TrailOfAshes]: {
		title: "Trail of Ashes",
		addItemsToGames: [GameType.Gloomhaven],
		gameClasses: () => Object.values(TOAClasses),
	},
	[Expansions.GHSoloScenarios]: {
		title: "Gloomhaven Solo Scenarios",
		gameClasses: () => [],
		soloGameType: GameType.Gloomhaven,
	},
	[Expansions.FHSoloScenarios]: {
		title: "Frosthaven Solo Scenarios",
		gameClasses: () => [],
		soloGameType: GameType.Frosthaven,
	},
};
