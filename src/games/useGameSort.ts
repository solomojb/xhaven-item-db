import { useMemo } from "react";
import { useRecoilValue } from "recoil";
import { useGetGames } from ".";
import { gameTypeState } from "../State";

export const useGameSort = () => {
	const currentGameType = useRecoilValue(gameTypeState);
	const games = useGetGames();

	return useMemo(() => {
		const currentGameInfo = games[currentGameType];
		const additionalGames = Object.values(games).flatMap((gameData) => {
			const { gameType } = gameData;
			if (gameType !== currentGameType) {
				const gameSpecificInfo = games[gameType];
				return [
					gameType,
					...(gameSpecificInfo.linkedGameTypes || [])
				];
			}
			return [];
		});
		const allGames = [
			currentGameType,
			...(currentGameInfo.linkedGameTypes || []),
			...additionalGames
		];
		return {
			allGames,
			withoutCurrent: allGames.filter((game) => game !== currentGameType),
		};
	}, [currentGameType, games]);
};
