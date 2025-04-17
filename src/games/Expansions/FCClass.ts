import { FCClasses } from "../../State";
import { GameClass, SpriteImageDimensions } from "../GameClass";

export class FCClass extends GameClass<FCClasses> {
    constructor() {
        super("Forgotten Circles");
    }

    gameClasses(): FCClasses[] {
        return Object.values(FCClasses);
    }

    getImageDimensions(imgFileNumber: number): SpriteImageDimensions {
        if (imgFileNumber === 2) {
            return { imagesAcross: 1, imagesDown: 1 }
        }
        return {
            imagesAcross: 6,
            imagesDown: 4,
        }
    }
}

