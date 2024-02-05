import Image from 'next/image'
import firebase from 'firebase/compat/app'
import Header from './components/Header/page';
import Homecon from './components/Homecon/page';


export default function Home() {
  console.log("Hello Console") ;
  return (

    <main className="">
      <Header/>
      <Homecon/>
    </main>
  )
}
