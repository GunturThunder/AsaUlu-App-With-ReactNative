import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { addQty, reduceQty, deleteFromCart, removeCart } from '../../redux/action/cart';
import { postOrder } from '../../redux/action/checkout';
import { connect } from 'react-redux';

class Cart extends Component {
    addQuantity = (cart) => {
        const initialTotal = this.props.total + cart.price
        cart.total = initialTotal
        this.props.dispatch(addQty(cart))
        // console.log('tambah')
    }
    reduceQuantity = (cart) => {
        // console.log(qty)
        if (cart.qty > 1) {
            const initialTotal = this.props.total - cart.price
            cart.total = initialTotal
            console.log(cart.total)
            this.props.dispatch(reduceQty(cart))
        }
    }
    deleteFromCart = (cart) => {
        const initialTotal = this.props.total - (cart.price * cart.qty)
        cart.total = initialTotal
        // console.log("cart.total = " + cart.total, "initialTotal = " + initialTotal)
        this.props.dispatch(deleteFromCart(cart));
        // console.log(id_product)
    }
    async onCheckout(cart) {
        console.log("checkout")
        const data = {
            product: this.props.cart
        };
        await this.props.dispatch(postOrder(data));
        await this.props.dispatch(removeCart(cart))
        this.props.onHide();
    }
    render() {
        const { cart, total, totalCart } = this.props
        const Check = () => {
            if (total <= 0) {
                return (
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={require('../../../img/pic.png')} />
                        <Text style={{ fontWeight: 'bold' }}>Your Cart Is Empty</Text>
                    </View>
                )
            }
            else {
                return (
                    <View></View>
                )
            }
        }
        // console.log("total=",total)
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={{ height: 450}}>
                    <ScrollView>
                        <Check />
                        {cart.map((cart) =>
                            <View style={{ height: 142, marginHorizontal: 20, backgroundColor: 'white', justifyContent: 'center', borderBottomWidth: 1, borderBottomColor: '#CECECE' }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image style={{ height: 94, width: 95, borderRadius: 5 }} source={{ uri: cart.image }} />
                                    {/* <Image style={{ width: 110, height: 90, marginLeft: 3, marginBottom: 3 }} source={{ uri: item.image }} /> */}
                                    <View style={{ marginLeft: 10, flex: 1, justifyContent: 'space-between' }}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <Text style={{ fontSize: 17 }}>{cart.name}</Text>
                                            <TouchableOpacity onPress={() => this.deleteFromCart(cart)}>
                                                <Icon style={{ fontSize: 20 }} name="md-close" />
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <View style={{ flexDirection: 'row' }}>
                                                <TouchableOpacity onPress={() => this.reduceQuantity(cart)} style={{ height: 25, width: 25, borderRadius: 25 / 2, borderColor: '#3A95D9', borderWidth: 1, alignItems: 'center', justifyContent: 'center' }}>
                                                    <Icon style={{ fontSize: 18, color: '#3A95D9' }} name="ios-remove" />
                                                </TouchableOpacity>
                                                <View style={{ width: 50, justifyContent: 'center', alignItems: 'center' }}>
                                                    <Text>{cart.qty}</Text>
                                                </View>
                                                <TouchableOpacity onPress={() => this.addQuantity(cart)} style={{ height: 25, width: 25, borderRadius: 25 / 2, borderColor: '#3A95D9', borderWidth: 1, alignItems: 'center', justifyContent: 'center' }}>
                                                    <Icon style={{ fontSize: 18, color: '#3A95D9' }} name="ios-add" />
                                                </TouchableOpacity>
                                            </View>
                                            <View style={{ backgroundColor: '#E7E9ED', justifyContent: 'center', alignItems: 'center', borderRadius: 15 }}>
                                                <Text style={{ padding: 5, fontSize: 17, color: '#727272' }}>Rp.{cart.price}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        )}
                    </ScrollView>
                </View>
                <View style={{ flex: 1, borderBottomColor: 'black', borderBottomWidth: 1 }}>
                    <View style={{ marginHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 20, color: '#606060' }}>Subtotal </Text>
                            <Text style={{ fontSize: 20, color: '#949494' }}>( {totalCart} items )</Text>
                        </View>
                        <Text style={{ fontSize: 17, color: '#606060' }}>Rp. {total}</Text>
                    </View>
                    <TouchableOpacity onPress={() => this.onCheckout(cart)} style={{ height: 30, backgroundColor: '#3A95D9', marginHorizontal: 100, borderRadius: 28, marginTop: 2, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: 'white', fontSize: 20 }}>Order</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginHorizontal: 40, justifyContent: 'space-between', backgroundColor: 'white', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')} style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Icon style={{ fontSize: 25 }} name="ios-home" />
                        <Text style={{ fontSize: 10 }}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }} >
                        <Icon style={{ fontSize: 25, color: '#2370AA' }} name="md-cart" />
                        <Text style={{ fontSize: 10, color: '#2370AA' }}>Cart</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }} onPress={() => this.props.navigation.navigate('Product')}>
                        <Icon style={{ fontSize: 25 }} name="md-pizza" />
                        <Text style={{ fontSize: 10 }}>Food</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('ProductDetail')}>

                        <Icon style={{ fontSize: 25 }} name="md-contact" />
                        <Text style={{ fontSize: 10 }}>User</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const mapStateToProps = (state) => {
    // console.log(state.cart.cart)
    return {
        cart: state.cart.cart,
        total: state.cart.total,
        totalCart: state.cart.totalPurchase
    }
}
export default connect(mapStateToProps)(Cart);