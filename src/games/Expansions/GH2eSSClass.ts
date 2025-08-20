import { GH2eClasses } from "../../State";
import { GameClass, SpriteImageDimensions } from "../GameClass";
import { GameType } from "../GameType";

export class GH2eSSClass extends GameClass<GH2eClasses> {
    constructor() {
        super("Gloomhaven 2e Solo Scenarios");
        this.soloFilterTitle = 'Gloomhaven 2e';
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
