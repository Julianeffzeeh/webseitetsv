import styled from "styled-components"
import theme from "../../../theme"

const MainStyled = styled.main`
  min-height: 700px;
  background: ${theme.bgMain || "#fff"};
  background: #fff;
  /*background: linear-gradient(#0c4f0c 30%, #fff 50%, #0c4f0c 70%),
    linear-gradient(to right, #0c4f0c 30%, #fff 50%, #0c4f0c 70%);
    /*radial-gradient(ellipse at center, #fff, #0c4f0c, transparent);
  /* color: #000; */
  padding-bottom: 3rem;
  padding-top: 75px;
`

export default MainStyled
