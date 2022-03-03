import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import DraggableList from "../../Components/Layout/DraggableList";
import Heros from "../../Components/Home/Home/Hero";
import Card from "../../Components/Home/Home/Card";
import About from "../../Components/Home/Home/About";
import Video from "../../Components/Home/Home/Video";
import Visit from "../../Components/Home/Home/Visit";
import Preschool from "../../Components/Home/Home/Preschool";
import Testimonal from "../../Components/Home/Home/Testimonal";
import Gallery from "../../Components/Home/Home/Gallery";

const Layout = () => {
  const [sectionsList, setSectionsList] = useState([]);
  const [layout, setLayout] = useState([]);
  const [school, setSchool] = useState(null);
  useEffect(() => {
    // console.log("useeffect");
    // let list = [];
    // db.collection("school")
    //   .get()
    //   .then((data) => {
    //     data.forEach((doc) => {
    //       list.push(doc.data());
    //     });
    //     setSchool(list);
    //   });
    getData();
  }, []);

  async function getData() {
    const querySnapshot = await getDocs(collection(db, "school"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      setSchool(doc.data());
    });
  }
  const items = [
    {
      heading: "Menubar",
      content: ["Navbar_1"],
    },
    {
      heading: "Hero",
      content: ["Hero_1", "Hero_2", "Hero_3", "Hero_4"],
    },
    {
      heading: "Gallery",
      content: ["Gallery_1"],
    },
    {
      heading: "Testimonals",
      content: ["Slider_1"],
    },
    {
      heading: "Contact",
      content: ["Form_1"],
    },
    {
      heading: "Footer",
      content: ["Footer_1"],
    },
  ];

  const handleOnDragEnd = (movedItem) => {
    const newArr = Array.from(sectionsList);
    const [reorderedItem] = newArr.splice(movedItem.source.index, 1);
    newArr.splice(movedItem.destination.index, 0, reorderedItem);
    setSectionsList(newArr);
  };

  if (sectionsList.length === 0) {
    var tempArr = [];
    for (var i = 0; i < items.length; i++) {
      tempArr = tempArr.concat(items[i].content);
    }
    setSectionsList(tempArr);
  }
  const Footer = () => {
    return (
      <footer>
        <div class="ft-col">
          <h2>Copyrights©Divicare </h2>
        </div>
      </footer>
    );
  };
  return (
    <>
      <div className="row">
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <div
            className="col-2 p-0 special-scroll"
            style={{ height: "91vh", overflowY: "auto" }}
          >
            <DraggableList sectionsList={sectionsList} />
          </div>
          <div className="col-10 p-0">
            <section class="head">
              <Heros school={school} />
              <Card />
            </section>
            <About school={school} />
            <Video school={school} />
            <Visit />
            <Preschool />
            <Curriculum />
            <Gallery school={school} />
            <Testimonal school={school} />
            <Contact school={school} />
            <Footer />
          </div>
        </DragDropContext>
      </div>
    </>
  );
};

export default Layout;
