import React, { Component } from 'react';
import { View, TextInput, Image, Button,Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

class HomeScreen extends Component{
  render(){
    return(
      <View style={{backgroundColor:'pink',flex:1}}>
        <View style={{flex:1, backgroundColor:'white'}}>
          <View>
            <View style={{position:'relative', marginHorizontal:17}}>
              <TextInput placeholder="Search..." style={{borderWidth:1, borderColor:'#E8E8E8', borderRadius:25, paddingLeft:45, marginTop:30}} />
              <Image source={require('../../../../img/icon/search.png')} style={{position:'absolute', top:45, left:12}} />
            </View>
            <View style={{backgroundColor:'#2933E9', marginHorizontal:17,borderTopLeftRadius:10,borderTopRightRadius:10, marginTop:15}}>
              <Text style={{padding:8,color:'white'}}>Category</Text>
            </View>
            <View style={{justifyContent:'center',alignItems:'center',flexDirection:'row',padding:10,backgroundColor:'#1F28CF', marginHorizontal:17,borderBottomLeftRadius:10,borderBottomRightRadius:10}}>
              <View style={{marginLeft:10,justifyContent:"center", alignItems:'center',borderRadius:10, width:40, height:40, backgroundColor:'white'}}>
                <Text>Food</Text>
              </View>
              <View style={{marginLeft:10,justifyContent:"center", alignItems:'center',borderRadius:10, width:40, height:40, backgroundColor:'white'}}>
                <Text>Drink</Text>
              </View>
              <View style={{marginLeft:10,justifyContent:"center", alignItems:'center',borderRadius:10, width:40, height:40, backgroundColor:'white'}}>
                <Text>Coffie</Text>
              </View>
              <View style={{marginLeft:10,justifyContent:"center", alignItems:'center',borderRadius:10, width:40, height:40, backgroundColor:'white'}}>
                <Text>Drink</Text>
              </View>
            </View>
          </View>
          <View style={{borderRadius:10,justifyContent:'center',alignItems:'center',marginHorizontal:17, marginTop:30, backgroundColor:'blue', flexDirection:'row', flexWrap:'wrap',padding:10}}>
            <View style={{margin:5,borderRadius:30,backgroundColor:'#E9E9E9',justifyContent:'center',alignItems:'center',width:100,height:100}}>
              <Text>Item 1</Text>
            </View>
            <View style={{margin:5,borderRadius:30,backgroundColor:'#E9E9E9',justifyContent:'center',alignItems:'center',width:100,height:100}}>
              <Text>Item 2</Text>
            </View>
            <View style={{margin:5,borderRadius:30,backgroundColor:'#E9E9E9',justifyContent:'center',alignItems:'center',width:100,height:100}}>
              <Text>Item 3</Text>
            </View>
            <View style={{margin:5,borderRadius:30,backgroundColor:'#E9E9E9',justifyContent:'center',alignItems:'center',width:100,height:100}}>
              <Text>Item 4</Text>
            </View>
          </View>
        </View>
        <View style={{height:54, backgroundColor:'yellow', flexDirection:'row'}}>
           <View style={{backgroundColor:'white', flex:1, alignItems:'center', justifyContent:"center"}}>
            <Text style={{fontSize:10, color:"#545454", marginTop:4}}>Home</Text>

          </View>
          <View style={{backgroundColor:'white', flex:1, alignItems:'center', justifyContent:"center"}}>
            <Text style={{fontSize:10, color:"#545454", marginTop:4}}>Orders</Text>

          </View>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Product')} style={{backgroundColor:'white', flex:1, alignItems:'center', justifyContent:"center"}}>
            <Text style={{fontSize:10, color:"#545454", marginTop:4}}>Products</Text>

          </TouchableOpacity>
          <View style={{backgroundColor:'white', flex:1, alignItems:'center', justifyContent:"center"}}>
            <Text style={{fontSize:10, color:"#545454", marginTop:4}}>Inbox</Text>

          </View>
          <View style={{backgroundColor:'white', flex:1, alignItems:'center', justifyContent:"center"}}>
            <Text style={{fontSize:10, color:"#545454", marginTop:4}}>Account</Text>

          </View>
        </View>
      </View>
    )
  }
}

export default HomeScreen;