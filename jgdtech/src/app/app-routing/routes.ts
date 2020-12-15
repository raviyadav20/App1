import { Routes } from '@angular/router';

import { VisualizationComponent } from '../visualization/visualization.component';
import { HomeComponent } from '../home/home.component';
import { PredictionComponent } from '../prediction/prediction.component';
import { VisualizeimageComponent } from '../visualizeimage/visualizeimage.component';


export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'visualization', component: VisualizationComponent},
   // { path: 'dishdetail/:id', component:DishdetailComponent},
    { path: '', redirectTo:'/home', pathMatch:'full'},
    { path: 'prediction', component:PredictionComponent },
    { path: 'visualizeimage', component:VisualizeimageComponent },

];
