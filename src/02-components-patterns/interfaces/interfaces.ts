export interface Props {
    product: Product;
    children?: React.ReactElement | React.ReactElement[];
}

export interface Product {
    id: string;
    title: string;
    img: string;
}

export interface ProductContextProps {
    quantity: number;
    increaseBy: (value: number) => void;
    product: Product;
}

export interface ProductImageProps {
    alt?: string;
}

export interface ProductDescriptionProps {
    title: string;
}

export interface ProductControlsProps {
    quantity: number;
    increaseBy: (value: number) => void;
}

export interface ProductCardProps {
    ({ children, product }: Props) : JSX.Element,
    Title: ({ title }: ProductDescriptionProps) => JSX.Element,
    Image: ({ alt }: ProductImageProps) => JSX.Element,
    Buttons: () => JSX.Element
}