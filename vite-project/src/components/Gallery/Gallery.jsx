import GallerySelected from './GallerySelected';
import GallerySelection from './GallerySelection';
import { GalleryProvider } from './GalleryContext';

const Gallery = () => {
  return (
    <GalleryProvider>
      <div
        id="main content"
        className="font-Sig w-full h-fit text-[white] bg-[#1A1A1A] flex flex-col items-center justify-center py-[75px]"
      >
        <div className='h-[70%] w-1/2'>
        <GallerySelected />
        <GallerySelection />
        </div>
      </div>
    </GalleryProvider>
  );
};

export default Gallery;
