import { FC, ReactNode } from 'react'
import styles from '../styles/Section.module.css'

export const Section: FC<Readonly<{children: ReactNode}>> = ({ children }) => (
    <section className={styles.section}>
        {children}
    </section>
)

