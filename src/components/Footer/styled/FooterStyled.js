import styled from "styled-components"
import theme from "../../../theme"

const FooterStyled = styled.footer`
  padding: 1rem 0;
  background: ${theme.bgHeader || "#333"};
  background: #0c4f0c;
  color: #fff;
  & a {
    color: #fff;
  }
  & a:hover {
    color: #cfd8dd;
  }
`

export default FooterStyled
