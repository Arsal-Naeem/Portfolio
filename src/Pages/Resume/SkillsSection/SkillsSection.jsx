import SkillItem from "../../../Components/SkillItem/SkillItem";
import { skills } from "../../../data/Skills";
import "./SkillsSection.css";

const SkillsSection = () => {
  return (
    <section className="skill">
      <h3 className="skills-title">My skills</h3>
      <ul className="skills-list content-card">
        {skills.map((skill, index) => (
          <SkillItem
            key={index}
            title={skill.title}
            percentage={skill.percentage}
          />
        ))}
      </ul>
    </section>
  );
};

export default SkillsSection;
