import React from "react"
import props from 'prop-types';

function ProductCard(props){
    return (  
        <div className="productMenu row">
            <div className="product1 col-lg-6 CARD" >
                <Card 
                    img="https://rukminim1.flixcart.com/image/612/612/ktuewsw0/mouse/d/w/w/m7030-flipkart-smartbuy-original-imag73qqzzrf2kmu.jpeg?q=70" 
                    name="Flipkart SmartBuy M7030 Wireless Optical Mouse" 
                    description="2.4GHz Wireless, Bluetooth, Black and Grey" 
                    rating="4.1"
                    reviews="(1,614)" 
                    price="Rs. 499" 
                    cardClicked = {props.cardClicked}
                />
            </div>
            <div className="product2 col-lg-6 CARD" >
                <Card 
                    img="https://rukminim1.flixcart.com/image/612/612/krme93k0/mouse/c/p/e/v8-flipkart-smartbuy-original-imag5d8qha2mwrex.jpeg?q=70" 
                    name="Flipkart SmartBuy V8 Wireless Optical Mouse" 
                    description="2.4GHz Wireless, Grey" 
                    rating="4.5" 
                    reviews="(8,143)" 
                    price="Rs. 479" 
                    cardClicked = {props.cardClicked}
                />
            </div>
            <div className="product3 col-lg-6 CARD" >
                <Card 
                    img="https://rukminim1.flixcart.com/image/612/612/korijrk0/mouse/j/p/k/b175-logitech-original-imag359v76rygsaf.jpeg?q=70" 
                    name="Logitech B175 / Optical Tracking, 12-Months Battery Life, Ambidextrous Wireless Optical Mouse" 
                    description="2.4GHz Wireless, Black" 
                    rating="4.5" 
                    reviews="(145909)" 
                    price="Rs. 699" 
                    cardClicked = {props.cardClicked}
                /> 
            </div>
            <div className="product4 col-lg-6 CARD" >
                <Card 
                    img="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61KSceiLHwL._AC_UY436_FMwebp_QL65_.jpg" 
                    name="HP X1000 Wired USB Mouse with 3 Handy Buttons, Fast-Moving Scroll Wheel and Optical Sensor" 
                    description="2.4GHz Wireless, Black" 
                    rating="4.5" 
                    reviews="(21,298)" 
                    price="Rs. 499" 
                    cardClicked = {props.cardClicked}
                />
            </div>
            <div className="product5 col-lg-6 CARD" >
                <Card 
                        img=" https://m.media-amazon.com/images/I/71gEuyRXIDL._AC_UY436_QL65_.jpg" 
                        name="HP X200 Wireless Mouse with 2.4 GHz Wireless connectivity, Adjustable DPI up to 1600" 
                        description="2.4GHz Wireless, Black" 
                        rating="4.2" 
                        reviews="(8,172)" 
                        price="Rs. 499" 
                        cardClicked = {props.cardClicked}
                    />
            </div>
            <div className="product6 col-lg-6 CARD" >
                <Card 
                        img=" https://m.media-amazon.com/images/I/614DbY9tQsL._AC_UY436_QL65_.jpg" 
                        name="HP Z3700 Wireless Optical Mouse with USB Receiver and 2.4GHz Wireless Connection/ 1200DPI" 
                        description="2.4GHz Wireless, Modern Gold" 
                        rating="4.2" 
                        reviews="(23,101)" 
                        price="Rs. 899" 
                        cardClicked = {props.cardClicked}
                    />
            </div>
        </div>
    );
}

function Card(props){
    return(
        <div className="card mb-3" style={{width: "34rem"}} onClick = {props.cardClicked}>
            <div className="row g-0">
                <div className="col-md-4">
                 <img src={props.img} className="cardImage img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="cardDescription card-text">{props.description}</p>
                        <p className="CardReview card-text">{props.rating}{props.reviews}</p>
                        <p className="cardPrice card-text"><small className="text-muted">{props.price}</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ProductCard;