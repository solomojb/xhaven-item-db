import { CSClasses } from "../../State";
import { GameClass } from "../GameClass";

export class CSClass extends GameClass<CSClasses> {
    constructor() {
        super("Crimson Scales");
    }

    gameClasses(): CSClasses[] {
        return Object.values(CSClasses);
    }
}

