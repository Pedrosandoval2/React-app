import { useContext } from 'react';
import styles from '../styles/styles.module.css'
import { ProductContext } from './ProductCard';

export const ProductButton = () => {
    const { increaseBy, quantity } = useContext(ProductContext);
    return (
        <div className={styles.buttonsContainer}>
            <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
                -
            </button>
            <div className={styles.countLabel}>{quantity}</div>
            <button className={styles.buttonAdd} onClick={() => increaseBy(1)}>
                +
            </button>
        </div>
    )
};