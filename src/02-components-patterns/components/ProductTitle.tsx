import { useContext } from 'react';
import { ProductDescriptionProps} from '../interfaces/interfaces';
import styles from '../styles/styles.module.css'
import { ProductContext } from './ProductCard';

export const ProductTitle = ({ title, className }: ProductDescriptionProps) => {

    const { product } = useContext(ProductContext)

    return (
        <span
            className=
            {`${styles.productDescription} ${className}`}
        >
            {title || product.title}
        </span>
    )
};