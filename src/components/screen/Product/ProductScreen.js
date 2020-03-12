import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { View, Image, Text, FlatList, TouchableOpacity } from 'react-native';

// import Spinner from '../Spinner/Spinner';

import { getProducts, deleteProduct } from '../../redux/action/product';

class ProductScreen extends Component{

    static navigationOptions = ({ navigation }) => {
        return{
            headerRight: () => (
                <TouchableOpacity 
                        style={{ backgroundColor: '#1C3F94', padding: 8, justifyContent: 'center', alignItems: 'center', width: 100, marginRight: 20}}
                        onPress={() => navigation.navigate('AddProduct')}>
                            <Text style={{ color: "#fff" }}>Add Product</Text>
                </TouchableOpacity>
            ),
        }
    }

  
    componentDidMount(){
        this.getProducts();
    }

    async getProducts(){
        await this.props.dispatch(getProducts());
    }

    // onRefreshing = () => {
    //     this.getProducts();
    // }
    deleteProduct = (id_product) =>{
        this.props.dispatch(deleteProduct(id_product))
    }
    renderRow = ({item}) => {
        return(
            <View style={{ flex: 1, flexDirection: 'row', marginBottom: 10, borderBottomWidth:1, borderBottomColor: "rgba(0,0,0,.1)", height: 110 }}>
                <Image source={{uri: item.image , width: 100, height: 100}} />
                <View style={{ flex: 1, flexDirection: 'column' }}>
                    <Text style={{ fontSize: 18, marginLeft: 10, marginBottom: 5 }}>{item.name}</Text>
                    <Text style={{ fontSize: 15, marginLeft: 10, marginBottom: 18 }}>Stock {item.stock}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style={{ marginLeft: 10 }} onPress={() => this.props.navigation.navigate('EditProduct', {
                            product: item
                        })}>
                            <Text style={{ fontSize: 17, color: "orange" }}>Edit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginLeft: 10 }} onPress={() => this.deleteProduct(item.id_product)}>
                            <Text style={{ fontSize: 17, color: "red" }}>Delete</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }

    render(){
        const {products} = this.props;

        return(
                <View style={{flex:1, flexDirection:'column'}}>
                    {/* <Spinner isLoading={books.isLoading} /> */}
                    <View style={{flex:1, marginTop: 10, marginLeft: 10, marginBottom: 10 }}>
                        <FlatList 
                            data={products}
                            renderItem={this.renderRow}
                            // refreshing={products.isLoading}
                            // onRefresh={this.onRefreshing}
                            keyExtractor={(item) => item.id_product.toString()}
                        />
                    </View>
                    <View style={{flexDirection:'row', marginHorizontal:10,justifyContent:'center'}}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                            <Image style={{width:40,height:40,backgroundColor:'#ABAFBC',borderRadius:10}} source={require('./home.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity  style={{marginLeft:40}}>
                            <Image style={{width:40,height:40,backgroundColor:'#ABAFBC',borderRadius:10}} source={require('./product.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity  style={{marginLeft:40}}>
                            <Image  style={{width:40,height:40,backgroundColor:'#ABAFBC',borderRadius:10}} source={require('./account.png')} />
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

export default connect(mapStateToProps)(ProductScreen);