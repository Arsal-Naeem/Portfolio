import "./SkillItem.css"

const SkillItem = ({ title, percentage }) => {
  return (
    <li className="skills-item">
      <div className="title-wrapper">
        <h4 className="skill-name">{title}</h4>
        <data value={percentage}>{percentage}%</data>
      </div>
      <div className="skill-progress-bg">
        <div
          className="skill-progress-fill"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </li>
  );
};

export default SkillItem;
