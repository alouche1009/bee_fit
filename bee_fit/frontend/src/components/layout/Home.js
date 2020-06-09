import React, { Component } from "react";
import { Link } from "react-router-dom";


export class Home extends Component {
  render() {
    return (
      <div>
        <div class="container-fluid slide-perso">
          <div class="row  mx-auto no-padding-b">
            <div class="col-md-10">
              <div class="carousel  mx-auto slide" id="carousel-786012">
                <ol class="carousel-indicators">
                  <li
                    data-slide-to="0"
                    data-target="#carousel-786012"
                    class="active"
                  ></li>
                  <li data-slide-to="1" data-target="#carousel-786012"></li>
                  <li data-slide-to="2" data-target="#carousel-786012"></li>
                </ol>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      class="d-block mx-auto"
                      alt="Carousel Bootstrap First"
                      src="../../static/frontend/images/cuisine.png"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      class="d-block mx-auto"
                      alt="Carousel Bootstrap Second"
                      src="../../static/frontend/images/fitness.jpg"
                    />
                  </div>
                </div>{" "}
                <a
                  class="carousel-control-prev"
                  href="#carousel-786012"
                  data-slide="prev"
                >
                  <span class="carousel-control-prev-icon"></span>{" "}
                  <span class="sr-only">Previous</span>
                </a>{" "}
                <a
                  class="carousel-control-next"
                  href="#carousel-786012"
                  data-slide="next"
                >
                  <span class="carousel-control-next-icon"></span>{" "}
                  <span class="sr-only">Next</span>
                </a>
              </div>
            </div>
            <div class="col-md-2 mobile-img">
              <img
                src="../../static/frontend/images/app-exemple.png"
                class="img-fluid"
                alt="Responsive image"
              />
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h2 class="text-center"> Nos services</h2>
              <p class="text-center">
                Parce que chez Bee-Fit nous pensons que tout le monde a le droit de manger mieux et de devenir acteur de sa propre santé nous vous proposons des services gratuits, sans inscription et sans pub c'est promis!
              </p>
              <div class="row p-top-perso">
                <div class="col-md-6">
                  <div class="col-md-12 border card-perso">
                    <h4 class="text-center">
                      <i class="fas fa-search w-100"></i>
                      Informations nutritionnelles
                    </h4>
                    <p>
                      <ul class="list-perso">
                        <li class="fas fa-check w-100">Plus de 600 000 aliments</li>
                        <li class="fas fa-check w-100">Détails énergétiques</li>
                        <li class="fas fa-check w-100">Nutriscore, ingrédients et allergènes</li>
                      </ul>
                    </p>

                    <Link to="/allproducts">
                      <button
                        type="button"
                        class="btn btn-md btn-block btn-primary"
                      >
                        Découvrir
                    </button></Link>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="col-md-12 border card-perso">
                    <h4 class="text-center">
                      <i class="fas fa-dumbbell w-100"></i>
                      Programme fitness
                    </h4>
                    <p>
                      <ul class="list-perso">
                        <li class="fas fa-check w-100">Coaching complet sur une semaine</li>
                        <li class="fas fa-check w-100">3 entraînements</li>
                        <li class="fas fa-check w-100">5 exercices</li>
                      </ul>
                    </p>
                    <Link to="/fitness">
                      <button
                        type="button"
                        class="btn btn-md btn-block btn-primary"
                      >
                        Découvrir
                      </button></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="rowcentrale" class="container-fluid text-light">
          <div class="container padding-interne-perso">
            <div class="row no-padding-b">
              <div class="col-md-12">
                <div class="row no-padding-b align-items-center">
                  <div class="col-md-6 ">
                    <h3>Nos services en images</h3>
                    <p class="text-left">
                      Avec Bee-Fit vous pouvez chercher les produits que vous conssomez au quotidien parmi nos 600 000 références et obtenir toutes les informations dont vous avez besoin pour manger mieux et manger sain.
                      Parce qu'une alimentation équilibrée c'est bien mais qu'un mode de vie globalement sain c'est mieux, nous vous proposons des programmes sportifs adaptés à tous.
                      Pour vous accompagner au mieux, un compteur de calories et un suivi de poids mensuel vous sont proposés.
                    </p>
                  </div>
                  <div class="col-md-6">
                    <div class="row no-padding-b p-b-img">
                      <div class="col-md-6">
                        <img
                          src="https://images-prod.healthline.com/hlcmsresource/images/AN_images/healthy-eating-ingredients-1296x728-header.jpg"
                          class="img-fluid"
                          alt="Responsive image"
                        />
                      </div>
                      <div class="col-md-6">
                        <img
                          src="https://images-prod.healthline.com/hlcmsresource/images/AN_images/healthy-eating-ingredients-1296x728-header.jpg"
                          class="img-fluid"
                          alt="Responsive image"
                        />
                      </div>
                    </div>
                    <div class="row no-padding-b">
                      <div class="col-md-6">
                        <img
                          src="https://images-prod.healthline.com/hlcmsresource/images/AN_images/healthy-eating-ingredients-1296x728-header.jpg"
                          class="img-fluid"
                          alt="Responsive image"
                        />
                      </div>
                      <div class="col-md-6">
                        <img
                          src="https://images-prod.healthline.com/hlcmsresource/images/AN_images/healthy-eating-ingredients-1296x728-header.jpg"
                          class="img-fluid"
                          alt="Responsive image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row padding-interne-perso">
            <div class="col-md-12 padding-interne-perso">
              <div class="col-md-12 padding-interne-perso text-center">
                <h2>
                  {" "}
                  <i class="fas fa-lock"></i> Nos services Premium
                </h2>
                <p>
                  Toujours gratuits, nos services premium nécessitent de s'inscrire et de rejoindre la famille Bee-Fit. Mais promis c'est encore gratuit, sans pub et sans spam!                </p>
              </div>
              <p></p>
              <div class="row align-items-center">
                <div class="col-md-6">
                  <img
                    src="../../static/frontend/images/bfit.png"
                    class="img-fluid"
                    alt="Responsive image"
                  />
                  <Link to="/signup">

                    <button
                      type="button"
                      class="btn btn-md btn-block btn-primary"
                    >
                      Devenir membre
                  </button>
                  </Link>
                </div>
                <div class="col-md-3">
                  <div class="col-md-12 border card-perso">
                    <h4 class="text-center">
                      <i class="fas fa-apple-alt w-100"></i>
                      Compteur de calories
                    </h4>
                    <p>
                      <ul class="list-perso">
                        <li class="fas fa-check w-100">Apports détaillés</li>
                        <li class="fas fa-check w-100">Visualisation facile</li>
                        <li class="fas fa-check w-100">Suivi mensuel</li>
                      </ul>
                    </p>
                    <Link to="/calories">
                      <button
                        type="button"
                        class="btn btn-md btn-block btn-primary"
                      >
                        Découvrir
                      </button></Link>

                  </div>
                </div>
                <div class="col-md-3">
                  <div class="col-md-12 border card-perso">
                    <h4 class="text-center">
                      <i class="fas fa-weight w-100"></i>
                      Suivi de poids
                    </h4>
                    <p>
                      <ul class="list-perso">
                        <li class="fas fa-check w-100">Entrées quotidiennes</li>
                        <li class="fas fa-check w-100">Objectif poids</li>
                        <li class="fas fa-check w-100">Suivi mensuel</li>
                      </ul>
                    </p>
                    <Link to="/calories">
                      <button
                        type="button"
                        class="btn btn-md btn-block btn-primary"
                      >
                        Découvrir
                      </button></Link>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="rownous"
          class="container-fluid text-light padding-interne-perso"
        >
          <div class="container text-light">
            <div class="row no-padding-b">
              <div class="col-md-12 text-center">
                <a id="qui"><h3 class="text-center">Qui sommes nous ?</h3></a>
                <p >
                  Si vous voulez en savoir plus sur la jeune (et formidable) équipe Bee-Fit, vous pouvez venir nous faire un coucou sur Linkedin                </p>
                <div class="row no-padding-b ">
                  <div class="col-md-3 hoverhead">
                    <img onClick={() =>
                      window.open("https://www.linkedin.com/in/guilhem-lacombe-037823144/", "_blank")
                    }
                      src="../../static/frontend/images/guilhem.png"
                      alt="Bootstrap Image Preview"
                      class="rounded-circle mw-100 img-fluid headphoto"
                    /><p class="hideme">Guilhem</p>
                  </div>
                  <div class="col-md-3 hoverhead">
                    <img onClick={() =>
                      window.open("https://www.linkedin.com/in/aurore-louche/", "_blank")
                    }
                      alt="Bootstrap Image Preview"
                      src="../../static/frontend/images/aurore.png"
                      class="rounded-circle mw-100 img-fluid headphoto "
                    /><p class="hideme">Aurore</p>
                  </div>
                  <div class="col-md-3 hoverhead">
                    <img onClick={() =>
                      window.open("https://www.linkedin.com/in/marco-di-fazio-3528a8104/", "_blank")
                    }
                      alt="Bootstrap Image Preview"
                      src="../../static/frontend/images/marco.png"
                      class="rounded-circle headphoto"
                    /><p class="hideme">Marco</p>
                  </div>
                  <div class="col-md-3 hoverhead">
                    <img onClick={() =>
                      window.open("https://www.linkedin.com/in/sylvainneves/", "_blank")
                    }
                      alt="Bootstrap Image Preview"
                      src="../../static/frontend/images/sylvain.png"
                      class="rounded-circle headphoto"
                    /><p class="hideme">Sylvain</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
