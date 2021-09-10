import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MainLayout from '../components/layouts/main-layout'
import Profile from '../components/profile'
import Experiences from '../components/experiences'
import { useEffect } from 'react'

export default function Home() {


  return (
    <div className="">
      <MainLayout>
        <Profile />
        <Experiences />
      </MainLayout>
    </div>
  )
}
