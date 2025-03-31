import { atom } from "recoil";

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

