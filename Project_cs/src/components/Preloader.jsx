import React, { useEffect, useState } from "react";
import preload from "../assets/images/preloader.mp4";



function Preloader() {

    const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const preloaderTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(preloaderTimeout);
  }, []);
  return (
    <div class={`intro-loader ${isLoading ? "" : "hidden"}`}>
      <div className="loading">
    <video src={preload}
    autoPlay
    loop
    muted
    ></video>
    </div>
    </div>
  );
}

export default Preloader;
