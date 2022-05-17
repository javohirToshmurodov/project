import styled from "styled-components";

export const NavbarWrapper = styled.div`
  .active {
    background-color: yellow;
    color: #000;
  }

  a {
    /* font-weight: bold; */
    transition: all 0.3s linear;
    font-size: 14px;
    :hover {
      background-color: yellow;
      color: #000;
    }
  }
  .company {
    opacity: 0;
    transition: 0.4s;
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
    /* color: var(--bs-info); */
    background: yellow !important;
  }
`;
export const Container = styled.div`
  padding: 0 30px;
`;
export const SignUpWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 50px;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  background-color: transparent;
  padding: 25px;
  border-radius: 20px;
  box-shadow: 0 0 10px 2px rgba(0,0,0,0.2);
  transition: 0.3s;
  :hover {
    box-shadow: 0 0 30px 4px rgba(0,0,0,0.3);
  }
  input {
    background: transparent !important;
    ::placeholder {
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
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.23);
  backdrop-filter: blur(1.9px);
  border: 1px solid rgba(31, 32, 33, 0.17);
  border-radius: 8px;
  overflow: hidden;
  img {
    max-height: 230px;
    object-fit: cover;
    width: 100%;
  }
`;
export const AboutCardWrapper = styled.div`
img{
  height: 300px;
  max-height: 350px;
}
  :nth-child(odd) {
    flex-direction: row-reverse;
  }
  .roundedImage {
    border-radius: 10px;
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
  }
`;

export const Sidebar = styled.div`
  .menuItem {
    font-size: 13px;
    align-items: center;
    padding-left: 10px;
    svg {
      margin-right: 5px;
    }
  }
`;
export const AddProductWrapper = styled.div`
  input {
    background: none !important;
  }
`;
export const CategoryWrapper = styled.div`
  input {
    background: none !important;
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
  p {
    font-size: 20px;
    line-height: 2;
    word-spacing: 5px;
    text-align: justify;
    img {
      max-width: 100%;
      height: auto;
      width: 550px;
    }
  }
`;
export const ContactWrapper = styled.div`
  min-height: 340px;
  padding: 0 25px;
  /* background-color: rgba(214, 255, 10, 0.31); */
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.23);
  backdrop-filter: blur(1.9px);
  border: 1px solid rgba(31, 32, 33, 0.17);
  input {
    background: none;
    /* color: white !important; */
    :focus {
      background: none;
    }
  }
`;
export const Connections = styled.div`
  .contactStyle {
    line-height: 2;
    font-size: 30px;
  }
`;
export const ProductCardWrapper = styled.div`
  .imageWrapper {
    width: 25% !important;
    img {
      object-fit: cover;
      /* max-height: 200px; */
      min-height: 150px;
      height: 200px;
      width: 100%;
    }
  }
  .productName{
    color:#707070;
  }
`;
