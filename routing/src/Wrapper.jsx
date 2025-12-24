import React, { createContext, useState } from 'react'

export const listcontext = createContext(null);
const Wrapper = (props) => {
    const [list, setlist] = useState([]);
  return (
    <listcontext.Provider value={[list,setlist]}>
        {props.children}
    </listcontext.Provider>
  )
}

export default Wrapper