import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { getProducts } from "../../actions/productsActions";

const findProducts = (product_name) => {
  return axios.get(
    `http://127.0.0.1:8000/products/?search=${product_name}`
  );
};

export default class SearchItem extends Component {
  constructor(props) {
    super(props);
    this.onChangesearchProduct = this.onChangesearchProduct.bind(this);
    this.retrieveProducts = this.retrieveProducts.bind(this);
    this.searchProduct = this.searchProduct.bind(this);

    this.state = {
      products: [],
      searchProduct: "",
    };
  }

  componentDidMount() {
    this.retrieveProducts();
  }

  onChangesearchProduct(e) {
    const searchProduct = e.target.value;

    this.setState({
      searchProduct: searchProduct,
    });
  }

  retrieveProducts() {
    getProducts()
      .then((response) => {
        this.setState({
          products: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  searchProduct() {
    findProducts(this.state.searchProduct)
      .then((response) => {
        this.setState({
          products: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { searchProduct, products } = this.state;

    return (
      <div id="pageproduits">
        <div className="list row justify-content-md-center p-top-perso">
          <div className="col-md-8">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Recherche de produits"
                value={searchProduct}
                onChange={this.onChangesearchProduct}
              />
              <div className="input-group-append">
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={this.searchProduct}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
          <div class="container p-top-perso">
            <h3 class="text-center">
              <i class="fas fa-search"></i> Vos résultats
            </h3>
            <div class="row  p-top-perso">
              {products.map((product) => (
                              <tr key={product.id}>
                              <td className="cellNumbers"> <img
                        src={product.image_small_url}
                      />{currentProduct.fat_100g} g</td>
                              <td className="cellNumbers">{currentProduct.proteins_100g} g</td>
                              <td className="cellNumbers">{currentProduct.sugars_100g} g</td>
                              <td className="cellNumbers">{currentProduct.energy_kcal_100g} kcal</td>
                            </tr>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}