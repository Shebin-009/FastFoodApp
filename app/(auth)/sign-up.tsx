import { View, Text } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import { Button } from 'react-native'

const SignUp = () => {
  return (
    <View>
         <Text>SignUp</Text>
            <Button title="Sign Up" onPress={() =>router.push("/sign-up")}></Button>
          </View>
  )
}

export default SignUp