import styles from './Accordion.module.scss'
import classNames from 'classnames/bind'
import { PropsWithChildren, useState } from 'react'

const cx = classNames.bind(styles)

interface AccordionProps {
  label: string
}

export default function Accordion({
  label,
  children,
}: PropsWithChildren<AccordionProps>) {
  const [expanded, setExpanded] = useState<boolean>(false)

  const handleToggle = () => {
    setExpanded((pre) => !pre)
  }
  return (
    <div className={cx(['wrap-accordion', expanded ? 'open' : ''])}>
      <div className={cx('wrap-header')} onClick={handleToggle}>
        <span>{label}</span>
        <IconArrowDown className={cx('icon_arrow_down')} />
      </div>
      <div className={cx('wrap-content')}>{children}</div>
    </div>
  )
}

function IconArrowDown({ className }: { className: string }) {
  return (
    <svg
      className={className}
      height="512px"
      id="Layer_1"
      version="1.1"
      viewBox="0 0 512 512"
      width="512px"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon points="396.6,160 416,180.7 256,352 96,180.7 115.3,160 256,310.5 " />
    </svg>
  )
}
