import Layout from "../../Components/Layout/Layout";
import Timeline from "../../Components/Timeline/TimeLine";
import { education } from "../../data/education";
import { certifications } from "../../data/Certifications";
import SkillsSection from "./SkillsSection/SkillsSection";
import {
  faCertificate,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";

const Resume = () => {
  return (
    <Layout pageTitle="Resume">
      <Timeline title="Education" icon={faGraduationCap} items={education} />
      <Timeline
        title="Certifications"
        icon={faCertificate}
        items={certifications}
      />
      <SkillsSection />
    </Layout>
  );
};

export default Resume;
