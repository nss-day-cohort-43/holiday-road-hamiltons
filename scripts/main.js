import { attractionsSelection } from "./attractions/AttractionSelect.js"
import { eaterySelection } from "./eateries/EaterySelect.js"
import {getParks,usePark} from './parks/ParkProvider.js'
import {ParkSelect} from './parks/ParkSelect.js'
import {weatherList} from './weather/WeatherList.js'
import { selectState } from "./states/StateSelect.js"


eaterySelection();
attractionsSelection();
getParks();
usePark();
ParkSelect();
weatherList();
selectState()
