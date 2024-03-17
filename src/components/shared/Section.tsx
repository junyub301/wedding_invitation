import styles from './Section.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

interface SectionProps {
  children: React.ReactNode
  className?: string
}

export default function Section({ children, className }: SectionProps) {
  return <section className={cx([`container`, className])}>{children}</section>
}
