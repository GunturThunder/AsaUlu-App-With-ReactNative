import React, { Component } from 'react';
import { View, TextInput, Image, Button,Text,ScrollView,FlatList, AsyncStorage } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { connect } from 'react-redux';
import { getProducts } from '../../redux/action/product';


class HomeScreen extends Component{
  state={
    name:''
  }
  componentDidMount(){
        this.getProducts();
    }

    async getProducts(){
        await this.props.dispatch(getProducts());
    }
    onLogout(){
      AsyncStorage.removeItem('user-id');
      AsyncStorage.removeItem('token');
      AsyncStorage.removeItem('isAuth');
      AsyncStorage.removeItem('status');
      this.props.navigation.navigate('Login');
  }
    renderRow = ({item}) => {
        return(
          <TouchableOpacity onPress={()=>console.log(item.id_product)} style={{flexDirection:'row'}}>
            <Image style={{width:110,height:90,marginLeft:3,marginBottom:3}} source={{uri: item.image}} />
          </TouchableOpacity>
        )
    }
    searchProduct = (name) =>{
      // console.log(this.state)
      this.setState({
        name,
      })
      this.props.dispatch(getProducts(name));
    }
  render(){
    const {products} = this.props;
    console.log(products)
    return(
      <View style={{backgroundColor:'white',flex:1}}>
        {/* <ScrollView> */}
        <View style={{flex:1, backgroundColor:'white', marginHorizontal:10}}>

          <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:20, fontWeight:'bold', marginTop:10,color:'#707274'}}>Hi Admin</Text>
            <TouchableOpacity onPress={this.onLogout.bind(this)} style={{marginLeft:20}}><Text style={{fontSize:20, fontWeight:'bold', marginTop:10,color:'#707274'}}>LogOut</Text></TouchableOpacity>
          </View>
          <View>
            <TextInput onChangeText={this.searchProduct} value={`${this.state.name}`} placeholder="Search.." style={{color:'#D7DFE8', borderRadius:10, borderWidth:1,borderColor:'#D7DFE8', paddingLeft:50, marginTop:10}} />
            <Image style={{marginTop:18,position:'absolute', width:40, height:40, justifyContent:'center', marginLeft:10}} source={require('./search.png')} />
          </View>
          <View style={{flexDirection:'row',paddingVertical:10}}>
          <TouchableOpacity style={{paddingVertical:6,backgroundColor:'#D0D3DA', width:70, justifyContent:'center', alignItems:'center', borderRadius:12}} >
            <Text style={{color:'#96B6E2'}}>Food</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{paddingVertical:6,backgroundColor:'#D0D3DA', width:70, justifyContent:'center', alignItems:'center', borderRadius:12,marginLeft:10}} >
            <Text style={{color:'#96B6E2'}}>Drink</Text>
            </TouchableOpacity>
          </View>
          <ScrollView>
          <View>
            <View style={{marginBottom:10, marginTop:10}}>
              <Text style={{fontWeight:'bold', color:'#707274'}}>Product Poular</Text>
            </View>
            <View>
              <View style={{flexDirection:'row'}}>
                <Image style={{width:120,height:100}} source={require('./blackF.png')}/>
                <View>
                  <Text style={{marginLeft:25, marginTop:10, fontWeight:'bold', color:'#707274', fontSize:15}}>Black Forest</Text>
                    <View>
                      <Text style={{marginLeft:25,color:'#707274',marginTop:5}}>Chocolate, Cake, Food </Text>
                    </View>
                    <View>
                      <Text style={{fontWeight:'bold',marginLeft:25,color:'#707274',marginTop:15, fontSize:20, color:'#FF85BE'}}>Rp. 30.000-,</Text>
                    </View>
                </View>
                </View>
                <View>
                  <View>
                  <Text style={{fontWeight:'bold',color:'#707274', marginTop:10}}>Recent Product</Text>
                  </View>
                  <View style={{marginTop:10, flexWrap:'wrap'}}>
                    <View style={{flexDirection:'row',marginBottom:3,flexWrap:'wrap'}}>
                        <FlatList 
                            data={products}
                            renderItem={this.renderRow}
                            numColumns={3}
                            keyExtractor={(item) => item.id_product.toString()}
                        />

                    </View>
                  </View>
                  
                </View>
            </View>
          </View>
          </ScrollView>


        </View>
        {/* </ScrollView> */}
        <View style={{flexDirection:'row', marginHorizontal:10,justifyContent:'center',backgroundColor:'white'}}>
          <TouchableOpacity>
            <Image style={{width:40,height:40,borderRadius:10, backgroundColor:'white'}} source={require('./home.png')} />
          </TouchableOpacity>
          <TouchableOpacity  style={{marginLeft:40}} onPress={() => this.props.navigation.navigate('Product')}>
            <Image style={{width:40,height:40,borderRadius:10,backgroundColor:'white'}} source={require('./product.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('ProductDetail')}  style={{marginLeft:40}}>
            <Image  style={{width:40,height:40,borderRadius:10,backgroundColor:'white'}} source={require('./account.png')} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    products: state.products.products
  }
}

export default connect(mapStateToProps)(HomeScreen);