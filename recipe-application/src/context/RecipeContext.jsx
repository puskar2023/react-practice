import React, { createContext, useState } from 'react'


export const recipecontext = createContext(null);
const RecipeContext = (props) => {
  const [data, setdata] = useState([
    {
      id: 1,
      image: "https://recipes.timesofindia.com/thumb/61050397.cms?width=1200&height=900",
      title: "Samosa",
      desc: "A samosa is a popular, deep-fried (or occasionally baked) savory pastry, widely known as a street food and snack across South Asia, the Middle East, and Africa."
    },
    {
      id: 2,
      image: "https://pbs.twimg.com/media/ENG6LnVUEAEPQc5.jpg",
      title: "Matar ki kachauri"
    },
    {
      id: 3,
      image: "https://pbs.twimg.com/media/ENG6LnVUEAEPQc5.jpg",
      title: "Matar ki kachauri"
    },
    {
      id: 4,
      image: "https://pbs.twimg.com/media/ENG6LnVUEAEPQc5.jpg",
      title: "Matar ki kachauri"
    },
    {
      id: 5,
      image: "https://pbs.twimg.com/media/ENG6LnVUEAEPQc5.jpg",
      title: "Matar ki kachauri"
    },
    {
      id: 6,
      image: "https://pbs.twimg.com/media/ENG6LnVUEAEPQc5.jpg",
      title: "Matar ki kachauri"
    },
    {
      id: 7,
      image: "https://pbs.twimg.com/media/ENG6LnVUEAEPQc5.jpg",
      title: "Matar ki kachauri"
    },
  ]);
  return (
    <recipecontext.Provider value={[data, setdata]}>
      {props.children}
    </recipecontext.Provider>
  )
}

export default RecipeContext