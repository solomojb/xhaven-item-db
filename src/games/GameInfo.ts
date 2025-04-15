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
	title: string;
	gameClasses: () => ClassesInUse[];
	soloGameType?: GameType;
}

export const gameInfo: Record<AllGames, GameInfo> = {
	[GameType.Gloomhaven]: {
		title: "Gloomhaven",
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
		gameClasses: () => Object.values(FCClasses),
	},
	[Expansions.CrimsonScales]: {
		title: "Crimson Scales",
		gameClasses: () => Object.values(CSClasses),
	},
	[Expansions.CrimsonScalesAddon]: {
		title: "Crimson Scales Addon",
		gameClasses: () => Object.values(CSAClasses),
	},
	[Expansions.TrailOfAshes]: {
		title: "Trail of Ashes",
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
