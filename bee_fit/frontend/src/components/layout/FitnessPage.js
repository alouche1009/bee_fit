import React, { Component } from "react";

export class Fitness extends Component {
	render() {
		return (
			<div>
				<div class="container-fluid">
					<div class="container">
						<div class="row p-top-perso">
							<div class="col-md-12">
							</div>
						</div>
						<div class="row">
							<div class="col-md-4">
								<div class="col-md-12 border card-perso">
									<img onClick={() =>
										window.open("../../static/frontend/images/Jour1-PAGE1.gif", "_blank")
									} src="../../static/frontend/images/Jour1-PAGE1.gif"
										class="img-fluid onhover"
										alt="Responsive image" />
								</div>
							</div>
							<div class="col-md-4">
								<div class="col-md-12 border card-perso">
									<img onClick={() =>
										window.open("../../static/frontend/images/jour2.jpg", "_blank")
									} src="../../static/frontend/images/jour2.jpg"
										class="img-fluid onhover"
										alt="Responsive image" />
								</div>
							</div>
							<div class="col-md-4">
								<div class="col-md-12 border card-perso">
									<img onClick={() =>
										window.open("../../static/frontend/images/Jour3.png", "_blank")
									} src="../../static/frontend/images/Jour3.png"
										class="img-fluid onhover"
										alt="Responsive image" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Fitness;
