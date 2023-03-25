import PriceData from "./priceData";
import Binance from '..//../images/Binance_logo.svg.png'
import Payme from '..//../images/payme-logo.png'
import Tether from '..//../images/Tether_Logo.svg.png'
import Humo from '..//../images/system-humo_w.png'
import Uzcard from '..//../images/uzcard.png'

import './price.css'

const Price = () => {
  return (
    <section className="Price-section"> 
      <PriceData />
      <div className="sponsor">
          <img src={Binance} alt="Binance" />
          <img src={Payme} alt="Payme" />
          <img src={Tether} alt="Tether" />
          <img src={Humo} alt="Humo" />
          <img src={Uzcard} alt="Uzcard" />
     </div>
     <div className="payment-crypto">
      <p>KRIPTOVALYUTA ORQALI TO’LOV QILISH</p>
     </div>
    </section>
  );
};

export default Price


