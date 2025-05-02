"use client";
import React, { useState, useRef, useEffect } from "react";
import "./index.css";
import BtnCallToAction from "../Layout/Buttons/BtnCallToAction/BtnCallToAction";

interface ReadMoreTextProps {
  htmlContent: string;
  readMore?: boolean;
  centerButton?: boolean;
  color?: "fb_blue_button" | "fb_green_button" | "white";
}

const ReadMoreText: React.FC<ReadMoreTextProps> = ({ htmlContent, readMore = false, centerButton = false, color }) => {
  const [isExpanded, setIsExpanded] = useState(!readMore);
  const [initialHeight, setInitialHeight] = useState<string | number>("auto");
  const [height, setHeight] = useState<string | number>("auto");
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [elementYPosition, setElementYPosition] = useState<number>(0);
  const buttonAlignment = centerButton ? "justify-center lg:justify-start" : "justify-start";

  useEffect(() => {
    if (contentRef.current) {
      if (initialHeight == "auto") {
        setInitialHeight(contentRef.current.offsetHeight);
      }

      const fullHeight = contentRef.current.scrollHeight;
      setHeight(isExpanded ? fullHeight : initialHeight);

      const rect = contentRef.current.getBoundingClientRect();
      setElementYPosition(rect.top + window.scrollY);
    }
  }, [isExpanded, htmlContent]);

  const toggleReadMore = () => {
    if (isExpanded && elementYPosition != null) {
      if (typeof window !== "undefined") {
        window.scrollTo({
          top: elementYPosition - 250,
          behavior: "auto",
        });
      }
    }

    setIsExpanded(!isExpanded);
  };

  return (
    <div className="flex flex-col gap-4 justify-start">
      <div
        ref={contentRef}
        className={`containerContent transition-all duration-300 overflow-hidden ${!isExpanded ? "hidden-text" : ""}`}
        style={{ height }}
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
      {readMore && (
        <div className={`flex ${buttonAlignment}`}>
          <BtnCallToAction content={isExpanded ? "Ler Menos" : "Ler Mais"} color={color} onClick={toggleReadMore} />
        </div>
      )}
    </div>
  );
};

export default ReadMoreText;
