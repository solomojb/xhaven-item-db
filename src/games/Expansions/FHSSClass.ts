import { FHClasses } from "../../State";
import { GameClass } from "../GameClass";

export class FHSSClass extends GameClass<FHClasses> {
    constructor() {
        super("Frosthaven Solo Scenarios");
    }

    gameClasses(): FHClasses[] {
        return [];
    }
}

