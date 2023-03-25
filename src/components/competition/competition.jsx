import React from "react";
import "./competition.css";
import Car from '../../images/car.png'

const Competition = () => {
     return (
          <section className="competition">
               <div className="competition__title">COBALT AVTOMOBILINI YUTIB OLING</div>
               <div className="competition-container">
                    <div className="competition-content">
                         <div className="competition-image">
                              <img src={Car} alt="car" />
                         </div>
                         <div className="competition-text">
                              <p className="competition-description">
                                   ONLINE VA OFFLINE KURSIMIZNI TO’LIQ O’TGAN HAR BIR KISHI AVTOMATIK RAVISHDA
                                   <span style={{ color: "#42a7ff" }}> COBALT</span> AVTOMOBILINI  O'YININING ISHTIROKCHISIGA  AYLANADI.
                              </p>
                              <p className="note">*PREMIUM VIDEODARSLIKLARNI XARID QILGANLAR ISHTIROK ETMAYDI</p>
                         </div>

                    </div>
               </div>
          </section>
     );
};

export default Competition;

