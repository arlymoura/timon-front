import React, { Component } from "react";
import './index.css';

import Button from '../../components/button/index'

//import { Container, ContainerBody } from './styles';

export default class Home extends Component {
  render() {
    return(
        <div className="container">
            <div className="row">
              <Button effctType="roam" text="texto 1"/>
              <Button effctType="roam" text="texto 2"/>
            </div>

            <div className="row">
              <Button effctType="roam" text="texto 3"/>
              <Button effctType="roam" text="texto 4"/>
            </div>
        </div>
    );
  }
}