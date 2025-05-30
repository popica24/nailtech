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

  // Calculate total price
  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Get total item count
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

// Custom hook to use the cart context
export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}

// Usage example:
/*
// 1. Wrap your app with CartProvider
function App() {
  return (
    <CartProvider>
      <Header />
      <ProductList />
      <CartDrawer />
    </CartProvider>
  );
}

// 2. Use the cart in any component
function ProductCard({ product }) {
  const { addToCart, openCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product.id, product.name, product.price, 1);
    openCart(); // Optionally open cart after adding
  };

  return (
    <div>
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

// 3. Cart component
function CartDrawer() {
  const { 
    cart, 
    isCartOpen, 
    closeCart, 
    removeFromCart, 
    increaseQuantity, 
    decreaseQuantity, 
    getTotal, 
    getItemCount 
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="cart-drawer">
      <div className="cart-header">
        <h2>Cart ({getItemCount()} items)</h2>
        <button onClick={closeCart}>×</button>
      </div>
      
      <div className="cart-items">
        {cart.map(item => (
          <div key={item.id} className="cart-item">
            <h4>{item.name}</h4>
            <p>${item.price}</p>
            <div className="quantity-controls">
              <button onClick={() => decreaseQuantity(item.id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => increaseQuantity(item.id)}>+</button>
            </div>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))}
      </div>
      
      <div className="cart-footer">
        <p>Total: ${getTotal().toFixed(2)}</p>
        <button>Checkout</button>
      </div>
    </div>
  );
}

// 4. Header with cart icon
function Header() {
  const { openCart, getItemCount } = useCart();

  return (
    <header>
      <h1>My Store</h1>
      <button onClick={openCart}>
        Cart ({getItemCount()})
      </button>
    </header>
  );
}
*/
