import { useState, useEffect } from 'react'
import styles from '@/styles/components/Footer.module.scss'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.container_text}>
          <span>Retrouvez nous sur tous nos réseaux !</span>
        </div>
      </div>
    </footer>
  )
}
export default Footer
