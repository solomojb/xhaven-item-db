import { GHClasses, SpecialUnlockTypes } from "../../State";
import { GameClass } from "../GameClass";
import { Expansions, GameType } from "../GameType";

import { items } from "./items";

export class GHClass extends GameClass<GHClasses> {
    constructor() {
        super(
            "Gloomhaven",
            true,
            {
                items,
                includeItemsFrom: [
                    Expansions.ForgottenCircles,
                    Expansions.CrimsonScales,
                    Expansions.CrimsonScalesAddon,
                    Expansions.TrailOfAshes,
                ],
                soloClassesToInclude: [
                    Expansions.GHSoloScenarios,
                    Expansions.ForgottenCircles,
                    Expansions.CrimsonScales,
                    Expansions.CrimsonScalesAddon,
                    Expansions.TrailOfAshes,
                ],
                gameFilters: [
                    Expansions.GHSoloScenarios,
                    Expansions.ForgottenCircles,
                    Expansions.CrimsonScales,
                    Expansions.CrimsonScalesAddon,
                    Expansions.TrailOfAshes,
                    GameType.JawsOfTheLion,
                    GameType.Frosthaven
                ]
            })
    }
    gameClasses(specialUnlocks?: SpecialUnlockTypes[]) {
        const envelopeX = specialUnlocks?.includes(SpecialUnlockTypes.EnvelopeX);
        const classes = Object.values(GHClasses);
        if (envelopeX) {
            return classes
        }
        return classes.filter(c => c !== GHClasses.XX);
    }
}

