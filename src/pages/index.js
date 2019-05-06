import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Section from "../components/Section"
import Figure from "../components/Figure"
import { H1, P } from "../components/VerticalRhythm"
import img01_4x1 from "../images/1920/4x1/01.jpg"
import img01_21x9 from "../images/1440/21x9/01.jpg"
import img01_16x9 from "../images/1200/16x9/01.jpg"
import img01_3x2 from "../images/0800/3x2/01.jpg"
import img01_4x3 from "../images/0480/4x3/01.jpg"
import breakpoints from "../theme/breakpoints"
import ReactDOM from "react-dom"
import { ThemeProvider } from "styled-components"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import fahne from "../images/Fahne.png"
import Bot from "../components/ChatBot/ChatBot.js"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`TSV`, `Ründeroth`, `Fussball`]} />
    <Carousel
      vertical
      width="100%"
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
    >
      <div>
        <img src={fahne} height="550px" width="auto" object-fit="scale-down" />
        <p className="legend">TSV ♡</p>
      </div>
      <div>
        <img
          src="../images/Slide4.JPG"
          height="550px"
          width="auto"
          object-fit="scale-down"
        />
        <p className="legend">Tooooor am Ohl!!!</p>
      </div>
      <div>
        <img
          src="../images/Slide2.jpg"
          height="550px"
          width="auto"
          object-fit="scale-down"
        />
        <p className="legend">Die Ruhe vor dem Sturm...</p>
      </div>
      <div>
        <img
          src="../images/Slide3.jpg"
          height="550px"
          width="auto"
          object-fit="scale-down"
        />
        <p className="legend">
          Tim Kretschman- Kreisligatitan und lebende Legende
        </p>
      </div>
    </Carousel>
    <Section>
      <h3>Willkommen in der Welt des TSV Ründeroth</h3>
      <P>
        Hier erhälst du alle Informationen rund um unsere Kreisligalegenden vom
        Ohl. Egal ob du dich für das sportliche oder das Treiben rund um die
        schönste Nebensache der Welt interessierst- Hier wirst du fündig!
      </P>
      <P>Viel Spaß!</P>
    </Section>
    <Bot />
  </Layout>
)

export default IndexPage
