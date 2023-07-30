import { useContext } from "react";
import GalleryContext from "./GalleryContext";

const GallerySelection = () => {
  const {
    galleryPictures,
    setPicture,
    picture,
    setIsFullscreen,
    isFullscreen,
    makeFullScreen,
    notFullScreen,
  } = useContext(GalleryContext);

  //Handle Click event
  function handleClick(e) {
    let index = e.currentTarget.id;
    setPicture(galleryPictures[index]);

    for (let i = 0; i < galleryPictures.length; i++) {
      const elem = galleryPictures[i];
      if (elem.id !== picture.id) {
        elem.selected = false;
      }
    }

    picture.selected = true;
  }

  //On Hover event

  return (
    <div className="relative flex flex-col items-center justify-between bottom-14 w-[90%]">
      <div className="opacity-50 bg-black z-0 h-[56px] flex items-center justify-between mb-4 w-full px-[20px]">
        <h1 className="text-[white] z-50 opacity-100  text-[.875rem]">
          PeForce RTX 4090
        </h1>
        <div>{/* insert other svg here */}</div>
        <div>
          {/* need svg to be thicker */}
          <svg
            fill="#f8f7f7"
            height="18px"
            width="18px"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 384.97 384.97"
            xmlSpace="preserve"
            stroke="#f8f7f7"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0" />

            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <g id="SVGRepo_iconCarrier" strokeWidth="0">
              {" "}
              <g>
                {" "}
                <g id="Fullscreen">
                  {" "}
                  <path d="M384.97,12.03c0-6.713-5.317-12.03-12.03-12.03H264.847c-6.833,0-11.922,5.39-11.934,12.223 c0,6.821,5.101,11.838,11.934,11.838h96.062l-0.193,96.519c0,6.833,5.197,12.03,12.03,12.03c6.833-0.012,12.03-5.197,12.03-12.03 l0.193-108.369c0-0.036-0.012-0.06-0.012-0.084C384.958,12.09,384.97,12.066,384.97,12.03z"/>{" "}
                  <path d="M120.496,0H12.403c-0.036,0-0.06,0.012-0.096,0.012C12.283,0.012,12.247,0,12.223,0C5.51,0,0.192,5.317,0.192,12.03 L0,120.399c0,6.833,5.39,11.934,12.223,11.934c6.821,0,11.838-5.101,11.838-11.934l0.192-96.339h96.242 c6.833,0,12.03-5.197,12.03-12.03C132.514,5.197,127.317,0,120.496,0z" />{" "}
                  <path d="M120.123,360.909H24.061v-96.242c0-6.833-5.197-12.03-12.03-12.03S0,257.833,0,264.667v108.092 c0,0.036,0.012,0.06,0.012,0.084c0,0.036-0.012,0.06-0.012,0.096c0,6.713,5.317,12.03,12.03,12.03h108.092 c6.833,0,11.922-5.39,11.934-12.223C132.057,365.926,126.956,360.909,120.123,360.909z" />{" "}
                  <path d="M372.747,252.913c-6.833,0-11.85,5.101-11.838,11.934v96.062h-96.242c-6.833,0-12.03,5.197-12.03,12.03 s5.197,12.03,12.03,12.03h108.092c0.036,0,0.06-0.012,0.084-0.012c0.036-0.012,0.06,0.012,0.096,0.012 c6.713,0,12.03-5.317,12.03-12.03V264.847C384.97,258.014,379.58,252.913,372.747,252.913z" />{" "}
                </g>{" "}
                <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>{" "}
              </g>{" "}
            </g>
          </svg>
        </div>
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
            className={
              picture === elem
                ? "border border-[#76B900]"
                : "opacity-70 hover:opacity-100"
            }
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
