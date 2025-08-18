import { useRecoilValue } from "recoil";
import { useGetGame } from "../../../../games";
import { gameTypeState } from "../../../../State";

export const GameFilter = () => {
	const gameType = useRecoilValue(gameTypeState);
	const game = useGetGame(gameType);

	return <>{game.spoilerFilter}</>;
};
