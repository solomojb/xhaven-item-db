import { GloomhavenItem, JOTLClasses } from "../../State";
import { GameClass } from "../GameClass";

import items from "./items.json";

export class JOTLClass extends GameClass<JOTLClasses> {
    constructor() {
        super("Jaws of the Lion",
            items as GloomhavenItem[],
        )
    }
    gameClasses(): JOTLClasses[] {
        return Object.values(JOTLClasses);
    }
}

