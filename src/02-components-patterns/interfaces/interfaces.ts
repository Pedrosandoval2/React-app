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
    maxCount: number | undefined
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

export interface onChangeArgs {
    product: Product,
    quantity: number
}

export interface InitialValues {
    count?: number;
    maxCount?: number;
}

export interface ProductCardHandlers {
    count: number;
    isMaxCounteReached: boolean;
    maxCount?: number;
    product: Product;

    increaseBy: (value: number) => void;
    reset: () => void;
}