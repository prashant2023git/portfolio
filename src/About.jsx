import profileImg from "../public/pp.jpg";

export default function About() {
  return (
    <>
      <div
        id="about-section"
        className="about-section-container flex gap-y-5 justify-between py-20 bg-slate-900"
        style={{ zIndex: 100, position: "relative" }}
      >
        {/* Text Section */}
        <div className="text-start">
          <p
            className="text-white font-bold text-3xl"
            
          >
            Hi, I'm Prashant Kumar <span className="wave">👋🏻</span>
          </p>

          <p
            className="paragraph"
        
          >
            I'm a results-driven
            <span className="text-sky-500"> Full Stack Developer</span> holding a
            <span className="text-sky-500">
              {" "}
              B.Tech degree <span style={{color:'white'}}> in</span> Information Technology <span style={{color:'white'}}>from</span> Indian Institute of Information Technology Sonepat ,Haryana.
            </span>{" "}
            My professional journey revolves around transforming raw data into
            impactful insights, and I'm particularly passionate about
            <span className="text-sky-500">
              {" "}
              Full Stack Web Development,  Machine Learning, and Generative AI.
            </span>
          </p>

          <p
            className="paragraph"
          >
            Proficient in{" "}
            <span className="text-sky-500">
              C, C++ , Java , JavaScript and ReactJS , NodeJS , ExpressJS
            </span>
            . I bring a creative touch using{" "}
            <span className="text-sky-500">HTML and CSS</span> for visual appeal.
            Navigating key Python libraries such as{" "}
            <span className="text-sky-500">Numpy and Pandas.</span>
            Beyond coding, I view data as an infinite canvas for innovation, and
            my future is a thrilling horizon of AI possibilities.
          </p>
        </div>

        <img
  src={profileImg}
  alt="prashant-img"
  className="
    rounded-full object-cover 
    w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/3
    mx-auto lg:mx-0 lg:mr-20
  "
/>

      </div>
    </>
  );
}
