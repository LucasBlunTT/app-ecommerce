import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { CartContext } from '@/context/CartContext';

interface ProductProps {
  nomeProduto: string;
  precoProduto: string | number;
}

export default function Product({ nomeProduto, precoProduto }: ProductProps) {
  const cartContext = useContext(CartContext); // Use o contexto do carrinho

  if (!cartContext) {
    throw new Error('CartContext must be used within a CartProvider');
  }

  const { addToCart } = cartContext;

  const handleAddToCart = () => {
    const product = {
      id: Math.random(), // Id único para o produto, pode ser melhorado
      name: nomeProduto,
      price:
        typeof precoProduto === 'string'
          ? parseFloat(precoProduto.replace('R$', '').trim())
          : precoProduto, // Convertendo para número
    };

    addToCart(product); // Adiciona o produto ao carrinho
    console.log(`${nomeProduto} adicionado ao carrinho`);
  };

  return (
    <View className="w-full bg-[#242424] rounded-2xl p-4 justify-center">
      <Image
        source={require('@/assets/product1.png')}
        className="rounded-2xl h-200 w-full"
        resizeMode="contain"
      />
      <Text className="text-lg font-bold color-white mt-2">{nomeProduto}</Text>
      <Text className="text-lg font-bold color-white">{precoProduto}</Text>

      {/* Botão Adicionar ao Carrinho */}
      <TouchableOpacity
        onPress={handleAddToCart}
        className="bg-bgBtn p-2 rounded-lg mt-4 flex-row items-center justify-center"
      >
        <MaterialCommunityIcons name="cart" size={20} color="white" />
        <Text className="text-white ml-2">Adicionar ao Carrinho</Text>
      </TouchableOpacity>
    </View>
  );
}
