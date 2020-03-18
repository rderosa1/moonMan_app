import React, { useState } from "react";
import Container from "./components/Container";
import "./styles/App.css";
import Particles from "react-particles-js";
import { ThemeProvider, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
.container-landing {
  background-color: ${props => (props.theme.mode === "dark" ? "#111" : "transparent")};
  background-image: ${props => (props.theme.mode === "dark" ? 'url(".AdobeStock_105677222.jpeg")' : "#111")};
}
`;

export default function App() {
  const [theme, setTheme] = useState({ mode: "light" })
  return (
    <>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Particles
            params={{
              particles: {
                number: {
                  value: 400,
                  density: {
                    enable: false
                  }
                },
                color: {
                  value: ["#AAAAAA", "#DDDDDD", "#111111"]
                },
                size: {
                  value: 4,
                  random: true,
                  anim: {
                    speed: 4,
                    size_min: 0.3
                  }
                },
                line_linked: {
                  enable: false
                },
                move: {
                  random: true,
                  speed: 1,
                  direction: "top",
                  out_mode: "out"
                }
              },
              interactivity: {
                events: {
                  onhover: {
                    enable: true,
                    mode: "bubble"
                  },
                  onclick: {
                    enable: true,
                    mode: "repulse"
                  }
                },
                modes: {
                  bubble: {
                    distance: 250,
                    duration: 2,
                    size: 0,
                    opacity: 0
                  },
                  repulse: {
                    distance: 400,
                    duration: 4
                  }
                }
              }
            }}
            className="particles"
          />
          <Container theme={theme} setTheme={setTheme} />
        </>
      </ThemeProvider>
    </>
  );
}
