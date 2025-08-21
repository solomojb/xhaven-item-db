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

export enum MercanariesPacks {
	Hail = 'hail',
	B = 'B',
	C = 'C',
	D = 'D',
}

export type AllGames = GameType | Expansions | SoloScenarioPacks;// | MercanariesPacks;
