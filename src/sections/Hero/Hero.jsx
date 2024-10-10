import styles from './HeroStyles.module.css'
import heroImg from '../../assets/hero-img.png'
import themeIcon from '../../assets/sun.svg'
import githubIcon from '../../assets/github-light.svg'
import linkedinIcon from '../../assets/linkedin-light.svg'

function Hero() {
  return (
    <section id="hero" className='{styles.container}'>
    <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt='Profile picture of Lúcio Torelli'/>
        <img className={styles.colorMode} src={themeIcon} alt="Color mode icon" />
    </div>
    <div className='{styles.info}'>
        <h1>Lúcio Torelli</h1>
        <h2>Full-stack Developer</h2>
        <span>
            <a href="https://github.com/luciotorelli" target='_blank'>
                <img src={githubIcon} alt="GitHub badge" />
            </a>
            <a href="https://www.linkedin.com/in/luciotorelli" target='_blank'>
                <img src={linkedinIcon} alt="LinkedIn badge" />
            </a>
        </span>
        <p>Driven by a lifelong passion for tech and always curious to learn more. Focused on growing my skills and tackling challenges while adding value to my team and the company.</p>
        <a href="" download>
            <button className='hover'>Download Resume</button>
        </a>
    </div>
    </section>
  )
}

export default Hero
