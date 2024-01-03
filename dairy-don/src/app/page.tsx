import "bootstrap/dist/css/bootstrap.css"
import style from "./section.module.css"

import Image from "next/image"
import About_Section from "./components/about-section/about-section"
import Special_Button from "./components/special-button/special-button"

import { Titan_One } from "next/font/google"
import { Outfit } from "next/font/google"
import Feature_Card from "./components/feature-card/feature-card"
import Swiper_Card from "./components/swiper-card/swiper-card"


const titan_one = Titan_One({
  subsets: ["latin"],
  weight: "400",
  style: "normal"
})

const outfit_400 = Outfit({
  subsets: ["latin"],
  style: "normal",
  weight: "400"
})

const outfit_500 = Outfit({
  subsets: ["latin"],
  style: "normal",
  weight: "500"
})

export default function Home() {
  return (
    <main>
      <section className={`${style["main-banner"]} postion-relative`}>
        <div className="container">
          <div className="row align-items-center vh-100">
            <div className="col">
              <h1 className={titan_one.className}>Bringing&nbsp;in<br />the&nbsp;Luscious<br />Ice&nbsp;Creams</h1>
              <ul className={`${outfit_400.className} mt-4 mb-5`}>
                <li>Ice Cream</li>
                <li>Shakes</li>
                <li>Mastani</li>
                <li>Softies</li>
              </ul>
              <Special_Button text="Our products" color="#000" bgcolor="#fff" />
            </div>
            <div className="col">
              <div className={`${style.ellipse} container-fluid ratio ratio-1x1 position-relative rounded rounded-circle z-0`}>
                <Image src="/girl.png" alt="Cheerful Teenager With Ice Cream" width={100} height={100} className="vh-100 object-fit-contain position-absolute translate-middle top-50 start-50" style={{ objectPosition: "bottom" }} />
                <Image src="/Flavorful-Ice-Creams-1.png" alt="Flavorful Ice Creams" width={100} height={100} className="d-inline w-50 h-auto object-fit-contain position-absolute translate-middle-x top-50 start-0" />
                <Image src="/icecream-cones-banner-1.png" alt="Flavorful Ice Creams" width={100} height={100} className="d-inline w-50 h-auto object-fit-contain position-absolute  top-0 start-50 z-n1" style={{ rotate: "25.341deg" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <About_Section />

      <section className={style["feature-section"]}>
        <div className="container d-flex flex-column justify-content-center align-items-center vh-100">
          <h2 className="text-center mb-5">Make&nbsp;your&nbsp;life<br />sweeter&nbsp;with&nbsp;us!</h2>
          <div className="row">
            <div className="col">
              <Feature_Card align="left" />
              <Feature_Card align="left" />
            </div>
            <div className="col-6">
              <Image src="/image-ice-cream2-1.png" alt="Ice Cream" width={100} height={100} className="w-100 h-100 object-fit-contain" />
            </div>
            <div className="col">
              <Feature_Card align="right" />
              <Feature_Card align="right" />
            </div>
          </div>
        </div>
      </section>

      <section className={style["product-section"]}>
        <div className="container d-flex flex-column justify-content-center align-items-center vh-100">
          <h2 className="text-center">Explore&nbsp;The<br />Deliciousness</h2>
          <p className="text-center">Whatever the mood, whatever the situation, Dairy Don is always set to race your tastebuds<br />
            From Mouth-watering Softies, Wholesome Sundaes, Flavourful Mastani and to Delish Thick Shakes.<br />
            Dive into the super deliciousness with Dairy Don s range of ice cream delights.</p>
          <div className="my-4 row w-100">
            <div className="col">
              <Swiper_Card />
            </div>
            <div className="col">
              <Swiper_Card />
            </div>
            <div className="col">
              <Swiper_Card />
            </div>
          </div>
          <Special_Button text="Explore More" bgcolor="#E65E5C" color="#FFF" />
        </div>
      </section>

      <section className={style["info-section"]}>
        <div className="container">
          <div className="row align-items-center min-vh-100">
            <div className="col">
              <h2>Serving Delicious Since 1981</h2>
              <p className="mt-4 mb-5">It all started in the year 1981 when D.D. Yeola family establishes an Ice Cream
                Parlour at Mahatma Gandhi Road Nashik (Maharashtra) India, with intent to source Softies,
                Thick Shakes and Mouth-watering Ice Creams.  Today, our product lineup includes
                many-flavoured ice creams, lip-smacking thick shakes, irresistible softies and many more to come. Well-known for our speciality in Ice Creams, we strive to source better without exception.
              </p>
              <Special_Button text="Learn More" color="#FFF" bgcolor="#E65E5C" />
            </div>
            <div className="col">
              <div className="container w-75 ratio ratio-1x1 posistion-relative">
                <Image src="/image-2.png" alt="Ice Cream" width={100} height={100} className="rounded rounded-5 ratio ratio-1x1 object-fit-cover" />
                <Image src="/tiramisu-2-1.png" alt="Delicious home made ice cream scooped on a cone" width={100} height={100} className="w-50 h-auto object-fit-contain position-absolute translate-middle top-100 start-0" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
