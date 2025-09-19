// import ParticleNew from "./ParticlesNew";

import { useState } from "react";
import Particle from "./Particle";
export default function Home() {
  return (
    <>
      <Particle />
      <div
        className="home flex flex-col items-center justify-center gap-4 h-screen align-center"
        // style={{ margin: "13rem auto 17rem auto" }}
      >
        <p className="name font-medium text-white text-8xl content-center text-center justify-center">
          Prashant <span className="text-sky-500">Kumar</span>
        </p>
        <p className="title text-white text-2xl">
          Software Developer
        </p>
        <p className="socials text-white text-3xl flex gap-x-6 mt-2">
          <a href="mailto:prashant52iiitsonepat@gmail.com" target="_blank">
            <i className="fa-solid fa-envelope text-white"></i>
          </a>
          <a
            href="https://drive.google.com/file/d/1kL9W3QXaqXHQlF05-NhBXwcad-hEstBp/view?usp=drivesdk"
            target="_blank"
          >
            <i className="fa-solid fa-file-lines text-white"></i>
          </a>
          <a href="https://www.linkedin.com/in/prashant-kumar-029b01287/" target="_blank">
            <i className="fa-brands fa-linkedin text-white"></i>
          </a>

          <a href="https://github.com/prashant2023git" target="_blank">
            <i className="fa-brands fa-github text-white"></i>
          </a>
        </p>
      </div>
    </>
  );
}
