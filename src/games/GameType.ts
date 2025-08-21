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
	MP = 'MP',
}

export enum SoloScenarioPacks {
	GHSoloScenarios = "ghss",
	FHSoloScenarios = "fhss",
	GH2eSoloScenarios = "gh2ess",
}

export type AllGames = GameType | Expansions | SoloScenarioPacks;
