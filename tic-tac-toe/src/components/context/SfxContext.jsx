// import { createContext } from "react";
// import useSound from "../hooks/UseSound";

//  export const SfxContext = createContext({})

// export function SfxContextProvider({children}){
//     const options = {
//         volume: 0.05
//     }
//    const hoverPath = 'https://zaiocontent.s3.eu-west-2.amazonaws.com/sound-effects/tick.mp3'
//    const hoverSfx = useSound(hoverPath, options)
//     return(
    
//         <SfxContext.Provider value={{hoverSfx}}>
// {children}
//         </SfxContext.Provider>
//     )
// }

import { createContext } from "react";
import useSound from "../hooks/UseSound";
import SoundEffect from '../../assets/mixkit-select-click-1109.wav'
export const SfxContext = createContext({});

export function SfxContextProvider({ children }) {
  const options = { volume: 0.05 };
  const hoverPath = SoundEffect
//    

  const playHoverSfx = useSound(hoverPath, options);

  return (
    <SfxContext.Provider value={{ playHoverSfx }}>
      {children}
    </SfxContext.Provider>
  );
}


