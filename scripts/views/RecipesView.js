class RecipesView {
  constructor() {
    this.recipesContainer = document.querySelector("#results");
    this.recipesContainer.classList.add(
      "flex",
      "flex-wrap",
      "justify-between",
      "gap-10",
      "p-10"
    );
  }

  init(availableFilters, filters) {
    this.search = new Search();
    this.search.init(availableFilters, filters);
    this.search.render(availableFilters, filters);
  }

  render(recipes, availableFilters, filters) {
    this.recipesContainer.innerHTML = "";
    if (recipes.length === 0) {
      this.recipesContainer.textContent = "Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson », etc."
    } else {
      recipes.forEach((recipe) => {
        const recipeCard = new RecipeCard(recipe);
        this.recipesContainer.appendChild(recipeCard.render());
      });
    }

    this.search.render(availableFilters, filters);
  }
}
