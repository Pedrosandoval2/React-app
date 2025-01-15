import { createContext } from 'react'
import styles from '../styles/styles.module.css'
import { ProductContextProps, Props } from '../interfaces/interfaces'
import { useProduct } from '../hooks/useProduct';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ children, product }: Props) => {

    const { quantity, increaseBy } = useProduct();

    return (
        <Provider value={{ quantity, increaseBy, product }}>
            <div className={styles.productCard}>
                {children}
            </div>
        </Provider>
    );
};
