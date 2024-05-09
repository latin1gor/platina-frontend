import { cn } from "@/lib/utils.ts";
import { useResponsive } from "@/hooks/useResponsive.tsx";

const LandingPrices = () => {
  const { isMediumScreen } = useResponsive();
  return (
    <div>
      <div className={"relative border-b border-stone-800"}>
        <img src={"/purple-bg.png"} alt={"purple background"} />
        <h2
          className={
            "absolute top-[50%] right-[10%] md:right-0 left-[20%] md:left-[45%]  text-3xl md:text-4xl lg:text-5xl font-bold animated-block opacity-animation h-48"
          }
        >
          We offer up to 30% discounts every month
        </h2>
        <h3
          className={cn(
            "absolute top-[70%] left-[45%] text-stone-300 h-48 w-[50%]",
            isMediumScreen ? "hidden" : "visible",
          )}
        >
          Save your own money by indulging yourself with your dream product.
          Take advantage of our constant discounts and exclusive promo codes,
          ensuring you get the best deals on every purchase. Our commitment to
          affordability ensures that your shopping experience is not only
          enjoyable but also budget-friendly.
        </h3>
      </div>
    </div>
  );
};

export default LandingPrices;
