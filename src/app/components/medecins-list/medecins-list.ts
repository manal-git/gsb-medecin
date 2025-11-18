import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { Medecin } from "../../types/medecin.interface";


@Component({
  selector: "app-medecins-list",
  standalone: true,
  imports: [RouterLink],
  templateUrl: "./medecins-list.html",
  styleUrls: ["./medecins-list.css"],
})
export class MedecinsListComponent {
  medecins: Medecin[] = [
    {
      id: 1,
      nom: "Doe",
      prenom: "John",
      specialitecomplementaire: "Generaliste",
      adresse: "1 rue de la paix",
      telephone: "0102030405",
      email: "",
    },
    {
      id: 2,
      nom: "Doe",
      prenom: "Jane",
      specialitecomplementaire: "Dentiste",
      adresse: "2 rue de la paix",
      telephone: "0102030406",
      email: "",
    },
  ];
}