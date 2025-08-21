import { FHClasses } from "../../State";
import { GameClass, SpriteImageDimensions } from "../GameClass";
import { GameType } from "../GameType";

export class FHSSClass extends GameClass<FHClasses> {
    constructor() {
        super("Frosthaven");
        this.soloGameType = GameType.Frosthaven;
    }

    gameClasses(): FHClasses[] {
        return [];
    }

    getImageDimensions(): SpriteImageDimensions {
        return {
            imagesAcross: 10,
            imagesDown: 4,
        }
    }
}
