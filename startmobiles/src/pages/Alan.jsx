import React,{useEffect} from 'react'
import alanBtn from '@alan-ai/alan-sdk-web';

const Alan = () => {
    useEffect(() => {
        alanBtn({
            key: '6e8d5400b72ce0b4ff2d7f5e01f468672e956eca572e1d8b807a3e2338fdd0dc/stage',
            onCommand: (commandData) => {
              if (commandData.command === 'go:back') {
                // Call the client code that will react to the received command
              }
            }
        });
      }, []);
  return (
    <div>

    </div>
  )
}

export default Alan