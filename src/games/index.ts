import { GameType, Expansions } from "./GameType";
import { FHClass } from "./fh/FHClass";
import { GHClass } from "./gh/GHClass";
import { JOTLClass } from "./jotl/JOTLClass";

const gameDataTypes = {
	[GameType.Gloomhaven]: new GHClass(),
	[GameType.JawsOfTheLion]: new JOTLClass(),
	[GameType.Frosthaven]: new FHClass(),
};

export const gamePulldownOptions =
	Object.values(gameDataTypes).map(({ title: text, gameType: value }) => (
		{ text, value }
	));

export { gameDataTypes, GameType, Expansions };
