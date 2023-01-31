import { Fragment } from "react";
import "./home.css";
const Home = () => {
  return (
    <Fragment>
      <header className="py-7 text-center text-white bg-trees">
        <div className="container-fluid">
          <p className="fw-normal text-center">
            "We keep photographs so time will forever be frozen!"
          </p>
          <h1 className="display-1"> PHOTO HOUSE</h1>
        </div>
      </header>
      <section className="py-5">
        <div className="container-fluid px-4">
          <h2 className="display-4 text-center">Our Services</h2>

          <div className="row my-4">
            <div className="col-md py-3">
              <section className="py-5 text-center bg-col2">
                <h3 className="h2">Camera Repair</h3>
                <p className="lead">
                Camera repair and photographic equipment at the most affordable prices
                </p>
              </section>
            </div>

            <div className="col-md py-3">
              <section className="py-5 text-center bg-col2">
                <h3 className="h2">Photography Equipment</h3>
                <p className="lead">
                  Buying cameras and photographic equipment first or second hand
                 
                </p>
              </section>
            </div>

            <div className="col-md py-3">
              <section className="py-5 text-center bg-col2">
                <h3 className="h2">Image development</h3>
                <p className="lead">Development of images of different sizes in the best quality</p>
              </section>
            </div>
          </div>
        </div>
      </section>

     
    </Fragment>
  );
};

export default Home;
