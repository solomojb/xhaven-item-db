import { GameType, Expansions } from "./GameType";
import { JOTLGameData } from "./jotl/JOTlGameData";
import { FHGameData } from "./fh/FHGameData";
import { GHClass } from "./gh/GHClass";

const gameDataTypes = {
	[GameType.Gloomhaven]: new GHClass(),
	[GameType.JawsOfTheLion]: JOTLGameData,
	[GameType.Frosthaven]: FHGameData,
};

export { gameDataTypes, GameType, Expansions };
