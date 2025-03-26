import { GloomhavenItem, JOTLClasses } from "../../State";
import { GameClass } from "../GameClass";
import { GameType } from "../GameType";

import items from "./items.json";

export class JOTLClass extends GameClass<JOTLClasses> {
    constructor() {
        super(GameType.JawsOfTheLion,
            "Jaws of the Lion",
            "jaws-of-the-lion",
            "jl",
            2,
            items as GloomhavenItem[],
        )
    }
    gameClasses(): JOTLClasses[] {
        return Object.values(JOTLClasses);
    }
}

