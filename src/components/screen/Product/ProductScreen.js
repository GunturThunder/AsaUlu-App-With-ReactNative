import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { View, Image, Text, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// import Spinner from '../Spinner/Spinner';

import { getProducts, deleteProduct } from '../../redux/action/product';

class ProductScreen extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            headerRight: () => (
                <TouchableOpacity
                    style={{ backgroundColor: '#1C3F94', padding: 8, justifyContent: 'center', alignItems: 'center', width: 100, marginRight: 20 }}
                    onPress={() => navigation.navigate('AddProduct')}>
                    <Text style={{ color: "#fff" }}>Add Product</Text>
                </TouchableOpacity>
            ),
        }
    }


    componentDidMount() {
        this.getProducts();
    }

    async getProducts() {
        await this.props.dispatch(getProducts());
    }

    // onRefreshing = () => {
    //     this.getProducts();
    // }
    deleteProduct = (id_product) => {
        this.props.dispatch(deleteProduct(id_product))
    }
    convertToRupiah = (angka) => {
        var rupiah = ''
        var angkarev = angka.toString().split('').reverse().join('')
        for (var i = 0; i < angkarev.length; i++) if (i % 3 == 0) rupiah += angkarev.substr(i, 3) + '.'
        return 'Rp. ' + rupiah.split('', rupiah.length - 1).reverse().join('') + ',-'
    }
    renderRow = ({ item }) => {
        return (
            <View style={{ flex: 1, flexDirection: 'row', marginBottom: 10, borderBottomWidth: 1, borderBottomColor: "rgba(0,0,0,.1)", height: 110 }}>
                <Image source={{ uri: item.image, width: 100, height: 100 }} />
                <View style={{ flex: 1, flexDirection: 'column' }}>
                    <Text style={{ fontSize: 18, marginLeft: 10, marginBottom: 5 }}>{item.name}</Text>
                    <Text style={{ fontSize: 15, marginLeft: 10, marginBottom: 18 }}>Stock {item.stock}</Text>
                    <Text style={{ marginLeft: 10 }}>{this.convertToRupiah(item.price)}</Text>
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

    render() {
        const { products } = this.props;

        return (
            <View style={{ height: 560 }}>
                {/* <Spinner isLoading={books.isLoading} /> */}
                <View style={{ flex: 1, marginTop: 10, marginLeft: 10, marginBottom: 10 }}>
                    <FlatList
                        data={products}
                        renderItem={this.renderRow}
                        // refreshing={products.isLoading}
                        // onRefresh={this.onRefreshing}
                        keyExtractor={(item) => item.id_product.toString()}
                    />
                </View>
                <View style={{backgroundColor:'white',borderTopWidth:1,borderTopColor:'black'}}>
                    <View style={{ flexDirection: 'row', marginHorizontal: 40, justifyContent: 'space-between', backgroundColor: 'white', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')} style={{ justifyContent: 'center', alignItems: 'center' }}>
                            {/* <Image style={{ width: 40, height: 40, borderRadius: 10, backgroundColor: 'white' }} source={require('./home.png')} /> */}
                            <Icon style={{ fontSize: 25 }} name="ios-home" />
                            <Text style={{ fontSize: 10 }}>Home</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }} onPress={() => this.props.navigation.navigate('Cart')} >
                            {/* <Image style={{ width: 40, height: 40, borderRadius: 10, backgroundColor: 'white' }} source={require('./home.png')} /> */}
                            <Icon style={{ fontSize: 25 }} name="md-cart" />
                            <Text style={{ fontSize: 10 }}>Cart</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }} >
                            <Icon style={{ fontSize: 25,color: '#2370AA' }} name="md-pizza" />
                            <Text style={{ fontSize: 10,color: '#2370AA' }}>Food</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('ProductDetail')}>

                            <Icon style={{ fontSize: 25 }} name="md-contact" />
                            <Text style={{ fontSize: 10 }}>User</Text>
                            {/* <Image style={{ width: 40, height: 40, borderRadius: 10, backgroundColor: 'white' }} source={require('./account.png')} /> */}
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products.products
    }
}

export default connect(mapStateToProps)(ProductScreen);