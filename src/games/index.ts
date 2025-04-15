import { GameType, Expansions, AllGames } from "./GameType";
import { FHClass } from "./fh/FHClass";
import { GHClass } from "./gh/GHClass";
import { JOTLClass } from "./jotl/JOTLClass";
import { FCClass } from "./Expansions/FCClass";
import { CSClass } from "./Expansions/CSClass";
import { CSAClass } from "./Expansions/CSAClass";
import { GHSSClass } from "./Expansions/GHSSClass";
import { FHSSClass } from "./Expansions/FHSSClass";
import { TOAClass } from "./Expansions/TOAClass";

const games = {
	[GameType.Gloomhaven]: new GHClass(),
	[GameType.JawsOfTheLion]: new JOTLClass(),
	[GameType.Frosthaven]: new FHClass(),
	[Expansions.ForgottenCircles]: new FCClass(),
	[Expansions.CrimsonScales]: new CSClass(),
	[Expansions.CrimsonScalesAddon]: new CSAClass(),
	[Expansions.GHSoloScenarios]: new GHSSClass(),
	[Expansions.FHSoloScenarios]: new FHSSClass(),
	[Expansions.TrailOfAshes]: new TOAClass(),
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
