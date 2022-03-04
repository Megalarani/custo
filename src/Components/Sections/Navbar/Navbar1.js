import React from "react";

const Navbar1 = () => {
    const data = {
        container: {
          style: "navbar navbar-expand-md navbar-dark",
          value: "",
        },
        headerlogo: {
          style: "headerlogo",
          value: "/Images/mob.png",
        },
       menu1 :{
        style:"nav-link",   
        value:"Home",
           
       },
       menu2 :{
        style:"nav-link",   
        value:"About",
           
       },
       menu3 :{
        style:"nav-link",   
        value:"Gallery",
           
       },
       menu4 :{
        style:"nav-link",   
        value:"curriculam",
           
       },
       menu5 :{
        style:"nav-link",   
        value:"Contact us",
           
       }
      };

    return (
        <>
         <nav class={data.container.style}>
        {/* <!-- Brand --> */}
        <div class={data.headerlogo.style}>
          <img class="img-fluid" src={data.headerlogo.value}/>
        </div>

        {/* <!-- Toggler/collapsibe Button --> */}
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        {/* <!-- Navbar links --> */}
        <div class="navbar-collapse" id="collapsibleNavbar">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class={data.menu1.style} href="#Home">
             {data.menu1.value}
              </a>
            </li>
            <li class="nav-item">
              <a class={data.menu2.style} href="#About">
              {data.menu2.value}
              </a>
            </li>
            <li class="nav-item">
              <a class={data.menu3.style} href="#Gallery">
              {data.menu3.value}
              </a>
            </li>
            <li class="nav-item">
              <a class={data.menu4.style} href="#curriculam">
              {data.menu4.value}
              </a>
            </li>
            <li class="nav-item">
              <a class={data.menu5.style} href="#contact">
              {data.menu5.value}
              </a>
            </li>
          
          </ul>
        </div>
      </nav>
        
        
        </>
    )
}

export default Navbar1;