import { useMemo } from "react";
import { useRecoilValue } from "recoil";
import { gameDataTypes } from ".";
import { gameTypeState } from "../State";

export const useGameSort = () => {
	const currentGameType = useRecoilValue(gameTypeState);

	return useMemo(() => {
		const currentGameInfo = gameDataTypes[currentGameType];
		const additionalGames = Object.values(gameDataTypes).flatMap((gameData) => {
			const { gameType } = gameData;
			if (gameType !== currentGameType) {
				const gameSpecificInfo = gameDataTypes[gameType];
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
	}, [currentGameType]);
};
