import React from "react";
import "./Home.css";

export const Home = () => {
  return (
    <>
      <header>
        <div className="container">
          <div className="logo">
            <h2>
              <a href="/">template</a>
            </h2>
          </div>
          <div className="menu">
            <ul>
              <li>
                <a href="/">home</a>
              </li>
              <li>
                <a href="#aboutus">about us</a>
              </li>
              <li>
                <a href="#services">services</a>
              </li>
              <li>
                <a href="#contactus">contact us</a>
              </li>
              <li className="o-btn">
                <a href="#getaquote">get a quote</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="clear"></div>
      </header>
      {/* HOME Section */}
      <section className="hero">
        <div className="overlay">
          <div className="container">
            <h1> welcome to home</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages.
            </p>
          </div>
        </div>
      </section>
      {/* welcome to template section */}
      <section className="my-grid">
        <div className="container">
          <div className="heading">
            <h1>welcome to template</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages.
            </p>
          </div>
          <div className="col33">
            <div className="card">
              <i class="fas fa-globe"></i>
              <h3>web development</h3>
              <a href="#">
                <button className="btn"> see more</button>
              </a>
            </div>
          </div>
          <div className="col33">
            <div className="card">
              <i class="fas fa-mobile"></i>
              <h3>mobile development</h3>
              <a href="#">
                <button className="btn"> see more</button>
              </a>
            </div>
          </div>
          <div className="col33">
            <div className="card">
              <i class="fas fa-desktop"></i>
              <h3>software development</h3>
              <a href="#">
                <button className="btn"> see more</button>
              </a>
            </div>
          </div>
          <div className="clear"></div>
        </div>
      </section>
      {/*----------- OFFer section------- */}
      <section className="call2action">
        <div className="container">
          <div className="offer">
            <h1>intrested in buying these products from us?</h1>
            <p>
              Line 100:15: The href attribute requires a valid value to be
              accessible. Provide a valid, navigable address as the href value.
              If you cannot provide a valid href, but still need the element to
              resemble a link, use a button and change it with appropriate
              styles. Learn more:
            </p>
            <br />
            <a href="#">
              <button className="btn"> see more</button>
            </a>
          </div>
        </div>
      </section>
      {/*----------- subscription section -------------*/}
      <section className="newsletter">
        <div className="container">
          <div className="">
            <h1>subscribe to news letter</h1>
          </div>
          <form method="post">
            <div className="col66">
              <div className="form-field">
                <input
                  type="email"
                  className="field"
                  name="email"
                  placeholder="example@email.com"
                  required
                ></input>
              </div>
            </div>
            <div className="col33">
              <div className="form-field">
                <input
                  type="submit"
                  name="submit"
                  value="submit"
                  className="btn"
                ></input>
              </div>
            </div>
            <div className="clear"></div>
          </form>
        </div>
      </section>
      {/* <---------Footer Starts-----------> */}
      <footer>
        <div className="container">
          <div className="col25">
            <div className="inner">
              <h4>about us</h4>
              <p>
                he href attribute requires a valid value to be accessible.
                Provide a valid, navigable address as the href value. If you
                cannot provide a valid href.
              </p>
            </div>
          </div>
          <div className="col25">
            <div className="inner">
              <h4>important links</h4>
              <ul className="fmenu">
                <li>
                  <a href="#">home</a>
                </li>
                <li>
                  <a href="#">about us</a>
                </li>
                <li>
                  <a href="#">services</a>
                </li>
                <li>
                  <a href="#">contact us</a>
                </li>
                <li>
                  <a href="#">get a quote</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col25">
            <div className="inner">
              <h4>useful links</h4>
              <ul className="fmenu">
                <li>
                  <a href="#">privacy policy</a>
                </li>
                <li>
                  <a href="#">refund policy</a>
                </li>
                <li>
                  <a href="#">terms & conditions</a>
                </li>
                <li>
                  <a href="#">terms & use</a>
                </li>
                <li>
                  <a href="#">how it works</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col25">
            <div className="inner">
              <h4>reach us</h4>
              <p>
                <i className="fa fa-phone"></i> (+92) 332 5738393
                <br />
                <i className="fa fa-envelope"></i> info@email.com
                <br />
                <i className="fa fa-map-marker"></i> street # x, abc town,
                pakistan
              </p>
              <div className="social-icons">
                <ul className="s-icons">
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="clear"></div>
          <hr />
          <p className="too">
            All Right Reserved &copy; 2021 | developed by
            <a href="#" className="link">
              Hussain
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};
