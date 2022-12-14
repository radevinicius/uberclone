import React from 'react'
import { OriginContextProvider } from './src/contexts/contexts';
import RoootNavigator from './src/navigations/RootNavigator'
    const App = () => {
      return (
          <OriginContextProvider>

            <RoootNavigator />
          </OriginContextProvider>
            
       
       
      )
    }
    
    export default App;

