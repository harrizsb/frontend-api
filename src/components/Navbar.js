import styled from "@emotion/styled";

const Navbar = styled.nav`
  margin-top: 10px;
  margin-bottom: 20px;
  & > a {
    &:not(:first-of-type) {
      margin-left: 10px;
      margin-right: 10px;
    }
  }
`;

export default Navbar;
