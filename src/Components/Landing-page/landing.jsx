import "./landing.css";
import sea from "../../Assets/bg-masthead.jpg";
import image1 from "../../Assets/image1.jpg";
import image2 from "../../Assets/image2.jpg";
import image3 from "../../Assets/image3.jpg";
import phone from "../../Assets/bg-showcase-1.jpg";
import code from "../../Assets/bg-showcase-2.jpg";
import laptop from "../../Assets/bg-showcase-3.jpg";
import pic1 from "../../Assets/testimonials-1.jpg";
import pic2 from "../../Assets/testimonials-2.jpg";
import pic3 from "../../Assets/testimonials-3.jpg";
import facebook from "../../Assets/fb.png";
import instagram from "../../Assets/in.png";
import twitter from "../../Assets/tw.png";

const Landing = () => {
  return (
    <div className="container">
      <div className="header-container">
        <div className="label-container">
          <label className="label">Start Bootstrap</label>
        </div>
        <div className="button-container">
          {/* <button className="button">Sign Up</button> */}
          <a className="button" href="#banner1-signUp">
            Sign Up
          </a>
        </div>
      </div>
      <div className="banner-signUp">
        <div className="image">
          <img src={sea} alt="banner" />
        </div>
        <div className="banner">
          <div className="para">
            <h1>
              Generate more leads with a<br></br> professional landing page!
            </h1>
          </div>
          <div className="input">
            <input className="text" type="text" placeholder="Email Address" />
            <span>
              <button className="submit">Submit</button>
            </span>
          </div>
        </div>
      </div>
      <div className="section-container">
        <div className="section-left">
          <img src={image1} alt="image1" />
        </div>
        <div className="section-middle">
          <img src={image2} alt="image2" />
        </div>
        <div className="section-right">
          <img src={image3} alt="image3" />
        </div>
      </div>
      <div className="section-body1">
        <div className="body-left">
          <p>
            <b>Fully Responsive Design</b>
            <br></br> When you use a theme created by Start Bootstrap, you know
            that the theme will look great on any device, whether it's a phone,
            tablet, or desktop the page will behave responsively!
          </p>
        </div>
        <div className="body-right">
          <img src={phone} alt="phone" />
        </div>
      </div>
      <div className="section-body2">
        <div className="body-left">
          <img src={code} alt="code" />
        </div>
        <div className="body-right">
          <p>
            <b> Updated For Bootstrap 5</b>
            <br></br> Newly improved, and full of great utility classes,
            Bootstrap 5 is leading the way in mobile responsive web development!
            All of the themes on Start Bootstrap are now using Bootstrap 5!
          </p>
        </div>
      </div>
      <div className="section-body3">
        <div className="body-left">
          <p>
            <b>Easy to Use & Customize</b>
            <br></br> Landing Page is just HTML and CSS with a splash of SCSS
            for users who demand some deeper customization options. Out of the
            box, just add your content and images, and your new landing page
            will be ready to go!
          </p>
        </div>
        <div className="body-right">
          <img src={laptop} alt="laptop" />
        </div>
      </div>
      <div className="people-container">
        <div className="topic">
          <h1>What people are saying...</h1>
        </div>
        <div className="people-image">
          <div className="left">
            <div className="top">
              <div className="top-image">
                <img src={pic1} alt="pic1" />
              </div>
            </div>
            <div className="bottom">
              <h4>Margaret E.</h4>
              <p>"This is fantastic! Thanks so much guys!"</p>
            </div>
          </div>
          <div className="middle">
            <div className="top">
              <div className="top-image">
                <img src={pic2} alt="pic2" />
              </div>
            </div>
            <div className="bottom">
              <h4>Fred S.</h4>
              <p>
                "Bootstrap is amazing. I've been using it to create lots of
                super nice landing pages."
              </p>
            </div>
          </div>
          <div className="right">
            <div className="top">
              <div className="top-image">
                <img src={pic3} alt="pic3" />
              </div>
            </div>
            <div className="bottom">
              <h4>Sarah W.</h4>
              <p>
                "Thanks so much for making these free resources available to
                us!"
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="banner1-signUp" id="banner1-signUp">
        <div className="image">
          <img src={sea} alt="banner" />
        </div>
        <div className="banner">
          <div className="para">
            <h1>Ready to get started? Sign up now!</h1>
          </div>
          <div className="input">
            <input className="text" type="text" placeholder="Email Address" />
            <span>
              <button className="submit">Submit</button>
            </span>
          </div>
        </div>
      </div>
      <div className="footer-container">
        <div className="left">
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>.</li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>.</li>
            <li>
              <a href="#">Terms of Use</a>
            </li>
            <li>.</li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>

          <p>© Your Website 2023. All Rights Reserved.</p>
        </div>
        <div className="right">
          <img src={facebook} alt="facebook" height={30} width={30} />
          <img src={twitter} alt="twitter" height={30} width={30} />
          <img src={instagram} alt="instagram" height={30} width={30} />
        </div>
      </div>
    </div>
  );
};

export default Landing;
