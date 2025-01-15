
import styles from '../styles/styles.module.css'
import noImage from '../assets/no-image.jpg'
import { ProductImageProps } from '../interfaces/interfaces';
import { useContext } from 'react';
import { ProductContext } from './ProductCard';


export const ProductImage = ({alt = '' }: ProductImageProps) => {
    const { product } = useContext(ProductContext);
    return (
        <img className={styles.productImg} src={product.img || noImage} alt={alt} />
    )
};