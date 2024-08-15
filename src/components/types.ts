


export type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
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