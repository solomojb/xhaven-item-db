export enum GameType {
	Gloomhaven = "gh",
	JawsOfTheLion = "jotl",
	Frosthaven = "fh",
	Gloomhaven2e = "gh2e",

}

export enum Expansions {
	ForgottenCircles = "fc",
	CrimsonScales = "cs",
	CrimsonScalesAddon = "csa",
	TrailOfAshes = "toa",
}

export enum SoloScenarioPacks {
	GHSoloScenarios = "ghss",
	FHSoloScenarios = "fhss",
	GH2eSoloScenarios = "gh2ess",
}

export enum MercenariesPacks {
	MP1 = 'MP1',
	MP2 = 'MP2',
	MP3 = 'MP3',
	MP4 = 'MP4',
}

export type AllGames = GameType | Expansions | SoloScenarioPacks | MercenariesPacks;
