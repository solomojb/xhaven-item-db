import { Helpers } from "../../helpers";
import { FHClasses, GloomhavenItem } from "../../State/Types";
import { GameClass, SpriteImageDimensions } from "../GameClass";
import { AllGames, Expansions, GameType } from "../GameType";

export const ghImportSets: number[][] = [
    [],
    [10, 25, 72, 105, 109, 116],
    [21, 37, 53, 93, 94, 106, 115],
    [46, 83, 84, 85, 86, 87, 88, 102, 110, 111, 120, 121, 122, 123, 126, 128],
    [
        17, 35, 47, 51, 62, 74, 77, 78, 79, 80, 81, 82, 117, 118, 119, 127, 129,
        131,
    ],
];

export const fcImportSets: number[][] = [
    [153, 159, 161],
    [154, 155, 157, 163],
];

export const sortById = (a: number, b: number) => a - b;

export const ghItemToImport = ghImportSets
    .flatMap((groups) => [...groups])
    .sort(sortById);

export const fcItemToImport = fcImportSets
    .flatMap((groups) => [...groups])
    .sort(sortById);
export const ghItemOffset = 1000;


const getTradingPostLevel = (id: number) => {
    const setIndex = ghImportSets.findIndex((set) => set.includes(id));
    if (setIndex !== -1) {
        return setIndex === 1 ? -1 : setIndex;
    }
    return undefined;
};

const getScenarioLevel = (id: number) => {
    if (fcImportSets[0].includes(id)) {
        return 82;
    }
    return undefined;
};

const getEnchancerLevel = (id: number) => {
    if (fcImportSets[1].includes(id)) {
        return 4;
    }
    return undefined;
};


import { items } from "./items.ts";
import { items as ghItems } from "../gh/items.ts";

export const importText: Partial<Record<AllGames, string>> = {
    [GameType.Gloomhaven]: "Imported from Gloomhaven",
    [Expansions.ForgottenCircles]: "Imported from Forgotten Circles",
}

export class FHClass extends GameClass<FHClasses> {
    constructor() {
        super(
            "Frosthaven",
            true,
            {
                items,
                includeItemsFrom: [
                    GameType.Gloomhaven,
                    Expansions.ForgottenCircles,
                ],
                soloClassesToInclude: [
                    Expansions.FHSoloScenarios,
                    Expansions.GHSoloScenarios],
                gameFilters: [
                    Expansions.FHSoloScenarios,
                    GameType.Gloomhaven,
                    Expansions.GHSoloScenarios,
                    Expansions.ForgottenCircles,
                    Expansions.CrimsonScales,
                    Expansions.CrimsonScalesAddon,
                    Expansions.TrailOfAshes,
                    GameType.JawsOfTheLion,
                ]
            })
        const { filterSlots: ghFilterSlots } = this.getInitialItems(ghItems);
        const filteredGhItems = ghItems
            .filter(
                (item) =>
                    ghItemToImport.includes(item.id) ||
                    fcItemToImport.includes(item.id) ||
                    item.soloItem
            )
            .map((item: GloomhavenItem): GloomhavenItem => {
                let lockToClass = undefined;
                if (item.soloItem) {
                    lockToClass = true;
                }
                const unlockTradingPostLevel =
                    getTradingPostLevel(item.id) || Number.MAX_VALUE;
                const unlockScenario = getScenarioLevel(item.id) || Number.MAX_VALUE;
                const unlockEnhancerLevel =
                    getEnchancerLevel(item.id) || Number.MAX_VALUE;
                return {
                    ...item,
                    displayId: item.displayId || item.id.toString(),
                    id: ghItemOffset + item.id,
                    unlockProsperity: Number.MAX_VALUE,
                    unlockTradingPostLevel,
                    unlockEnhancerLevel,
                    unlockScenario,
                    lockToClass,
                    source: item.soloItem
                        ? item.source
                        : `${importText[item.gameType]}`,
                    importedItem: true,
                };
            });
        this.items = this.items.concat(filteredGhItems);
        this.filterSlots = Helpers.uniqueArray(this.filterSlots.concat(ghFilterSlots));
    }
    gameClasses(): FHClasses[] {
        return Object.values(FHClasses);
    }


    getImageDimensions(imgFileNumber: number): SpriteImageDimensions {
        if (imgFileNumber === 5) {
            return { imagesAcross: 10, imagesDown: 4 };
        }
        return {
            imagesAcross: 10,
            imagesDown: 7,
        }
    }

}

