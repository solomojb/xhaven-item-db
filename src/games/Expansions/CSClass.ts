import { CSClasses, GloomhavenItem } from "../../State";
import { GameClass, ItemImageData } from "../GameClass";

export class CSClass extends GameClass<CSClasses> {
    constructor() {
        super("Crimson Scales");
    }

    gameClasses(): CSClasses[] {
        return Object.values(CSClasses);
    }

    getImageDimensions({ imgFileNumber }: GloomhavenItem): ItemImageData {
        let imagesAcross = 0;
        let imagesDown = 0;
        switch (imgFileNumber) {
            case 3:
                imagesAcross = 6;
                imagesDown = 2;
                break;
            case 4:
                imagesAcross = 9;
                imagesDown = 2;
                break;
            default:
                imagesAcross = 10;
                imagesDown = 5;
                break;
        }
        return { imagesAcross, imagesDown };
    }
}

