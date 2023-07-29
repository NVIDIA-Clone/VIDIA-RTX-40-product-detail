import { useContext } from "react";
import GalleryContext from "./GalleryContext";

const GallerySelection = () => {
  const { galleryPictures, setPicture, picture } = useContext(GalleryContext);
  // console.log(galleryPictures);
  //Handle Click event
  function handleClick(e) {
    let index = e.currentTarget.id;
    setPicture(galleryPictures[index]);

    //color is moving one behind?? Its 1am I will revisit
    for (let i = 0; i < galleryPictures.length; i++) {
      const elem = galleryPictures[i];
      if (elem.id !== picture.id + 1) {
        elem.selected = false;
      }
    }
    console.log(picture.id );

    picture.selected = true;
  }
  //On Hover event

  return (
    <div className="relative flex flex-col items-center justify-between bottom-14 w-[90%]">
      <div className="opacity-50 bg-black z-0 h-[56px] flex items-center mb-4 w-full">
        <h1 className="text-[white] z-50 opacity-100 pl-[20px] text-[.875rem]">
          PeForce RTX 4090
        </h1>
        <img src="" alt="" />
        {/* insert new tab icon above */}
        <img src="" alt="" />
        {/* insert fullscreen icon above  */}
      </div>
      <div
        id="picture-carousel"
        className="flex items-center justify-around w-full"
      >
        <svg
          width="20px"
          height="20px"
          viewBox="1 -2 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="rotate-180 opacity-50 hover:opacity-100"
        >
          <path
            d="M10 7L15 12L10 17"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {galleryPictures.map((elem, index) => (
          <div
            key={index}
            // className="border border-black hover:border-solid hover:border-[#76B900]"
            className={!elem.selected ? "border border-black border-solid opacity-75 hover:opacity-100" : "border border-[#76B900] border-solid opacity-100"}
            
          >
            <img
              id={index}
              onClick={handleClick}
              src={elem.source}
              height={150}
              width={256}
            />
          </div>
        ))}
        <svg
          width="20px"
          height="20px"
          viewBox="1 -2 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="opacity-50 hover:opacity-100"
        >
          <path
            d="M10 7L15 12L10 17"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default GallerySelection;
