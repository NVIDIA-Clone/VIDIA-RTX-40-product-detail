/* eslint-disable react/prop-types */
import { useState, useRef, createContext } from 'react';

//DATA TO REFERENCE
const GalleryPictures = [
  {
    source: '/images/geforce-rtx-4090-product-gallery-full-screen-3840-1.jpg',
    id: 1,
  },
  {
    source: '/images/geforce-rtx-4090-product-gallery-full-screen-3840-2.jpg',
    id: 2,
  },
  {
    source: '/images/geforce-rtx-4090-product-gallery-full-screen-3840-3.jpg',
    id: 3,
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
  const [picture, setPicture] = useState(galleryPictures[0]);
  //FUNCTIONS IF NEED BE

  //RETURN PROVIDER WITH PROPERTIES TO BE PROVIDED
  return (
    <GalleryContext.Provider value={{ galleryPictures, picture, setPicture }}>
      {children}
    </GalleryContext.Provider>
  );
};

//EXPORT CONTEXT
export default GalleryContext;
