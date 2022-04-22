import styled from "styled-components";

export const NavbarWrapper = styled.div`
  .active {
    background-color: white;
    color: #1d353d !important;
  }

  a {
    /* font-weight: bold; */
    transition: all 0.3s linear;
    font-size: 14px;
    :hover {
      background-color: white;
      color: #1d353d !important;
    }
  }
  .company{
    opacity: 0;
    transition: .4s;
  }
  .father {
    :hover {
      /* background: red; */
      .company {
        opacity: 1;
      }
    }
  }
  .active {
    color: var(--bs-info);
  }
`;
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
  border-radius: 20px;
  box-shadow: 0 0 10px 2px rgba(255, 255, 255, 0.2);
  transition: 0.3s;
  :hover {
    box-shadow: 0 0 30px 4px rgba(255, 255, 255, 0.4);
  }
  input {
    caret-color: white;
    color: white !important;
    background: transparent !important;
    ::placeholder {
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
  box-shadow: 0 5px 10px rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  overflow: hidden;
  img {
    max-height: 230px;
    object-fit: cover;
    width: 100%;
  }
`;
export const AboutCardWrapper = styled.div`
  :nth-child(odd) {
    flex-direction: row-reverse;
  }
`;
export const Perspective = styled.div`
  transform-style: preserve-3d;
  transform: perspective(800px) rotateY(20deg) rotateX(40deg) translateX(100px);
  width: 50%;
`;
export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  img {
    /* height: 90%; */
    object-fit: cover;
  }
`;

export const Sidebar = styled.div`
  .menuItem {
    font-size: 12px;
    align-items: center;
    color: white;
    padding-left: 10px;
    svg {
      margin-right: 5px;
    }
  }
`;
export const AddProductWrapper = styled.div`
  input {
    background: none !important;
    color: white !important;
  }
`;
export const CategoryWrapper = styled.div`
  input {
    background: none !important;
    color: white !important;
  }
`;
export const CompanyAboutWrapper = styled.div`
  /* opacity: 0; */
  width: 300px;
  background: rgba(111, 111, 111);
  margin-bottom: -20px;
  position: absolute;
  bottom: -15px;
  left: 0;
  a {
    font-size: 11px !important;
  }
`;
export const AboutCreatorWrapper = styled.div`
    p{
      font-size: 20px;
      line-height: 2;
      word-spacing: 5px;
    }
`
export const ContactWrapper = styled.div`
  min-height: 400px;
`