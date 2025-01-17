import { useState } from "react";
import { Product } from "../interfaces/interfaces";
import { products } from "../data/product";

interface ProductInCart extends Product {
    quantity: number;
}

export const useShoppingCart = () => {
    const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});

    const onProductQuantityChange = ({ quantity, product }: { quantity: number, product: Product }) => {
        setShoppingCart(state => {

            const productInCart: ProductInCart = state[product.id] || { ...product, quantity: 0 }

            if (Math.max(productInCart.quantity + quantity, 0) > 0) {
                productInCart.quantity += quantity
                return {
                    ...state,
                    [product.id]: productInCart
                }
            }

            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { [product.id]: toDelete, ...rest } = state;
            return rest;

        })
    }

    return {
        products,
        shoppingCart,
        onProductQuantityChange,
    }

}