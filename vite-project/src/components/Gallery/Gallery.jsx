import GallerySelected from './GallerySelected';
import GallerySelection from './GallerySelection';
import { GalleryProvider } from './GalleryContext';

const Gallery = () => {
  return (
    <GalleryProvider>
      <div
        id="main content"
        className="font-Sig w-full h-[100vh] text-[white] bg-[#1A1A1A] flex flex-col items-center justify-center"
      >
        <GallerySelected />
        <GallerySelection />
      </div>
    </GalleryProvider>
  );
};

export default Gallery;
