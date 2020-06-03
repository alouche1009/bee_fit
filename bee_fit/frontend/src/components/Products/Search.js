import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios"
import { getProducts } from "../../actions/productsActions"

const findProducts = product_name => {
  return axios.get(`http://127.0.0.1:8000/api/products/?search=${product_name}`)
};

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.onChangesearchProduct = this.onChangesearchProduct.bind(this);
    this.retrieveProducts = this.retrieveProducts.bind(this);
    this.searchProduct = this.searchProduct.bind(this);

    this.state = {
      products: [],
      searchProduct: ""
    };
  }

  componentDidMount() {
    this.retrieveProducts();
  }

  onChangesearchProduct(e) {
    const searchProduct = e.target.value;

    this.setState({
      searchProduct: searchProduct
    });
  }

  retrieveProducts() {
    getProducts()
      .then(response => {
        this.setState({
          products: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  searchProduct() {
    findProducts(this.state.searchProduct)
      .then(response => {
        this.setState({
          products: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { searchProduct, products } = this.state;

    return (
      <div className="list row">
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
        <div class="container">
          <h3 class="text-center">Vos résultats</h3>
          <div class="row">
            {products.map((product) => (
              <div class="col-xs-12 col-sm-6 col-md-4" key={product.id}>
                <div class="card-body text-center">
                  <p><img class=" img-fluid" src={product.image_small_url} alt="" /></p>
                  <h4 class="card-title">{product.product_name}</h4>
                  <Link to={"/products/" + product.id}>Détails </Link>
                </div>
              </div>
            )
            )
            }
          </div>
        </div>
      </div>
    )
  }
}