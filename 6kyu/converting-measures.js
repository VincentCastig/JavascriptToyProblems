function convertRecipe(recipe){
    // Your code here
    let measurement;
    recipe = recipe.split(" ")
    
    if(recipe.includes('tbsp')) {
      measurement = 15
    }
    else {
      measurement = 5
    }
    
    for (i = 0; i < recipe.length; i++) {
      let y = recipe[i]
      if(recipe[i].includes('/')) {
        console.log(parseInt(recipe[i], 10))
        y = parseInt(recipe[i], 10) / recipe[i][recipe[i].length - 1];
      }
      if(recipe[i + 1] === 'tbsp') {
        y = Math.ceil(y * 15);
        recipe.splice(i + 2, 0, `(${y}g)`);
      }
      else if(recipe[i + 1] === 'tsp') {
        y = Math.ceil(y * 5);
        recipe.splice(i + 2, 0, `(${y}g)`);
      }
    } 
    return recipe.join(" ")
  }