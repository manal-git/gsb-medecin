import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Medecin } from '../../types/medecin';

@Component({
  selector: 'app-medecin-detail',  
  standalone: true,  
  imports: [RouterLink],  
  templateUrl: './medecin-detail.component.html',  
  styleUrls: ['./medecin-detail.component.css']
})
export class MedecinDetailComponent {
  private route = inject(ActivatedRoute);  
  medecins: Medecin[] = [
    { id: 1, nom: 'Doe', prenom: 'John', specialite: 'Generaliste', adresse: '1 rue de la paix', telephone: '0102030405', email: '' },    
    { id: 2, nom: 'Doe', prenom: 'Jane', specialite: 'Dentiste', adresse: '2 rue de la paix', telephone: '0102030406', email: '' },  ]; 
    
   id = Number(this.route.snapshot.paramMap.get('id'));  
   medecin = this.medecins.find(m => m.id === this.id);
 }
