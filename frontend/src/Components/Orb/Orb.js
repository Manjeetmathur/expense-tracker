import React from "react";
import styled, { keyframes } from "styled-components";
import { useWindowSize } from "../../Utils/useWindowSize";

const Orb = () => {
  const { width, height } = useWindowSize();

  const moveOrb = keyframes`
              0%{
                     transform: translate(0,0);
              }
              50%{
                     transform: translate(${width}px,${height}px);
              }
              100%{
                     transform: translate(0,0);
              }

       `;

  const OrbStyled = styled.div`
    width: 70vh;
    height: 70vh;
    position: absolute;
    border-radius: 50%;
    margin-left: -37vh;
    margin-top: -37vh;
    background: linear-gradient(180deg, #f56692 50%, #f2994a 100%);
    filter: blur(300px);
    animation: ${moveOrb} 10s alternate linear infinite;
  `;

  return (
    <div>
      {/* <OrbStyled /> */}
    </div>
  );
};

export default Orb;
