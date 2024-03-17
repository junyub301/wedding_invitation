import styles from './ImageGallery.module.scss'
import classNames from 'classnames/bind'
import Section from '@shared/Section'
const cx = classNames.bind(styles)

export default function ImageGallery({ images }: { images: string[] }) {
  return (
    <Section title="사진첩" className={cx('container')}>
      <ul className={cx('wrap-images')}>
        {images.map((src, idx) => (
          <li key={idx} className={cx('wrap-image')}>
            <img src={`/assets/images/${src}.jpg`} alt="wedding_image" />
          </li>
        ))}
      </ul>
    </Section>
  )
}
