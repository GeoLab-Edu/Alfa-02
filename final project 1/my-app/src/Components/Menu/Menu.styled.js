import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background: #F6F6F6;
  background-color: #F6F6F6
  height: 100vh;
  text-align: left;
  padding: 2%;
  padding-top: 5%;
  position: absolute;
  box-shadow: 2px 2px grey;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  width: 100%;

  

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`;
