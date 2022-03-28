import Container from "./Container";
import SectionHeading from "./SectionHeading";
import Image from "next/image";
import bio from "../public/images/bio.jpeg";
import containerStyles from "../styles/components/Container.module.scss";
import styles from "../styles/components/About.module.scss";

const About = () => {
  return (
    <Container id="about">
      <SectionHeading title="About" />
      <p>
        Koen van der Linden is a Royal Conservatory graduate in jazz piano, and
        a self taught trumpet player. He is based in the Hague and plays around
        in the Dutch jazz scene and with his own trio. In his playing you can
        find a sincere love for old jazz standards, next to a wide range of
        modern day influences and above all, a great passion.
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
        Koen was introduced to the piano by his grandfather, who taught him the
        first basics at the age of ten. Soon after that he was getting regular
        piano lessons, where he started improvising and composing his first
        tunes. At the age of sixteen, Koen got in touch with the vibrant jazz
        scene of the Hague. He started going out to jam sessions and concerts,
        where he listened and played along. At the age of nineteen, Koen was
        admitted to the Royal Conservatory.
      </p>

      <p>
        While studying at the Conservatory, Koen started to develop his own
        sound and style. You can find elements of Duke Ellington, Bud Powell and
        Roy Hargrove in his playing. Next to that, he started working with
        different musicians at the conservatory and started learning how to
        interact with his fellow colleagues. He also took up the trumpet with
        which he started experimenting and playing around.
      </p>

      <p>
        Koen graduated in 2022 and has been an active, promising member of the
        Dutch jazz scene ever since. modern day influences and above all, a
        great passion.
      </p>
    </Container>
  );
};

export default About;
