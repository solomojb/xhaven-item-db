import { useRecoilValue } from "recoil";
import { Form, List } from "semantic-ui-react";
import { gameTypeState } from "../../../../State";
import { useGetGames } from "../../../../games";

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
  const games = useGetGames();
  const { gameFilters, soloClassesToInclude, includeItemsFrom } = games[currentGameType];

  return (
    <Form.Group>
      <List bulleted>
        <List.Header>Which Games/Expansions are you playing with?</List.Header>
        {gameFilters.map((gameType) => {
          const { gameClasses, title } = games[gameType];
          const addClasses = gameClasses().length > 0;
          return <HelpEntry
            title={title}
            addClasses={addClasses}
            addItems={includeItemsFrom.includes(gameType)}
            addSolos={soloClassesToInclude.includes(gameType)} />
        })}
      </List>
    </Form.Group>
  );
};
