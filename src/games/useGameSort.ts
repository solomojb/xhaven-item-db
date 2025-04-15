import { useMemo } from "react";
import { useRecoilValue } from "recoil";
import { useGetGames } from ".";
import { gameTypeState } from "../State";
import { AllGames, GameType } from "./GameType";

export const useGameSort = () => {
	const currentGameType = useRecoilValue(gameTypeState);
	const games = useGetGames();

	return useMemo(() => {
		const currentGameInfo = games[currentGameType];
		const additionalGames: AllGames[] = Object.entries(games).flatMap(([gameType, gameData]) => {
			if (gameType !== currentGameType) {
				const gameSpecificInfo = gameData;
				return [
					gameType as GameType,
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
