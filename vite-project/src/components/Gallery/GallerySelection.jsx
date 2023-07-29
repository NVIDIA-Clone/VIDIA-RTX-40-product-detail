import { useContext } from "react";
import GalleryContext from "./GalleryContext";

const GallerySelection = () => {
  const { galleryPictures, setPicture } = useContext(GalleryContext);

  //Handle Click event
  function handleClick(e) {
    let index = e.currentTarget.id;
    setPicture(galleryPictures[index]);
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
      <div id="picture-carousel" className="flex items-center justify-around w-full">
        <svg
          width="20px"
          height="20px"
          viewBox="1 -2 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="rotate-180 "
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
            className="border border-black hover:border-solid hover:border-[#76B900] overflow-x-hidden"
          >
            <img
              id={index}
              onClick={handleClick}
              src={elem.source}
              alt=""
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
          className=""
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
