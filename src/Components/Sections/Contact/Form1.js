import React from "react";

const Form1 = () => {
  return (
    <>
      <section id="#contact">
        <section class="contact">
          <div class="content">
            <h2>Contact Us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
              tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrum
            </p>
          </div>
          <div class="container ">
            <div class="contactInfo">
              <div class="box">
                <div class="icon-address">
                  <i class="fa fa-location-arrow ico" aria-hidden="true"></i>
                </div>
                <div class="text-address">
                  <h3>Address</h3>
                  <p>xxx, yyy, zzz - 123123</p>
                </div>
              </div>

              <div class="box">
                <div class="icon-address">
                  <i
                    class="fa fa-volume-control-phone ico"
                    aria-hidden="true"
                  ></i>
                </div>
                <div class="text-address">
                  <h3>Phone</h3>
                  <p>99887 766554</p>
                </div>
              </div>

              <div class="box">
                <div class="icon-address">
                  <i class="fa fa-envelope ico" aria-hidden="true"></i>
                </div>
                <div class="text-address">
                  <h3>Email</h3>
                  <p>sample@gmail.com</p>
                </div>
              </div>
            </div>

            <div class="ContactForm">
              <form>
                <h2>Send Us A Message</h2>
                <div class="inputbox">
                  <label>Name</label>
                  <input type="text" required="required" />
                </div>
                <div class="inputbox">
                  <label>Email</label>
                  <input type="text" required="required" />
                </div>
                <div class="inputbox">
                  <label>Your Message</label>
                  <textarea required="required" />
                </div>
                <div class="inputbox">
                  <input type="submit" value="Send" />
                </div>
              </form>
            </div>
          </div>
        </section>
      </section>{" "}
    </>
  );
};

export default Form1;
