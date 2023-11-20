"use client"

import { Gallery } from "react-grid-gallery";
import { images as IMAGES } from "../../content/homepage/photo";

const images = IMAGES.map((image) => ({
  ...image,
  customOverlay: (
    <div className="custom-overlay__caption">
      <div>{image.caption}</div>
      {image.tags &&
        image.tags.map((t, index) => (
          <div key={index} className="custom-overlay__tag">
            {t.title}
          </div>
        ))}
    </div>
  ),
}));

export default function App() {
  return (
    <div className="h-60 gap-12">
      <h1 className="text-center mt-12 text-amber-400 mb-5 text-[3.66rem] ">Galllerie</h1>
      <Gallery images={images} enableImageSelection={false} />
    </div>
  );
}