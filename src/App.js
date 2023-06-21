import logo from "./logo.svg";
import "./App.css";
import associate1 from "./asso1.svg";
import associate2 from "./asso2.svg";
import associate3 from "./asso3.svg";
import associate4 from "./asso4.svg";
import associate5 from "./asso5.svg";
import service1 from "./service1.svg";
import service2 from "./service2.svg";
import service3 from "./service3.svg";
import service4 from "./service4.svg";
import discoverImg from "./discover.svg";
import disc1 from "./disc1.svg";
import disc2 from "./disc2.svg";
import disc3 from "./disc3.svg";
import disc4 from "./disc4.svg";
import blogs1 from "./blogs1.svg";
import trending2 from "./trending2.svg";
import offers1 from "./offers1.svg";
import removebg from "./removebg.svg";
import awardsImg from "./awards.svg";
import rating1 from "./rating1.svg";
import rating2 from "./rating2.svg";
import test1 from "./test1.svg";
import test2 from "./test2.svg";
import test3 from "./test3.svg";
import testRoundImg from "./testRound.svg";
import success1 from "./success1.svg";
import photography1 from "./photography1.svg";
import cameraImg from "./camera.svg";
import fliqaImg from "./fliqa.svg";
import fliqaLogo from "./FliqaLogo.svg";
import content1 from "./content1.svg";
import content2 from "./content2.svg";
import content3 from "./content3.svg";
import content4 from "./content4.svg";
import wedding1 from "./wedding1.svg";
import collection1 from "./collection1.svg";
import collection2 from "./collection2.svg";
import freelanceImg from "./freelanceImg.svg";
import Service from "./components/Service";
import Title from "./components/Title";
import WeddingCard from "./components/WeddingCard";
import Offers from "./components/Offers";
import TestimonialCard from "./components/TestimonialCard";
import Success from "./components/Success";
import AwardContainer from "./components/AwardContainer";
import TrendingNow from "./components/TrendingNow";
import Blogs from "./components/Blogs";
import PlatformContent from "./components/PlatformContent";

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <div className="platform">
          <div className="black-bar">
            <div className="black-bar-headings">
              <div className="logo">
                <img src={fliqaLogo} />
              </div>
              <h4>Home</h4>
              <h4>Service</h4>
              <h4>Portfolio</h4>
              <h4>Community</h4>
              <h4>Blogs</h4>
            </div>
            <div className="black-bar-buttons">
              <button>Sign Up</button>
              <button>Sign In</button>
            </div>
          </div>

          <div className="main-image">
            <img className="fliqa-image" src={fliqaImg} />
          </div>

          <div className="creative-platform">
            <div className="creative-platform-heading">
              <h3>India’s Leading Creative Platform</h3>
              <p>Experience hassle free bookings. Trusted by 2500+ Customers</p>

              <div className="searchbar">
                <input
                  className="search-input"
                  type="name"
                  placeholder="Search service, blog and many more…"
                />
                <button className="search-button">SEARCH</button>
              </div>
            </div>

            <div className="creative-platform-content">
              <div className="platform-each-content">
                <PlatformContent
                  image={content1}
                  heading={"Verified Reviews"}
                  paragraph={"For verified reviewers"}
                />
                <PlatformContent
                  image={content2}
                  heading={"Top Articles"}
                  paragraph={"Helps you decide"}
                />

                <PlatformContent
                  image={content3}
                  heading={"Write Share Win Contest"}
                  paragraph={"Earn cash for reviews"}
                />
                <PlatformContent
                  image={content4}
                  heading={"MouthShut for Brands"}
                  paragraph={"Request a Demo"}
                />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <br />
        <br />
        <div className="associates-container">
          <div className="associates">
            <div className="associates-heading">
              <p className="heading">Find Trusted Associate</p>
              <p className="content">
                Find the best Fliqa Associate for your special day.
              </p>
            </div>
            <div className="associates-content">
              <Title
                image={associate1}
                heading={"Name Title"}
                name={"Location : "}
              />
              <Title
                image={associate2}
                heading={"Name Title"}
                name={"Location : "}
              />
              <Title
                image={associate3}
                heading={"Name Title"}
                name={"Location : "}
              />
              <Title
                image={associate5}
                heading={"Name Title"}
                name={"Location : "}
              />
            </div>
          </div>
        </div>
        <br/>

        <div className="services">
          <div className="services-heading">
            <p className="heading">Our Featured Services </p>
            <p className="content">
              Discover the range of services provided by FliqaIndia.
            </p>
          </div>
          <div className="services-content-container">
            <div className="service-content">
              <Service
                image={service1}
                heading="Pre Wedding Photoshoot"
                paragraph="Starting at 25,000 (One Day)"
              />
              <Service
                image={service2}
                heading="Wedding Photoshoot"
                paragraph="Starting at 65,000 (Two days )"
              />
              <Service
                image={service3}
                heading="Portfolio Shoot"
                paragraph="Starting at 15,000 (One day)"
              />
              <Service
                image={service4}
                heading="Birthday Baby Folio"
                paragraph="Starting at 15,000 (One day)"
              />

              {/* <div className="service-card">
                <img src={service1} />
                <div className="service-card-content">
                  <h3>Pre Wedding Photoshoot</h3>
                  <hr />
                  <h4>Starting at 25,000 (One Day)</h4>
                </div>
                <div className="service-button">
                  <button>Know More</button>
                </div>
              </div> */}

              {/* <div className="service-card">
                <img src={service2} />
                <div className="service-card-content">
                  <h3>Wedding Photoshoot</h3>
                  <hr />
                  <h4>Starting at 65,000 (Two days )</h4>
                </div>
                <div className="service-button">
                  <button>Know More</button>
                </div>
              </div>

              <div className="service-card">
                <img src={service3} />
                <div className="service-card-content">
                  <h3>Portfolio Shoot</h3>
                  <hr />
                  <h4>Starting at 15,000 (One days)</h4>
                </div>
                <div className="service-button">
                  <button>Know More</button>
                </div>
              </div>

              <div className="service-card">
                <img src={service4} />
                <div className="service-card-content">
                  <h3>Birthday Baby Folio</h3>
                  <hr />
                  <h4>Starting at 15,000 (One days)</h4>
                </div>
                <div className="service-button">
                  <button>Know More</button>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        <div className="discover">
          <div
            className="discover-image"
            style={{ backgroundImage: `url(${discoverImg})` }}
          >
            <div className="discover-division">
              <div className="discover-heading">
                <h2 className="d-heading">DISCOVER</h2>
                <h1 className="main-heading">
                  GRAPHIC DESIGN IDEAS AND SERVICES
                </h1>
                <br />
                <h3 className="para">FROM BRANDING TO MARKETING</h3>
                <br />
                <div className="searchbar">
                  <input
                    className="search-input"
                    type="name"
                    placeholder="what kind of design you are looking for?"
                  />
                  <button className="search-button">SEARCH</button>
                </div>
              </div>
              <div className="hanging-images">
                <div className="frame">
                  <img src={disc1} />
                </div>
                <div className="frame">
                  <img src={disc2} />
                </div>
                <div className="frame">
                  <img src={disc3} />
                </div>
                <div className="frame">
                  <img src={disc4} />
                </div>
              </div>
            </div>
          </div>

          <div className="popular-container">
            <div className="popular-container-content">
              <h4 className="popular-heading">Popular:</h4>
              <h4 className="popular-content">Website Design</h4>
              <h4 className="popular-content">Logo Design</h4>
              <h4 className="popular-content">Brochure</h4>
              <h4 className="popular-content">Label Design</h4>
            </div>
          </div>
          <hr />
        </div>

        <div className="blogs-container">
          <div className="blogs-heading">
            <p className="heading">Our Blogs</p>
            <p className="content">Check out our Latest Blog</p>
          </div>
          <div className="blogs-content">
            <Blogs
              image={blogs1}
              heading={"Featured on: Sep 15, 2021"}
              paragraph={"Wedding Photography at Goa"}
            />
            <Blogs
              image={blogs1}
              heading={"Featured on: Sep 15, 2021"}
              paragraph={"Photography: Expectations vs. Reality"}
            />

            <div className="trending-container">
              <div className="trending-heading">
                <h6>Trending Now</h6>
              </div>
              <TrendingNow
                image={trending2}
                heading={
                  "Creative Industries are on the verge of depletion due to COVID-19"
                }
                paragraph={
                  "In a period where many industries remain highly unclear,others want to grasp how COVID-19 impact"
                }
              />
              <hr />
              <TrendingNow
                image={trending2}
                heading={"Photography: Expectations vs. Reality"}
                paragraph={
                  "Most of the time without any hands-on experience in photography, professional and advanced photography actually"
                }
              />
              <hr />
              <TrendingNow
                image={trending2}
                heading={"Wedding Photography at Goa"}
                paragraph={
                  " Wedding Photography in Goa If not, every couple when they make their list of Pre-wedding shoot`{'}'}`"
                }
              />
              <hr />
            </div>
          </div>
        </div>

        <div className="real-wedding-container">
          <div className="real-wedding-heading">
            <p className="heading">Real Wedding</p>
            <p className="content">List your wedding and browse portfolio</p>
          </div>
          <div className="real-wedding-content">
            <div className="wedding-card-container">
              <WeddingCard
                image1={wedding1}
                image2={collection1}
                image3={collection2}
                image4={collection2}
                heading={"Danielle & Ronnie"}
                paragraph={"38 photos. Kittery,Polland"}
              />
              <WeddingCard
                image1={wedding1}
                image2={collection1}
                image3={collection2}
                image4={collection2}
                heading={"Danielle & Ronnie"}
                paragraph={"38 photos. Kittery,Polland"}
              />
              <WeddingCard
                image1={wedding1}
                image2={collection1}
                image3={collection2}
                image4={collection2}
                heading={"Danielle & Ronnie"}
                paragraph={"38 photos. Kittery,Polland"}
              />
            </div>
          </div>
          <div className="view-more-wedding">
            <button>View more weddings</button>
          </div>
        </div>

        <br />
        <br />

        <div className="offers-container">
          <div className="offers">
            <div className="offers-header">
              <p className="offers-heading">Best Offers </p>
              <p className="offers-content">
                Discover the best offers on our services
              </p>
            </div>
            <div className="offers-content">
              <Offers
                image1={offers1}
                heading1={"Wedding Packages"}
                heading2={"DISCOUNT"}
                image2={removebg}
                heading3={"BOOK NOW"}
              />
              <hr />
              <Offers
                image1={offers1}
                heading1={"Wedding Packages"}
                heading2={"DISCOUNT"}
                image2={removebg}
                heading3={"BOOK NOW"}
              />
              <hr />
              <Offers
                image1={offers1}
                heading1={"Wedding Packages"}
                heading2={"DISCOUNT"}
                image2={removebg}
                heading3={"BOOK NOW"}
              />
              <hr />
              <Offers
                image1={offers1}
                heading1={"Wedding Packages"}
                heading2={"DISCOUNT"}
                image2={removebg}
                heading3={"BOOK NOW"}
              />
            </div>
          </div>
        </div>

        <hr />
        <br />

        <div className="testimonial-container">
          <div className="testimonial">
            <div className="testimonial-image">
              <img src={test1} />
              <img src={test2} />
              <img src={test3} />
            </div>
            <div className="testimonial-content">
              <div className="testimonial-header">
                <div className="testimonial-heading">
                  <h2>Testimonials</h2>
                  <p>Words from our client</p>
                </div>
                <div className="testimonial-buttons">
                  <button>Google</button>
                  <button>Facebook</button>
                  <button>Weddingwire</button>
                  <button>WedMeGood</button>
                </div>
              </div>
              <div className="testimonial-cards">
                <TestimonialCard
                  image={testRoundImg}
                  paragraph={
                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet`{}` "
                  }
                />
                <TestimonialCard
                  image={testRoundImg}
                  paragraph={
                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet`{}` "
                  }
                />
                <TestimonialCard
                  image={testRoundImg}
                  paragraph={
                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet`{}` "
                  }
                />
              </div>
            </div>
          </div>
        </div>

        <br />
        <hr />

        <div className="awards-container">
          <div className="awards">
            <div className="awards-image">
              <img src={awardsImg} />
            </div>
            <div className="rating-container">
              <AwardContainer image1={rating1} image2={rating2} />
              <AwardContainer image1={rating1} image2={rating2} />
              <AwardContainer image1={rating1} image2={rating2} />
            </div>
          </div>
        </div>

        <div className="success-container">
          <div className="success-header">
            <p className="success-heading">Our Success </p>
            <p className="success-content">Journey of our success.</p>
          </div>
          <div className="success-remaining-container">
            <div className="success-remaining">
              <Success
                paragraph={
                  "Back in 2019, FliqaIndia recognize as a startup with DPIT in Startup India."
                }
              />
              <Success
                paragraph={
                  "Back in 2019, FliqaIndia recognize as a startup with DPIT in Startup India."
                }
              />
              <Success
                paragraph={
                  "Back in 2019, FliqaIndia recognize as a startup with DPIT in Startup India."
                }
              />
              <Success
                paragraph={
                  "Back in 2019, FliqaIndia recognize as a startup with DPIT in Startup India."
                }
              />
              <Success
                paragraph={
                  "Back in 2019, FliqaIndia recognize as a startup with DPIT in Startup India."
                }
              />
            </div>
          </div>
        </div>

        <div className="photography-container">
          <div
            className="photography-background"
            style={{ backgroundImage: `url(${photography1})` }}
          >
            <div className="photography-content">
              <div className="photography-content-left">
                <p>ULTIMATE COURSE IN</p>
                <h2>PHOTOGRAPHY</h2>
              </div>
              <div className="photography-content-right">
                <img src={cameraImg} />
              </div>
            </div>
          </div>
        </div>

        <div className="contact-container">
          <div className="upper-box">
            <div
              className="back-image"
              style={{ backgroundImage: `url(${freelanceImg})` }}
            >
              <div className="freelance-content">
                <div className="freelance-para">
                  <h3>Grow your freelancing career with Fliqa Associate</h3>
                  <p>
                    Register yourself Verification & Quality Check Verified
                    Associate at FliqaIndia
                  </p>
                </div>
                <div className="join-button">
                  <button>Join Now</button>
                </div>
              </div>
            </div>
          </div>
          <div className="lower-box"></div>
        </div>
      </div>
    </div>
  );
}
export default App;
