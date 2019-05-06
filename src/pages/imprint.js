import React from "react"
import { Flex, Box } from "rebass"
import { H1, H3, P } from "../components/VerticalRhythm"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Section from "../components/Section"
import RespGrid from "../components/RespGrid"

const ImprintPage = () => (
  <Layout>
    <SEO title="Imprint" />
    <Section>
      <H1>Impressum</H1>
      <RespGrid min={"240px"}>
        <Box>
          <H3>Verantwortlichkeit</H3>
          <P>
            Julian Scholz
            <br />
            {"Rudolf-Amelunxen-Straße 34, 50939 Köln"}
            <br />
            {"Julianscholz94@gmx.de"}
          </P>
        </Box>
        <Box>
          <H3>Gewährleistung und Haftung</H3>
          <P>
            Wir bemühen uns um möglichst korrekte und aktuelle Information.
            Trotzdem können Fehler auftreten. Die Inhalte wurden sorgfältig
            erarbeitet. Dennoch übernehmen Autoren und Herausgeber keine Gewähr
            und Haftung für die Richtigkeit, Zuverlässigkeit, Vollständigkeit
            und Aktualität der Information. Für die Inhalte externer
            Internetseiten übernimmt der Herausgeber keine Verantwortung.
            Inhalte externer Internetseiten geben nicht die Meinung des
            Herausgebers wieder. 
             <H3>Datenschutz</H3>
            Die Nutzung der im Rahmen des
            Impressums oder vergleichbarer Angaben veröffentlichten Kontaktdaten
            wie Postanschriften, Telefon- und Faxnummern, sowie E-Mail-Adressen
            durch Dritte zur Übersendung von nicht ausdrücklich angeforderten
            Informationen ist nicht gestattet. Rechtliche Schritte gegen die
            Versender von so genannten Spam-Mails bei Verstößen gegen dieses
            Verbot sind ausdrücklich vorbehalten.{" "}
          </P>
        </Box>
      </RespGrid>
    </Section>
  </Layout>
)

export default ImprintPage
