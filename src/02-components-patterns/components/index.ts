import { ProductCardProps } from '../interfaces/interfaces';
import { ProductButton } from './ProductButton';
import { ProductCard as ProductCardHOC } from './ProductCard';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';

export { ProductImage } from './ProductImage';
export { ProductTitle } from './ProductTitle';
export { ProductButton } from './ProductButton';

export const  ProductCard: ProductCardProps = Object.assign(ProductCardHOC, {
    Image: ProductImage,
    Title: ProductTitle,
    Buttons: ProductButton
})



