import React, { Component } from 'react'
import BMIDisplay from './BMIDisplay';
import BMIScale from './BMIScale';
import { Card } from 'react-bootstrap';

class BMICal extends Component {
  constructor(props){
    super(props); 
    this.state = {
      height: 0,
      weight: 0, 
      bmi: 0, 
      bmiClass: ''
    }
  }

  heightChange = (height) => {
    this.setState({ height: height}, this.setBmi ); 
  }

  weightChange = (weight) => {
    this.setState({ weight: weight }, this.setBmi ); 
  }

  setBmi = () => {
    let bmi = ((this.state.weight / this.state.height / this.state.height) * 10000).toFixed(2); 
    this.setState({ bmi: bmi, bmiClass: this.getBmiClass(bmi) }); 
  }

  getBmiClass = (bmi) => {
    if(bmi < 16.5) return 'Dénutrition, famine'; 
    if(bmi >= 16.5 && bmi <= 18.5) return 'Maigreur'; 
    if(bmi >= 18.5 && bmi <= 24.9) return 'Corpulence normale'; 
    if(bmi >= 25 && bmi <= 29.9) return 'Surpoids'; 
    if(bmi >= 30 && bmi <= 35) return 'Obésité';  
    if(bmi > 35) return 'Obésité sévère';  
  }

  render() {
    return (
      <div className="container fluid text-center card-perso">
          <Card>
        <h1>Mon IMC</h1>
        <form className="p-top-perso">
          <div>
            <label>Taille</label>
            <BMIScale 
              value={this.state.height} 
              onChange={this.heightChange} />
          </div>
          <div className="p-top-perso">
            <label>Poids</label>
            <BMIScale 
              value={this.state.weight}
              onChange={this.weightChange} />
          </div>
        </form>
        <BMIDisplay data={this.state}/>
        </Card>
      </div>
      
    );
  }
}

export default BMICal