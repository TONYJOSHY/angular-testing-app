import { Routes } from "@angular/router";
import { FeatureComponent } from "./feature.component";


export const routes: Routes = [
    {
        path: '',
        /*
            This loads the card component in the app router outlet
            not in the feature router outlet
            loadComponent: () => import('./card-list/card-list.component')
                                .then(m => m.CardListComponent)
        */
        component: FeatureComponent,
        children: [
            {
                path: '',
                loadComponent: () => import('./card-parent/card-parent.component')
                                .then(m => m.CardParentComponent)
            }
        ]
    }
]