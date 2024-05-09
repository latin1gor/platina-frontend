const LandingCompanies = () => {
  return (
    <div
      className={
        "flex flex-col justify-between w-full border-t border-b border-stone-800 text-center"
      }
    >
      <h2
        className={
          " text-center text-stone-100 text-2xl md:text-4xl font-bold pt-14 "
        }
      >
        Companies working with us
      </h2>
      <h3
        className={"mt-4 text-stone-400 font-medium pb-14 max-w-[70%] m-auto"}
      >
        With a tremendous level of support and partnership until now, our
        collaborations have exceeded expectations. We continue to foster strong
        relationships, driving innovation and success together.
      </h3>
      <div
        className={
          "w-full border-t border-b border-stone-800 grid grid-cols-3 text-center "
        }
      >
        <div
          className={
            "h-[550px] flex flex-col items-center pt-10 text-stone-100 text-2xl space-y-9"
          }
        >
          <h2 className={"mb-10"}>Software</h2>

          <img
            src={"companies/insiders.png"}
            className={"h-14 md:h-20 rounded-2xl opacity-80"}
          />
          <img
            src={"companies/nasa.png"}
            className={"h-14 md:h-20 rounded-2xl opacity-80"}
          />
          <img
            src={"companies/apple.png"}
            className={"h-14 md:h-20rounded-2xl opacity-80"}
          />
        </div>

        <div
          className={
            "h-[550px] flex flex-col items-center pt-10 text-stone-100 text-2xl space-y-10  border-r border-l border-stone-800"
          }
        >
          <h2 className={"mb-14 md:mb-10"}>Sport</h2>

          <img
            src={"companies/nike.png"}
            className={"h-8 md:h-14 rounded-2xl opacity-80"}
          />
          <img
            src={"companies/adidas.png"}
            className={"h-14 md:h-20  opacity-80"}
          />
          <img
            src={"companies/guess.png"}
            className={"h-16 md:h-24 rounded-2xl opacity-80"}
          />
        </div>
        <div
          className={
            "h-[550px] flex flex-col items-center pt-10 text-stone-100 text-2xl space-y-9"
          }
        >
          <h2 className={"mb-10"}>Speed</h2>

          <img
            src={"companies/bmw.png"}
            className={"h-14 md:h-20 rounded-2xl opacity-80"}
          />
          <img
            src={"companies/mercedes.png"}
            className={"h-14 md:h-20 rounded-2xl opacity-80"}
          />
          <img
            src={"companies/porsche.png"}
            className={"h-14 md:h-20 rounded-2xl opacity-80"}
          />
        </div>
      </div>
    </div>
  );
};

export default LandingCompanies;
