import { GH2eClasses } from "../../State";
import { GameClass, SpriteImageDimensions } from "../GameClass";
import { GameType } from "../GameType";

export class GH2eSSClass extends GameClass<GH2eClasses> {
    constructor() {
        super("Gloomhaven 2nd Edition");
        this.soloGameType = GameType.Gloomhaven2e;
    }

    gameClasses(): GH2eClasses[] {
        return [];
    }

    getImageDimensions(): SpriteImageDimensions {
        return {
            imagesAcross: 5,
            imagesDown: 4,
        }
    }
}
