import { ProductImage, ProductButton, ProductTitle, ProductCard } from "../components";
import '../styles/custom-styles.css'
import { useShoppingCart } from "../hooks/useShoippingCart";

export const ShoppingPages = () => {

    const {shoppingCart, products, onProductQuantityChange} = useShoppingCart()

    return (
        <div>
            <h1>Shopping page</h1>
            <hr />
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                {
                    products.map(product => (
                        <ProductCard
                            product={product}
                            onChange={onProductQuantityChange}
                            value={shoppingCart?.[product.id]?.quantity || 0}
                        // Aquí se hizo que se hace por producto por el id y busca el quantity si no hay va 0
                        >
                            <ProductImage />
                            <ProductTitle />
                            <ProductButton />
                        </ProductCard>
                    ))
                }
                <div className="shopping-cart">
                    {
                        Object.values(shoppingCart).map(product => (
                            <ProductCard
                                product={product}
                                className="bg-dark text-white"
                                style={{
                                    width: '100px'
                                }}
                                value={product.quantity}
                                onChange={onProductQuantityChange}
                            >
                                <ProductImage className="custom-image" />
                                <ProductButton className="custom-buttons" />
                            </ProductCard>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
