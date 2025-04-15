import { SpecialUnlockTypes, TOAClasses } from "../../State";
import { GameClass, ItemImageData } from "../GameClass";

export class TOAClass extends GameClass<TOAClasses> {
    constructor() {
        super("Trail of Ashes");
    }

    gameClasses(specialUnlocks?: SpecialUnlockTypes[]) {
        const envelopeV = specialUnlocks?.includes(SpecialUnlockTypes.EnvelopeV);
        const classes = Object.values(TOAClasses);
        if (envelopeV) {
            return classes
        }
        return classes.filter(c => c !== TOAClasses.TOA6);
    }
    getImageDimensions(): ItemImageData {
        return {
            imagesAcross: 10,
            imagesDown: 4,
        }
    }
}

