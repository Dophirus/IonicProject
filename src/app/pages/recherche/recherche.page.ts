import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.page.html',
  styleUrls: ['./recherche.page.scss'],
  standalone: true, // Composant autonome
  imports: [IonicModule, CommonModule, FormsModule], // Importez les modules nécessaires
})
export class RecherchePage {}