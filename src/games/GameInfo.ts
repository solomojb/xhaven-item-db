import { AllGames, Expansions, GameType } from "./GameType";

export interface GameInfo {
	soloGameType?: GameType;
}

export const gameInfo: Record<AllGames, GameInfo> = {
	[GameType.Gloomhaven]: {
	},
	[GameType.JawsOfTheLion]: {
	},
	[GameType.Frosthaven]: {
	},
	[Expansions.ForgottenCircles]: {
	},
	[Expansions.CrimsonScales]: {
	},
	[Expansions.CrimsonScalesAddon]: {
	},
	[Expansions.TrailOfAshes]: {
	},
	[Expansions.GHSoloScenarios]: {
		soloGameType: GameType.Gloomhaven,
	},
	[Expansions.FHSoloScenarios]: {
		soloGameType: GameType.Frosthaven,
	},
};
