import Image from 'next/image'
import Link from 'next/link'
import NavBar, { NavBarType } from '../components/navbar';

export default function Home() {
  return (
    <NavBar dashboard={false} aboutus={false} contactus={false} pricing={false} services={false} />

  )
}
