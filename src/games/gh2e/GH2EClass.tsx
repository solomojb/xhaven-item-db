import { GH2eClasses, SpecialUnlockTypes } from "../../State";
import { GameClass, SpriteImageDimensions } from "../GameClass";
import { Expansions, GameType } from "../GameType";

import { items } from "./items";
import { GH2eSpoilerFilter } from "../../components/Tabs/SpoilerFilters/Items/GH2eSpoilerFilter";

export class GH2EClass extends GameClass<GH2eClasses> {

    constructor() {
        super(
            "Gloomhaven 2e",
            true,
            {
                items,
                includeItemsFrom: [
                    Expansions.ForgottenCircles,
                ],
                soloClassesToInclude: [
                    Expansions.GH2eSoloScenarios,
                    Expansions.ForgottenCircles,
                ],
                gameFilters: [
                    Expansions.GH2eSoloScenarios,
                    GameType.JawsOfTheLion,
                    GameType.Frosthaven
                ],
                usesDiscount: true,
                spoilerFilter: <GH2eSpoilerFilter />
            })
    }
    gameClasses(specialUnlocks?: SpecialUnlockTypes[]) {
        const envelopeX = specialUnlocks?.includes(SpecialUnlockTypes.EnvelopeX);
        const classes = Object.values(GH2eClasses);
        if (envelopeX) {
            return classes
        }
        return classes.filter(c => c !== GH2eClasses.XX);
    }

    getImageDimensions(imgFileNumber: number): SpriteImageDimensions {
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
