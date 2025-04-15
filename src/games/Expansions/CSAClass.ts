import { CSAClasses } from "../../State";
import { GameClass } from "../GameClass";

export class CSAClass extends GameClass<CSAClasses> {
    constructor() {
        super("Crimson Scales Addon");
    }

    gameClasses(): CSAClasses[] {
        return Object.values(CSAClasses);
    }
}

