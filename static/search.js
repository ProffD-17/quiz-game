let categories_list = document.querySelector('#categories-list')
let search_input = document.querySelector('#category-search')
search_input.addEventListener('input', async function() {
    let res = await fetch('https://anyguesser.com/api/v1/categories')
    let { categories } = await res.json()
    html = ''
    console.log(res)
    console.log(categories)
    for (let i = 0; i < 50; i++) {
        html += '<li>' + categories[i]['name'] + '</li>'
    }
    categories_list.innerHTML = html
    
    console.log(html)
})