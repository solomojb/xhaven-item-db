import { atom, RecoilState } from "recoil";
import { GameType } from "../games";

export const LOCAL_STORAGE_PREFIX = "ItemView:spoilerFilter_";

export type AtomObject<T> = {
	[key: string]: RecoilState<T>;
};

export const dataDirtyState = atom({
	key: "data-dirty-state",
	default: false,
});

type FixUpFunction<T> = (old: any, gameType: GameType, spoilerObj?: any) => T;

export function getDefaultValue<T>(
	gameType: GameType,
	name: string,
	defaultValue: T,
	fixUp?: FixUpFunction<T>
) {
	const key = LOCAL_STORAGE_PREFIX + gameType;
	const spoilerStorage = localStorage.getItem(key);
	const spoilerObj = spoilerStorage ? JSON.parse(spoilerStorage) : {};
	const value = spoilerObj[name] || defaultValue;
	if (fixUp) {
		const newValue = fixUp(value, gameType, spoilerObj);
		spoilerObj[name] = newValue;
		localStorage.setItem(key, JSON.stringify(spoilerObj));
		return newValue;
	}
	return value;
}

export function storeValue<T>(gameType: GameType, name: string, value: T) {
	const key = LOCAL_STORAGE_PREFIX + gameType;
	const spoilerStorage = localStorage.getItem(key);
	const spoilerObj = spoilerStorage ? JSON.parse(spoilerStorage) : {};
	spoilerObj[name] = value;
	localStorage.setItem(key, JSON.stringify(spoilerObj));
}

