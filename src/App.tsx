import React from 'react';
import tw, { styled } from 'twin.macro';

export const Box = styled.div`
  ${tw`
    w-full 
    h-screen 
    bg-black 
    flex 
    flex-col
    justify-center
    items-center
    text-white
    text-2xl
  `}
`;

const App = () => {
  return (
    <Box>
      <span tw="text-blue-200 mb-2 font-semibold">Vite + React + Typescript + Twin.macro</span>
      <span tw="text-sm">
        Placeholder
      </span>
    </Box>
  );
};

export default App;
