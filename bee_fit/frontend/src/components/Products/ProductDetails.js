import React, { Component } from 'react';
import { productDetails } from "../../actions/productsActions"


export class ProductDetails extends Component {
    static propTypes = {
        productDetails: PropTypes.func.isRequired,
        product: PropTypes.object
    };

    componentWillMount() {
        this.productDetails(this.props.match.params.id);
    }

    renderProduct() {
        const product = this.props.product;
            return (
                <div className="mx-2">
                    <h4>{product.product_name}</h4>
                    <h4>{product.categories}</h4>
                    <h4>{product.ingredients_text.join(', ')}</h4>
                    <h4>{product.allergens.join(', ')}</h4>
                    <h4>{product.nutriscore_score}</h4>
                    <h4>{product.image_url}</h4>
                    <h4>{product.image_ingredients_url}</h4>
                    <h4>{product.energy_kcal_100g}</h4>
                    <h4>{product.fat_100g}</h4>
                    <h4>{product.sugars_100g}</h4>
                    <h4>{product.proteins_100g}</h4>
                    <h4>{product.glycemic_index_100g}</h4>



                </div>
            );
    }


    render() {
        return (
            <div>
                <div className="edit-form">
                <h4>{product.product_name}</h4>
                    <div className="form-group">
                      <label htmlFor="title">Title</label>
                      <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={currentTutorial.title}
                        onChange={this.onChangeTitle}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="description">Description</label>
                      <input
                        type="text"
                        className="form-control"
                        id="description"
                        value={currentTutorial.description}
                        onChange={this.onChangeDescription}
                      />
                    </div>
      
                    <div className="form-group">
                      <label>
                        <strong>Status:</strong>
                      </label>
                      {currentTutorial.published ? "Published" : "Pending"}
                    </div>
                </div>
                <div>
                </div>
              )}
            </div>
          );
        }
      }

export default ProductDetails
