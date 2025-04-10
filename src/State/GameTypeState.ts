import { atom } from "recoil";
import { GameType } from "../games";
import QueryString from "qs";

const getStartingGameType = () => {
	const urlParams = QueryString.parse(window.location.search.substr(1));
	const lastGameQSP = urlParams["lastGame"] as GameType;
	if (lastGameQSP) {
		if (Object.values(GameType).includes(lastGameQSP)) {
			localStorage.setItem("lastGame", lastGameQSP);
			return lastGameQSP;
		}
	}

	const lastGame = localStorage.getItem("lastGame") as GameType;
	if (!lastGame) {
		return GameType.Gloomhaven;
	}
	return lastGame;
};

export const gameTypeState = atom<GameType>({
	key: "gameTypeState",
	default: getStartingGameType(),
	effects: [
		({ onSet }) => {
			onSet((gameType) => {
				localStorage.setItem("lastGame", gameType);
			});
		},
	],
});
