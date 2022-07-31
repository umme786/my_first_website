import React from 'react'

const About = () => {

  const [header] = React.useState({ subHeader: 'About Me', text: 'Lorem Ipsum is simply dummy text of the printing typesetting industry simply dummy.' });
  const [state] = React.useState([
    {id:1, title: 'Name:', text: 'Umme Ruman'},
    {id:2, title: 'Email:', text: 'ummeruman86@gmail.com'},
    {id:3, title: 'Phone:', text: '+1 023 454 345'},
    {id:4, title: 'Linkedin:', text: 'umme_123'}
  ])
  return (
    <div className="about">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader"> {header.subHeader} </h1>
          <p className="mainContent"> {header.text} </p>
          <div className="commonBorder"> </div>
        </div>
        <div className="row h-650 alignCenter">

          <div className="col-6">
            <div className="about__img">
              <img src="/images/k-couple.png" alt="man" />
            </div>
          </div>

          <div className="col-6">
            <div className="about__info">
              <h1> Hi There </h1>
              <div className="about__info-p1">
                Lorem Ipsum is simply dummy text of the printing typesetting industry simply dummy, Lorem Ipsum is simply dummy text of the printing typesetting industry simply dummy.
              </div>
              <div className="about__info-p2">
                Lorem Ipsum is simply dummy text of the printing typesetting industry simply dummy.
              </div>
              <div className="info__contacts">
                <div className="row">

                 {state.map((info) => (
                  <div className="col-6">
                    {/* <strong> Name: </strong> */}
                    <strong> {info.title} </strong>
                    {/* <p> Jonathan Doe </p> */}
                    <p> {info.text} </p>
                  </div>
                 ))}

                  {/* <div className="col-6">
                    <strong> Name: </strong>
                    <p> Jonathan Doe </p>
                  </div> */}
                  {/* <div className="col-6">
                    <strong> Email: </strong>
                    <p> example@domain.com </p>
                  </div> */}
                  {/* <div className="col-6">
                    <strong> Phone: </strong>
                    <p> +1 023 454 345 </p>
                  </div> */}
                  {/* <div className="col-6">
                    <strong> Linkedin: </strong>
                    <p> Jonathan_123 </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
  )
}

export default About;
