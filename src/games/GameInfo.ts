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
	gameClasses: () => ClassesInUse[];
	soloGameType?: GameType;
}

export const gameInfo: Record<AllGames, GameInfo> = {
	[GameType.Gloomhaven]: {
		gameClasses: () => Object.values(GHClasses),
	},
	[GameType.JawsOfTheLion]: {
		gameClasses: () => Object.values(JOTLClasses),
	},
	[GameType.Frosthaven]: {
		gameClasses: () => Object.values(FHClasses),
	},
	[Expansions.ForgottenCircles]: {
		gameClasses: () => Object.values(FCClasses),
	},
	[Expansions.CrimsonScales]: {
		gameClasses: () => Object.values(CSClasses),
	},
	[Expansions.CrimsonScalesAddon]: {
		gameClasses: () => Object.values(CSAClasses),
	},
	[Expansions.TrailOfAshes]: {
		gameClasses: () => Object.values(TOAClasses),
	},
	[Expansions.GHSoloScenarios]: {
		gameClasses: () => [],
		soloGameType: GameType.Gloomhaven,
	},
	[Expansions.FHSoloScenarios]: {
		gameClasses: () => [],
		soloGameType: GameType.Frosthaven,
	},
};
