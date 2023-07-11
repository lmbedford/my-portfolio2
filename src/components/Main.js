import React, { useState, useEffect } from 'react';



function Main() {
  const [title, setTitle] = useState('Hello');
  const words = ['Web Designer', 'Graphic Designer', 'Creative Designer',];

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * words.length);
      setTitle(words[randomIndex]);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <main>
       <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1>{title}</h1>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-6 offset-md-3 text-center">
            <h2>About Me</h2>
            <div className="d-flex justify-content-center align-items-start">
              <div>
                <p>
                I have always had a pull towards coding and design, ever since I was young, making my own layouts for my Myspace with all the bells and whistles so I could have my ‘Top 8’ shown in all its glory. I also thoroughly enjoyed using Paint Shop Pro to make banners and signatures of my favourite bands to put on my profile.

In 2023, I completed my Web Design degree from WTCC and am excited to see where I can go with it in the world of web and graphic design
                </p>
              </div>
              <div className="ml-4">
                <img src="images/me3.jpg" alt="Small Image" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-md-8 offset-md-2">
            <hr className="line" />
          </div>
        </div>

        
        <div className="row">
          <div className="col-md-4">
            <a href="https://wcet.waketech.edu/lmbedford/portfolio/pleasureisland/" target="_blank" rel="noopener noreferrer">
              <div className="card border-0 rounded">
                <img className="card-img-top rounded-top" src="images/slide1.jpg" alt="Slide 1" />
                <div className="card-body">
                  <h5 className="card-title">Pleasure Island</h5>
              
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-4">
            <a href="https://wcet.waketech.edu/lmbedford/portfolio/biltmore/" target="_blank" rel="noopener noreferrer">
              <div className="card border-0 rounded">
                <img className="card-img-top rounded-top" src="images/slide2.jpg" alt="Slide 2" />
                <div className="card-body">
                  <h5 className="card-title">Biltmore Foods</h5>
                
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-4">
            <a href="https://wcet.waketech.edu/lmbedford/portfolio/travel/index.html" target="_blank" rel="noopener noreferrer">
              <div className="card border-0 rounded">
                <img className="card-img-top rounded-top" src="images/slide3.jpg" alt="Slide 3" />
                <div className="card-body">
                  <h5 className="card-title">Travel Website</h5>
                  
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="row mt-3">
          <div className="col-md-8 offset-md-2">
            <hr className="line" />
          </div>
        </div>

    </main>
  );
}

export default Main;
