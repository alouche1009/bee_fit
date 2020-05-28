import React, { Component } from "react";
import { reduxForm, Field, propTypes } from "redux-form";
import { Link } from "react-router-dom";
import { required } from "redux-form-validators";
import { renderField, renderError } from "../../utils/renderUtils";
import { loginUser } from "../../actions/authActions";
import SocialAuth from "../../components/layout/socialauth";

class Login extends Component {
  static propTypes = {
    ...propTypes,
  };

  render() {
    const { handleSubmit, error } = this.props;

    return (
      <div className="row justify-content-center">
        <form className="col col-sm-4 card mt-5 p-2" onSubmit={handleSubmit}>
          <h4 className="text-md-center">Log In</h4>
          <hr />

          <fieldset className="form-group">
            <Field
              name="email"
              label="Email"
              component={renderField}
              type="text"
              validate={[required({ message: "Ce champ est requis." })]}
            />
          </fieldset>

          <fieldset className="form-group">
            <Field
              name="password"
              label="Mot de passe"
              component={renderField}
              type="password"
              validate={[required({ message: "Ce champ est requis." })]}
            />
          </fieldset>

          <fieldset className="form-group">
            {renderError(error)}
            <button action="submit" className="btn btn-primary">
              Login
            </button>
          </fieldset>

          <p style={{ textAlign: "center" }}>
            Pas encore membre ? <Link to="/signup">Rejoignez-nous ici!</Link>
          </p>
          <Link to="/reset_password" style={{ textAlign: "center" }}>
            Mot de passe oublié ?
          </Link>
  <script>
  {% load socialaccount %}
  {% providers_media_js %}<p>toto</p>
  <a href="{% provider_login_url "facebook" method="js_sdk" %}">Login Button image</a>
</script>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "login",
  onSubmit: loginUser,
})(Login);
