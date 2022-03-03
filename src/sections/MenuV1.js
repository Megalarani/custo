// /* eslint-disable */
// import React from "react";
// import { logoDark, logoLight } from "../assets";
// import loadJquery from '../jquery/loadJquery'
// import { useEdit, useMyData } from "../edit";

// const defaults = {
//   section_styles:{
//     data:{
//       container:{
//         label: 'Container',
//         value: "navbar navbar-expand-md navbar-dark"
//       },
      
//     }
//   },
//   logo: {
//     data:{
//         layout:{
//             label:"layout",
//             value:"headerlogo"

//         },
//       image:{
//         label:'Image',
//         value: "/Images/mob.png",
//         image: true,
//       },
//       image_style:{
//         label:'Style',
//         value: "img-fluid",
//       },
//     }
//   },
//   unoder_list:{
//     nav_style:{
//         label:"nav",
//         value:"nav-link"
//     },
//       List1:{

//         nav_text:{
//             label:"text",
//             value:"Home"
//         },
//         nav_link:{
//             label:"link",
//             value:"#Home"
//         }
        

//       },
//       List2:{

//         nav_text:{
//             label:"text",
//             value:"About"
//         },
//         nav_link:{
//             label:"link",
//             value:"#About"
//         }
        

//       },
//       List3:{

//         nav_text:{
//             label:"text",
//             value:"Gallery"
//         },
//         nav_link:{
//             label:"link",
//             value:"#Gallery"
//         }
        

//       },
//       List4:{

//         nav_text:{
//             label:"text",
//             value:"Curriculam"
//         },
//         nav_link:{
//             label:"link",
//             value:"#Curriculam"
//         }
        

//       },
//       List5:{

//         nav_text:{
//             label:"text",
//             value:"Contact us"
//         },
//         nav_link:{
//             label:"link",
//             value:"#Contact"
//         }
        

//       }
//   }
  

  
  
  
// }


// const MenuV1 = ({id}) => {
//   // Edits
//   const {_} = useEdit(defaults, id);
//   useMyData(id, defaults);

// // Load Jquery
//   const [loaded, setLoaded] = React.useState(false)
//   React.useEffect(()=>{
//     loadJquery(()=>setLoaded(true))
//   },[])

//   if(!loaded){
//     return <div></div>
//   }
  
//   return (

// <nav className={_.section_styles.data.container.value}>
// {/* <!-- Brand --> */}
// <div className={_.logo.data.layout.value}>
//   <img className={_.logo.data.image_style.value} src={_.logo.data.image.value} />
// </div>

// {/* <!-- Toggler/collapsibe Button --> */}
// <button
//   class="navbar-toggler"
//   type="button"
//   data-toggle="collapse"
//   data-target="#collapsibleNavbar"
// >
//   <span class="navbar-toggler-icon"></span>
// </button>

// {/* <!-- Navbar links --> */}
// <div class="navbar-collapse" id="collapsibleNavbar">
//   <ul class="navbar-nav">
//     <li class="nav-item">
//       <a className={_.unoder_list.nav_style.value} href={_.unoder_list.List1.nav_link.value}>
//       {_.unoder_list.List1.nav_text.value}
//       </a>
//     </li>
//     <li class="nav-item">
//     <a className={_.unoder_list.nav_style.value} href={_.unoder_list.List2.nav_link.value}>
//       {_.unoder_list.List2.nav_text.value}
//       </a>
//     </li>
//     <li class="nav-item">
//     <a className={_.unoder_list.nav_style.value} href={_.unoder_list.List3.nav_link.value}>
//       {_.unoder_list.List3.nav_text.value}
//       </a>
//     </li>
//     <li class="nav-item">
//     <a className={_.unoder_list.nav_style.value} href={_.unoder_list.List4.nav_link.value}>
//       {_.unoder_list.List4.nav_text.value}
//       </a>
//     </li>
//     <li class="nav-item">
//     <a className={_.unoder_list.nav_style.value} href={_.unoder_list.List5.nav_link.value}>
//       {_.unoder_list.List5.nav_text.value}
//       </a>
//     </li>
    
//   </ul>
// </div>
// </nav>

//   );
// };

// export default MenuV1;

