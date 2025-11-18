import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { Medecin } from "../../types/medecin";

@Component({
  selector: "app-medecins-list",
  standalone: true,
  imports: [RouterLink],
  templateUrl: "./medecins-list.component.html",
  styleUrls: ["./medecins-list.component.css"],
})
export class MedecinsListComponent {
  medecins: Medecin[] = [
    {
      id: 1,
      nom: "Doe",
      prenom: "John",
      specialite: "Generaliste",
      adresse: "1 rue de la paix",
      telephone: "0102030405",
      email: "",
    },
    {
      id: 2,
      nom: "Doe",
      prenom: "Jane",
      specialite: "Dentiste",
      adresse: "2 rue de la paix",
      telephone: "0102030406",
      email: "",
    },
  ];
}