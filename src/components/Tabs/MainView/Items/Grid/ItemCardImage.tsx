import { useMemo } from "react";
import { useGetGame } from "../../../../../games";
import { SpriteImageDimensions } from "../../../../../games/GameClass";
import { AllGames } from "../../../../../games/GameType";
import { GloomhavenItem, SpriteImageData } from "../../../../../State";

const getItemDimensions = ({ imagesAcross, imagesDown }: SpriteImageDimensions) => {
    const width = 531;
    const height = 815;
    const bgWidth = width * imagesAcross;
    const bgHeight = height * imagesDown;
    return { width, height, bgWidth, bgHeight };
}

const getItemPath = (gameType: AllGames, imgFileNumber: number, backside?: boolean) => {
    return `items/${gameType}/${imgFileNumber}${backside ? 'b' : ''}.png`;
}

interface CommonProps {
    showBackside?: boolean
    imageWidth: number;
}

interface Props extends CommonProps {
    item: GloomhavenItem;
};


interface Props2 extends SpriteImageData, CommonProps {
    gameType: AllGames;
}

export const SpriteItemCardImage = (props: Props2) => {
    const { gameType, imgFileNumber, showBackside, imageNumber, imageWidth } = props;

    const { CARD_WIDTH, CARD_HEIGHT } = useMemo(() => {
        const CARD_WIDTH = (imageWidth);
        const CARD_HEIGHT = CARD_WIDTH * (815 / 531);
        return { CARD_WIDTH, CARD_HEIGHT };

    }, [imageWidth]);

    const game = useGetGame(gameType);
    const itemImageData = game.getImageDimensions(imgFileNumber);
    const { imagesAcross } = itemImageData;
    const path = getItemPath(gameType, imgFileNumber, showBackside);
    const { width, height, bgWidth, bgHeight } = getItemDimensions(itemImageData);
    const styles = {
        container: {
            width: CARD_WIDTH, /* width of individual sprite */
            height: CARD_HEIGHT, /* height of individual sprite */
            overflow: 'hidden', // Prevents other sprites from being visible
        },
        sprite: {
            backgroundImage: `url(${path})`,
            backgroundRepeat: 'no-repeat',
            display: 'block',
            width: '100%',
            height: '100%',
            backgroundSize: `${bgWidth * CARD_WIDTH / width}px ${bgHeight * CARD_HEIGHT / height}px`,
        },
        spritePosition: (x: number, y: number) => ({
            backgroundPosition: `-${x}px -${y}px`, // Shifts the background to show the desired sprite
        }),
    };

    const xPos = (CARD_WIDTH) * (imageNumber !== undefined ? imageNumber % imagesAcross : 0);
    const yPos = (CARD_HEIGHT) * (imageNumber !== undefined ? Math.floor(imageNumber / imagesAcross) : 0);

    return (
        <div style={styles.container}>
            <div
                style={{
                    ...styles.sprite,
                    ...styles.spritePosition(xPos, yPos),
                }}
            />
        </div>
    );

}


export const ItemCardImage = (props: Props) => {
    const { item, imageWidth = 0, ...rest } = props
    return <SpriteItemCardImage {...item} imageWidth={imageWidth} {...rest} />
}
