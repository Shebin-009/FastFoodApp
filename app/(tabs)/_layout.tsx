import { View, Text } from 'react-native'
import React from 'react'
import { Redirect, Slot } from 'expo-router'

export default   function layout (){
    const isAuntenticated = false;

    if(!isAuntenticated) return<Redirect href="/sign-in"/>
        return <Slot />
}

