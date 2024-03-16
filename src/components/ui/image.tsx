import { zoomies } from "ldrs";
import { loaderColor } from "@/lib/constants.ts";
import { useEffect, useState } from "react";

interface ImageProps {
  src: string;
  className: string;
}
zoomies.register();

const Image = ({ src, className }: ImageProps) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 2000);
  }, []);
  return (
    <div className={`flex items-center justify-center ${className}`}>
      {!isLoaded ? (
        <div className={"flex items-center justify-center object-cover"}>
          <l-zoomies
            size="80"
            stroke="5"
            bg-opacity="0.1"
            speed="1.4"
            color={loaderColor}
          ></l-zoomies>
        </div>
      ) : (
        <img
          src={src}
          alt={"device img"}
          className={"object-cover rounded-2xl"}
        />
      )}
    </div>
  );
};

export default Image;
