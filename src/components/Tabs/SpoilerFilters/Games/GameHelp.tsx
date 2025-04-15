import { useRecoilValue } from "recoil";
import { Form, List } from "semantic-ui-react";
import { gameInfo, GameInfo } from "../../../../games/GameInfo";
import { AllGames } from "../../../../games/GameType";
import { gameTypeState } from "../../../../State";
import { useGetGame } from "../../../../games";

const constructHelpEntry = (
  currentGameType: AllGames,
  gameType: AllGames,
  { title, addItemsToGames, gameClasses, soloGameType }: GameInfo
) => {
  const soloGameTitle = soloGameType ? gameInfo[soloGameType].title : undefined;
  return (
    <List.Item key={`${title}-${gameType}`}>
      <strong>{title}</strong>
      <List.List>
        {gameClasses().length > 0 && (
          <List.Item>Add classes to party management</List.Item>
        )}
        {addItemsToGames && addItemsToGames.includes(currentGameType) && (
          <List.Item>Add Items for use</List.Item>
        )}
        {soloGameTitle && (
          <List.Item>{`Add solo scenario items for ${soloGameTitle}`}</List.Item>
        )}
      </List.List>
    </List.Item>
  );
};

export const GameHelp = () => {
  const currentGameType = useRecoilValue(gameTypeState);
  const { gameFilters } = useGetGame(currentGameType);

  return (
    <Form.Group>
      <List bulleted>
        <List.Header>Which Games/Expansions are you playing with?</List.Header>
        {gameFilters.map((gameType) => {
          const gi = gameInfo[gameType];
          return constructHelpEntry(currentGameType, gameType, gi);
        })}
      </List>
    </Form.Group>
  );
};
