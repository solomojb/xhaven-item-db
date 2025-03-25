import { GameClass } from "../GameClass";
import { GameType } from "../GameType";

import { items } from "./items";

export class GHClass extends GameClass {
    constructor() {
        super(GameType.Gloomhaven, "Gloomhaven", items)
    }
}

