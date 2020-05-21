import React, { Component } from "react";

export class Home extends Component {
  render() {
    return (
      <div>
        <div class="container-fluid">
          <div class="row no-padding-b">
            <div class="col-md-12">
              <div class="carousel w-80 mx-auto slide" id="carousel-786012">
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
                      src="https://www.layoutit.com/img/sports-q-c-1600-500-1.jpg"
                    />
                    <div class="carousel-caption">
                      <h4>First Thumbnail label</h4>
                      <p>
                        Cras justo odio, dapibus ac facilisis in, egestas eget
                        quam. Donec id elit non mi porta gravida at eget metus.
                        Nullam id dolor id nibh ultricies vehicula ut id elit.
                      </p>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img
                      class="d-block mx-auto"
                      alt="Carousel Bootstrap Second"
                      src="https://www.layoutit.com/img/sports-q-c-1600-500-2.jpg"
                    />
                    <div class="carousel-caption">
                      <h4>Second Thumbnail label</h4>
                      <p>
                        Cras justo odio, dapibus ac facilisis in, egestas eget
                        quam. Donec id elit non mi porta gravida at eget metus.
                        Nullam id dolor id nibh ultricies vehicula ut id elit.
                      </p>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img
                      class="d-block mx-auto"
                      alt="Carousel Bootstrap Third"
                      src="https://www.layoutit.com/img/sports-q-c-1600-500-3.jpg"
                    />
                    <div class="carousel-caption">
                      <h4>Third Thumbnail label</h4>
                      <p>
                        Cras justo odio, dapibus ac facilisis in, egestas eget
                        quam. Donec id elit non mi porta gravida at eget metus.
                        Nullam id dolor id nibh ultricies vehicula ut id elit.
                      </p>
                    </div>
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
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h2 class="text-center"> Nos services</h2>
              <p class="text-center">
                Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
                tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                fermentum massa justo sit amet risus. Etiam porta sem malesuada
                magna mollis euismod. Donec sed odio dui.
              </p>
              <div class="row p-top-perso">
                <div class="col-md-3">
                  <div class="col-md-12 border">
                    <h3 class="text-center">
                      <i class="fas fa-apple-alt w-100"></i>
                      Aide nutritive
                    </h3>
                    <p>
                      <ul class="list-perso">
                        <li class="fas fa-check w-100">Diabétique</li>
                        <li class="fas fa-check w-100">Diabétique</li>
                        <li class="fas fa-check w-100">Diabétique</li>
                      </ul>
                    </p>
                    <button
                      type="button"
                      class="btn btn-md btn-block btn-primary"
                    >
                      Button
                    </button>
                  </div>
                </div>
                <div class="col-md-3 border">
                  <h3 class="text-center">
                    <i class="fas fa-search w-100"></i>
                    Recherche d'aliments
                  </h3>
                  <p>
                    <ul class="list-perso">
                      <li class="fas fa-check w-100">Diabétique</li>
                      <li class="fas fa-check w-100">Diabétique</li>
                      <li class="fas fa-check w-100">Diabétique</li>
                    </ul>
                  </p>
                  <button
                    type="button"
                    class="btn btn-md btn-block btn-primary"
                  >
                    Button
                  </button>
                </div>
                <div class="col-md-3 border">
                  <h3 class="text-center">
                    <i class="fas fa-utensils w-100"></i>
                    Recettes
                  </h3>
                  <p>
                    <ul class="list-perso">
                      <li class="fas fa-check w-100">Diabétique</li>
                      <li class="fas fa-check w-100">Diabétique</li>
                      <li class="fas fa-check w-100">Diabétique</li>
                    </ul>
                  </p>
                  <button
                    type="button"
                    class="btn btn-md btn-block btn-primary"
                  >
                    Button
                  </button>
                </div>
                <div class="col-md-3 border">
                  <h3 class="text-center">
                    <i class="fas fa-dumbbell w-100"></i>
                    Programme fitness
                  </h3>
                  <p>
                    <ul class="list-perso">
                      <li class="fas fa-check w-100">Diabétique</li>
                      <li class="fas fa-check w-100">Diabétique</li>
                      <li class="fas fa-check w-100">Diabétique</li>
                    </ul>
                  </p>
                  <button
                    type="button"
                    class="btn btn-md btn-block btn-primary"
                  >
                    Button
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="row">
                <div class="col-md-6">
                  <h3>h3. Lorem ipsum dolor sit amet.</h3>
                  <p class="text-left">
                    Lorem ipsum dolor sit amet,{" "}
                    <strong>consectetur adipiscing elit</strong>. Aliquam eget
                    sapien sapien. Curabitur in metus urna. In hac habitasse
                    platea dictumst. Phasellus eu sem sapien, sed vestibulum
                    velit. Nam purus nibh, lacinia non faucibus et, pharetra in
                    dolor. Sed iaculis posuere diam ut cursus.{" "}
                    <em>
                      Morbi commodo sodales nisi id sodales. Proin consectetur,
                      nisi id commodo imperdiet, metus nunc consequat lectus, id
                      bibendum diam velit et dui.
                    </em>{" "}
                    Proin massa magna, vulputate nec bibendum nec, posuere nec
                    lacus.{" "}
                    <small>
                      Aliquam mi erat, aliquam vel luctus eu, pharetra quis
                      elit. Nulla euismod ultrices massa, et feugiat ipsum
                      consequat eu.
                    </small>
                  </p>
                </div>
                <div class="col-md-6">
                  <div class="row">
                    <div class="col-md-6"></div>
                    <div class="col-md-6"></div>
                  </div>
                  <div class="row">
                    <div class="col-md-6"></div>
                    <div class="col-md-6"></div>
                  </div>
                </div>
              </div>
              <button type="button" class="btn btn-primary">
                Button
              </button>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <h2>Heading</h2>
              <p>
                Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
                tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                fermentum massa justo sit amet risus. Etiam porta sem malesuada
                magna mollis euismod. Donec sed odio dui.
              </p>
              <p>
                <a class="btn" href="#">
                  View details »
                </a>
              </p>
              <div class="row">
                <div class="col-md-6">
                  <img
                    alt="Bootstrap Image Preview"
                    src="https://www.layoutit.com/img/sports-q-c-140-140-3.jpg"
                  />
                </div>
                <div class="col-md-3">
                  <p>
                    Lorem ipsum dolor sit amet,{" "}
                    <strong>consectetur adipiscing elit</strong>. Aliquam eget
                    sapien sapien. Curabitur in metus urna. In hac habitasse
                    platea dictumst. Phasellus eu sem sapien, sed vestibulum
                    velit. Nam purus nibh, lacinia non faucibus et, pharetra in
                    dolor. Sed iaculis posuere diam ut cursus.{" "}
                    <em>
                      Morbi commodo sodales nisi id sodales. Proin consectetur,
                      nisi id commodo imperdiet, metus nunc consequat lectus, id
                      bibendum diam velit et dui.
                    </em>{" "}
                    Proin massa magna, vulputate nec bibendum nec, posuere nec
                    lacus.{" "}
                    <small>
                      Aliquam mi erat, aliquam vel luctus eu, pharetra quis
                      elit. Nulla euismod ultrices massa, et feugiat ipsum
                      consequat eu.
                    </small>
                  </p>
                </div>
                <div class="col-md-3">
                  <p>
                    Lorem ipsum dolor sit amet,{" "}
                    <strong>consectetur adipiscing elit</strong>. Aliquam eget
                    sapien sapien. Curabitur in metus urna. In hac habitasse
                    platea dictumst. Phasellus eu sem sapien, sed vestibulum
                    velit. Nam purus nibh, lacinia non faucibus et, pharetra in
                    dolor. Sed iaculis posuere diam ut cursus.{" "}
                    <em>
                      Morbi commodo sodales nisi id sodales. Proin consectetur,
                      nisi id commodo imperdiet, metus nunc consequat lectus, id
                      bibendum diam velit et dui.
                    </em>{" "}
                    Proin massa magna, vulputate nec bibendum nec, posuere nec
                    lacus.{" "}
                    <small>
                      Aliquam mi erat, aliquam vel luctus eu, pharetra quis
                      elit. Nulla euismod ultrices massa, et feugiat ipsum
                      consequat eu.
                    </small>
                  </p>
                </div>
              </div>
              <button type="button" class="btn btn-primary">
                Button
              </button>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <h3 class="text-center">h3. Lorem ipsum dolor sit amet.</h3>
              <p>
                Lorem ipsum dolor sit amet,{" "}
                <strong>consectetur adipiscing elit</strong>. Aliquam eget
                sapien sapien. Curabitur in metus urna. In hac habitasse platea
                dictumst. Phasellus eu sem sapien, sed vestibulum velit. Nam
                purus nibh, lacinia non faucibus et, pharetra in dolor. Sed
                iaculis posuere diam ut cursus.{" "}
                <em>
                  Morbi commodo sodales nisi id sodales. Proin consectetur, nisi
                  id commodo imperdiet, metus nunc consequat lectus, id bibendum
                  diam velit et dui.
                </em>{" "}
                Proin massa magna, vulputate nec bibendum nec, posuere nec
                lacus.{" "}
                <small>
                  Aliquam mi erat, aliquam vel luctus eu, pharetra quis elit.
                  Nulla euismod ultrices massa, et feugiat ipsum consequat eu.
                </small>
              </p>
              <div class="row">
                <div class="col-md-3">
                  <img
                    alt="Bootstrap Image Preview"
                    src="https://www.layoutit.com/img/sports-q-c-140-140-3.jpg"
                    class="rounded-circle"
                  />
                </div>
                <div class="col-md-3">
                  <img
                    alt="Bootstrap Image Preview"
                    src="https://www.layoutit.com/img/sports-q-c-140-140-3.jpg"
                    class="rounded-circle"
                  />
                </div>
                <div class="col-md-3">
                  <img
                    alt="Bootstrap Image Preview"
                    src="https://www.layoutit.com/img/sports-q-c-140-140-3.jpg"
                    class="rounded-circle"
                  />
                </div>
                <div class="col-md-3">
                  <img
                    alt="Bootstrap Image Preview"
                    src="https://www.layoutit.com/img/sports-q-c-140-140-3.jpg"
                    class="rounded-circle"
                  />
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
