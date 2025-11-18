import { Routes } from "@angular/router";
import { MedecinsListComponent } from "./components/medecins-list/medecins-list";
import { MedecinDetailComponent } from "./components/medecin-detail/medecin-detail";

export const routes: Routes = [
  { path: "", component: MedecinsListComponent },
  { path: "medecins/:id", component: MedecinDetailComponent },
  { path: "**", redirectTo: "" },
];