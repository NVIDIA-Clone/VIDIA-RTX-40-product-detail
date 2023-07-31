/* eslint-disable react/prop-types */
import { useState, useRef, createContext } from "react";

//DATA TO REFERENCE
const GalleryPictures = [
  {
    source: "/images/geforce-rtx-4090-product-gallery-full-screen-3840-1.jpg",
    id: 0,
    selected: false,
  },
  {
    source: "/images/geforce-rtx-4090-product-gallery-full-screen-3840-2.jpg",
    id: 1,
    selected: false,
  },
  {
    source: "/images/geforce-rtx-4090-product-gallery-full-screen-3840-3.jpg",
    id: 2,
    selected: false,
  },
];

//CREATE CONTEXT
const GalleryContext = createContext();
//CREATE PROVIDER
export const GalleryProvider = ({ children }) => {
  //ESTABLISH STATES

  //THIS WILL HOLD REFERENCE TO ALL THE PICTURES
  let galleryPictures = useRef(GalleryPictures);
  galleryPictures = galleryPictures.current;
  //ALLOW STATE CHANGE FOR WHEN A PICTURE IS TOGGLED
  let [picture, setPicture] = useState(galleryPictures[0]);
  const [isFullscreen, setIsFullscreen] = useState(false);
  //FUNCTIONS IF NEED BE
  const makeFullScreen = () => {
    setIsFullscreen(true)
    
  }

  const notFullScreen = ()  => {
    setIsFullscreen(false);
  }

  //RETURN PROVIDER WITH PROPERTIES TO BE PROVIDED
  return (
    <GalleryContext.Provider
      value={{
        galleryPictures,
        picture,
        setPicture,
        isFullscreen,
        setIsFullscreen,
        makeFullScreen,
        notFullScreen,

      }}
    >
      {children}
    </GalleryContext.Provider>
  );
};

//EXPORT CONTEXT
export default GalleryContext;
