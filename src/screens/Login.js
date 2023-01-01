import React from "react";
import { TextInput,SafeAreaView,View, Text, Image, TouchableOpacity } from 'react-native'


const Login = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
                      
      <Image source={require('../../assets/dl.jpg')}
        style={{ height: 250, width: 250 ,marginBottom:40}}
        ></Image>
      <Text style={{fontSize:28,marginBottom:10}}>Login System</Text>
     <View style={{flexDirection:'row', borderBottomColor:'black',borderBottomWidth:1,borderColor:'black',marginBottom:15 ,paddingHorizontal:110}}>
      <TextInput placeholder="Email ID" style={{fontSize:20}} />
     </View>
     <View style={{flexDirection:'row', borderBottomColor:'black',borderBottomWidth:1,borderColor:'black',marginBottom:15 ,paddingHorizontal:100}}>
      <TextInput placeholder="PassWord" style={{fontSize:20,textAlign:'justify'}}secureTextEntry={true} />
     </View>
     <TouchableOpacity onPress={()=>{}} >
      <Text style={{fontSize:25 ,paddingBottom:8,backgroundColor:'purple',borderRadius:8,paddingHorizontal:80,color:'white'}} >Login</Text>
     </TouchableOpacity>
     <View style={{flexDirection:'row'}}>
           <Text style={{fontSize:16,marginTop:30}}>New to Parko ?</Text> 
          <TouchableOpacity onPress={()=>{navigation.navigate('Register')}}>
            <Text style={{fontSize:16,color:'purple',fontWeight:'bold',marginTop:30}}> Register</Text>
          </TouchableOpacity>
      </View>  
    </SafeAreaView>
  )
}

export default Login