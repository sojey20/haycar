import React, { useState } from 'react';
import Cardmap from './Cardmap';

const carditem = [
    {
        img: 'images/car1.jpg',
        text: 'Mercedes',
        text1: 'Mercedes-AMG GT',
        text2: '00.00$',
        path: '/services',
        btn: 'More Details'
    },
    {
        img: 'images/car2.jpg',
        text: 'Mercedes2',
        text1: 'Mercedes-AMG GT',
        text2: '00.00$',
        path: '/services',
        btn: 'More Details'
    },
    {
        img: 'images/car3.jpg',
        text: 'Mercedes3',
        text1: 'Mercedes-AMG GT',
        text2: '00.00$',
        path: '/services',
        btn: 'More Details'
    },
    {
        img: 'images/car4.jpg',
        text: 'Mercedes4',
        text1: 'Mercedes-AMG GT',
        text2: '00.00$',
        path: '/services',
        btn: 'More Details'
    },
    {
        img: 'images/car5.jpg',
        text: 'Mercedes5',
        text1: 'Mercedes-AMG GT',
        text2: '00.00$',
        path: '/services',
        btn: 'More Details'
    }
];

export default function CardItem (){
    return (
        <div>
            {carditem.map((cardmap) => (
                <Cardmap img={cardmap.img} text={cardmap.text} text1={cardmap.text1} text2={cardmap.text2} btn={cardmap.btn}/>
            ))}
        </div>
    );
}