import { ProductDescriptionProps } from '../interfaces/interfaces';
import styles from '../styles/styles.module.css'

export const ProductTitle = ({ title }: ProductDescriptionProps) => {
    return (
        <span className={styles.productDescription}>{title}</span>
    )
};