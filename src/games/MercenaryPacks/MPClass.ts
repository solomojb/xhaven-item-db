import { MPClasses } from "../../State";
import { GameClass, SpriteImageDimensions } from "../GameClass";

export abstract class MPClass extends GameClass<MPClasses> {
    constructor(title: string, private mpClass: MPClasses) {
        super(title);
    }

    gameClasses(): MPClasses[] {
        return [this.mpClass];
    }

    getImageDimensions(): SpriteImageDimensions {
        return {
            imagesAcross: 10,
            imagesDown: 4,
        }
    }
}
