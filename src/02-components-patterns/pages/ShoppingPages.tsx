import { ProductCard, ProductControls, ProductDescription, ProductImage } from "../components/ProductCard"
import noImage from '../assets/no-image.jpg'
import { useProduct } from "../hooks/useProduct";

const product = {
    id: '1',
    title: 'Coffee Mug - Card',
    img: './coffee-mug.png'
}

export const ShoppingPages = () => {

    const { quantity, increaseBy } = useProduct();

    return (
        <div>
            <h1>Shopping page</h1>
            <hr />
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                <ProductCard product={product}>
                    <>
                        <ProductImage img={product.img || noImage} alt="Coffee Mug" />
                        <ProductDescription title={product.title} />
                        <ProductControls quantity={quantity} increaseBy={increaseBy} />
                    </>
                </ProductCard>
            </div>
        </div>
    )
}
