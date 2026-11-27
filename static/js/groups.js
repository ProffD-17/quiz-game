// select element that contains groups
const group_select = document.querySelector('#group');

async function get_groups() {
    const res = await fetch('https://anyguesser.com/api/v1/groups');
    const groups = await res.json();
    return groups['groups']
}

async function display_groups() {
    let groups_html = '';
    groups = await get_groups();
    for (let i = 0; i < groups.length; i++) {
        group = groups[i];
        group_name = group['name'];
        groups_html += `<option value="${group_name}">${group_name}</option>`;
    }
    group_select.innerHTML = groups_html;
}
display_groups();
