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
	GHSoloScenarios = "ghss",
	FHSoloScenarios = "fhss",
	TrailOfAshes = "toa",
	GH2eSoloScenarios = "gh2ess",
}

export type AllGames = GameType | Expansions;
