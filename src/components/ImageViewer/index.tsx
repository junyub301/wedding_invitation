import { Swiper, SwiperSlide } from 'swiper/react'
import styles from './ImageViewer.module.scss'
import classNames from 'classnames/bind'
import './swiper.css'

import 'swiper/css'
import Dimmed from '../shared/Dimmed'

const cx = classNames.bind(styles)

export default function ImageViewer({
  images,
  open = false,
  selectedIdx,
  onClose,
}: {
  images: string[]
  open: boolean
  selectedIdx: number
  onClose: () => void
}) {
  if (!open) return null
  return (
    <Dimmed>
      <CloseButton className={cx('icon_close')} onClose={onClose} />
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        initialSlide={selectedIdx}
      >
        {images.map((src, idx) => (
          <SwiperSlide key={idx}>
            <img src={`/assets/images/${src}.jpg`} alt="이미지 뷰어" />
          </SwiperSlide>
        ))}
      </Swiper>
    </Dimmed>
  )
}

function CloseButton({
  onClose,
  className,
}: {
  onClose: () => void
  className: string
}) {
  return (
    <svg
      data-name="Layer 1"
      id="Layer_1"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClose}
      className={className}
    >
      <title />
      <path d="M100,15a85,85,0,1,0,85,85A84.93,84.93,0,0,0,100,15Zm0,150a65,65,0,1,1,65-65A64.87,64.87,0,0,1,100,165Z" />
      <path d="M128.5,74a9.67,9.67,0,0,0-14,0L100,88.5l-14-14a9.9,9.9,0,0,0-14,14l14,14-14,14a9.9,9.9,0,0,0,14,14l14-14,14,14a9.9,9.9,0,0,0,14-14l-14-14,14-14A10.77,10.77,0,0,0,128.5,74Z" />
    </svg>
  )
}
