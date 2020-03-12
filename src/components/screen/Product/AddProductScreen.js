import React, { Component } from 'react';
import { connect } from 'react-redux';
import {View, TextInput,Text} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label,Button } from 'native-base';
import { createProduct } from '../../redux/action/product';

class AddProductScreen extends Component{
    state = {
        id_category: "",
        name: "",
        stock: "",
        price: "",
        description: "",
    };
    onSubmit = async() => {
        await this.props.dispatch(createProduct(this.state));
            this.props.navigation.navigate('Product')
        
    }
    render(){
        return(
            <Container>
                <Form>
                    <Item floatingLabel>
                    <Label>Category</Label>
                    <Input onChangeText={(text) => this.setState({  id_category: text })} />
                    </Item>
                    <Item floatingLabel>
                    <Label>Name</Label>
                    <Input onChangeText={(text) => this.setState({ name: text })} />
                    </Item>
                    <Item floatingLabel>
                    <Label>Stock</Label>
                    <Input onChangeText={(text) => this.setState({ stock: text })} />
                    </Item>
                    <Item floatingLabel>
                    <Label>Price</Label>
                    <Input onChangeText={(text) => this.setState({ price: text })}/>
                    </Item>
                    <Item floatingLabel last>
                    <Label>Description</Label>
                    <Input onChangeText={(text) => this.setState({ description: text })}/>
                    </Item>
                </Form>
                <Button primary style={{ marginHorizontal:20,marginVertical:10,justifyContent:'center',alignItems:'center' }} onPress={this.onSubmit}>
                        <Text style={{color:'white',fontWeight:'bold'}}>Save</Text>
                </Button>
            </Container>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        products: state.products.products
    }
}

export default connect(mapStateToProps)(AddProductScreen);