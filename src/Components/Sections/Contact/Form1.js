import React from "react";
import styles from "./Form1.module.css";
const Form1 = () => {
  const data = {
    container: {
      style: ` ${styles.contact}`,
      value: "",
    },
    heading :{
      style: `${styles.content_h2}`,
      value: "Contact Us",  
     }, 
     paragraph: {
      style: `${styles.content_p}`,
      value: " Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmodtempor incidunt ut labore et dolore magna aliqua. Ut enim ad minimeniam, quis nostrum",  
  
     }, address:{
      style: `${styles.text_address_p}`,
      value: "xxx, yyy, zzz - 123123",  
     },
     phone:{
      style: `${styles.text_address_p}`,
      value: "99887 766554",  
     },
     email:{
      style: `${styles.text_address_p}`,
      value: "sample@gmail.com",  
     },
  

  }

  return (
    <>
      <section id="#contact">
        <section class={data.container.style}>
          <div class={`${styles.content}`}>
            <h2 className={data.heading.style} >{data.heading.value}</h2>
            <p className={data.paragraph.style} >
           {data.paragraph.value}
            </p>
          </div>
          <div class={`container ${styles.con}`}>
            <div class={`${styles.contactInfo}`} >
              <div class={`${styles.box}`}>
                <div class= {`${styles.icon_address}`}>
                  <i class="fa fa-location-arrow ico" aria-hidden="true"></i>
                </div>
                <div class={`${styles.text_address}`}>
                  <h3>Address</h3>
                  <p className={data.address.style} >{data.address.value}</p>
                </div>
              </div>

              <div class={`${styles.box}`}>
                <div class={`${styles.icon_address}`}>
                  <i
                    class="fa fa-volume-control-phone ico"
                    aria-hidden="true"
                  ></i>
                </div>
                <div class={`${styles.text_address}`}>
                  <h3>Phone</h3>
                  <p className={data.phone.style} >{data.phone.value}</p>
                </div>
              </div>

              <div class={`${styles.box}`}>
                <div class={`${styles.icon_address}`}>
                  <i class="fa fa-envelope ico" aria-hidden="true"></i>
                </div>
                <div class={`${styles.text_address}`}>
                  <h3>Email</h3>
                  <p className={data.email.style}  >{data.email.value}</p>
                </div>
              </div>
            </div>

            <div class= {`${styles.ContactForm}`}>
              <form>
                <h2>Send Us A Message</h2>
                <div class= {`${styles.inputbox}`}>
                  <label>Name</label>
                  <input type="text" required="required" />
                </div>
                <div class={`${styles.inputbox}`}>
                  <label>Email</label>
                  <input type="text" required="required" />
                </div>
                <div class={`${styles.inputbox}`}>
                  <label>Your Message</label>
                  <textarea required="required" />
                </div>
                <div class={`${styles.inputbox}`}>
                  <input type="submit" value="Send" />
                </div>
              </form>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Form1;
