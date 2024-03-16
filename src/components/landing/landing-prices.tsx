const LandingPrices = () => {
  return (
    <>
      <div className={"relative border-b border-stone-800"}>
        <img src={"/purple-bg.png"} alt={"purple background"} />
        <h2
          className={
            "absolute top-[50%] left-[45%] text-2xl sm:text-3xl md:text-5xl font-bold animated-block opacity-animation h-48"
          }
        >
          We offer up to 30% discounts every month
        </h2>
        <h3
          className={
            "absolute top-[70%] left-[45%] text-stone-300 animated-block opacity-animation h-48 w-[50%]"
          }
        >
          Save your own money by indulging yourself with your dream product.
          Take advantage of our constant discounts and exclusive promo codes,
          ensuring you get the best deals on every purchase. Our commitment to
          affordability ensures that your shopping experience is not only
          enjoyable but also budget-friendly.
        </h3>
      </div>
    </>
  );
};

export default LandingPrices;
