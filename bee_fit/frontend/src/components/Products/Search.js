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
    this.refreshList = this.refreshList.bind(this);
    this.setActiveProduct = this.searchProduct.bind(this);

    this.state = {
      products: [],
      currentProduct: null,
      currentIndex: -1,
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

  refreshList() {
    this.retrieveProducts();
    this.setState({
      currentProduct: null,
      currentIndex: -1
    });
  }

  setActiveProduct(product, index) {
    this.setState({
      currentProduct: product,
      currentIndex: index
    });
  }


  render() {
    const { searchProduct, products, currentProduct, currentIndex } = this.state;

    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by title"
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
        <div className="col-md-6">
          <h4>Aliments</h4>

          <ul className="list-group">
            {products &&
              products.map((product, index) => (
                <li className={
                  "list-group-item " +
                  (index === currentIndex ? "active" : "")
                }
                  onClick={() => this.setActiveProduct(product, index)}
                  key={index}
                >
                  {product.product_name}
                </li>
              ))}
          </ul>
        </div>

        <div className="col-md-6">
          {currentProduct ? (
            <div>
              <h4>Products</h4>
              <div>
                <label>
                  <strong>Nom:</strong>
                </label>{" "}
                {currentProduct.product_name}
              </div>
              <div>
                <label>
                  <strong>Catégorie:</strong>
                </label>{" "}
                {currentProduct.categories}
              </div>
              <div>
                <label>
                  <strong>Quantité:</strong>
                </label>{" "}
                {currentProduct.quantity}
              </div>

              <Link
                to={"/products/" + currentProduct.id}
                className="badge badge-warning"
              >
                Détails
              </Link>
            </div>
          ) : (
              <div>
                <br />
              </div>
            )}
        </div>
      </div>
    )
  }
}