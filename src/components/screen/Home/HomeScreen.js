import React, { Component } from 'react';
import { View, TextInput, Image, Button, Text, ScrollView, FlatList, AsyncStorage } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Ionicons';
import { addCart } from '../../redux/action/cart';
import { connect } from 'react-redux';
import { getProducts, searchProduct } from '../../redux/action/product';


class HomeScreen extends Component {
  state = {
    modal: [],
    name: '',
    category: '',
    isModalVisible: false,
  }
  toggleModal = (e) => {
    // console.log(e.image)
    this.setState({
      isModalVisible: !this.state.isModalVisible,
      modal: e
    });
  };
  componentDidMount() {
    this.getProducts();
  }

  async getProducts() {
    await this.props.dispatch(getProducts());
  }
  onLogout() {
    AsyncStorage.removeItem('user-id');
    AsyncStorage.removeItem('token');
    AsyncStorage.removeItem('isAuth');
    AsyncStorage.removeItem('status');
    this.props.navigation.navigate('Login');
  }
  renderRow = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => this.toggleModal(item)} style={{ flexDirection: 'row' }}>
        <Image style={{ width: 110, height: 90, marginLeft: 3, marginBottom: 3 }} source={{ uri: item.image }} />
      </TouchableOpacity>
    )
  }
  sortProductHadle(event) {
    // console.log(event)
    this.setState({
      category: event
    })
    this.props.dispatch(searchProduct(this.state.name, this.state.category));
  }

  searchProductHadle = async (event) => {
    // console.log
    await this.setState({
      name: event
    })
    // console.log(this.props)
    this.props.dispatch(searchProduct(this.state.name, this.state.category));
  }
  onAddChart = (product) => {
    console.log("add to chat")
    product.qty = 1
    this.props.dispatch(addCart(product))
    this.setState({
      isModalVisible: !this.state.isModalVisible
    })
    alert('Product Added In Cart')
  }
  render() {
    const { products } = this.props;
    console.disableYellowBox = true;
    // console.log(products)
    let data = ['food', 'drink']
    return (
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        {/* <ScrollView> */}
        <View style={{ height: 575, backgroundColor: 'white', marginHorizontal: 10 }}>

          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10, color: '#707274' }}>Hi Admin</Text>
            <TouchableOpacity onPress={this.onLogout.bind(this)} style={{ marginLeft: 20 }}>
              <Text style={{ fontSize: 15, fontWeight: 'bold', marginTop: 10, color: '#707274', marginLeft: 140 }}>
                <Image style={{ width: 20, height: 20 }} source={require('./Logout.png')} /> Logout
                </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TextInput onChangeText={this.searchProductHadle} value={`${this.state.name}`} placeholder="Search.." style={{ color: '#53575B', borderRadius: 10, borderWidth: 1, borderColor: '#D7DFE8', paddingLeft: 50, marginTop: 10 }} />
            <Image style={{ marginTop: 18, position: 'absolute', width: 40, height: 40, justifyContent: 'center', marginLeft: 10 }} source={require('./search.png')} />
          </View>
          <View style={{ flexDirection: 'row', paddingVertical: 10 }}>
            <TouchableOpacity onPress={() => this.sortProductHadle('food')} style={{ paddingVertical: 6, backgroundColor: '#D0D3DA', width: 70, justifyContent: 'center', alignItems: 'center', borderRadius: 12 }} >
              <Text style={{ color: '#96B6E2' }}>Food</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.sortProductHadle('drink')} style={{ paddingVertical: 6, backgroundColor: '#D0D3DA', width: 70, justifyContent: 'center', alignItems: 'center', borderRadius: 12, marginLeft: 10 }} >
              <Text style={{ color: '#96B6E2' }}>Drink</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.sortProductHadle('')} style={{ paddingVertical: 6, backgroundColor: '#D0D3DA', width: 70, justifyContent: 'center', alignItems: 'center', borderRadius: 12, marginLeft: 10 }} >
              <Text style={{ color: '#96B6E2' }}>All</Text>
            </TouchableOpacity>
          </View>
          <ScrollView>
            <View>
              <View style={{ marginBottom: 10, marginTop: 10 }}>
                <Text style={{ fontWeight: 'bold', color: '#707274' }}>Product Popular</Text>
              </View>
              <View>
                <View style={{ flexDirection: 'row' }}>
                  <Image style={{ width: 120, height: 100 }} source={require('./blackF.png')} />
                  <View>
                    <Text style={{ marginLeft: 25, marginTop: 10, fontWeight: 'bold', color: '#707274', fontSize: 15 }}>Black Forest</Text>
                    <View>
                      <Text style={{ marginLeft: 25, color: '#707274', marginTop: 5 }}>Ch  ocolate, Cake, Food </Text>
                    </View>
                    <View>
                      <Text style={{ fontWeight: 'bold', marginLeft: 25, color: '#707274', marginTop: 15, fontSize: 20, color: '#FF85BE' }}>Rp. 30.000-,</Text>
                    </View>
                  </View>
                </View>
                <View>
                  <View>
                    <Text style={{ fontWeight: 'bold', color: '#707274', marginTop: 10 }}>Products</Text>
                  </View>
                  <View style={{ marginTop: 10, flexWrap: 'wrap' }}>
                    <View style={{ flexDirection: 'row', marginBottom: 3, flexWrap: 'wrap' }}>
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
        <View style={{flex:1,borderTopWidth:1,borderTopColor:'black'}}>
          <View style={{flexDirection: 'row', marginHorizontal: 40, justifyContent: 'space-between', backgroundColor: 'white', alignItems: 'center' }}>
            <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }}>
              {/* <Image style={{ width: 40, height: 40, borderRadius: 10, backgroundColor: 'white' }} source={require('./home.png')} /> */}
              <Icon style={{ fontSize: 25, color: '#2370AA' }} name="ios-home" />
              <Text style={{ fontSize: 10, color: '#2370AA' }}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }} onPress={() => this.props.navigation.navigate('Cart')}>
              {/* <Image style={{ width: 40, height: 40, borderRadius: 10, backgroundColor: 'white' }} source={require('./home.png')} /> */}
              <Icon style={{ fontSize: 25 }} name="md-cart" />
              <Text style={{ fontSize: 10 }}>Cart</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }} onPress={() => this.props.navigation.navigate('Product')}>
              <Icon style={{ fontSize: 25 }} name="md-pizza" />
              <Text style={{ fontSize: 10 }}>Food</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('ProductDetail')}>

              <Icon style={{ fontSize: 25 }} name="md-contact" />
              <Text style={{ fontSize: 10 }}>User</Text>
              {/* <Image style={{ width: 40, height: 40, borderRadius: 10, backgroundColor: 'white' }} source={require('./account.png')} /> */}
            </TouchableOpacity>
          </View>
        </View>
        <Modal isVisible={this.state.isModalVisible}>
          <View style={{ height: 400, backgroundColor: 'white' }}>
            <Button title="Close" onPress={this.toggleModal} />
            <Image style={{ height: 220, marginBottom: 10 }} source={{ uri: this.state.modal.image }} />
            <View style={{ flex: 1, marginHorizontal: 10 }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomColor: '#818181', borderBottomWidth: 1 }}>
                <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#434343' }}>{this.state.modal.name}</Text>
                <Text style={{ fontSize: 17, color: '#434343' }}>Rp.{this.state.modal.price}</Text>
              </View>
              <View style={{ justifyContent: 'flex-end', flex: 1, marginBottom: 20 }}>
                {/* <TouchableOpacity onClick={()=>console.log('pencet')} style={{ width: 100, borderRadius: 10, backgroundColor: '#2196F3', justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ padding: 10, color: 'white' }}>CheckOut</Text>
                </TouchableOpacity> */}
                <Button title="CheckOut" onPress={() => this.onAddChart(this.state.modal)} />
                {/* <Button title="CheckOut" onClick={()=>console.log("pencet")} /> */}
              </View>
            </View>
          </View>
        </Modal>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products.products
  }
}

export default connect(mapStateToProps)(HomeScreen);