import React from "react"
import { Flex, Box } from "rebass"
import { H1, H2, P, Ol } from "../components/VerticalRhythm"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Section from "../components/Section"
import RespGrid from "../components/RespGrid"
import ersteMannschaft from "../images/erstemannschaft.jpeg"
import zweiteMannschaft from "../images/zweitemannschaft.png"
import dritteMannschaft from "../images/drittemannschaft.jpeg"
import damenMannschaft from "../images/damenmannschaft.jpeg"
import Bot from "../components/ChatBot/ChatBot.js"

const ResourcesPage = () => (
  <Layout>
    <SEO title="Mannschaften" />
    <Section>
      <H1>Mannschaften</H1>
    </Section>
    <Section>
      <H2>1. Mannschaft</H2>
      <img src={ersteMannschaft} />
    </Section>
    <Section>
      <H2>2. Mannschaft</H2>
      <img src={zweiteMannschaft} />
    </Section>
    <Section>
    <H2>3. Mannschaft</H2>
      <img src={dritteMannschaft} />
    </Section>
    <Section>
      <H2>Damenmannschaft</H2>
      <img src={damenMannschaft} />
    </Section>
    <Bot />
  </Layout>
)

export default ResourcesPage
