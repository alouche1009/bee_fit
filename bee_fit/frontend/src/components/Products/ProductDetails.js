import React, {Component} from "react";
import axios from "axios"
import {Table, Row, Col} from 'react-bootstrap'



const productDetails = id => {
  return axios.get(`http://127.0.0.1:8000/products/${id}`)
};
export default class Product extends Component {
                constructor(props) {
                super(props);
    this.getProduct = this.getProduct.bind(this);

    this.state = {
                currentProduct: {
                id: null,
        product_name: "",
        categories: "",
        ingredients_text: "",
        allergens: "",
        nutriscore_grade: "",
        image_url: "",
        image_ingredients_url: "",
        energy_kcal_100g: "",
        fat_100g: "",
        sugars_100g: "",
        proteins_100g: "",
        glycemic_index_100g: "",
        image_nutrition_url: ""
      },
    };
  }

  componentDidMount() {
                this.getProduct(this.props.match.params.id);
  }

  getProduct(id) {
                productDetails(id)
                  .then(response => {
                    this.setState({
                      currentProduct: response.data
                    });
                    console.log(response.data);
                  })
                  .catch(e => {
                    console.log(e);
                  });
  }

  render() {
    const {currentProduct} = this.state;

    return (
      <div>
                <Row>
                  <Col md={{ span: 3, offset: 3 }}><img class=" img-fluid" src={currentProduct.image_url} alt="" /></Col>
                  <Col><img class=" img-fluid" src={currentProduct.image_ingredients_url} alt="" /></Col>
                </Row>


                <Table striped bordered hover responsive size="sm">
                  <thead>
                    <tr>
                      <th>{currentProduct.product_name}</th>
                      <th>🧈 ( /100g) </th>
                      <th>🥩 ( /100g) </th>
                      <th>🍞 ( /100g) </th>
                      <th>📈 ( /100g)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        {currentProduct.categories}
                      </td>
                      <td>
                        {currentProduct.fat_100g} g</td>
                      <td>
                        {currentProduct.proteins_100g} g</td>
                      <td>
                        {currentProduct.sugars_100g} g</td>
                      <td>
                        {currentProduct.energy_kcal_100g} kcal</td>
                    </tr>
                    <tr>
                      <td>
                        {currentProduct.serving_size}
                      </td>
                      <td>
                        {currentProduct.allergens}
                      </td>
                      <td>
                        {currentProduct.ingredients_text}                    </td>
                      <td>
                        {currentProduct.nutriscore_grade}                    </td>
                      <td>
                        {currentProduct.glycemic_index_100g}                    </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
    )
  }
}