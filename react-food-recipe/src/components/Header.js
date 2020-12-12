import React from "react";

const Header = (props) =>
{
    const {search, onInputChange, onSearchClick}=props;
    return (
    <div class="jumbotron">
        <h1 class="display-1"><span class="material-icons brand-icon "> fastfood</span> Food Recipes</h1>

        <div class="input-group w-50 mx-auto">
  <input type="text" class="form-control" placeholder="search your food love" value={search} onChange={onInputChange}/>
  <div class="input-group-append">
    <button class="btn btn-dark " onClick={onSearchClick}>
        search recipes
    </button>
  </div>
</div>

    </div>

    );
}

export default Header;