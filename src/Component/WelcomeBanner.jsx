import React from "react";
import { Typography } from "@material-tailwind/react";

export default function WelcomeBanner() {
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <div className="-m-6 max-h-[768px] w-[calc(100%+48px)] overflow-scroll">
      <div className="mx-auto max-w-screen-md py-12">
        <Typography variant="h2" color="blue-gray" className="mb-2">
          A warm Kibo welcome!
        </Typography>
        <Typography color="gray" className="font-normal">
          We're excited you're joining our vibrant online community of learners
          and leaders. Kibo empowers students to reach their full potential
          through a rigorous yet flexible online curriculum, a supportive
          learning environment, and a focus on practical skills for the real
          world.
        </Typography>
      </div>
    </div>
  );
}
