export interface ProductProps {
  id: string;
  name: string;
  price: number;
  image: string;
  brand: string;
  rating: number;
  soldCount: number;
}

export interface Color {
  name: string;
  value: string;
  hex: string;
}

export interface ProductDetailsProps {
  brand: string;
  name: string;
  originalPrice: number;
  currentPrice: number;
  rating: number;
  soldCount: number;
  description: string;
  colors: Color[];
  sizes: string[];
  selectedColor: string;
  selectedSize: string;
  onColorChange: (color: string) => void;
  onSizeChange: (size: string) => void;
}