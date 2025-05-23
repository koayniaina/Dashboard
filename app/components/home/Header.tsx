import React from 'react'
import styles from '@/styles/Header.module.css'
import { PiStudentFill } from 'react-icons/pi'
import { CiSearch } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";
import { IoMdNotificationsOutline } from 'react-icons/io';

export default function Header() {
  return (
    <main className={styles.header}>
      <section className='flex items-center gap-3'>
        <div className='flex items-center gap-0.5'>
          <span> <PiStudentFill /></span>
          <span className={styles.logo}>Student</span>
        </div>
      </section>
      <section className='flex items-center gap-3 font'>
        <div className={styles.search}>
          <input type="search" placeholder='Search ...'  />
          <CiSearch className={styles.searchs}/>
        </div>
        <span className={styles.notife}><IoMdNotificationsOutline /></span> 
        <span className={styles.avatar}><RxAvatar /></span>
      </section>
    
    </main>
  )
}
