import { GameType, Expansions, AllGames, SoloScenarioPacks } from "./GameType";
import { FHClass } from "./fh/FHClass";
import { GHClass } from "./gh/GHClass";
import { JOTLClass } from "./jotl/JOTLClass";
import { FCClass } from "./Expansions/FCClass";
import { CSClass } from "./Expansions/CSClass";
import { CSAClass } from "./Expansions/CSAClass";
import { GHSSClass } from "./SoloScenarios/GHSSClass";
import { FHSSClass } from "./SoloScenarios/FHSSClass";
import { TOAClass } from "./Expansions/TOAClass";
import { GH2EClass } from "./gh2e/GH2EClass";
import { GH2eSSClass } from "./SoloScenarios/GH2eSSClass";
import { MPClass } from "./MercenaryPacks/MPClass";

const games = {
	[GameType.Gloomhaven]: new GHClass(),
	[GameType.JawsOfTheLion]: new JOTLClass(),
	[GameType.Frosthaven]: new FHClass(),
	[GameType.Gloomhaven2e]: new GH2EClass(),
	[Expansions.ForgottenCircles]: new FCClass(),
	[Expansions.CrimsonScales]: new CSClass(),
	[Expansions.CrimsonScalesAddon]: new CSAClass(),
	[SoloScenarioPacks.GHSoloScenarios]: new GHSSClass(),
	[SoloScenarioPacks.FHSoloScenarios]: new FHSSClass(),
	[Expansions.TrailOfAshes]: new TOAClass(),
	[SoloScenarioPacks.GH2eSoloScenarios]: new GH2eSSClass(),
	[Expansions.MP]: new MPClass(),
}

export const useGetGames = () => games;

export const useGetGame = (gameType: AllGames) => {
	return games[gameType];
}


export const useGamePulldownOptions = () => {
	return Object.entries(games).filter(([, game]) => game.isSelectable).map(([value, { title: text }]) => (
		{ text, value }
	));
}

export { GameType, Expansions };
