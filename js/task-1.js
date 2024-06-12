const categoriesList = document.querySelectorAll('.item');

console.log(`Numbers of categorie ${categoriesList.length}`);

categoriesList.forEach(category => {
    const categoryName = category.querySelector('h2');
    const categoryItems = category.querySelectorAll('ul li');

    console.log(`Category: ${categoryName.textContent}`);
    console.log(`Elements: ${categoryItems.length}`);
})