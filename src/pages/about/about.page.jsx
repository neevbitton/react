import { Fragment } from "react";
import "./about.css";

const About = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col">
            <h3 id="uni" className="font-acaslon-semibold">
              About Us
            </h3>
            <p>
              <span className="paragraph-padding-left-right">
                 Photo House is the exclusive authorized national service
                center on behalf of the global Canon company. The "House of
                Photography" company was founded in 1976 by Mr. Avi Sa'ar, the
                owner of the company, out of great love to the field of
                photography. The broad technical knowledge and the desire to
                provide solutions for both amateur and professional
                photographers and provide nationwide repair and support services
                for photographic equipment From Canon and cameras and lenses
                from the best manufacturers in the world and this with the
                knowledge and technological equipment The most advanced in the
                world.
              </span>
            </p>

            <p>
              <span className="paragraph-padding-left-right">
                The values we adhere to since 1976 Providing service and advice
                to all customers always at eye level, reliability and efficiency
                in customer service, meeting short deadlines, professional
                execution qualities without compromise.
              </span>
            </p>

            <p>
              <span className="paragraph-padding-left-right">
                The company is located at 61 Bialik St., a central laboratory
                and a professional photo shop In the store you can find a wide
                variety of photographic equipment for cameras, lenses and
                flashes for professional cameras Video cameras and digital
                cameras of all types and from the best manufacturers in the
                world.In the store you can develop photos in a variety of sizes and frame the photos.
              </span>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
            <img
              src="https://th.bing.com/th/id/OIP.vAW8LL1oLmdi6Q8aAbUlfgHaE9?pid=ImgDet&w=1940&h=1300&rs=1"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="camera"
            />

            <img
              src="https://cdnmedia.av.co.il/wp-content/uploads/2010/05/Clip_111-1140x660.jpg"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="adashot"
            />
          </div>

          <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
            <img
              src="https://th.bing.com/th/id/OIP.84HbZx0iN0SI1qnPXNTABgHaE8?pid=ImgDet&rs=1"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="hatzuba"
            />

            <img
              src="https://th.bing.com/th/id/OIP.FjrYI2yr-Bsq0g6BwpP-4AHaEv?pid=ImgDet&w=655&h=420&rs=1"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="photos"
            />
          </div>

          {/* <div className="col-lg-4 mb-4 mb-lg-0">
            <img
              src="https://cdn.pixabay.com/photo/2017/04/25/10/08/gaming-2259191_960_720.jpg"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Waves at Sea"
            />

            <img
              src="https://cdn.pixabay.com/photo/2015/01/08/18/24/children-593313_960_720.jpg"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Yosemite National Park"
            />
          </div> */}
        </div>
      </div>

      {/* <section id="section-about" className="bg-grey">
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-sm-6">
                    <img className="w-100 h-100" src="https://th.bing.com/th/id/R.1be7626a7b20a75a206b28f79af79525?rik=F0bYBYyDuZ%2fGTg&riu=http%3a%2f%2fwww.wgel.com%2fwp-content%2fuploads%2f2016%2f12%2fqtq80-PkNNVS.jpeg&ehk=NG5zjKsC8uDhDlV3lcDJwUTCunZeUFBWgwiXmYQQImA%3d&risl=&pid=ImgRaw&r=0" alt="pets"/>
                </div>
                <div className="col-md-6 col-sm-6">
                    <div className="about-box">
                        <h2 className="box-title">Our code of conduct</h2>
                        <div className="tiny-border"></div>
                        <p>We consider animals as part of our community and believe that giving them adequate treatment as part of a holistic world perception is necessary. We consider animals, and especially cats and dogs, as an inseparable part of our lives and as such it is our duty to prevent them from suffering violence and to enable them the best quality of life that they can have.

We believe that educating for compassion towards animals and developing sensitivity as well as commitment towards them will eventually lead to taking responsibility for their fate. Furthermore, it will make us better human beings and more sensitive to the other and to the environment.

We also believe in the importance of neutering and of castrating as a solution that will minimize the population of stray dogs and cats and reduce their suffering.</p>
        
                        <div className="divider-single"></div>                                
                    </div>
                </div>
            </div>
        </div>        
    </section> */}
    </Fragment>
  );
};

export default About;
