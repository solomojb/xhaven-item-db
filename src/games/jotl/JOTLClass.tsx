import { JOTLSpoilerFilter } from "../../components/Tabs/SpoilerFilters/Items/JOTLSpoilerFilter.js";
import { JOTLClasses } from "../../State/index.js";
import { GameClass, SpriteImageDimensions } from "../GameClass.js";
import { Expansions, GameType } from "../GameType.js";

import { items } from "./items.js";

export class JOTLClass extends GameClass<JOTLClasses> {

    constructor() {
        super("Jaws of the Lion",
            true,
            {
                items: items,
                gameFilters: [
                    GameType.Gloomhaven,
                    GameType.Frosthaven
                ],
                spoilerFilter: <JOTLSpoilerFilter />,
                expansionFilters: [
                    Expansions.ForgottenCircles,
                    Expansions.CrimsonScales,
                    Expansions.CrimsonScalesAddon,
                    Expansions.TrailOfAshes,
                ]
            }
        )
    }
    gameClasses(): JOTLClasses[] {
        return Object.values(JOTLClasses);
    }

    getImageDimensions(): SpriteImageDimensions {
        return {
            imagesAcross: 8,
            imagesDown: 7
        }
    }
}
