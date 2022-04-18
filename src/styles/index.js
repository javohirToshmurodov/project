import styled from "styled-components";

export const NavbarWrapper = styled.div``;
export const Container = styled.div`
  padding: 0 30px;
`;
export const SignUpWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
  padding: 50px;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  background-color: transparent;
  padding: 25px;
  box-shadow: inset 32px 32px 32px #1c1c1c, inset -32px -32px 32px #282828;
  border-radius: 20px;
  input{
    caret-color: white;
    color: white !important;
    background: transparent !important;
    ::placeholder{
      color: white;
      letter-spacing: 3px;
      text-transform: lowercase;
    }

  }
`;
export const HomeWrapper = styled.div``;
export const CardOfColleague = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin-bottom: 30px;
`;
