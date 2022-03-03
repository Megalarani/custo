// import React from "react";
// import { useEdit, useMyData } from "../edit";

// const defaults = {
//   focus_element: {data:{inner:''}},
//   section_styles: {
//     data: {
//       container: {
//         label: "Container Styles",
//         value: ""
//       },
// }
//   },
//   foot_img:{
//         Style:{
//             label:"image_style",
//             value:"foot-img"
//         },
//        image:{
//            label:"image",
//            value:"/images/foot.jpg"
//        } 
//   },

//   foot_text:{
//       foot_style:{
//           label:"style",
//           value:"ft-col"
//       },
//       large_text_style: {
//         label: "Large Text Style",
//         value:
//           ""
//       },
//       large_text: {
//         label: "Large Text",
//         value: "Copyrights©Divicare",
//         rte: true,
//       },
//   }

  
// };

// const FooterV2 = ({ id }) => {
//   const  { _, check } = useEdit(defaults, id);
//   useMyData(id, defaults);
//   return (
//     <section id={id} className={_.section_styles.data.container.value}>
//      <div  className={_.foot_img.Style.value}>
//         <img src={_.foot_img.image.value}/>
//       </div>


//       <footer>
//         <div className={_.foot_text.foot_style.value}>
//         {check(_.foot_text.large_text.value) && (
//           <h2
//             dangerouslySetInnerHTML={{
//               __html: _.foot_text.large_text.value,
//             }}
//             className={_.foot_text.large_text_style.value}
//           ></h2>
//         )}
//         </div>
//       </footer>
      
//     </section>
//   );
// };

// export default FooterV2;
