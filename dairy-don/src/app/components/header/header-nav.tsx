import "bootstrap/dist/css/bootstrap.css"
import { Titan_One } from "next/font/google"

const titan_one = Titan_One({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"]
})

export default function Navbar() {
  return (
    <nav className={titan_one.className}>
      <ul className="d-flex justify-content-center">
        <li className="p-3">Home</li>
        <li className="p-3">About us</li>
        <li className="p-3">Product</li>
        <li className="p-3">Franchise</li>
        <li className="p-3">Blog</li>
        <li className="p-3">Contact</li>
      </ul>
    </nav>
  )
}