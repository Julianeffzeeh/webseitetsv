import styled from "styled-components"
import theme from "../../../theme"

const HeaderStyled = styled.header`
  padding: 1rem 0;
  background: ${theme.bgHeader || "#0C4F0C"};
  background: #0c4f0c;
  color: #0c4f0c;
  position: fixed;
  top: 0;
  width: 100%;
  height: 75px;
  transition: 0.2s;
  z-index: 999;
`

export default HeaderStyled
