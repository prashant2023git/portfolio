import skillsData from "./skills.json";
import SkillCard from "./SkillCard";

export default function Skills() {
  return (
    <div
      className="pb-20 pt-24 bg-slate-950 w-full relative z-10"
    >
      <h3 className="text-sky-500 text-center text-3xl font-bold mb-16">
        Skills and <span className="text-white">Tech Stack</span>
      </h3>

      <div className="
        grid 
        grid-cols-2         /* ✅ Mobile: 2 columns */
        sm:grid-cols-3      /* ✅ Small screens ≥640px: 3 columns */
        md:grid-cols-4      /* ✅ Medium screens ≥768px: 4 columns */
        lg:grid-cols-5      /* ✅ Large screens ≥1024px: 5 columns */
        xl:grid-cols-6      /* ✅ Extra large ≥1280px: 6 columns */
        gap-6
        justify-items-center
        mx-auto
        max-w-7xl
        px-4
      ">
        {skillsData.map((skill, index) => (
          <SkillCard key={index} name={skill.name} path={skill.path} />
        ))}
      </div>
    </div>
  );
}
