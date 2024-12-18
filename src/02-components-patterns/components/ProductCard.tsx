import styles from '../styles/styles.module.css'

interface Props {
    product: Product
    children?: React.ReactElement
}

interface Product {
    id: string
    title: string
    img?: string
}

interface ProductImageProps {
    img: string;
    alt: string;
}

interface ProductDescriptionProps {
    title: string;
}

interface ProductControlsProps {
    quantity: number;
    increaseBy: (value: number) => void;
}

export const ProductControls = ({ quantity, increaseBy }: ProductControlsProps) => (
    <div className={styles.buttonsContainer}>
        <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
            -
        </button>
        <div className={styles.countLabel}>{quantity}</div>
        <button className={styles.buttonAdd} onClick={() => increaseBy(1)}>
            +
        </button>
    </div>
);

export const ProductDescription = ({ title }: ProductDescriptionProps) => (
    <span className={styles.productDescription}>{title}</span>
);
export const ProductImage = ({ img, alt }: ProductImageProps) => (
    <img className={styles.productImg} src={img} alt={alt} />
);

export const ProductCard = ({children}: Props) => {

    return (
        <div className={styles.productCard}>
            {children}
        </div>
    );
};