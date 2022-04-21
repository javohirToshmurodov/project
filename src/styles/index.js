import styled from "styled-components";

export const NavbarWrapper = styled.div`
  a {
    border-bottom: 1px solid transparent;
    transition: all 0.3s ease;
    border-radius: 5px 5px 0 0 ;
    :hover {
      border-bottom: 1px solid white;
    }
  }
  .active{
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
  box-shadow: 0 10px 5px rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  overflow: hidden;
  img {
    max-height: 250px;
    object-fit: cover;
    width: 100%;
  }
`;
export const aboutCardWrapper = styled.div`
  :nth-child(2) {
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
    svg{
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
