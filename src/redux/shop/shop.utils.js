export const getCollectionByCategory = (collections, idCategory) =>
  collections.find(colletion => colletion.id === idCategory);
