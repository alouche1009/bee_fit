import React, {Component} from "react";

import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Fitness from './layout/FitnessPage';

import MainContent from "./MainContent";

export default class App extends Component {
    render() {
        return (
            <div className="container">
                <Header />
                <MainContent />
                  <Route exact path="/fitness" component={Fitness} />
                <Footer />
            </div>
        );
    }
}