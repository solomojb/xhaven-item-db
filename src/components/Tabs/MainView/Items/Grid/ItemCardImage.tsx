import { GloomhavenItem } from "../../../../../State";


const getItemPath = (item: GloomhavenItem, _backside?: boolean) => {
    const { gameType, imgFileNumber } = item;
    if (imgFileNumber) {
        return `items/${gameType}/${imgFileNumber}.jpg`;
    }
    return '';
}

type Props = {
    item: GloomhavenItem;
    showBackside?: boolean
};

const CARD_SCALE = 0.5;

export const ItemCardImage = (props: Props) => {
    const { item, showBackside } = props;
    const styles = {
        container: {
            width: 409 * CARD_SCALE, /* width of individual sprite */
            height: 640 * CARD_SCALE, /* height of individual sprite */
            overflow: 'hidden', // Prevents other sprites from being visible
            borderRadius: `8px 8px 0px 0px`,
        },
        sprite: {
            backgroundImage: `url(${getItemPath(item, showBackside)
                })`,
            backgroundRepeat: 'no-repeat',
            display: 'block',
            backgroundSize: `${409 * 10 * CARD_SCALE}px ${640 * 7 * CARD_SCALE}px`,
            width: 409 * CARD_SCALE,
            height: 640 * CARD_SCALE,
        },
        spritePosition: (x: number, y: number) => ({
            backgroundPosition: `-${x}px -${y}px`, // Shifts the background to show the desired sprite
        }),
    };

    const xPos = (409 * CARD_SCALE) * (item.imageNumber !== undefined ? item.imageNumber % 10 : 0);
    const yPos = (640 * CARD_SCALE) * (item.imageNumber !== undefined ? Math.floor(item.imageNumber / 10) : 0);

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
