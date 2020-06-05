import React, { Component } from "react";
import axios from "axios"


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
    const { currentProduct } = this.state;

    return (
      <div>
        <div class="row">
    <div class="col"><img class=" img-fluid" src={currentProduct.image_url} alt="" /></div>
    <div class="col"><img class=" img-fluid" src={currentProduct.image_ingredients_url} alt="" /></div>
</div>
        <div className="MealGroup">
          <div className="MealGroup__header">
            <span className="MealGroup__header--type">{currentProduct.product_name}</span>
            <span className="MealGroup__header--macros">
              <img alt="🍞 (/100g" title="Carbs" />
              <img alt="🧈 (/100g)" title="Fat" />
              <img alt="🥩 (/100g)" title="Protein" />
            </span>
            <span className="MealGroup__header--caltotal">
              {currentProduct.energy_kcal_100g} kcal/100g
            </span>
          </div>
          <div className="MealItem">
  		  <span className="MealItem__food">
          <span className="MealItem__food--info">
            <span className="MealItem__food--name">{currentProduct.categories}</span>
            <span className="MealItem__food--quantity">
             {currentProduct.serving_size}
            </span>
          </span>
        </span>
        <span className="MealItem__macros">
          <span className="MealItem__macros--carbs">{currentProduct.sugars_100g}</span>
          <span className="MealItem__macros--fat">{currentProduct.proteins_100g}</span>
          <span className="MealItem__macros--protein">{currentProduct.proteins_100g}</span>
        </span>
        <span className="MealItem__calories"></span>
        <div className="clearfix"></div>
      </div>
      <div className="MealItem">
  		  <span className="MealItem__food">
          <span className="MealItem__food--info">
            <span className="MealItem__food--name"></span>
            <span className="MealItem__food--quantity">
            </span>
          </span>
        </span>
        <span className="MealItem__macros">
          <span className="MealItem__macros--carbs">{currentProduct.glycemic_index_100g}</span>
          <span className="MealItem__macros--fat">{currentProduct.ingredients_text}</span>
          <span className="MealItem__macros--protein">{currentProduct.allergens}</span>
        </span>
        <span className="MealItem__calories"></span>
        <div className="clearfix"></div>
      </div>
</div>
        </div>
    )
  }
}
