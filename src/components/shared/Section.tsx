import styles from './Section.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

interface SectionProps {
  children: React.ReactNode
  className?: string
  title?: React.ReactNode
}

export default function Section({ children, className, title }: SectionProps) {
  return (
    <section className={cx([`container`, className])}>
      {title && <div className={cx('txt-title')}>{title}</div>}
      {children}
    </section>
  )
}
