import React from "react";
import { TextInput,SafeAreaView,View, Text, Image, TouchableOpacity } from 'react-native'


const Register = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
                      
      <Image source={require('../../assets/dl.jpg')}
        style={{ height: 230, width: 230 ,marginBottom:25}}
        ></Image>
      <Text style={{fontSize:28,marginBottom:8}}>Register System</Text>
      <View style={{flexDirection:'row', borderBottomColor:'black',borderBottomWidth:1,borderColor:'black',marginBottom:7 ,paddingHorizontal:103}}>
      <TextInput placeholder="Full Name" style={{fontSize:20}} />
     </View>
     <View style={{flexDirection:'row', borderBottomColor:'black',borderBottomWidth:1,borderColor:'black',marginBottom:7 ,paddingHorizontal:112}}>
      <TextInput placeholder="Email ID" style={{fontSize:20}} />
     </View>
     <View style={{flexDirection:'row', borderBottomColor:'black',borderBottomWidth:1,borderColor:'black',marginBottom:7 ,paddingHorizontal:82}}>
      <TextInput placeholder="Phone Number" style={{fontSize:20}} />
     </View>
     
     <View style={{flexDirection:'row', borderBottomColor:'black',borderBottomWidth:1,borderColor:'black',marginBottom:7 ,paddingHorizontal:100}}>
      <TextInput placeholder="PassWord" style={{fontSize:20,textAlign:'justify'}}secureTextEntry={true} />
     </View>
     <View style={{flexDirection:'row', borderBottomColor:'black',borderBottomWidth:1,borderColor:'black',marginBottom:15 ,paddingHorizontal:54}}>
      <TextInput placeholder="Confirm PassWord" style={{fontSize:20,textAlign:'justify'}}secureTextEntry={true} />
     </View>
     <TouchableOpacity onPress={()=>{}} >
      <Text style={{fontSize:28 ,backgroundColor:'purple',borderRadius:8,paddingHorizontal:100,paddingBottom:5 ,color:'white',alignContent:"center"}} >Login</Text>
     </TouchableOpacity>
     <View style={{flexDirection:'row'}}>
           <Text style={{fontSize:16,marginTop:8}}>Already Registered ?</Text> 
          <TouchableOpacity onPress={()=>{navigation.goBack()}}>
            <Text style={{fontSize:16,color:'purple',fontWeight:'bold',marginTop:8}}> Login</Text>
          </TouchableOpacity>
      </View>  
    </SafeAreaView>
  )
}

export default Register