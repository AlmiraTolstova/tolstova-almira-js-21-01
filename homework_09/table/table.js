

import {swapi} from './api/swapi.js' // Импорт из другого модуля
import {swapi as justApi} from './api/swapi.js' // Импорт из другого модуля под другим имененм
import {createApiPoints} from './components/swapiComponents.js'
import {createPeopleList} from "./components/swapiComponents.js";

// swapi.getMain((obj) => document.body.append(createApiPoints(obj)), console.error)
justApi.getPeoples(console.log)
//justApi.getPeoples(resp => document.getElementById('table').append(createPeopleList(resp.results)))
justApi.getPeoples(resp => createPeopleList(resp.results))