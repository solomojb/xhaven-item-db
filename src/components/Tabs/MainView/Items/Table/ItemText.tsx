import { Icon, Popup } from "semantic-ui-react";
import { GameType } from "../../../../../games";
import { GloomhavenItem } from "../../../../../State";
import { GHIcon } from "../../../../Utils";
import { ConsumptionPanel } from "./ConsumptionPanel";
import { ItemSummon } from "./ItemSummon";
import { FaqImage } from "./FaqImage";

interface Props {
  item: GloomhavenItem;
}

const numberAmountToText = ["zero", "one", "two", "three", "four", "five"];

export const ItemText = (props: Props) => {
  const {
    item,
    item: {
      gameType,
      descHTML,
      backDescHTML,
      minusOneCardsAdded,
      faq,
      summon,
      consumption,
    },
  } = props;

  return (
    <>
      {backDescHTML ? (
        <>
          <span
            dangerouslySetInnerHTML={{
              __html: `<b>Front</b>: ${descHTML}<br/>`,
            }}
          />
          <span
            dangerouslySetInnerHTML={{
              __html: `<b>Back</b>: ${backDescHTML}<br/>`,
            }}
          />
        </>
      ) : (
        <span
          dangerouslySetInnerHTML={{
            __html: descHTML ?? '',
          }}
        />
      )}
      {consumption && (
        <div>
          <ConsumptionPanel {...consumption} />
        </div>
      )}
      {minusOneCardsAdded && (
        <>
          <br />
          <span>
            {`Add ${minusOneCardsAdded < numberAmountToText.length
              ? numberAmountToText[minusOneCardsAdded]
              : minusOneCardsAdded
              } `}
            {gameType === GameType.Frosthaven ? (
              <GHIcon name={"modifier_minus_one_circle.png"} />
            ) : (
              <GHIcon name={"modifier_minus_one.png"} />
            )}

            {` to your attack modifier deck.`}
          </span>
        </>
      )}
      {faq && (
        <Popup
          closeOnDocumentClick
          hideOnScroll
          trigger={<Icon name={"question circle"} className={"pink"} />}
          header={"FAQ"}
          content={faq}
        />
      )}
      <FaqImage item={item} />
      {summon && <ItemSummon summon={summon} />}
    </>
  );
};
