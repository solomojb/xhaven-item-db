import { Form, Popup, Icon, List } from "semantic-ui-react";
import { ItemManagementType } from "../../../../State/Types";
import { useXHavenDB } from "../../../Providers/XHavenDBProvider";

const PartyManagementFilter = () => {
	const { itemManagementType, setItemManagementType } = useXHavenDB();

	const onChangeItemManagement = (value: ItemManagementType) => {
		setItemManagementType(value);
	};

	return (
		<Form.Group inline>
			<Form.Group inline>
				<label>Store Stock Management Type:</label>
				<div style={{ margin: "5px 8px" }}>
					<Popup
						closeOnDocumentClick
						hideOnScroll
						trigger={
							<Icon name={"question circle"} className={"blue"} />
						}
						header={"Stock Management"}
						content={
							<List bulleted>
								<List.Item>
									None
									<List.List>
										<List.Item>No management</List.Item>
									</List.List>
								</List.Item>
								<List.Item>
									Simple
									<List.List>
										<List.Item>
											Indicate that an item has been
											purchased.
										</List.Item>
									</List.List>
								</List.Item>
								<List.Item>
									Party
									<List.List>
										<List.Item>
											Indicate which member of your party
											has the item
										</List.Item>
									</List.List>
								</List.Item>
							</List>
						}
					/>
				</div>
				{Object.entries(ItemManagementType).map(([key, value]) => {
					return (
						<Form.Radio
							key={key}
							label={key}
							checked={itemManagementType === value}
							onChange={() => onChangeItemManagement(value)}
						/>
					);
				})}
			</Form.Group>
		</Form.Group>
	);
};

export default PartyManagementFilter;
