import { useCallback, useContext } from 'react';
import styles from '../styles/styles.module.css'
import { ProductContext } from './ProductCard';

export interface PropsButton {
    className?: string;
    maxCount?: number | undefined
}

export const ProductButton = ({ className }: PropsButton) => {
    const { increaseBy, quantity, maxCount } = useContext(ProductContext);

    const inMaxReached = useCallback(
        () => quantity === maxCount,
        [quantity, maxCount],
    )


    return (
        <div className={`${styles.buttonsContainer} ${className}`}>
            <button className={`${styles.buttonMinus}`} onClick={() => increaseBy(-1)}>
                -
            </button>
            <div className={styles.countLabel}>{quantity}</div>
            <button className={`${styles.buttonAdd} ${inMaxReached() ? styles.disabled : ''}`} onClick={() => {
                if (inMaxReached()) return;
                increaseBy(1);
            }}>
                +
            </button>
        </div>
    )
};