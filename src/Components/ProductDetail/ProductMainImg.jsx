import { useState } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export default function ProductGallery({ images, name }) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="flex flex-col lg:flex-row items-start gap-2 ">
      {/* آلبوم تصاویر کوچک */}
      <div className="grid grid-cols-4  lg:grid-cols-1   gap-2">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            // alt={${name} thumbnail ${idx + 1}}
            onClick={() => setSelectedImage(img)}
            className={`  w-auto lg:w-28  object-cover rounded-md cursor-pointer border-2 transition ${
              selectedImage === img
                ? "border-green-500"
                : "border-transparent hover:border-gray-300"
            }`}
          />
        ))}
      </div>
      {/* عکس بزرگ با قابلیت زوم */}
      <div className="flex-1 w-full rounded overflow-hidden bg-white ">
        <Zoom>
          <img
            src={selectedImage}
            alt={name}
            className="w-auto h-auto rounded cursor-pointer"
          />
        </Zoom>
      </div>
    </div>
  );
}
