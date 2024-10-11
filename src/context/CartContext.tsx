import React, { createContext, useState, ReactNode } from 'react';

// Definir a interface para o item do carrinho
interface CartItem {
  id: number;
  name: string;
  price: number;
  image?: string;
}

// Definir o tipo para o contexto
interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
}

// Criar o contexto com um valor inicial vazio
export const CartContext = createContext<CartContextType | undefined>(
  undefined,
);

// Definir a interface para o provedor de contexto
interface CartProviderProps {
  children: ReactNode;
}

// Provedor do contexto, que encapsula os componentes que precisam acessar o estado do carrinho
export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Função para adicionar um item ao carrinho
  const addToCart = (item: CartItem) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  // Função para remover um item do carrinho
  const removeFromCart = (itemId: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  // Função para limpar o carrinho
  const clearCart = () => {
    setCartItems([]);
  };

  // Calcular o total dos itens no carrinho
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
