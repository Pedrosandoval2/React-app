import { ProductImage, ProductButton, ProductTitle, ProductCard } from "../components";
import '../styles/custom-styles.css'

const product = {
    id: '1',
    title: 'Coffee Mug - Card',
    img: './coffee-mug.png'
}

export const ShoppingPages = () => {

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
                    <ProductCard.Image />
                    <ProductCard.Title title="Hello wordl" />
                    <ProductCard.Buttons />
                </ProductCard>

                <ProductCard
                    product={product}
                    className="bg-dark"
                >
                    <ProductImage className="custom-image" />
                    <ProductTitle className="text-white" title="Hola Mundo" />
                    <ProductButton className="custom-buttons" />
                </ProductCard>

                <ProductCard
                    product={product}
                    style={{
                        backgroundColor: '#70d1F8'
                    }}
                >
                    <ProductImage />
                    <ProductTitle />
                    <ProductButton />
                </ProductCard>
            </div>
        </div>
    )
}
