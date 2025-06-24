import { useMemo } from "react";
import { Tab } from "semantic-ui-react";
import { ItemList } from "./Items";
import SpoilerFilters from "../SpoilerFilters/SpoilerFilters";
import { Share } from "../Share/Share";
import { isFlagEnabled } from "../../../helpers";
import { Account } from "../Account/Account";
import { About } from "../About";
import { useRecoilValue } from "recoil";
import {
    dataMismatchState,
    getLockSpoilerPanelState,
} from "../../../State";
import { useXHavenDB } from "../../Providers/XHavenDBProvider";

type TabItem = {
    menuItem: string;
    component: JSX.Element;
    shouldShow: boolean;
};

export const MainViewTabs = () => {
    const { all } = useXHavenDB();
    const lockSpoilerPanel = getLockSpoilerPanelState();
    const dataMismatch = useRecoilValue(dataMismatchState);

    const sharingEnabled = isFlagEnabled("sharing");

    const tabData: TabItem[] = [
        { menuItem: "Item List", component: <ItemList />, shouldShow: true },
        {
            menuItem: "Spoiler Configuration",
            component: <SpoilerFilters />,
            shouldShow: !lockSpoilerPanel,
        },
        {
            menuItem: "Share",
            component: <Share />,
            shouldShow: !lockSpoilerPanel,
        },
        {
            menuItem: "Account",
            component: <Account />,
            shouldShow: !lockSpoilerPanel && sharingEnabled,
        },
        { menuItem: "About", component: <About />, shouldShow: true },
    ];

    const panes = tabData
        .map(({ shouldShow, component, menuItem }) => {
            if (shouldShow) {
                return {
                    menuItem,
                    render: () => <Tab.Pane>{component}</Tab.Pane>,
                };
            }
            return {};
        })
        .filter((pane) => pane.menuItem !== undefined);



    const outlineClass = useMemo(() => {
        if (all || dataMismatch) {
            return "spoiler";
        }
        return "";
    }, [all, dataMismatch]);

    return <div className={outlineClass}>
        <Tab
            panes={panes}
            defaultActiveIndex={
                parseInt(
                    localStorage.getItem("lastTab") || "0",
                    10
                )}
            onTabChange={(_event, data) =>
                localStorage.setItem(
                    "lastTab",
                    data.activeIndex ? data.activeIndex.toString() : "0"
                )
            }
        />
    </div>

}
