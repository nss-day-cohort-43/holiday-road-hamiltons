import { attractionsSelection } from "./attractions/AttractionSelect.js";
import { EaterySelect } from "./eateries/EaterySelect.js";
import { getParks,usePark } from './parks/ParkProvider.js';
import { ParkSelect } from './parks/ParkSelect.js';
// import { attractionsSelection } from './attractions/AttractionSelect.js';
// import { ParkSelect } from './parks/ParkSelect.js';
import './weather/WeatherList.js';
// import { selectState } from "./states/StateSelect.js";
import { getItineraries, useItineraries } from "./itineraries/ItineraryProvider.js";
// import { parksPreviewPopulate } from "./itineraries/ItineraryList.js";



attractionsSelection();
getParks();
usePark();
ParkSelect();
EaterySelect();
// parksPreviewPopulate();


getItineraries();
useItineraries();
