import { FCClasses } from "../../State";
import { GameClass } from "../GameClass";

export class FCClass extends GameClass<FCClasses> {
    constructor() {
        super("Forgotten Circles");
    }

    gameClasses(): FCClasses[] {
        return Object.values(FCClasses);
    }
}

