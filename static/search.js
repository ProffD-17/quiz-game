let categories_list = document.querySelector('#categories-list')
let search_input = document.querySelector('#category_search')
search_input.addEventListener('input', async function() {
    let response = await fetch('/categories?q=' + search_input.value)
    let categories = await response.json()
    for (let i = 0; i < categories.length; i++) {
        html += '<li>' + categories[i] + '</li>';
    }
    categories_list.innerHTML = html
})