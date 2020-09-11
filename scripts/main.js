import { attractionsSelection } from "./attractions/AttractionSelect.js"
import { eaterySelection } from "./eateries/EaterySelect.js"
import {getParks,useParks} from './parks/ParkProvider.js'
import {ParkSelect} from './parks/ParksSelect.js'
import {weatherList} from './weather/WeatherList.js'

console.log("I'm a dingus")

eaterySelection();
attractionsSelection();
getParks();
useParks();
ParkSelect();
weatherList()
