import { CSAClasses } from "../../State";
import { GameClass, ItemImageData } from "../GameClass";

export class CSAClass extends GameClass<CSAClasses> {
    constructor() {
        super("Crimson Scales Addon");
    }

    gameClasses(): CSAClasses[] {
        return Object.values(CSAClasses);
    }

    getImageDimensions(): ItemImageData {
        return {
            imagesAcross: 5,
            imagesDown: 4,
        }
    }
}

