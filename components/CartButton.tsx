import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { images } from '@/constants';
import {useCartStore} from "@/store/cart.store";


const CartButton = () => {
  const { getTotalItems } = useCartStore();
    const totalItems = getTotalItems();

  return (
    <TouchableOpacity className="relative bg-primary p-3 rounded-full">
      <Image source={images.bag} className="size-5" resizeMode="contain" />

      {totalItems > 0 && (
        <View className="absolute -top-1 -right-1 bg-red-500 w-5 h-5 rounded-full items-center justify-center">
          <Text className="text-white text-xs font-bold">{totalItems}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default CartButton