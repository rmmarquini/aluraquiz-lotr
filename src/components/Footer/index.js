import React from 'react';
import styled from 'styled-components';

// src/components/Footer/index.js
const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 7px 15px;
  display: flex;
  align-items: center;
  border-radius: 4px; 
  img {
    width: 58px;
    margin-right: 23px;
  }
  a {
    color: white;
    text-decoration: none;
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
    span {
      margin-left: 5.4rem;
      text-decoration: underline;
    }
  }
`;

export default function Footer(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FooterWrapper {...props}>
      {/* eslint-disable-next-line react/jsx-no-target-blank */}
      <a href="https://www.alura.com.br/" target="_blank">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      <p>
        {/* eslint-disable-next-line react/jsx-no-target-blank */}
        <a href="https://www.alura.com.br/imersao-react-next-js/" target="_blank">
          <span>#ImersãoReactAlura</span>
        </a>
      </p>
    </FooterWrapper>
  );
}
