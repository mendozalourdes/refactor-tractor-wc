// import modifyPantry from './scripts'

const fetchUserData = () => {
  return fetch('http://localhost:3001/api/v1/users')
    .then(response => checkForError(response))
    // .catch(error => console.error(`User API Error: ${error.message}`));
}

const fetchRecipeData = () => {
  return fetch('http://localhost:3001/api/v1/recipes')
    .then(response => checkForError(response))
    .catch(error => console.error(`Recipe API Error: ${error.message}`));
}

const fetchIngredientsData = () => {
  return fetch('http://localhost:3001/api/v1/ingredients')
    .then(response => checkForError(response))
    .catch(error => console.error(`ingredients API Error: ${error.message}`));
}

const checkForError = (response) => {
  console.log(response)
  if (!response.ok) {
    throw new Error('Something went wrong, please try again,')
  } else {
    return response.json()
  }
}

// const handleError = (response) => {
//   if (response.status === 422) {
//     //display error below empty fields
//     errorMessage.innerText = 'Error, please fill in any empty fields'
//   }
//   if (response.status === 404) {
//     //display 'Page not found' on screen)
//     errorMessage.innerText = 'Sorry, page not found... 404';
//   }
// }

function addOrRemoveIngredient(userID, ingredientID, ingredientMod, user) {
  return fetch("http://localhost:3001/api/v1/users", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      userID: userID,
      ingredientID: ingredientID,
      ingredientModification: ingredientMod
    }),
  })
    .then(checkForError)
    .catch(err => console.log(`POST Request Error: ${err.message}`))
}

function retrieveData() {
  return Promise.all([fetchUserData(), fetchRecipeData(), fetchIngredientsData()])
}

export default {fetchUserData, fetchRecipeData, fetchIngredientsData, retrieveData, addOrRemoveIngredient}
