import { GameType, Expansions, AllGames, SoloScenarioPacks, MercenariesPacks } from "./GameType";
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
import { MP1Class } from "./MercenaryPacks/MP1Class";
import { MP2Class } from "./MercenaryPacks/MP2Class";
import { MP3Class } from "./MercenaryPacks/MP3Class";
import { MP4Class } from "./MercenaryPacks/MP4Class";

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
	[MercenariesPacks.MP1]: new MP1Class(),
	[MercenariesPacks.MP2]: new MP2Class(),
	[MercenariesPacks.MP3]: new MP3Class(),
	[MercenariesPacks.MP4]: new MP4Class(),
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
