import { Divider } from "semantic-ui-react";
import { formatId } from "../../../../../helpers";
import {
	GloomhavenItem,
} from "../../../../../State";
import { GHIcon } from "../../../../Utils";
import { useXHavenDB } from "../../../../Providers/XHavenDBProvider";

interface Props {
	item: GloomhavenItem;
	showDiscount?: boolean;
	hideDivider?: boolean;
}

export const ItemCost = (props: Props) => {
	const {
		item: { cost = 0, resources, id },
		showDiscount,
		hideDivider
	} = props;
	const { discount } = useXHavenDB();

	const costClass = discount < 0 ? "blue" : discount > 0 ? "red" : "";

	if (!cost && (!resources || Object.entries(resources).length === 0)) {
		return <strong className={"ui text " + costClass}>-</strong>;
	}

	return (
		<>
			{cost > 0 && (
				<strong className={"ui text " + costClass}>
					{showDiscount ? `${cost + discount}g (${discount}g)` : `${cost + discount}g`}
				</strong>
			)}
			{resources &&
				Object.entries(resources).map(([resource, value], index) => {
					if (resource === "item") {
						return value.map(
							(itemId: number, itemIndex: number) => (
								<div key={`${itemId}-${resource}-${index}`}>
									<>
										{itemIndex > 0 && <Divider />}
										<GHIcon
											name={`${resource}.png`}
											folder="resources"
										/>
										{` : ${formatId(itemId)}`}
									</>
								</div>
							)
						);
					}
					if (resource === "any") {
						return value.map((count: number, anyIndex: number) => (
							<div key={`any-${count}-${resource}-${index}`}>
								{anyIndex > 0 && <Divider />}
								{`any herb ${count > 1 ? `x ${count}` : ""}`}
							</div>
						));
					}
					return (
						<div key={`${id}-${resource}-${index}`}>
							{!hideDivider && index > 0 && <Divider />}
							<>
								<GHIcon
									name={`${resource}.png`}
									folder="resources"
								/>
								{value > 1 && ` x ${value}`}
							</>
						</div>
					);
				})}
		</>
	);
};
