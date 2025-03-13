import { ProductImage, ProductButton, ProductTitle, ProductCard } from "../components";
import { products } from "../data/product";
import '../styles/custom-styles.css'
// import { useShoppingCart } from "../hooks/useShoippingCart";

const product = products[0]
const numberIncreaseBy = 2
export const ShoppingPages = () => {

    // const {shoppingCart, products, onProductQuantityChange} = useShoppingCart()

    return (
        <div>
            <h1>Shopping page</h1>
            <hr />
            <div>

                <ProductCard
                    product={product}
                    key={product.id}
                    initialValues={{
                        count: 4,
                        maxCount: 10
                    }}
                >
                    {({ count, maxCount, reset, increaseBy }) => {

                        const increment = (maxCount && (count <= (maxCount - numberIncreaseBy)));

                        const decrement = (maxCount && (count >= numberIncreaseBy));
                        return (
                            <>
                                <ProductImage />
                                <ProductTitle />
                                <ProductButton />

                                <button onClick={reset}>reset</button>
                                {decrement && <button onClick={() => increaseBy(-numberIncreaseBy)}>{`-${numberIncreaseBy}`}</button>}
                                {increment && <button onClick={() => increaseBy(numberIncreaseBy)}>{`+${numberIncreaseBy}`}</button>}
                                <span>{count}</span>
                            </>
                        )
                    }}
                </ProductCard>

            </div>
        </div>
    )
}
