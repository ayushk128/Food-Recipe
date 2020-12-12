import React, {useState, useEffect} from "react";
import './App.css';
import Header from "./components/Header";
import Recipes from "./components/Recipe";
import Axios from "axios";


function App() {

  const [search, setSearch] = useState("pizza");
  const [recipes, setRecipes] = useState([]);
  const APP_ID="c36d6717";
  const APP_KEY="9062561684c06b59bf4e5621c6f8113c	";
  useEffect( ()=>{
     getRecipes();
  },[]);

 const getRecipes = async() =>{
  const res = await Axios(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  console.log(res);
  setRecipes(res.data.hits);
 };

 

  const onInputChange=(e)=>{
    setSearch(e.target.value)
  };

  const onSearchClick = ()=>{
    getRecipes();
  }

  return (
    <div className="App">
     <Header  search={search} onInputChange={onInputChange} onSearchClick={onSearchClick}/>
     <div class="container">
       <Recipes recipes={recipes}/></div>
    </div>
  );
}

export default App;
