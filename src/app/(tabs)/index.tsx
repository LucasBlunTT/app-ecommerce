import Product from '@/components/product/product';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FlatList, Image, Text, TextInput, View } from 'react-native';
import { produtos } from '@/utils/produtos';
import { useState } from 'react';

export default function Index() {
  interface Product {
    nomeProduto: string;
    precoProduto: number | string;
  }

  const [productsFiltered, setProductsFiltered] = useState<Product[]>(produtos);
  const [textProduct, setTextProduct] = useState('');

  function filterProducts(text: string) {
    setTextProduct(text);
    if (text) {
      const filteredProducts = produtos.filter((product) =>
        product.nomeProduto.toLowerCase().includes(text.toLowerCase())
      );
      setProductsFiltered(filteredProducts);
    } else {
      setProductsFiltered(produtos); // Mostrar todos os produtos quando não há busca
    }
  }

  return (
    <View className="flex-1 bg-bgHome pt-14 p-4">
      <View className="w-full h-10 items-start">
        <View className="flex-row items-center justify-center gap-4">
          <Image
            source={{
              uri: 'https://avatars.githubusercontent.com/u/83377646?s=400&u=22f31e7a0d7deeaad2f29f34c8701a5f2ee359f7&v=4',
            }}
            className="w-12 h-12 rounded-full"
          />
          <View className="flex-row gap-1">
            <Text className="text-2xl color-grayPrimary font-bold">Oi,</Text>
            <Text className="text-2xl color-white font-bold">Lucas</Text>
          </View>
        </View>
      </View>
      <View className="w-full items-end mb-4">
        <Text className="text-2xl font-bold color-grayPrimary">Produtos</Text>
      </View>
      <View className="w-full flex-row bg-[#242424] rounded-2xl p-2 items-center justify-center">
        <MaterialCommunityIcons
          name="magnify"
          size={18}
          color="#878787"
          className="ml-9"
        />
        <TextInput
          placeholder="Buscar Produtos"
          placeholderTextColor={'#878787'}
          className="w-full text-white ml-2"
          cursorColor={'#878787'}
          value={textProduct}
          onChangeText={filterProducts}
        />
      </View>
      <View className="w-full mt-5">
        <Text className="text-xl font-bold color-grayPrimary mb-4">
          Mais Vendidos
        </Text>

        <View>
          <FlatList
            className="w-full h-[82%]"
            data={productsFiltered}
            renderItem={({ item }) => (
              <Product
                nomeProduto={item.nomeProduto}
                precoProduto={item.precoProduto}
              />
            )}
            keyExtractor={(item) => item.nomeProduto}
            contentContainerStyle={{
              gap: 10,
              padding: 10,
            }}
          />
        </View>
      </View>
    </View>
  );
}
