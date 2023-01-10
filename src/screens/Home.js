import { SafeAreaView, Text,Image } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
      <Text>Available In Here Yea</Text>
      <Image source={require('../../assets/dl.jpg')}
        style={{ height: 350, width: 350}}
        ></Image>
    </SafeAreaView>
  )
}

export default Home