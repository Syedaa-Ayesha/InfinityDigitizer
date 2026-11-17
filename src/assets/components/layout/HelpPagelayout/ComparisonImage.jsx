
import { useState, useRef } from "react";
import { MoveHorizontal } from "lucide-react";


import beforeImage from "../../../images/FOX-LOGO.png";
import afterImage from "../../../images/fox-2.png";
const ImageComparison = () => {
  const [position, setPosition] = useState(50);
  const containerRef = useRef(null);

  const handleMove = (event) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();

    const percentage =
      ((event.clientX - rect.left) / rect.width) * 100;

    setPosition(Math.min(100, Math.max(0, percentage)));
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[720px] overflow-hidden rounded-xl cursor-ew-resize select-none"
      onPointerDown={(e) => {
        e.currentTarget.setPointerCapture(e.pointerId);
        handleMove(e);
      }}
      onPointerMove={(e) => {
        if (e.buttons === 1) handleMove(e);
      }}
      style={{ touchAction: "pan-y" }}
    >
      {/* Background Image */}
      <img
        src={beforeImage}
        alt="Before"
        draggable="false"
        className="absolute inset-0 w-full h-full object-contain"
      />

      {/* Foreground Image */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          clipPath: `inset(0 ${100 - position}% 0 0)`,
        }}
      >
        <img
          src={afterImage}
          alt="After"
          draggable="false"
          className="absolute inset-0 w-full h-full object-contain"
        />
      </div>

      {/* Divider */}
      <div
        className="absolute top-0 bottom-0 w-[2px] bg-white shadow-lg pointer-events-none"
        style={{
          left: `${position}%`,
          transform: "translateX(-50%)",
        }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white shadow-lg flex items-center justify-center">
          <MoveHorizontal className="w-5 h-5 text-[#7434E5]" />
        </div>
      </div>
    </div>
  );
};

export default ImageComparison;
