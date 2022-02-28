import React from 'react';
import Colors from './Colors'
import DetailsThumb from './DetailsThumb';
import './mored.css'

class MoreDetails extends React.Component {

  state = {
    products: [
      {
        "_id": "1",
        "title": "Mercedes-AMG GT",
        "src": [
          "images/car1.jpg",
          "images/car2.jpg",
          "images/car3.jpg",
          "images/car4.jpg",
          "images/car5.jpg"
        ],
        "model": "Model: 2020",
        "transmission": "Transmission: Manual",
        "Engine": "Engine Size: 2L",
        "power": "Power BHP: 178 HP",
        "distance": "Distance Meter: 000 Km",
        "car": "Car State: Clean",
        "price": 90000,
        "colors": ["red", "black", "white", "orange"],
        "count": 1
      }
    ],
    index: 0
  };

  myRef = React.createRef();

  handleTab = index => {
    this.setState({ index: index })
    const images = this.myRef.current.children;
    for (let i = 0; i < images.length; i++) {
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  componentDidMount() {
    const { index } = this.state;
    this.myRef.current.children[index].className = "active";
  }


  render() {
    const { products, index } = this.state;
    return (
      <body style={{ backgroundColor: "#333", margin: 0, padding: "0.5rem 0 2rem 0" }}>
        <div className="app">
          {
            products.map(item => (
              <div className="details" key={item._id}>
                <div className="big-img">
                  <img src={item.src[index]} alt="" />
                </div>

                <div className="box">
                  <div className="row">
                    <h2>{item.title}</h2>
                    <span>${item.price}</span>
                  </div>
                  {/* <Colors colors={item.colors} /> */}

                  <p>{item.model}</p>
                  <p>{item.transmission}</p>
                  <p>{item.Engine}</p>
                  <p>{item.power}</p>
                  <p>{item.distance}</p>
                  <p>{item.car}</p>

                  <DetailsThumb images={item.src} tab={this.handleTab} myRef={this.myRef} />
                  <button className="btn1">Buy</button>
                  <button className="btn2">Add to favorites</button>

                </div>
              </div>
            ))
          }
        </div>
      </body>
    );
  };
}

export default MoreDetails;