import { ProductImage, ProductButton, ProductTitle, ProductCard } from "../components";

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
                    <ProductCard.Title title="Hello wordl"/>
                    <ProductCard.Buttons/>
                </ProductCard>

                <ProductCard product={product}>
                    <ProductImage />
                    <ProductTitle title="Hola Mundo" />
                    <ProductButton/>
                </ProductCard>
            </div>
        </div>
    )
}


// Faltaría crear el contex para heredar a los hijos