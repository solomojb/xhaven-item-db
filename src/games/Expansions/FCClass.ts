import { FCClasses } from "../../State";
import { GameClass, ItemImageData } from "../GameClass";

export class FCClass extends GameClass<FCClasses> {
    constructor() {
        super("Forgotten Circles");
    }

    gameClasses(): FCClasses[] {
        return Object.values(FCClasses);
    }

    getImageDimensions(): ItemImageData {
        return {
            imagesAcross: 6,
            imagesDown: 4,
        }
    }
}

