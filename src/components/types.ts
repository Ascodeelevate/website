


export type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
  }


  export type ProductCardProps = {
    product: {
        name: string;
        description: string;
        price: string | string[];
        plan: string;
        notes?: string[];
    };
    onClick?: () => void;
}

  
export type Product = {
    id: number;
    name: string;
    description: string;
    price: string | string[];
    plan: string;
    notes?: string[];
    features: string[];
  }

  export type ProductDetailsProps = {
    product: Product;
  }