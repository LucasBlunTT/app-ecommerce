import React, { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { CartContext } from '@/context/CartContext';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Carrinho() {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error('CartContext must be used within a CartProvider');
  }

  const { cartItems, removeFromCart, getTotalPrice, clearCart } = cartContext;

  const handleRemoveFromCart = (itemId: number) => {
    removeFromCart(itemId);
    console.log(`Produto com id ${itemId} removido do carrinho`);
  };

  return (
    <View className="flex-1 bg-bgHome pt-14 p-4">
      <Text className="text-2xl font-bold color-grayPrimary mb-4">
        Seu Carrinho
      </Text>

      {cartItems.length === 0 ? (
        <Text className="text-lg color-white">O carrinho está vazio.</Text>
      ) : (
        <>
          <FlatList
            data={cartItems}
            renderItem={({ item }) => (
              <View className="w-full bg-[#242424] rounded-2xl p-4 mb-4">
                {item.image && (
                  <Image
                    source={{ uri: item.image }}
                    className="rounded-2xl h-200 w-full"
                    resizeMode="contain"
                  />
                )}
                <Text className="text-lg font-bold color-white mt-2">
                  {item.name}
                </Text>
                <Text className="text-lg font-bold color-white">
                  R$ {item.price.toFixed(2)}
                </Text>

                {/* Botão Remover do Carrinho */}
                <TouchableOpacity
                  onPress={() => handleRemoveFromCart(item.id)}
                  className="bg-red-600 p-2 rounded-lg mt-4 flex-row items-center justify-center"
                >
                  <MaterialCommunityIcons
                    name="cart-remove"
                    size={20}
                    color="white"
                  />
                  <Text className="text-white ml-2">Remover</Text>
                </TouchableOpacity>
              </View>
            )}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={{
              gap: 10,
            }}
          />

          <View className="w-full mt-5">
            <Text className="text-xl font-bold color-grayPrimary">
              Total: R$ {getTotalPrice().toFixed(2)}
            </Text>

            {/* Botão Limpar Carrinho */}
            <TouchableOpacity
              onPress={clearCart}
              className="bg-red-600 p-4 rounded-lg mt-4 flex-row items-center justify-center"
            >
              <MaterialCommunityIcons name="cart-off" size={24} color="white" />
              <Text className="text-white ml-2">Limpar Carrinho</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
}
