import { Form, Popup, Icon, Segment } from "semantic-ui-react";
import { AllGames } from "../../../../games/GameType";
import { ItemManagementType } from "../../../../State/Types";
import PartyManagementFilter from "./PartyManagementFilter";
import { PartySpoilerList } from "./PartySpoilerList";
import { useXHavenDB } from "../../../Providers/XHavenDBProvider";
import { useRecoilValue } from "recoil";
import { gameTypeState } from "../../../../State";
import { useGetGames } from "../../../../games";
import { MPPartyList } from "./MPPartyList";

export const PartySpoiler = () => {
	const currentGameType = useRecoilValue(gameTypeState);
	const games = useGetGames();
	const game = games[currentGameType];
	const { gameFilters, expansionFilters } = game;
	const { itemManagementType } = useXHavenDB();
	const allGames = [currentGameType, ...gameFilters, ...expansionFilters];

	return (
		<Segment>
			<PartyManagementFilter />
			{itemManagementType === ItemManagementType.Party && (
				<Form.Group inline className={"inline-break"}>
					<Form.Group inline>
						<label>Party Members:</label>
						<div style={{ margin: "5px 8px" }}>
							<Popup
								closeOnDocumentClick
								hideOnScroll
								trigger={
									<Icon
										name={"question circle"}
										className={"blue"}
									/>
								}
								header={"Party Members"}
								content={
									"Click on a class icon to add that class to you party.  You can then assign items to any members in a party. Clicking on member a second time will remove all items."
								}
							/>
						</div>
					</Form.Group>
					{allGames.map((gameType) => {
						const { hasClasses } = games[gameType];
						if (!hasClasses()) {
							return null;
						}
						return (
							<PartySpoilerList
								key={gameType}
								type={gameType as AllGames}
							/>
						);
					})}
					<MPPartyList/>
				</Form.Group>
			)}
		</Segment>
	);
};
