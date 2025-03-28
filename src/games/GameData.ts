import { GloomhavenItem, GloomhavenItemSlot } from "../State/Types";
import { GameType } from "./GameType";

export type GameData = {
	gameType: GameType;
	items: GloomhavenItem[];
	filterSlots: GloomhavenItemSlot[];
	resources?: string[];
};

