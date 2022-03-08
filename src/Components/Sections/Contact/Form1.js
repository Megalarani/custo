
import React, { useContext, useState } from "react";
import AuthContext from "../../../Context/Context";
import styles from "./Form1.module.css";
import Loader from "../../../loader/Loader";
const Form1 = () => {
  const [loading, setloading] = useState(false);
  const ctx = useContext(AuthContext);
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
  const [localData, setLocalData] = useState({
    address: ctx.websiteData.address,
    phone: ctx.websiteData.phone,
    email: ctx.websiteData.email,
    content5:ctx.websiteData.content5
  });
  const onChangeHandler = (event) => {
    let val = event.target.value;
    setLocalData((prevState) => {
      return {
        ...prevState,
        [event.target.id]: val,
      };
    });
  };
  return (

    
    <>
     {ctx.isEditable ? (
        <div className="row py-3 justify-content-end">
          <div className="saveButton" onClick={()=>{
            setloading(true);
            ctx.updateData(localData)
            setTimeout(() => {      
            setloading(false);
          }, 2000)
             }}>
            
            Save
          </div>
        </div>
      ) : (
        <></>
      )}
      {loading && (
      <>
      <Loader/>
      </>
    )}
      <section id="#contact">
        <section class={data.container.style}>
          <div class={`${styles.content}`}>
            <h2 className={data.heading.style} >{data.heading.value}</h2>
            {ctx.isEditable ? (
            <>
            
              <textarea
                id="content5"
                className={`${styles.inputPara}`}
                onChange={onChangeHandler}
                value={localData.content5}
              />
            </>
          ) : (
            <>
              <p className={data.paragraph.style}>{ctx.websiteData.content5}</p>
            </>
          )}
            
            
          
           
          </div>
          <div class={`container ${styles.con}`}>
            <div class={`${styles.contactInfo}`} >
              <div class={`${styles.box}`}>
                <div class= {`${styles.icon_address}`}>
                  <i class="fa fa-location-arrow ico" aria-hidden="true"></i>
                </div>
                <div class={`${styles.text_address}`}>
                  <h3>Address</h3>
                
                  {ctx.isEditable ? (
            <>
            
              <textarea
                id="address"
                className={`${styles.inputtext}`}
                onChange={onChangeHandler}
                value={localData.address}
              />
            </>
          ) : (
            <>
              <p className={data.address.style}>{ctx.websiteData.address}</p>
            </>
          )}
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
                  {ctx.isEditable ? (
            <>
            
              <input
                id="phone"
                className={`${styles.inputtext}`}
                onChange={onChangeHandler}
                value={localData.phone}
              />
            </>
          ) : (
            <>
              <p className={data.phone.style}>{ctx.websiteData.phone}</p>
            </>
          )}
                </div>
              </div>

              <div class={`${styles.box}`}>
                <div class={`${styles.icon_address}`}>
                  <i class="fa fa-envelope ico" aria-hidden="true"></i>
                </div>
                <div class={`${styles.text_address}`}>
                  <h3>Email</h3>
                  {ctx.isEditable ? (
            <>
            
              <input
                id="email"
                className={`${styles.inputtext}`}
                onChange={onChangeHandler}
                value={localData.email}
              />
            </>
          ) : (
            <>
              <p className={data.email.style}>{ctx.websiteData.email}</p>
            </>
          )}
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
