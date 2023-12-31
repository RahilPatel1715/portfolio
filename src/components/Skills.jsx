import React from "react";

const Skills = () => {
  const techs = [
    {
      id: 1,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      title: "Bootstrap",
      style: "shadow-white",
    },
    {
      id: 6,
      title: "SQL",
      style: "shadow-pink-400",
    },
    {
      id: 7,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 8,
      title: "Tailwind CSS",
      style: "shadow-sky-400",
    },
    {
      id: 9,
      title: "ASP.NET/MVC",
      style: "shadow-sky-400",
    },
    {
      id: 10,
      title: "C#",
      style: "shadow-sky-400",
    },
    {
      id: 11,
      title: "JIRA",
      style: "shadow-sky-400",
    },
    {
      id: 12,
      title: "ServiceNow",
      style: "shadow-sky-400",
    },
    {
      id: 13,
      title: "TFS",
      style: "shadow-sky-400",
    },
    {
      id: 14,
      title: "jQuery",
      style: "shadow-sky-400",
    },
  ];

  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold vorder-b-4 border-gray-500">
            Skills
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <p className="my-4 font-audiowide">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
