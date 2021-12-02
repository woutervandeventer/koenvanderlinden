import styles from '../styles/components/Video.module.scss'
import containerStyles from '../styles/components/Container.module.scss'

interface Props {
  src: string
}

const Video = ({ src }: Props) => {
  return (
    <div className={`${styles.video_wrapper} ${containerStyles.full_width}`}>
      <iframe
        src={`https://www.youtube.com/embed/${src}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default Video
