import React from "react"
import { Flex, Box } from "rebass"
import { H1, H2, H3, P } from "../components/VerticalRhythm"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Section from "../components/Section"
import RespGrid from "../components/RespGrid"

const DataProtectionPage = () => (
  <Layout>
    <SEO title="Datenschutz" />
    <Section>
      <H1>Datenschutz</H1>

      <H2>Diese Seite</H2>

      <p>
        Wir halten den Datenschutz für sehr wichtig. Die Nutzung dieser Website
        ist daher ohne die Bereitstellung personenbezogener Daten möglich. Bei
        dieser Website handelt es sich um eine persönliche und nicht
        kommerzielle Website, die von Julian Scholz zum Zwecke des Lernens an
        der Cologne Business School organisiert und gepflegt wird. Daher ist
        diese Website nicht dazu bestimmt, personenbezogene Daten zu erheben und
        zu verarbeiten. Daher verwendet diese Website an sich keine Google
        Analytics, Tracker, Werbung oder Marketing-Hooks. Darüber hinaus bite
        diese Website keine Newsletter oder Kontaktformulare an und der
        Eigentümer dieser Website speichert keine personenbezogenen Daten im
        Zusammenhang mit dieser Website.
      </p>

      <h2>Hosting und Internetprovider</h2>

      <p>
        Wie alle anderen Websites wird auch diese Website jedoch von einem
        Internetanbieter gehostet. Anbieter. Im Falle dieser Website ist der
        Internet-Provider der folgende Anbieter https://netlify.com. Netlify
        verwendet gängige Internet-Technologien, wie z.B. als Cookies und
        Webserver-Protokolle zur Überwachung des Zugriffs auf diese Website. Die
        meisten Internet-Provider erzeugen Log-Dateien, die in der Regel
        Folgendes enthalten Browsertyp des Besuchers, Spracheinstellung,
        verweisende Seite, zusätzliche angeforderte Websites, Datum und Uhrzeit
        jeder Besucheranfrage und möglicherweise persönlich identifizierende
        Informationen wie das Internet. Protokoll-(IP)-Adressen. Der Grund dafür
        ist, dass wir das besser verstehen. wie Besucher die Website nutzen, und
        um die Sicherheit zu überwachen und zu schützen. die Website. Bitte
        lesen Sie mehr über die Datenschutzerklärung von Netlify. um mehr über
        ihren Ansatz zum Schutz von Daten zu erfahren.
      </p>

      <h2>Do Not Track</h2>

      <p>
        Im Allgemeinen können Sie die Analyse des Benutzerverhaltens verhindern,
        indem Sie die Sperrung von die Verwendung von Cookies in Ihrem Browser,
        z.B. durch eine Ausnahme in der Datei den Browser (z.B.
        Firefox-Browser). Bitte schauen Sie in der Programmhilfe nach. wie dies
        in Ihrem Browser eingerichtet werden kann. Natürlich können Sie auch auf
        gelegentlich, im Einzelfall oder periodisch Cookies in Ihrem Unternehmen
        löschen. Browser, um Trackinginformationen zu löschen. Wenn Sie die
        Option so genannte Do-Not-Track-Funktion ("DNT") in Ihrem Browser, dann
        wird Ihr Besuch zu Webseiten werden nicht automatisch von
        Webanalysetools aufgezeichnet. Dies funktioniert jedoch nicht mit jedem
        Browser. So aktivieren Sie DNT in Ihrer Browser, bitte überprüfen Sie
        die Hilfefunktion Ihres Browsers, wenn Sie nicht wissen. wie man es
        aktiviert.{" "}
      </p>

      <h2>Änderungen der Datenschutzerklärung</h2>

      <p>
        Wir behalten uns das Recht vor, diese Datenschutzerklärung zu ändern
        Die aktuelle Version der Datenschutzerklärung ist auf englischer Sprache verfügbar unter
        <a href="https://ulrich-anders.eu/data-protection"> https://ulrich-anders.eu/data-protection</a>.
      </p>

      <h2>Anfragen</h2>

      <p>
       Anfragen bezüglich dieser Datenschutzerklärung können an folgenden Kontakt adressiert werden:
      </p>

      <p>Julian Scholz</p>

      <p>Cologne Business School</p>

      <p>Hardefuststr. 1</p>

      <p>D-50677 Köln</p>

      <p>julianscholz94@gmx.de</p>
    </Section>
  </Layout>
)

export default DataProtectionPage
