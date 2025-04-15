import { GHClasses } from "../../State";
import { GameClass } from "../GameClass";

export class GHSSClass extends GameClass<GHClasses> {
    constructor() {
        super("Gloomhaven Solo Scenarios");
    }

    gameClasses(): GHClasses[] {
        return [];
    }
}

