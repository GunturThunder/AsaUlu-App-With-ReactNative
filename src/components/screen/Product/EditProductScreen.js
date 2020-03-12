import React, { Component } from 'react';
import { connect } from 'react-redux';
import {View, TextInput,Text} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label,Button } from 'native-base';
import { updateProduct } from '../../redux/action/product';

class EditProductScreen extends Component{
    state = {
        id_category: 0,
        name: "",
        stock: "",
        price: "",
        description: "",
    };

    componentDidMount(){
        const product = this.props.navigation.getParam("product");

        this.setState({
            id_category: product.id_category,
            name: product.name,
            stock: product.stock,
            // writer: product.writer,
            price: product.price,
            description: product.description
        });
    }
    onSubmit = async() => {
        console.log(this.state)
        const product = this.props.navigation.getParam("product");
        await this.props.dispatch(updateProduct(product.id_product, this.state));

        this.props.navigation.navigate('Product')
        
    }
    render(){
        return(
            <Container>
                <Form>
                    <Item floatingLabel>
                    <Label>Category</Label>
                    <Input onChangeText={(text) => this.setState({id_category: text })} />
                    </Item>
                    <Item floatingLabel>
                    <Label>Name</Label>
                    <Input onChangeText={(text) => this.setState({ name: text })} value={`${this.state.name}`}/>
                    </Item>
                    <Item floatingLabel>
                    <Label>Stock</Label>
                    <Input onChangeText={(text) => this.setState({ stock: text })} value={`${this.state.stock}`} />
                    </Item>
                    <Item floatingLabel>
                    <Label>Price</Label>
                    <Input onChangeText={(text) => this.setState({ price: text })} value={`${this.state.price}`}/>
                    </Item>
                    <Item floatingLabel>
                    <Label>Description</Label>
                    <Input onChangeText={(text) => this.setState({ description: text })} value={`${this.state.description}`}/>
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


export default connect(mapStateToProps)(EditProductScreen) ;