import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MainLayout from '../components/layouts/main-layout'
import Profile from '../components/profile'
import Resume from '../components/resume'
import { useEffect } from 'react'
import Project from '../components/project'
import Education from '../components/education'
import Contact from '../components/contact'
export default function Home() {

  return (
    <div >
      <MainLayout>
        <Profile />
        <Resume />
        <Project />
        <Education />
        <Contact />

      </MainLayout>
    </div>
  )
}
