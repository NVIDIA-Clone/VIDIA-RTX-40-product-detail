import { useContext } from 'react';
import GalleryContext from './GalleryContext';

const GallerySelected = () => {
  const { picture } = useContext(GalleryContext);

  return (
    <>
      <div className="flex flex-col items-center ">
        <div className="py-[8px] px-[15px]">
          <h1 className="text-[2.25rem] font-bold font-Sig py-[8px] px-[15px] pb-[50px]">Gallery</h1>
        </div>
        <div id="img-container">
          <img src={picture.source} alt="" className='w-fit' />
        </div>
      </div>
    </>
  );
};

export default GallerySelected;
