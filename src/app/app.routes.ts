import { Routes } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CitiesComponent } from './cities/cities.component';
import { CountriesComponent } from './countries/countries.component';
import { PlayerFightsComponent } from './player-fights/player-fights.component';
import { PlayeroneComponent } from './playerone/playerone.component';
import { PlayertwoComponent } from './playertwo/playertwo.component';
import { PlayerthreeComponent } from './playerthree/playerthree.component';
import { TeamoneComponent } from './teamone/teamone.component';
import { TeamtwoComponent } from './teamtwo/teamtwo.component';

export const routes: Routes = [
    {path:"weather", component: WeatherComponent},
    {path:"navbar", component: NavBarComponent},
    {path:"cities", component: CitiesComponent},
    {path:"countries", component: CountriesComponent},
    {path:"player-fights", component: PlayerFightsComponent},
    {path:"playerone", component: PlayeroneComponent},
    {path:"playertwo", component: PlayertwoComponent},
    {path:"playerthree", component: PlayerthreeComponent},
    {path:"teamone", component: TeamoneComponent},
    {path:"teamtwo", component: TeamtwoComponent},

    {path:"", component: WeatherComponent, pathMatch:"full"}
];
