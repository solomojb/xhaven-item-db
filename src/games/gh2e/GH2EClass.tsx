import { GH2eClasses, SpecialUnlockTypes } from "../../State";
import { GameClass, SpriteImageDimensions } from "../GameClass";
import { GameType, SoloScenarioPacks } from "../GameType";

import { items } from "./items";
import { GH2eSpoilerFilter } from "../../components/Tabs/SpoilerFilters/Items/GH2eSpoilerFilter";
import { isFlagEnabled } from "../../helpers";

const isGH2eEnabled = isFlagEnabled("gh2e");
export class GH2EClass extends GameClass<GH2eClasses> {

    constructor() {
        super(
            "Gloomhaven 2nd Edition",
            isGH2eEnabled,
            {
                items,
                soloClassesToInclude: [
                    SoloScenarioPacks.GH2eSoloScenarios,
                ],
                gameFilters: [
                    GameType.JawsOfTheLion,
                    GameType.Frosthaven
                ],
                soloScenarioFilters: [
                    SoloScenarioPacks.GH2eSoloScenarios,
                ],

                usesDiscount: true,
                spoilerFilter: <GH2eSpoilerFilter />,
                includeMercenaryPacks: true,
                includeMercenaryPacksSoloItems: true,
            })
    }
    gameClasses(specialUnlocks?: SpecialUnlockTypes[]) {
        const envelopeX = specialUnlocks?.includes(SpecialUnlockTypes.EnvelopeX2e);
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
