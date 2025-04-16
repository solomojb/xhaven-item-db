import { FHClasses } from "../../State";
import { GameClass, ItemImageData } from "../GameClass";
import { GameType } from "../GameType";

export class FHSSClass extends GameClass<FHClasses> {
    constructor() {
        super("Frosthaven Solo Scenarios");
        this.soloFilterTitle = 'Frosthaven';
        this.soloGameType = GameType.Frosthaven;
    }

    gameClasses(): FHClasses[] {
        return [];
    }

    getImageDimensions(): ItemImageData {
        return {
            imagesAcross: 10,
            imagesDown: 4,
        }
    }
}

