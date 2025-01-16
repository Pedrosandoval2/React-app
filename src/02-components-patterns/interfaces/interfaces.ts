import { PropsButton } from "../components/ProductButton";
import { Props } from "../components/ProductCard";

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
    className?: string
}

export interface ProductDescriptionProps {
    title?: string;
    className?: string;
}

export interface ProductControlsProps {
    quantity: number;
    increaseBy: (value: number) => void;
}

export interface ProductCardProps {
    ({ children, product }: Props): JSX.Element,
    Title: ({ title }: ProductDescriptionProps) => JSX.Element,
    Image: ({ alt }: ProductImageProps) => JSX.Element,
    Buttons: ({ className }: PropsButton) => JSX.Element
}