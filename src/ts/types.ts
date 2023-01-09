export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
}

export interface Products {
    limit: number;
    products: Product[];
    skip: number;
    total: number;
}

export function checkedQuerySelector(parent: Element | Document, selector: string): Element {
    const el = parent.querySelector(selector);
    if (!el) {
        throw new Error(`Selector ${selector} didn't match any elements.`);
    }
    return el;
}

export function queryElement<T extends typeof Element>(
    container: Document | Element,
    type: T,
    selector: string
): InstanceType<T> {
    const el = checkedQuerySelector(container, selector);
    if (!(el instanceof type)) {
        throw new Error(`Selector ${selector} matched ${el} which is not an ${type}`);
    }
    return el as InstanceType<T>;
}

export interface Category {
    [category: string]: number | undefined;
}

export interface Brand {
    [brand: string]: number | undefined;
}

export interface Checkbox {
    id: string;
    checked: boolean;
}
