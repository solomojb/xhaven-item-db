import { GHClasses } from "../../State";
import { GameClass } from "../GameClass";
import { Expansions, GameType } from "../GameType";

import { items } from "./items";

export class GHClass extends GameClass<GHClasses> {
    constructor() {
        super(
            "Gloomhaven",
            items,
            [GameType.Frosthaven],
            [
                Expansions.GHSoloScenarios,
                Expansions.ForgottenCircles,
                Expansions.CrimsonScales,
                Expansions.CrimsonScalesAddon,
                Expansions.TrailOfAshes,
            ],
            [
                Expansions.GHSoloScenarios,
                Expansions.ForgottenCircles,
                Expansions.CrimsonScales,
                Expansions.CrimsonScalesAddon,
                Expansions.TrailOfAshes,
            ])
    }
    gameClasses(): GHClasses[] {
        return Object.values(GHClasses);
    }
}

