import Image from 'next/image'
import Link from 'next/link'
import Hero from './home/Hero'
import Accessories from "./home/Accessories";
import Carousal from "./home/Carousal";
export default function Home() {
  return (
  
  <>
    <Hero/>
    <Accessories/>
    <Carousal/>
  </>
  )
}
