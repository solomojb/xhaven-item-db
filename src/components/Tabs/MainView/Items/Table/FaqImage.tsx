import { Icon, Popup } from "semantic-ui-react";
import { GloomhavenItem } from "../../../../../State"
import { SpriteItemCardImage } from "../Grid/ItemCardImage";
import { useMemo } from "react";

interface Props {
    item: GloomhavenItem;
}

export const FaqImage = (props: Props) => {
    const { item: { faqImage, gameType, imageNumber: originalImageNumber, imgFileNumber: originalImgFileNumber } } = props;
    const spriteImageData = useMemo(() => {
        if (!faqImage) {
            return { imageNumber: 0, imgFileNumber: 0 }
        }
        if (faqImage === 'self') {
            return { imageNumber: originalImageNumber, imgFileNumber: originalImgFileNumber };
        }
        return faqImage;
    }, [faqImage, originalImageNumber, originalImgFileNumber])
    if (!faqImage) {
        return null;
    }
    return <Popup
        closeOnDocumentClick
        hideOnScroll
        trigger={<Icon name={"question circle"} className={"pink"} />}
        header={"FAQ"}
        content={
            <SpriteItemCardImage gameType={gameType} {...spriteImageData} />
        }
    />
}
