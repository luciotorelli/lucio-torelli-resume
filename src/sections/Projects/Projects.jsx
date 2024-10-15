import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/viberr.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/luciotorelli/quicksettings-mint"
          h3="Viberr"
          p="Streaming App"
        />
      </div>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/luciotorelli/quicksettings-mint"
          h3="Viberr"
          p="Streaming App"
        />
      </div>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/luciotorelli/quicksettings-mint"
          h3="Viberr"
          p="Streaming App"
        />
      </div>
    </section>
  );
}

export default Projects;
