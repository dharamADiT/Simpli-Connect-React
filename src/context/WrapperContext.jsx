import React, { createContext, useContext, useState } from 'react'
export const dataContext=createContext()
const WrapperContext = (props) => {
  const [contact, setcontact] = useState([])


  return (
    <dataContext.Provider value={[contact, setcontact]}>
        {props.children}
        </dataContext.Provider>
  )
}

export default WrapperContext