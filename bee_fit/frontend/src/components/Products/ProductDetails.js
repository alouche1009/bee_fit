import React, { Component } from "react";
import axios from "axios";
import { Table, Row, Col } from 'react-bootstrap';

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
    const { currentProduct } = this.state;

    return (
      <div className="container fontFoodDetail">
        <Row className="p-top-perso align-items-center">
          <Col md={{ span: 2 }}><img class=" img-fluid prodImage img-thumbnail" src={currentProduct.image_url} alt="" /></Col>
          {currentProduct.nutriscore_grade === 'a' ?
          <Col md={{ span: 2 }}><img class=" img-fluid prodImage img-thumbnail" src='../static/frontend/images/A.png' alt="" /></Col>
          :  <Col></Col>
           }
          {currentProduct.nutriscore_grade === 'b' ?
          <Col md={{ span: 2 }}><img class=" img-fluid prodImage img-thumbnail" src='../static/frontend/images/B.png' alt="" /></Col>
          :  <Col></Col>
          }
                    {currentProduct.nutriscore_grade === 'c' ?
          <Col md={{ span: 2 }}><img class=" img-fluid prodImage img-thumbnail" src='../static/frontend/images/C.png' alt="" /></Col>
          :  <Col></Col>
          }
          {currentProduct.nutriscore_grade === 'd' ?
          <Col md={{ span: 2 }}><img class=" img-fluid prodImage img-thumbnail" src='../static/frontend/images/D.png' alt="" /></Col>
          :  <Col></Col>
          }
          {currentProduct.nutriscore_grade === 'e' ?
          <Col md={{ span: 2 }}><img class=" img-fluid prodImage img-thumbnail" src='../static/frontend/images/E.png' alt="" /></Col>
          :  <Col></Col>
          }
          <Col className="text-center" md={{ span: 6 }}>
            <h2>{currentProduct.product_name}</h2>
            <p className="p-top-perso">{currentProduct.categories}</p>
          </Col>
        </Row>
        <Table striped bordered hover responsive size="sm" className="tableResp cellTable">
          <thead>
            <tr>
              <th>🧈 Lipides/100g</th>
              <th>🥩 Protéines/100g</th>
              <th>🍞 Glucides/100g</th>
              <th>📈 kcal/100g</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="cellNumbers">{currentProduct.fat_100g} g</td>
              <td className="cellNumbers">{currentProduct.proteins_100g} g</td>
              <td className="cellNumbers">{currentProduct.sugars_100g} g</td>
              <td className="cellNumbers">{currentProduct.energy_kcal_100g} kcal</td>
            </tr>
            <tr>
              <td>Portion: {currentProduct.serving_size}</td>
              <td>Allergènes: {currentProduct.allergens}</td>
              <td>Ingrédients: {currentProduct.ingredients_text}</td>
              <td>Index glycémique: {currentProduct.glycemic_index_100g}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    )
  }
}