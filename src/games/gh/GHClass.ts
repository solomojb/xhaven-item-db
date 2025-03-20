import { GloomhavenItem } from "../../State";
import { GameClass } from "../GameClass";
import { GameType } from "../GameType";

import items from "./items.json";

export class GHClass extends GameClass {
    constructor() {
        super(GameType.Gloomhaven, "Gloomhaven", items as GloomhavenItem[])
    }
}

