import { useRecoilValue } from "recoil";
import { Form, List } from "semantic-ui-react";
import { gameTypeState } from "../../../../State";
import { useGetGames } from "../../../../games";
import { AllGames, MercenariesPacks } from "../../../../games/GameType";

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

export interface HelpProps {
  label: string;
  gameList: AllGames[];
}

export const GameHelp = (props: HelpProps) => {
  const { gameList, label } = props;
  const currentGameType = useRecoilValue(gameTypeState);
  const games = useGetGames();
  const { soloClassesToInclude, includeItemsFrom, includeMercenaryPacksSoloItems } = games[currentGameType];

  return (
    <Form.Group>
      <List bulleted>
        <List.Header>{`Which ${label} are you playing with?`}</List.Header>
        {gameList.map((gameType) => {
          const { hasClasses, title, } = games[gameType];
          return <HelpEntry
            title={title}
            addClasses={hasClasses()}
            addItems={includeItemsFrom.includes(gameType)}
            addSolos={soloClassesToInclude.includes(gameType) || (includeMercenaryPacksSoloItems && label === 'Mercenary Packs')} />
        })}
      </List>
    </Form.Group>
  );
};
