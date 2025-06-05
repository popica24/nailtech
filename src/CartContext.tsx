import { createContext, useContext, ReactNode } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { items } from "./data";

// Define your cart item type
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

// Define the context type
interface CartContextType {
  // Cart state
  cart: CartItem[];
  isCartOpen: boolean;

  // Cart actions
  openCart: () => void;
  closeCart: () => void;
  addToCart: (
    id: number,
    name: string,
    price: number,
    quantity?: number
  ) => void;
  removeFromCart: (id: number) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  clearCart: () => void;

  // Computed values
  getTotal: () => number;
  getItemCount: () => number;
}

// Create the context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Provider component
interface CartProviderProps {
  children: ReactNode;
}

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useLocalStorage<CartItem[]>("cart", []);
  const [isCartOpen, setIsCartOpen] = useLocalStorage<boolean>(
    "isCartOpen",
    false
  );

  // Cart visibility methods
  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  // Add item to cart
  const addToCart = (
    id: number,
    name: string,
    price: number,
    quantity: number = 1
  ) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === id);

      if (existingItem) {
        // If item exists, update quantity
        return prevCart.map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        // If item doesn't exist, add new item
        const dataItem = items.find((item) => item.id === id);
        return [
          ...prevCart,
          {
            id,
            name,
            price,
            quantity,
            image: dataItem?.image || "", // Use optional chaining and fallback
          },
        ];
      }
    });
  };

  // Remove item from cart completely
  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Increase quantity by 1
  const increaseQuantity = (id: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrease quantity by 1
  const decreaseQuantity = (id: number) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) => {
          if (item.id === id) {
            const newQuantity = item.quantity - 1;
            // If quantity becomes 0, we could either remove the item or keep it at 0
            // Here we'll remove it when it reaches 0
            return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]; // Remove null items
    });
  };

  // Clear entire cart
  const clearCart = () => {
    setCart([]);
  };

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getItemCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  const contextValue: CartContextType = {
    cart,
    isCartOpen,
    openCart,
    closeCart,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    getTotal,
    getItemCount,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
