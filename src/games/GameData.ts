import { GloomhavenItem, GloomhavenItemSlot } from "../State/Types";
import { GameType } from "./GameType";

export type GameData = {
	gameType: GameType;
	items: GloomhavenItem[];
	filterSlots: GloomhavenItemSlot[];
	resources?: string[];
};

export const getItemPath = (item: GloomhavenItem, backside?: boolean) => {
	const { gameType, imgFileNumber } = item;
	if (imgFileNumber) {
		return `items/${gameType}/${imgFileNumber}.jpg`;
	}
	return '';
}
