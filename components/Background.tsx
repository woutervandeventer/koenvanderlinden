import Image from 'next/image'
import background from '../public/images/background.jpeg'
import styles from '../styles/components/Background.module.scss'

const Background = () => {
  return (
    <div className={styles.background_container}>
      <div className={styles.image_container}>
        <Image
          src={background}
          alt="Koen van der Linden at the piano"
          objectFit="cover"
          objectPosition="center"
          layout="fill"
          priority={true}
        />
      </div>
      <div className={styles.overlay}></div>
    </div>
  )
}

export default Background
