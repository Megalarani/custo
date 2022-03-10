import { useEffect, useState } from "react";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage, db } from "../../services/firebase";
import {
  arrayUnion,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  collection,
} from "firebase/firestore";
const Gallery = () => {
  useEffect(() => {
    // if (ctx.getWebstieData === null) {
    //   ctx.getWebstieData();
    //   ctx.getUserData();
    //   ctx.getLayoutData();
    //   setTimeout(() => {
    //     ctx.formLayout();
    //   }, 3000);
    //  }
    ctx.updateIsEditable(false);
  }, []);
  const [media, setMedia] = useState();
  const [mediaError, setMediaError] = useState(null);
  const [gallerytype, setGallerytype] = useState(null);

  const [galdata, setGaldata] = useState(null);
  console.log(media, "medi");

  const handleUpload = (e) => {
    setMediaError(null);

    let selected = e.target.files[0];

    if (!selected == null) {
      setMediaError("Please select file");
      return;
    }

    setMediaError(null);
    setMedia(selected);
  };

  function uploadmedia(e) {
    e.preventDefault();
    const uploadPath = `Media/${media.name}`;
    const storageRef = ref(storage, uploadPath);

    if (
      media.name.includes(".jpeg") ||
      media.name.includes(".jpg") ||
      media.name.includes(".png")
    ) {
      uploadBytes(storageRef, media).then((snapshot) => {
        getDownloadURL(storageRef).then((url) => {
          let newPictures = url;
          updateDoc(doc(db, "gallery", "yprpJe1AkDdPMOqwtgRppoFgX8D3"), {
            images: arrayUnion(newPictures),
          });
        });
      });
    } else {
      uploadBytes(storageRef, media).then((snapshot) => {
        getDownloadURL(storageRef).then((url) => {
          let newVideos = url;
          updateDoc(doc(db, "gallery", "yprpJe1AkDdPMOqwtgRppoFgX8D3"), {
            videos: arrayUnion(newVideos),
          });
        });
      });
    }
  }
  useEffect(() => {
    getMedia();
  }, []);
  async function getMedia() {
    const docRef = doc(db, "gallery", "yprpJe1AkDdPMOqwtgRppoFgX8D3");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setGaldata(docSnap.data());
    } else {
      console.log("No Such Document");
    }
  }
  function Allmedia() {
    setGallerytype(null);
  }
  function Allimages() {
    setGallerytype("pictures");
  }
  function Allvideos() {
    setGallerytype("videos");
  }
  let ui = null;
  if (gallerytype === null) {
    ui = (
      <>
        {galdata !== null &&
          galdata.images.length !== 0 &&
          galdata.images.map((data, index) => {
            return (
              <div key={index}>
                <img className="all watch" src={data.pic} />
              </div>
            );
          })}
        {galdata !== null &&
          galdata.videos.length !== 0 &&
          galdata.videos.map((data, index) => {
            return (
              <div key={index} className="video-gal">
                <iframe
                  src={data.vid}
                  style={{ width: "500", height: "500" }}
                ></iframe>
                ;
              </div>
            );
          })}
      </>
    );
  } else if (gallerytype !== null && gallerytype === "pictures") {
    ui = (
      <>
        {galdata !== null &&
          galdata.images.length !== 0 &&
          galdata.images.map((data, index) => {
            return (
              <div>
                <img key={index} class="all watch" src={data.pic} />
              </div>
            );
          })}
      </>
    );
  } else if (gallerytype !== null && gallerytype === "videos") {
    ui = (
      <>
        {galdata !== null &&
          galdata.videos.length !== 0 &&
          galdata.videos.map((data) => {
            return (
              <div className="video-gal">
                <iframe
                  src={data.vid}
                  style={{ width: "500", height: "500" }}
                ></iframe>
                ;
              </div>
            );
          })}
      </>
    );
  }

  return (
    <>
      <section className="Personalise-gall my-2">
        <div className="wrapper">
          <div className="cgal-sect ">
            <h2>Upload Media</h2>
            <div className="upload-container">
              <div className="border-container">
                <div className="icons fa-4x">
                  <i className="fa fa-image  fimage mx-2"></i>
                  <i className="fa fa-film film"></i>
                  <i className="fa fa-folder-open folder mx-2"></i>
                </div>
                {/* <input type="file" id="file-upload"/> */}
                <form onSubmit={uploadmedia}>
                  <p>
                    Drag and drop files here, or
                    <a href="#" id="file-browser">
                      <label for="pic">
                        <span>
                          {" "}
                          <i className="fa fa-upload mx-2"> browse </i>{" "}
                        </span>
                        <input
                          type="file"
                          id="pic"
                          onChange={handleUpload}
                          accept="file_extension|video/*|image/*|media_type"
                        />
                      </label>
                    </a>{" "}
                    your computer.
                  </p>
                  <button type="submit" className="btn my-3">
                    {" "}
                    <i className="fa fa-upload mx-2 "></i> Click to upload a
                    data
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-center mt-5">Gallery</h2>
        <ul class="switcher">
          <li data-cat=".all" onClick={Allmedia}>
            All
          </li>

          <li data-cat=".pictures" onClick={Allimages}>
            Pictures
          </li>
          <li data-cat=".Videos" onClick={Allvideos}>
            Videos
          </li>
        </ul>

        <div class="gallery mx-2">{ui}</div>
      </section>
    </>
  );
};

export default Gallery;
