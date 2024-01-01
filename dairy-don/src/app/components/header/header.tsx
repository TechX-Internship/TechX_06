import Image from "next/image"
import "bootstrap/dist/css/bootstrap.css"
import style from "./header.module.css"
import logo from "../../../../public/logo.png"
import Navbar from "./header-nav"

export default function Header() {
  return (
    <header className={style.header}>
      <Image src={logo} alt="Logo" className="d-block mx-auto" width={142} height={148} />
      <Navbar />
    </header>
  )
}