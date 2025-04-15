import { useRecoilValue } from "recoil";
import { Form, List } from "semantic-ui-react";
import { gameInfo, GameInfo } from "../../../../games/GameInfo";
import { AllGames } from "../../../../games/GameType";
import { gameTypeState } from "../../../../State";
import { allGamesTitles, useGetGame } from "../../../../games";

interface HelpEntryProps {
  title: string;
  addClasses: boolean;
  addItems: boolean;
  addSolos: boolean;
}

const HelpEntry = (
  props: HelpEntryProps
) => {
  const { title, addClasses, addItems, addSolos } = props;
  return (
    <List.Item key={`${title}`}>
      <strong>{title}</strong>
      <List.List>
        {addClasses && (
          <List.Item>Add classes to party management</List.Item>
        )}
        {addItems && (
          <List.Item>Add Items for use</List.Item>
        )}
        {addSolos && (
          <List.Item>Add solo scenario items</List.Item>
        )}
      </List.List>
    </List.Item>
  );
};

export const GameHelp = () => {
  const currentGameType = useRecoilValue(gameTypeState);
  const game = useGetGame(currentGameType);
  const { gameFilters, soloClassesToInclude, includeItemsFrom } = game;

  return (
    <Form.Group>
      <List bulleted>
        <List.Header>Which Games/Expansions are you playing with?</List.Header>
        {gameFilters.map((gameType) => {
          const addClasses = gameInfo[gameType].gameClasses().length > 0;
          return <HelpEntry
            title={allGamesTitles[gameType]}
            addClasses={addClasses}
            addItems={includeItemsFrom.includes(gameType)}
            addSolos={soloClassesToInclude.includes(gameType)} />
        })}
      </List>
    </Form.Group>
  );
};
