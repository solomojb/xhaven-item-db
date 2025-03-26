import { GameType, Expansions } from "./GameType";
import { FHGameData } from "./fh/FHGameData";
import { GHClass } from "./gh/GHClass";
import { JOTLClass } from "./jotl/JOTLClass";

const gameDataTypes = {
	[GameType.Gloomhaven]: new GHClass(),
	[GameType.JawsOfTheLion]: new JOTLClass(),
	[GameType.Frosthaven]: FHGameData,
};

export { gameDataTypes, GameType, Expansions };
