import { TOAClasses } from "../../State";
import { GameClass } from "../GameClass";

export class TOAClass extends GameClass<TOAClasses> {
    constructor() {
        super("Trail of Ashes");
    }

    gameClasses(): TOAClasses[] {
        return Object.values(TOAClasses);
    }
}

