// Функции, возвращающие блоки (DOM=-элементы)
Object.defineProperty(exports, "__esModule", { value: true });

export function createApiPoints(obj) {
    const result = document.createElement('div')
    Object.keys(obj).forEach(key => {
        const div = document.createElement('div')
        div.innerHTML = `<span>${key}</span>:<a href="${obj[key]}">${obj[key]}</a>`
        result.append(div)
    })
    return result;
}


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
    const table=document.getElementById('table');
    peopleArray.forEach(people => table.append(createFilm(people.name, people.height,people.mass, people.gender)))
    return table
}