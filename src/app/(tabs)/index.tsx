import { Image, Text, View } from 'react-native';
export default function Index() {
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
            <Text className="text-2xl color-white color-grayPrimary font-bold">
              Oi,
            </Text>
            <Text className="text-2xl color-white font-bold">Lucas</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
