import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#2155bf",
  fontColor: "#000",
};

export const darkTheme = {
  body: "#000",
  fontColor: "#fff",
};

export const GlobalStyles = createGlobalStyle`


	body {

		background-color: ${(props) => props.theme.body};
	/* 	color: ${(props) => props.theme.fontColor}; */
        font-family:Arial,Roboto,sans-serif;
        transition : 0.4s linear;
        
	}
  
`;
