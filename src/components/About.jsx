import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b  from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-10">
          In the past four years, I've cultivated expertise as Front-end
          Developer through diverse projects, prioritizing the creation of
          intuitive interfaces that meet client goals and enhance user
          experiences. I'm dedicated to ensuring websites and applications are
          accessible and responsive across various devices. Thriving in
          collaborative environments, I've effectively collaborated with
          cross-functional teams, emphasizing communication and a proactive
          approach. Committed to continuous learning, I stay updated on the
          latest industry trends and technologies, eagerly expanding my skill
          set. Problem-solving is a rewarding aspect of my front-end development
          journey, and I contribute to project success by tackling challenges
          with elegant solutions.
        </p>

        {/* <p className="text-xl mt-10">
          In an era where accessibility and responsiveness are paramount, I take
          pride in my commitment to creating websites and applications that
          seamlessly adapt to various screen sizes and devices. Ensuring a
          smooth experience for users across different platforms is at the core
          of my development philosophy.
        </p>

        <p className="text-xl mt-10">
          I thrive in collaborative environments, having worked closely with
          cross-functional teams that include designers, back-end developers,
          and project managers. Effective communication and a proactive approach
          are integral parts of my work ethos.
        </p>

        <p className="text-xl mt-10">
          Web development is a rapidly evolving field, and I am committed to
          staying abreast of the latest industry trends and technologies.
          Whether it's adopting new JavaScript features, exploring emerging
          frameworks, or experimenting with design patterns, I am always eager
          to expand my skill set. One aspect of front-end development that I
          find particularly rewarding is problem-solving. I enjoy tackling
          challenges head-on, finding elegant solutions, and contributing to the
          overall success of the projects I work on.
        </p> */}
      </div>
    </div>
  );
};

export default About;
