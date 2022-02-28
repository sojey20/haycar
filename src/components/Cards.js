import React from 'react';
import './Cards.css';
import cards from './CardItem';
import datamerc from './CardBmw'
import { NavLink, useHistory } from 'react-router-dom';

function Cards() {
  let history = useHistory();
  return (

    <div className='cards' id='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <div className="clickformore">
            <h1 className='cards__title'>BMW</h1>
            <p className="description" ><NavLink to="/bmw">More</NavLink></p>
          </div>
          <section className="py-4 container">
            <div className="row justify-content-center">
              {datamerc.dataMerc1.map((item, index) => { 
                return (
                  <div className="col-11 col-md-6 col-lg-3 mx-0 mb-5">
                    <div className="cards__item card p-0 overflow-hidden h-100 shadow"
                      style={{
                        background: "rgb(37, 37, 37)",
                        flex: 1,
                        margin: "0 1rem",
                        borderRadius: "10px",
                        marginBottom: "24px",
                      }}>
                      <figure className='cards__item__pic-wrap'>
                        <img src={item.img} className="card-img-top cards__item__img" />
                      </figure>
                      <div className="card-body cards__item__info">
                        <h5 className="card-title cards__item__text">{item.text}</h5>
                        <h5 className="card-title cards__item__text">{item.text1}</h5>
                        <h5 className="card-title cards__item__text">{item.text2}</h5>
                        <button onClick={() => { history.push("/services"); }} className='btn1'>{item.btn}</button>
                      </div>
                    </div>
                  </div>
                );
              })};
            </div>
          </section>

          <div className="clickformore" id='merc'>
            <h1 className='cards__title' style={{ marginTop: "5rem" }}>Mercedes</h1>
            <p className="description" style={{ marginTop: "5rem" }}><NavLink to="/merc">More</NavLink></p>
          </div>
          <section className="py-4 container">
            <div className="row justify-content-center">
              {cards.cardData.map((item, index) => {
                return (
                  <div className="col-11 col-md-6 col-lg-3 mx-0 mb-5">
                    <div className="cards__item card p-0 overflow-hidden h-100 shadow"
                      style={{
                        background: "rgb(37, 37, 37)",
                        flex: 1,
                        margin: "0 1rem",
                        borderRadius: "10px",
                        marginBottom: "24px",
                      }}>
                      <figure className='cards__item__pic-wrap'>
                        <img src={item.img} className="card-img-top cards__item__img" />
                      </figure>
                      <div className="card-body cards__item__info">
                        <h5 className="card-title cards__item__text">{item.text}</h5>
                        <h5 className="card-title cards__item__text">{item.text1}</h5>
                        <h5 className="card-title cards__item__text">{item.text2}</h5>
                        <button onClick={() => { history.push("/services"); }} className='btn1'>{item.btn}</button>
                      </div>
                    </div>
                  </div>
                );
              })};
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}

export default Cards;
