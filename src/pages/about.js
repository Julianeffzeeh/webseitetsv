import React from "react"
import { Flex, Box } from "rebass"
import { H1, H2, H3, P } from "../components/VerticalRhythm"
import ReactDOM from "react-dom"
/*import Countdown from 'react-countdown-now';*/
import Countdown from "../components/Countdown/Countdown.js"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Section from "../components/Section"
import RespGrid from "../components/RespGrid"
import gruempel from "../images/gruempeltunier2.jpg"
import rummel from "../images/rummel.jpg"
import Bot from "../components/ChatBot/ChatBot.js"

const imgStyle = { maxHeight: 300, maxWidth: 500 }

const AboutPage = () => (
  <Layout>
    <SEO title="Events" />
    <Section>
      <H1 fontSize={[6]} lineHeight={[1.5]}>
        Events
      </H1>
    </Section>
    <Section>
      <H2>Ründerother Kirmes 2019</H2>
      <img src={rummel} />
      <center>
        Zeit bis zum Rummel: <Countdown date={new Date("2019-05-10")} />
      </center>
    </Section>
    <Section>
      <H2>Grümpelturnier 2019</H2>
      <img src={gruempel} />
      <center>
        Zeit bis zum Grümpeltunier: <Countdown date={new Date("2019-07-14")} />
      </center>
    </Section>
    <Bot />
  </Layout>
)

export default AboutPage
