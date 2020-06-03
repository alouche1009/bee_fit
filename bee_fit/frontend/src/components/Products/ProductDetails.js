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
        categories: [],
        ingredients_text: [],
        allergens: [],
        nutriscore_score: "",
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
        <div className="edit-form">
          <h4>Tutorial</h4>
          <div className="form-group">{currentProduct.product_name}
          </div>
          {currentProduct.categories ? (
            <div className="form-group">Catégorie: {currentProduct.categories.join(', ')}
            </div>
          ) : (
              <div className="form-group">Catégorie: Non renseignée
              </div>
            )}
          {currentProduct.ingredients_text ? (
            <div className="form-group">Ingrédients: {currentProduct.ingredients_text.join(', ')}
            </div>
          ) : (
              <div className="form-group">Ingrédients: Non renseignés
              </div>
            )}
          {currentProduct.allergens ? (
            <div className="form-group">Allergènes: {currentProduct.allergens.join(', ')}
            </div>
          ) : (
              <div className="form-group">Allergènes: Non renseignés
              </div>
            )}
          {currentProduct.nutriscore_score ? (
            <div className="form-group">Nutriscore: {currentProduct.nutriscore_score}
            </div>
          ) : (
              <div className="form-group">Nutriscore: Non renseigné
              </div>
            )}
          <div> <img class=" img-fluid" src={currentProduct.image_nutrition_url} alt="" />
          </div>

          <div> <img class=" img-fluid" src={currentProduct.image_url} alt="" />
          </div>
          <div ><img class=" img-fluid" src={currentProduct.image_ingredients_url} alt="" />
          </div>
          {currentProduct.energy_kcal_100g ? (
            <div className="form-group">Calories (kcal/100g): {currentProduct.energy_kcal_100g}
            </div>
          ) : (
              <div className="form-group">Calories: Non renseignées
              </div>
            )}
          {currentProduct.fat_100g ? (
            <div className="form-group">Lipides(/100g): {currentProduct.fat_100g}
            </div>
          ) : (
              <div className="form-group">Lipides: Non renseignés
              </div>
            )}
          {currentProduct.sugars_100g ? (
            <div className="form-group">Glucides(/100g): {currentProduct.sugars_100g}
            </div>
          ) : (
              <div className="form-group">Glucides: Non renseignés
              </div>
            )}
          {currentProduct.proteins_100g ? (
            <div className="form-group">Protéines(/100g): {currentProduct.proteins_100g}
            </div>
          ) : (
              <div className="form-group">Protéines: Non renseignées
              </div>
            )}
          {currentProduct.glycemic_index_100g ? (
            <div className="form-group">Index glycémique: {currentProduct.glycemic_index_100g}
            </div>
          ) : (
              <div className="form-group">Index glycémique: Non renseigné
              </div>
            )}
        </div>
      </div>
    );
  }
}