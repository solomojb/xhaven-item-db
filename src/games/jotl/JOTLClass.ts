import { GloomhavenItem, JOTLClasses } from "../../State";
import { GameClass } from "../GameClass";
import { Expansions, GameType } from "../GameType";

import items from "./items.json";

export class JOTLClass extends GameClass<JOTLClasses> {
    constructor() {
        super("Jaws of the Lion",
            true,
            {
                items: items as GloomhavenItem[],
                gameFilters: [
                    GameType.Gloomhaven,
                    Expansions.ForgottenCircles,
                    Expansions.CrimsonScales,
                    Expansions.CrimsonScalesAddon,
                    Expansions.TrailOfAshes,
                    GameType.Frosthaven
                ]
            }
        )
    }
    gameClasses(): JOTLClasses[] {
        return Object.values(JOTLClasses);
    }
}

