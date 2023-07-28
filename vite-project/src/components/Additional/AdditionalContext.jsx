/* eslint-disable react/prop-types */
import { createContext, useRef } from 'react';
const additional = [
  { mainTitle: 'Additional Features and Benefits' },
  {
    pic: '/images/8k.png',
    hdrTitle: '8K HDR Gaming',
    text: 'Connect, play, capture, and watch in brilliant HDR at resolutions up to 8K with the GeForce RTX 4090. Capture up to 8K HDR footage with the GeForce Experience™ ShadowPlay™ feature and play back smoothly with AV1 decode.',
    explore: {
      explore: 'Explore the Pinnacle of Gaming',
      symbol: [
        {
          d: 'M10 7L15 12L10 17',
          stroke: '#76B900',
          width: '1.5',
          linecap: 'round',
        },
      ],
    },
  },
  {
    cards: [
      {
        picture: '/images/geforce-game-ready-driver.jpeg',
        title: 'Game Ready Drivers',
        info: `GeForce Game Ready Drivers deliver the best experience for your favorite games. They’re finely tuned in collaboration with developers and extensively tested across thousands of hardware configurations for maximum performance and reliability.`,
        explore: {
          explore: `Improve Your Games' Performance`,
          symbol: [
            {
              d: 'M10 7L15 12L10 17',
              stroke: 'NVGreen',
              width: '1.5',
              linecap: 'round',
            },
          ],
        },
      },
      {
        picture: '/images/geforce-experience.jpeg',
        title: 'PeForce Experience',
        info: `Capture and share videos, screenshots, and live streams with friends. Keep your drivers up to date and optimize your game settings. GeForce Experience lets you do it all. It’s the essential companion to your GeForce graphics card.`,
        explore: {
          explore: `Enhance Your Gaming Experience`,
          symbol: [
            {
              d: 'M10 7L15 12L10 17',
              stroke: 'NVGreen',
              width: '1.5',
              linecap: 'round',
            },
          ],
        },
      },
      {
        picture:
          '/images/geforce-rtx-on-super-resolution-apex-2560x1440-3.jpeg',
        title: 'RTX Video Super Resolution',
        info: `RTX Video Super Resolution automatically enhances videos played in your Chrome or Edge browser using state-of-the art AI algorithms to sharpen images and remove blocky and distracting compression artifacts. Enjoy crystal-clear video with up to 4K resolution.`,
        explore: {
          explore: `Upgrade Your Viewing Experience`,
          symbol: [
            {
              d: 'M10 7L15 12L10 17',
              stroke: 'NVGreen',
              width: '1.5',
              linecap: 'round',
            },
          ],
        },
      },
      {
        picture: '/images/nvidia-g-sync.jpeg',
        title: 'VIDIA P-SYNC',
        info: `Get smooth, tear-free gameplay at high refresh rates, plus HDR and more. This is the ultimate gaming display and the go-to equipment for enthusiast gamers.`,
        explore: {
          explore: `Experience super Smooth Gameplay`,
          symbol: [
            {
              d: 'M10 7L15 12L10 17',
              stroke: 'NVGreen',
              width: '1.5',
              linecap: 'round',
            },
          ],
        },
      },
      {
        picture: '/images/geforce-virtual-reality.jpeg',
        title: 'Virtual Reality',
        info: `The highest performance graphics deliver the smoothest, most immersive VR experiences.`,
        explore: {
          explore: `Get Immersed with VR`,
          symbol: [
            {
              d: 'M10 7L15 12L10 17',
              stroke: 'NVGreen',
              width: '1.5',
              linecap: 'round',
            },
          ],
        },
      },
    ],
  },
  {
    picture: './../../../images/nvidia-resizable-bar.jpeg',
    title: 'Resizable BAR',
    info: `Resizable BAR is an advanced PCI Express feature that enables the CPU to access the entire GPU frame buffer at once, improving performance in many games.`,
  },
];
//CREATE CONTEXT
const AdditionalContext = createContext();
//CREATE PROVIDER
export const AdditionalProvider = ({ children }) => {
  //ESTABLISH STATES AND REF
  let list = useRef(additional);
  list = list.current;
  //FUNCTIONS IF NEED BE
  //RETURN PROPERTIES
  return (
    <AdditionalContext.Provider value={{ list }}>
      {children}
    </AdditionalContext.Provider>
  );
};

//EXPORT CONTEXT
export default AdditionalContext;
