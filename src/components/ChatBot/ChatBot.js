import React from "react"
import { ThemeProvider } from "styled-components"
import ChatBot from "react-simple-chatbot"

const theme = {
  background: "#f5f8fb",
  fontFamily: "Helvetica Neue",
  headerBgColor: "#0c4f0c",
  headerFontColor: "#fff",
  headerFontSize: "15px",
  botBubbleColor: "#0c4f0c",
  botFontColor: "#fff",
  userBubbleColor: "#fff",
  userFontColor: "#4a4a4a",
}

const steps = [
  {
    id: "1",
    message:
      "Hey! Schön, dass du dich für unsere Löwen interessierst! Gib uns doch Feedback, wie dir die Seite gefällt!",
    trigger: "2",
  },
  {
    id: "2",
    user: true,
    trigger: "3",
  },
  {
    id: "3",
    message: "Vielen Dank! Das gebe ich weiter!",
    end: true,
  },
]

const Bot = () => (
  <ThemeProvider theme={theme}>
    <ChatBot steps={steps} floating={true} />
  </ThemeProvider>
)

export default Bot
