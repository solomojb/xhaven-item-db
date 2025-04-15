import { GHClasses, GloomhavenItem, SpecialUnlockTypes } from "../../State";
import { GameClass, ItemImageData } from "../GameClass";
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

    getImageDimensions({ imgFileNumber }: GloomhavenItem): ItemImageData {
        let imagesAcross = 0;
        let imagesDown = 0;
        switch (imgFileNumber) {
            case 1:
                imagesAcross = 9;
                imagesDown = 4;
                break;
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
                imagesAcross = 6;
                imagesDown = 3;
                break;
            case 10:
                imagesAcross = 6;
                imagesDown = 5;
                break;
            case 11:
                imagesAcross = 8;
                imagesDown = 6;
                break;
        }
        return { imagesAcross, imagesDown };
    }
}

