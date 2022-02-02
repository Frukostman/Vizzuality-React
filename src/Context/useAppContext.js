import  { createContext, useContext, useState}  from "react";

const AppContext = createContext();
const useAppContext = () => useContext(AppContext);

export const AppProvider = ({children}) => {

  const [displayChange, setDisplayChange] = useState([
    {content: false,
    layer:false,
    id: 0},
    {content: false,
    layer:false,
    id: 0},
    {content: false,
    layer:false,
    id: 0},
    {content: false,
    layer:false,
    id: 0},
])

  const loadDisplay = (obj) =>{
    setDisplayChange(obj)
  }

  const toggleContentDisplay = (id) =>{
      for (let i = 0; i < displayChange.length; i++) {
        if(id==(displayChange[i].id)){
          displayChange[i].content = !displayChange[i].content
        }        
        setDisplayChange([...displayChange])
      }
  }
  const toggleLayerDisplay = (id) =>{
      for (let i = 0; i < displayChange.length; i++) {
        if(id==(displayChange[i].id)){
          displayChange[i].layer = !displayChange[i].layer
        }        
        setDisplayChange([...displayChange])
      }
  }

    return <AppContext.Provider value={{
                    loadDisplay,
                    toggleContentDisplay,
                    toggleLayerDisplay,
                    displayChange,
              }}>
              {children}
    </AppContext.Provider>
}

export default useAppContext