import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface ProductProps {
  nomeProduto: string;
  precoProduto: string;
}

export default function Product({ nomeProduto, precoProduto }: ProductProps) {
  const handleAddToCart = () => {
    // Lógica para adicionar o produto ao carrinho
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
