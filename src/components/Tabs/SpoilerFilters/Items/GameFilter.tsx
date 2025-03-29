import { useRecoilValue } from "recoil";
import { GameType } from "../../../../games";
import { gameTypeState } from "../../../../State";
import { FHSpoilerFilter } from "./FHSpoilerFilter";
import { GHSpoilerFilter } from "./GHSpoilerFilter";
import { JOTLSpoilerFilter } from "./JOTLSpoilerFilter";

const filters = {
	[GameType.Gloomhaven]: <GHSpoilerFilter />,
	[GameType.JawsOfTheLion]: <JOTLSpoilerFilter />,
	[GameType.Frosthaven]: <FHSpoilerFilter />,
};

export const GameFilter = () => {
	const gameType = useRecoilValue(gameTypeState);

	return <>{filters[gameType]}</>;
};
