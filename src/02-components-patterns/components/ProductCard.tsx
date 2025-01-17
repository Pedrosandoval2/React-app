import { createContext, useEffect } from 'react'
import styles from '../styles/styles.module.css'
import { onChangeArgs, Product, ProductContextProps } from '../interfaces/interfaces'
import { useProduct } from '../hooks/useProduct';

// eslint-disable-next-line react-refresh/only-export-components
export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
    product: Product;
    children?: React.ReactElement | React.ReactElement[];
    className?: string;
    style?: React.CSSProperties;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
}

export const ProductCard = ({ children, product, onChange, className, style, value = 0 }: Props) => {

    const { quantity, increaseBy, setQuantity } = useProduct({
        onChange: onChange || (() => {}),
        product
    });

    useEffect(() => {
        setQuantity(value)
    }, [value])


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
