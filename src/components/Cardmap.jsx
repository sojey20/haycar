import React from 'react'
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import './Cards.css';

const Cardmap = (props) => {
    let history = useHistory();
    return (
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <div className="clickformore">
                    <h1 className='cards__title'>BMW</h1>
                    <p className="description"><a href="#">More</a></p>
                </div>
                    <ul className='cards__items'>
                        <li className='cards__item'>
                            <Link className='cards__item__link'>
                                <figure className='cards__item__pic-wrap' data-category={props.label}>
                                    <img
                                        className='cards__item__img'
                                        src={props.img}
                                    />
                                </figure>
                                <div className='cards__item__info'>
                                    <h5 className='cards__item__text'>{props.text}</h5>
                                    <h5 className='cards__item__text'>{props.text1}</h5>
                                    <h5 className='cards__item__text'>{props.text2}</h5>
                                    <button onClick={() => { history.push("/Moredetails"); }} className='btn'>{props.btn}</button>
                                </div>
                            </Link>
                        </li>
                    </ul>
            </div>
        </div>
    );
};

export default Cardmap;