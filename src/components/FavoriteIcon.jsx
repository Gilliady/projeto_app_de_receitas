import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import notfavoriteImage from '../images/whiteHeartIcon.svg';
import favoriteImage from '../images/blackHeartIcon.svg'
import { addOnFavoriteList, saveRecipes } from '../redux/actions';

export default function FavoriteIcon({ dados }) {
  console.log(dados);
  const recipe = dados.recipeInfo;
  const dispatch = useDispatch();
  const { type,isFavorite } = dados;
  console.log(isFavorite)
  const imageHeart = isFavorite ? favoriteImage : notfavoriteImage;
  
  const toggleFavorite = () => {
    const upperCaseName = `${type[0].toUpperCase()}${type.substring(1)}`;
    const nameOfPropId = `id${upperCaseName}`;
    const stateLS = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
    
    if(isFavorite){
      rmvFavorite(recipe[nameOfPropId],stateLS);
    }else{
      addFavorite(recipe[nameOfPropId],stateLS,upperCaseName);
    }
    
  }
  
  const rmvFavorite = (id,stateLS) => {
    //const upperCaseName = `${type[0].toUpperCase()}${type.substring(1)}`;
    //const nameOfPropId = `id${upperCaseName}`;
    //const stateLS = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
  
    const arrayWithOutCurrentRecipe = stateLS.filter((recipeLH)=> recipeLH.id !== id && recipeLH.type !== type)
    console.log(arrayWithOutCurrentRecipe);
    localStorage.setItem('favoriteRecipes', JSON.stringify(arrayWithOutCurrentRecipe));
    dispatch(saveRecipes(arrayWithOutCurrentRecipe))
  
  }
  
  const addFavorite = (id,stateLS,upperCaseName) => {
    //const upperCaseName = `${type[0].toUpperCase()}${type.substring(1)}`;
    //const nameOfPropId = `id${upperCaseName}`;
    //const stateLS = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];

    const recipeObject = {
      id,
      type,
      nationality: recipe.strArea || '',
      category: recipe.strCategory,
      alcoholicOrNot: recipe.strAlcoholic || '',
      name: recipe[`str${upperCaseName}`],
      image: recipe[`str${upperCaseName}Thumb`],
    };
    const newArray = [...stateLS, recipeObject];

    localStorage.setItem('favoriteRecipes', JSON.stringify(newArray));
    dispatch(addOnFavoriteList(recipeObject));
  };

  return (
    <button
      data-testid="favorite-btn"
      onClick={ toggleFavorite }
      src={ imageHeart }
      style={ { position: 'fixed',
        top: '20px',
        right: '10px' } }
    >
      <img
        src={ imageHeart }
        alt="white-heart-icon"
      />
    </button>
  );
}

FavoriteIcon.propTypes = {
  dados: PropTypes.shape().isRequired,

};
