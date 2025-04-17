import { CSAClasses } from "../../State";
import { GameClass, SpriteImageDimensions } from "../GameClass";

export class CSAClass extends GameClass<CSAClasses> {
    constructor() {
        super("Crimson Scales Addon");
    }

    gameClasses(): CSAClasses[] {
        return Object.values(CSAClasses);
    }

    getImageDimensions(): SpriteImageDimensions {
        return {
            imagesAcross: 5,
            imagesDown: 4,
        }
    }
}

