
import React from 'react';
import { FaGithub, FaCamera, FaCircleNotch, FaApple, FaFileVideo, FaSearchDollar } from 'react-icons/fa';

const Services = () => {
const [header] = React.useState({mainHeader: "SERVICES", subHeading: 'my Services', text: 'Lorem Ipsum is simply dummy text of the printing typesetting industry simply dummy.'})
const [state] = React.useState([
    {id:1, icon: <FaGithub className="commonIcons" />, heading: 'Web Development', text:'Lorem Ipsum is simply dummy text of the printing typesetting industry simply dummy.'},
    {id:2, icon: <FaCamera className="commonIcons" />, heading: 'Photography', text:'Lorem Ipsum is simply dummy text of the printing typesetting industry simply dummy.'},
    {id:3, icon: <FaCircleNotch className="commonIcons" />, heading: 'Web Design', text:'Lorem Ipsum is simply dummy text of the printing typesetting industry simply dummy.'},
    {id:4, icon: <FaApple className="commonIcons" />, heading: 'App Development', text:'Lorem Ipsum is simply dummy text of the printing typesetting industry simply dummy.'},
    {id:5, icon: <FaFileVideo className="commonIcons" />, heading: 'Video Editing', text:'Lorem Ipsum is simply dummy text of the printing typesetting industry simply dummy.'},
    {id:6, icon: <FaSearchDollar className="commonIcons" />, heading: 'Responsive Website', text:'Lorem Ipsum is simply dummy text of the printing typesetting industry simply dummy.'}
]);
    return (
        <div className="services">
            <div className="container">
                <div className="services__header">

                <div className="common">
                        {/* <h3 className="heading"> SERVICES </h3> */}
                        <h3 className="heading"> {header.mainHeader} </h3>
                        {/* <h1 className="mainHeader"> My Services </h1> */}
                        <h1 className="mainHeader"> {header.subHeading} </h1>
                        {/* <p className="mainContent"> Lorem Ipsum is simply dummy text of the printing typesetting industry simply dummy. </p> */}
                        <p className="mainContent"> {header.text} </p>

                        <div className="commonBorder"> </div>
                </div>
                
                <div className="row bgMain">
                  {state.map((info) => (
                    <div className="col-4 bgMain">
                        <div className="services__box">
                            {/* <FaGithub className="commonIcons" /> */}
                            {info.icon}
                                <div className="services__box-header">
                                    {/* Web Development */}
                                    {info.heading}
                                </div>
                                <div className="services__box-p">
                                     {/* Lorem Ipsum is simply dummy text of the printing typesetting industry simply dummy. */}
                                     {info.text}
                                </div>
                        </div>
                    </div>
                 ) )}
                 
                    {/* <div className="col-4 bgMain">
                        <div className="services__box">
                            <FaGithub className="commonIcons" />
                                <div className="services__box-header">
                                    Web Development
                                </div>
                                <div className="services__box-p">
                                     Lorem Ipsum is simply dummy text of the printing typesetting industry simply dummy.
                                </div>
                        </div>
                    </div> */}

                    {/* <div className="col-4">
                        <div className="services__box">
                            <FaGithub className="commonIcons" />
                                <div className="services__box-header">
                                    Web Development
                                </div>
                                <div className="services__box-p">
                                     Lorem Ipsum is simply dummy text of the printing typesetting industry simply dummy.
                                </div>
                        </div>
                    </div> */}

                    {/* <div className="col-4">
                        <div className="services__box">
                            <FaGithub className="commonIcons" />
                                <div className="services__box-header">
                                    Web Development
                                </div>
                                <div className="services__box-p">
                                     Lorem Ipsum is simply dummy text of the printing typesetting industry simply dummy.
                                </div>
                        </div>
                    </div> */}

                    {/* <div className="col-4">
                        <div className="services__box">
                            <FaGithub className="commonIcons" />
                                <div className="services__box-header">
                                    Web Development
                                </div>
                                <div className="services__box-p">
                                     Lorem Ipsum is simply dummy text of the printing typesetting industry simply dummy.
                                </div>
                        </div>
                    </div> */}

                    {/* <div className="col-4">
                        <div className="services__box">
                            <FaGithub className="commonIcons" />
                                <div className="services__box-header">
                                    Web Development
                                </div>
                                <div className="services__box-p">
                                     Lorem Ipsum is simply dummy text of the printing typesetting industry simply dummy.
                                </div>
                        </div>
                    </div> */}

                    {/* <div className="col-4">
                        <div className="services__box">
                            <FaGithub className="commonIcons" />
                                <div className="services__box-header">
                                    Web Development
                                </div>
                                <div className="services__box-p">
                                     Lorem Ipsum is simply dummy text of the printing typesetting industry simply dummy.
                                </div>
                        </div>
                    </div> */}

                </div>

                </div>
            </div>
        </div>
    );
};

export default Services;
