import { FaStar } from "react-icons/fa6";
import { useState } from "react";
import { cn } from "@/lib/utils.ts";

const DeviceRating = () => {
  const stars: number[] = [1, 2, 3, 4, 5];
  const [activeStar, setActiveStar] = useState<number>(4);

  return (
    <>
      {stars &&
        stars.map((star) => (
          <FaStar
            key={star}
            className={cn("text-gray-500 text-2xl cursor-pointer m-0.5", {
              "text-yellow-500": star <= activeStar,
            })}
            onClick={() => setActiveStar(star)}
          />
        ))}
    </>
  );
};

export default DeviceRating;
