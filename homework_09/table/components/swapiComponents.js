// Функции, возвращающие блоки (DOM=-элементы)
export function createApiPoints(obj) {
    const result = document.createElement('div')
    Object.keys(obj).forEach(key => {
        const div = document.createElement('div')
        div.innerHTML = `<span>${key}</span>:<a href="${obj[key]}">${obj[key]}</a>`
        result.append(div)
    })
    return result;
}

// const createPeople = (name, height, mass, gender) => {
//     //
//     const tr= document.createElement('tr');
//     const tdName=document.createElement('td');
//     tdName.innerHTML=name;
//     return  tr.append(tdName);
//
//
//     //     table.append(document.createTextNode(`${title} -`))
//     // const a = document.createElement('a')
//     // a.text = href
//     // a.href = href;
//     // li.append(a)
//     // return li;
// }
//
// export const createPeopleList = ( peopleArray) => {
//     const ul = document.createElement('ul')
//     console.log(peopleArray);
//     peopleArray.forEach(people => (createPeople(people.name, people.height, people.mass, people.gender)))
//     return table;
// }

const createFilm = (name, height, mass, gender) => {
    const tr = document.createElement('tr');
    //tr.append(document.createTextNode(`${name} -`))
    const tdName = document.createElement('td')
    const tdheight = document.createElement('td')
    const tdmass = document.createElement('td')
    const tdgender = document.createElement('td')
    tdName.innerHTML = name;
    tr.append(tdName)
    tdheight.innerHTML =height;
    tr.append(tdheight)
    tdmass.innerHTML =mass;
    tr.append(tdmass)
    tdgender.innerHTML =gender;
    tr.append(tdgender)
    return tr;
}

export const createPeopleList = (peopleArray) => {
    //const ul = document.createElement('tr');
    const table=document.getElementById('table');
    peopleArray.forEach(people => table.append(createFilm(people.name, people.height,people.mass, people.gender)))
    return table
}