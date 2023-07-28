import { useContext } from 'react';
import GalleryContext from './GalleryContext';

const GallerySelection = () => {
  const { galleryPictures, setPicture } = useContext(GalleryContext);

  //Handle Click event
  function handleClick(e) {
    let index = e.currentTarget.id;
    setPicture(galleryPictures[index]);
  }
  //On Hover event

  return (
    <div>
      <div className="relative opacity-50 bg-black z-0 bottom-[55px] h-[56px] flex items-center w-full">
        <h1 className="text-[white] z-50 opacity-100 pl-[20px]">
          PeForce RTX 4090
        </h1>
        <div>
          <img src="/assets/fullScreenIcon.svg" alt="" />
          <img src="/assets/galleryopen.svg" alt="" />
        </div>
      </div>
      <div id="picture-carousel" className="w-full flex justify-center">
        {galleryPictures.map((elem, index) => (
          <div
            key={index}
            className="m-[0_6px] border border-black hover:border-solid hover:border-[#76B900]"
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
      </div>
    </div>
  );
};

export default GallerySelection;
