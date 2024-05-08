import ReactPlayer from "react-player";

const LandingFooter = () => {
  return (
    <>
      <div className={"relative top-[350px]"}>
        <h1
          className={
            "text-center text-stone-500 text-4xl md:text-5xl font-thin px-20 md:pb-10 pb-32"
          }
        >
          Join us to find your{" "}
          <span className={"text-gradient"}>perfect decision</span>
        </h1>
      </div>
      <div className={"border-t border-stone-800"}>
        <ReactPlayer
          url="videoplayback.mp4"
          playing
          loop
          muted
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
};
export default LandingFooter;
