import { createContext } from 'react'
import styles from '../styles/styles.module.css'
import { InitialValues, onChangeArgs, Product, ProductCardHandlers, ProductContextProps } from '../interfaces/interfaces';
import { useProduct } from '../hooks/useProduct';

// eslint-disable-next-line react-refresh/only-export-components
export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface PropsChildren {
    maxCount: number | undefined
}
export interface Props {
    product: Product;
    // children?: React.ReactElement | React.ReactElement[] ;
    children: (args: ProductCardHandlers) => JSX.Element;
    className?: string;
    style?: React.CSSProperties;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues;
}

export const ProductCard = ({ children, product, onChange, className, style, value = 0, initialValues }: Props) => {

    const { quantity, isMaxCounteReached, maxCount, increaseBy, reset } = useProduct({
        onChange: onChange || (() => { }),
        product,
        value,
        initialValues
    });

    return (
        <Provider value={{ quantity, product, maxCount, increaseBy }}>
            <div
                className={`${styles.productCard}
                ${className}`} style={style}
            >
                {children({
                    count: quantity,
                    product,
                    isMaxCounteReached,
                    maxCount,
                    increaseBy,
                    reset
                })}
            </div>
        </Provider>
    );
};
