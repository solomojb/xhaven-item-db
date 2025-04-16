import { JOTLClasses } from "../../State";
import { GameClass, ItemImageData } from "../GameClass";
import { Expansions, GameType } from "../GameType";

import { items } from "./items.js";

export class JOTLClass extends GameClass<JOTLClasses> {

    constructor() {
        super("Jaws of the Lion",
            true,
            {
                items: items,
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

    getImageDimensions(): ItemImageData {
        return {
            imagesAcross: 8,
            imagesDown: 7
        }
    }
}

