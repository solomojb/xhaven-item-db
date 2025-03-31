import { atom } from "recoil";
import { AllGames, Expansions, GameType } from "../games/GameType";
import { createSpoilerState, createState } from "./CommonState";
import {
	ClassesInUse,
	FCClasses,
	GHClasses,
	ItemsInUse,
	ItemViewDisplayType,
	JOTLClasses,
} from "./Types";

export const allState = createSpoilerState<boolean>("all", false);
export const discountState = createSpoilerState<number>("discount", 0);
export const displayItemAsState = createSpoilerState<ItemViewDisplayType>(
	"displayAs",
	ItemViewDisplayType.List
);


export const itemState = createSpoilerState<number[]>("item", []);

const fixedItemsInUseCount = (
	oldItemsInUseCount: ItemsInUse,
	_gameType: GameType,
	spoilerObj?: any
) => {
	const oldItemsInUse: ItemsInUse = spoilerObj["itemsInUse"];
	if (oldItemsInUse) {
		const newItemsInUseCount: ItemsInUse = {};
		Object.entries(oldItemsInUse).forEach(([itemId, value]) => {
			const id = parseInt(itemId, 10);
			let count = 0;
			if (value & Math.pow(2, 0)) {
				count += 1;
			}
			if (value & Math.pow(2, 1)) {
				count += 1;
			}
			if (value & Math.pow(2, 2)) {
				count += 1;
			}
			if (value & Math.pow(2, 3)) {
				count += 1;
			}
			console.log(id, value, count);
			newItemsInUseCount[id] = count;
		});
		delete spoilerObj["itemsInUse"];
		return newItemsInUseCount;
	}
	return oldItemsInUseCount;
};
export const itemsInUseCountState = createSpoilerState<ItemsInUse>(
	"itemsInUseCount",
	{},
	fixedItemsInUseCount
);
export const prosperityState = createSpoilerState<number>("prosperity", 1);
export const scenarioCompletedState = createSpoilerState<number[]>(
	"scenarioCompleted",
	[]
);

export const soloClassState = createSpoilerState<ClassesInUse[]>(
	"soloClass",
	[]
);

function shouldAddGameGH(classesInUse: ClassesInUse[]): boolean {
	const value = Object.values(GHClasses).some((classType) => {
		return classesInUse.includes(classType);
	});
	return value;
}

function shouldAddGameFC(classesInUse: ClassesInUse[]): boolean {
	const value = Object.values(FCClasses).some((classType) => {
		return classesInUse.includes(classType);
	});
	return value;
}

function shouldAddGameJOTL(classesInUse: ClassesInUse[]): boolean {
	const value = Object.values(JOTLClasses).some((classType) => {
		return classesInUse.includes(classType);
	});
	return value;
}

const fixIncludedGames = (old: any, gameType: GameType, spoilerObj: any) => {
	const newGames = Object.assign([], old);
	if (!newGames || newGames.length === 0) {
		const classesInUse = spoilerObj["classesInUse"];
		if (classesInUse) {
			if (shouldAddGameGH(classesInUse)) {
				newGames.push(GameType.Gloomhaven);
			}
			if (shouldAddGameFC(classesInUse)) {
				newGames.push(Expansions.ForgottenCircles);
			}
			if (shouldAddGameJOTL(classesInUse)) {
				newGames.push(GameType.JawsOfTheLion);
			}
		}
		const items = spoilerObj["item"];
		if (
			items &&
			gameType === GameType.Gloomhaven &&
			!newGames.includes(Expansions.ForgottenCircles)
		) {
			const value = items.some((item: any) => item >= 153);
			if (value) {
				newGames.push(Expansions.ForgottenCircles);
			}
		}
		const soloClass = spoilerObj["soloClass"];
		if (gameType === GameType.Gloomhaven && soloClass && soloClass.length) {
			newGames.push(Expansions.GHSoloScenarios);
		}
	}
	if (!newGames.includes(gameType)) {
		newGames.push(gameType);
	}
	return newGames;
};

export const includeGameState = createSpoilerState<AllGames[]>(
	"includeGames",
	[],
	fixIncludedGames
);

export const dataMismatchState = atom({
	key: "data-mistmatch-state",
	default: false,
});

export const remoteDataState = atom<string | undefined>({
	key: "remote-data-state",
	default: undefined,
});

export const importHashState = atom<string | undefined>({
	key: "import-hash-state",
	default: undefined,
});

export const getLockSpoilerPanelState = () =>
	localStorage.getItem("lockSpoilerPanel") === "true";


export const buildingLevelState = createSpoilerState<Record<string, number>>(
	"craftsmanBuildingLevel",
	{
		cm: 1,
		tp: -1,
		jw: -1,
		en: -1,
	}
);

export const removingGameState = createState<AllGames | undefined>(
	"removingGame",
	undefined
);
