import { Component } from "react";
import "./price-coin.css"

export default class PriceCoin extends Component {
  componentDidMount() {
    const widgetContainer = document.getElementById("coinmarket-widget");
    const widget = document.getElementById("coinmarketcap-widget-marquee");
    widgetContainer.appendChild(widget);
  }

  render() {
    return (
      <>
        <div className="priceCoin">
          <div style={{marginTop:"20px"}} id="coinmarket-widget" />
          
        </div>
      </>
    );
  }
}
