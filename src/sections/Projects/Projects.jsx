import styles from "./ProjectsStyles.module.css";
import mint from "../../assets/linux-mint.png";
import escoot from "../../assets/escoot.png";
import ProjectCard from "../../common/ProjectCard";
import Paw from "../../assets/paw.png";
import Password from "../../assets/password.svg";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={mint}
          link="https://github.com/luciotorelli/quicksettings-mint"
          h3="Linux Mint"
          p="Quick Settings Panel"
        />
        <ProjectCard
          src={escoot}
          link="https://github.com/luciotorelli/escoot"
          h3="Escoot"
          p="Ecommerce Django Site"
        />
        <ProjectCard
          src={Paw}
          link="https://github.com/luciotorelli/password-generator"
          h3="MindingPaw"
          p="Minder Marketplace Django app"
        />      
        <ProjectCard
          src={Password}
          link="https://github.com/luciotorelli/minding-paws#ux"
          h3="Password Generator"
          p="Python Terminal App"
        />          
      </div>
    </section>
  );
}

export default Projects;
