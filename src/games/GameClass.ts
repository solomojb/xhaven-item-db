import { getClassIcon } from "../components/Utils";
import { Helpers } from "../helpers";
import { GloomhavenItem, GloomhavenItemSlot } from "../State";
import { GameType } from "./GameType";

const deSpoilerItemSource = (source: string): string => {
    return source.replace(/{(.{2,})}/, (m, m1) => {
        const classPath = getClassIcon(m1);
        return `<img class="soloClass" src="${classPath}" alt="" />`;
    });
};


export class GameClass {
    filterSlots: GloomhavenItemSlot[] = [];
    resources: string[] = [];

    constructor(public gameType: GameType, public title: string, public items: GloomhavenItem[]) {
        this.getInitialItems(this.items);
    }

    getInitialItems = (items: GloomhavenItem[]) => {
        const filterSlots: GloomhavenItemSlot[] = [];
        const resources: string[] = [];

        items.forEach((item) => {
            item.descHTML = Helpers.parseEffectText(item.desc);
            if (item.backDesc) {
                item.backDescHTML = Helpers.parseEffectText(item.backDesc);
            }
            if (item.summon && item.summon.desc) {
                item.summon.desc = Helpers.parseEffectText(item.summon.desc);
            }
            if (item.consumption && item.consumption.effect) {
                item.consumption.effectHtml = Helpers.parseEffectText(
                    item.consumption.effect
                );
            }
            const source = item.source
                .replace(/Reward from /gi, "")
                .replace(/ ?\((Treasure #\d+)\)/gi, "\n$1")
                .replace(/Solo Scenario #\d+ — /i, "Solo ");
            item.source = deSpoilerItemSource(source);
            if (item.slot && !filterSlots.includes(item.slot)) {
                filterSlots.push(item.slot);
            }
            if (item.resources) {
                Object.keys(item.resources).forEach((resource) => {
                    if (resource !== "any" && !resources.includes(resource)) {
                        resources.push(resource);
                    }
                });
            }
        });
        return { items, filterSlots, resources };
    };
}
