import {
	ClassesInUse,
	CSAClasses,
	CSClasses,
	FCClasses,
	FHClasses,
	GHClasses,
	JOTLClasses,
	SpecialUnlockTypes,
	TOAClasses,
} from "../State";
import { AllGames, Expansions, GameType } from "./GameType";

export interface GameInfo {
	gameClasses: (specialUnlocks?: SpecialUnlockTypes[]) => ClassesInUse[];
	soloGameType?: GameType;
}

export const gameInfo: Record<AllGames, GameInfo> = {
	[GameType.Gloomhaven]: {
		gameClasses: (specialUnlocks?: SpecialUnlockTypes[]) => {
			const envelopeX = specialUnlocks?.includes(SpecialUnlockTypes.EnvelopeX);
			const classes = Object.values(GHClasses);
			if (envelopeX) {
				return classes
			}
			return classes.filter(c => c !== GHClasses.XX);
		},
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
		gameClasses: (specialUnlocks?: SpecialUnlockTypes[]) => {
			const envelopeV = specialUnlocks?.includes(SpecialUnlockTypes.EnvelopeV);
			const classes = Object.values(TOAClasses);
			if (envelopeV) {
				return classes
			}
			return classes.filter(c => c !== TOAClasses.TOA6);
		},
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
