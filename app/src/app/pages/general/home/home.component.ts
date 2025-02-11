import { Component } from '@angular/core';
import { ButtonComponent } from "../../../shared/components/button/button.component";
import { CommonModule, NgFor, NgForOf } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonComponent, CommonModule, NgFor, NgForOf, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor() { }

  menuOpen: boolean = false;

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  public services : Services[] = [
    {
      title: 'NETTOYAGE INTERIEUR VEHICULE',
      image: 'inter.jpg',
      routing: 'services/interieur'
    },
    {
      title: 'NETTOYAGE EXTERIEUR VEHICULE',
      image: 'exter.jpg',
      routing: 'services/exterieur'
    },
    {
      title: 'NETTOYAGE VAPEUR VEHICULE',
      image: 'vapeur.jpg',
      routing: 'services/vapeur'
    },
    {
      title: 'RENOVATION OPTIQUE DE PHARES',
      image: 'phare.jpg',
      routing: 'services/phares'
    },
    {
      title: 'RENOVATION TISSUS ET CUIRS',
      image: 'cuirs.jpg',
      routing: 'services/tissus'
    },
    {
      title: 'DESTOCKAGE PUBLICITAIRE VEHICULE',
      image: 'pub.jpg',
      routing: 'services/pub'
    },
    {
      title: 'LUSTRAGE ET POLISSAGE CARROSSERIE',
      image: 'polish.jpg',
      routing: 'services/lustrage'
    },
    {
      title: 'TRAITEMENT CERAMIQUE CARROSSERIE',
      image: 'ceramique.jpg',
      routing: 'services/ceramique'
    },
    {
      title: 'TRAITEMENT BACTERICIDE HABITACLE',
      image: 'bacterie.jpg',
      routing: 'services/habitacle'
    },
    

    
  ]

  public services_agricole : Services[] = [
    {
      title: 'NETTOYAGE LUSTRAGE TRACTEUR',
      image: 'lustrage.jpg',
      routing: 'services/agricole-peinture'
    },
    {
      title: 'NETTOYAGE LUSTRAGE ENSILEUSE',
      image: 'ensileuse.jpg',
      routing: 'services/agricole-ensileuse'
    },
    {
      title: 'NETTOYAGE LUSTRAGE MOISSONNEUSE',
      image: 'moison.jpg',
      routing: 'services/agricole-moissonneuse'
    }
  ]
}

export interface Services {
  title : string,
  image : string,
  routing: string
}