import Container from './Container'
import SectionHeading from './SectionHeading'
import Image from 'next/image'
import bio from '../public/images/bio.jpeg'
import containerStyles from '../styles/components/Container.module.scss'
import styles from '../styles/components/About.module.scss'

const About = () => {
  return (
    <Container id="about">
      <SectionHeading title="About" />
      <p>
        Koen van der Linden is a Dutch jazz piano player and singer. He grew up
        in the Hague where he started playing piano at the age of ten and at the
        age of sixteen he discovered the city's vibrant jazz scene, after which
        he decided he wanted to dedicate his life fully to music. Two years
        later he got admitted to the Royal Conservatory of The Hague.
      </p>
      <div className={`${containerStyles.full_width} ${styles.image}`}>
        <Image
          src={bio}
          alt="Koen playing a grand piano"
          quality={100}
          layout="responsive"
          lazyBoundary="1000px"
        />
      </div>
      <p>
        At the Royal Conservatory Koen discovered the ins and outs of jazz
        music, and started getting interested in other styles of music as well,
        like impressionism and neo soul. Next to that he started composing and
        experimenting with different groups with which he started playing around
        in the Dutch jazz scene.
      </p>
      <p>
        In 2021 he graduated from his bachelor jazz piano, and started working
        with Dani Font, Cas Jiskoot and Tim Hennekes to form a quartet with
        which he played his original compositions and experimented with new
        grooves and style combinations.
      </p>
    </Container>
  )
}

export default About
