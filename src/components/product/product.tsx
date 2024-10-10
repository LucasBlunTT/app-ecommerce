import { View, Text, Image } from 'react-native';
import React from 'react';

interface ProductProps {
  nomeProduto: string;
  precoProduto: string;
}

export default function Product({ nomeProduto, precoProduto }: ProductProps) {
  return (
    <View className="w-full bg-[#242424] rounded-2xl p-4 justify-center">
      <Image
        source={require('@/assets/product1.png')}
        className="rounded-2xl h-200 w-full"
        resizeMode="contain"
      />
      <Text className="text-lg font-bold color-white">{nomeProduto}</Text>
      <Text className="text-lg font-bold color-white">{precoProduto}</Text>
    </View>
  );
}
