import { MPClasses } from "../../State";
import { GameClass, SpriteImageDimensions } from "../GameClass";

export class MPClass extends GameClass<MPClasses> {
    constructor() {
        super("Mercenary Packs");
    }

    gameClasses(): MPClasses[] {
        return Object.values(MPClasses);
    }

    getImageDimensions(): SpriteImageDimensions {
        return {
            imagesAcross: 10,
            imagesDown: 4,
        }
    }
}
