import { FHClasses } from "../../State";
import { GameClass } from "../GameClass";
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
}

