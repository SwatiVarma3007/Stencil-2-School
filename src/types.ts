export interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: 'all' | 'totes' | 'travel' | 'stationery' | 'pouches';
  categoryLabel: string;
  price: number;
  image: string;
  description: string;
  dimensions: string;
  meshGrade: string;
  patinaOrigin: string;
  durabilityRating: string;
  tags: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface OrderDetails {
  orderId: string;
  customerName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  pincode: string;
  paymentMethod: 'cod' | 'upi' | 'card' | 'school-po';
  items: CartItem[];
  subtotal: number;
  shipping: number;
  total: number;
  timestamp: string;
}
