import { expect } from 'chai';
import Cookbook from '../src/cookbook'
import Recipe from '../src/recipe'
import { testIngredients, testRecipes, testUserData } from '../test/test-data';

describe('Cookbook', () => {
  let recipe1, recipe2, recipe3, testCookbook, allRecipes;

  beforeEach(() => {
    recipe1 = new Recipe(testRecipes[0], testIngredients);
    recipe2 = new Recipe(testRecipes[1], testIngredients);
    recipe3 = new Recipe(testRecipes[2], testIngredients);
    allRecipes = [recipe1, recipe2, recipe3];
    testCookbook = new Cookbook(allRecipes);
  });

  it('Should be a function', () => {
    expect(Cookbook).to.be.a('function');
  });

  it('should have a property to hold recipe data', () => {
    expect(testCookbook.cookbook).to.equal(allRecipes);
  });

  it('should have a way to store recipes that are filtered by tag', () => {
    expect(testCookbook).to.have.property('filteredByTag');
    expect(testCookbook.filteredByTag).to.deep.equal([]);
  });

  it('should have a way to store recipes that are filtered by name or ingredient', () => {
    expect(testCookbook).to.have.property('filteredByNameOrIngredient');
    expect(testCookbook.filteredByNameOrIngredient).to.deep.equal([]);
  });

  it('Should have a method that retrieves recipes by a tag', () => {
    testCookbook.filterByTag(['snack']);
    expect(testCookbook.filteredByTag).to.deep.equal(allRecipes)
  });

  it('Should be able to retrieve recipes by a different tag', () => {
    testCookbook.filterByTag(['morning meal']);
    expect(testCookbook.filteredByTag).to.deep.equal([recipe1, recipe3]);
  });

  it('Should have a method that retrieves recipes by multiple tags', () => {
    testCookbook.filterByTag(['snack', 'appetizer']);
    expect(testCookbook.filteredByTag).to.deep.equal(allRecipes);
  });

  it('Should be able to retrieve recipes by different tags', () => {
    testCookbook.filterByTag(['morning meal', 'breakfast']);
    expect(testCookbook.filteredByTag).to.deep.equal([recipe1, recipe3]);
  });

  it('Should be able to filter recipes by ingredient', () => {
    testCookbook.filterByNameOrIngredient(['egg']);
    expect(testCookbook.filteredByNameOrIngredient).to.deep.equal([
      recipe1,
      recipe3
    ]);
  });

  it('Should be able to filter recipes by a different ingredient', () => {
    testCookbook.filterByNameOrIngredient(['cilantro']);
    expect(testCookbook.filteredByNameOrIngredient).to.deep.equal([
      recipe2
    ]);
  });

  it('Should be able to filter recipes by a different ingredient', () => {
    testCookbook.filterByNameOrIngredient(['rice']);
    expect(testCookbook.filteredByNameOrIngredient).to.deep.equal([
      recipe1,
      recipe3
    ]);
  });

  it('Should be able to filter recipes by name', () => {
    testCookbook.filterByNameOrIngredient(['salsa']);
    expect(testCookbook.filteredByNameOrIngredient).to.deep.equal([recipe2]);
  });

  it('Should be able to filter recipes by a different name', () => {
    testCookbook.filterByNameOrIngredient(['omelet']);
    expect(testCookbook.filteredByNameOrIngredient).to.deep.equal([recipe3]);
  });

  it('Should be able to filter recipes by a different name', () => {
    testCookbook.filterByNameOrIngredient(['fried']);
    expect(testCookbook.filteredByNameOrIngredient).to.deep.equal([
      recipe1
    ]);
  });

  //should probably add some sad path testing here for: 
  // uppercase inputs
  // inputs with weird symbols in them
  // inputs with double spaces between words
  // anything else?

});
