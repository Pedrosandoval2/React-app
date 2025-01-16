import { createContext } from 'react'
import styles from '../styles/styles.module.css'
import { Product, ProductContextProps } from '../interfaces/interfaces'
import { useProduct } from '../hooks/useProduct';

// eslint-disable-next-line react-refresh/only-export-components
export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
    product: Product;
    children?: React.ReactElement | React.ReactElement[];
    className?: string;
    style?: React.CSSProperties;
}

export const ProductCard = ({ children, product, className, style }: Props) => {

    const { quantity, increaseBy } = useProduct();

    return (
        <Provider value={{ quantity, increaseBy, product }}>
            <div
                className={`${styles.productCard}
                ${className}`} style={style}
            >
                {children}
            </div>
        </Provider>
    );
};
