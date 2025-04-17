import { GHClasses } from "../../State";
import { GameClass, SpriteImageDimensions } from "../GameClass";
import { GameType } from "../GameType";

export class GHSSClass extends GameClass<GHClasses> {
    constructor() {
        super("Gloomhaven Solo Scenarios");
        this.soloFilterTitle = 'Gloomhaven';
        this.soloGameType = GameType.Gloomhaven;
    }

    gameClasses(): GHClasses[] {
        return [];
    }

    getImageDimensions(): SpriteImageDimensions {
        return {
            imagesAcross: 5,
            imagesDown: 4,
        }
    }
}

