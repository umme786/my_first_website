import React from 'react'

const Prices = () => {
const [header] = React.useState ({mainHeader: 'CHOOSE A PLAN', subHeading: 'Pricing Plan', text:'Lorem Ipsum is simply dummy text of the printing typesetting industry simply dummy.'});
const [state] = React.useState([
    {id: 1, heading: 'Basic', price: 50, msg1: '5GB Storage Space', msg2: '2GGB Monthly Bandwidth', msg3: 'My SQL Databases', msg4: '100 Email Account', msg5: '10 Free Domain Names'},
    {id: 2, heading: 'Standard', price: 80, msg1: '5GB Storage Space', msg2: '2GGB Monthly Bandwidth', msg3: 'My SQL Databases', msg4: '100 Email Account', msg5: '10 Free Domain Names'},
    {id: 3, heading: 'Premium', price: 160, msg1: '5GB Storage Space', msg2: '2GGB Monthly Bandwidth', msg3: 'My SQL Databases', msg4: '100 Email Account', msg5: '10 Free Domain Names'},
])
    return (
        <div className="prices">
            <div className="container">

            <div className="common">
                        {/* <h3 className="heading"> SERVICES </h3> */}
                        <h3 className="heading"> {header.mainHeader} </h3>
                        {/* <h1 className="mainHeader"> My Services </h1> */}
                        <h1 className="mainHeader"> {header.subHeading} </h1>
                        {/* <p className="mainContent"> Lorem Ipsum is simply dummy text of the printing typesetting industry simply dummy. </p> */}
                        <p className="mainContent"> {header.text} </p>

                        <div className="commonBorder"> </div>
                </div>

                <div class="row">
                    {/* <div class="col-4">
                        <div class="price">
                            <div className="priceHeading"> Basic </div>
                            <div className="price__rs"> <span> $ </span> 50 </div>
                            <ul>
                                <li> 5GB Storage Space </li>
                                <li> 2GGB Monthly Bandwidth </li>
                                <li> My SQL Databases </li>
                                <li> 100 Email Account </li>
                                <li> 10 Free Domain Names </li>
                            </ul>
                        </div>
                    </div> */}
                    {state.map((prices) => (
                        <div className="col-4" key={prices.id}>
                        <div className="price">
                            {/* <div className="priceHeading"> Basic </div> */}
                            <div className="priceHeading"> {prices.heading} </div>

                            {/* <div className="price__rs"> <span> $ </span> 50 </div> */}
                            <div className="price__rs"> <span className="dollar"> $ </span> {prices.price} </div>

                            <ul>
                                {/* <li> 5GB Storage Space </li> 
                                <li> 2GGB Monthly Bandwidth </li>
                                <li> My SQL Databases </li>
                                <li> 100 Email Account </li>
                                <li> 10 Free Domain Names </li> */}
                                <li> {prices.msg1} </li>
                                <li> {prices.msg2} </li>
                                <li> {prices.msg3} </li>
                                <li> {prices.msg4} </li>
                                <li> {prices.msg5} </li>
                            </ul>
                            <div className="price__btn">
                              <a href="" className="btn btn-outline"> Purchase </a>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Prices;
