import { Component, OnDestroy, OnInit } from '@angular/core';
import { ListaDianomisService } from '../services/lista-dianomis.service';
import { ListaDianomis } from '../models/listadianomis.model';

@Component({
  selector: 'app-ldianomis-list',
  templateUrl: './ldianomis-list.component.html',
  styleUrl: './ldianomis-list.component.css'
})

export class LdianomisListComponent implements OnInit{

listes? : ListaDianomis[] ; 

constructor(private ldianomisService : ListaDianomisService) {
  
  
}


  ngOnInit(): void {
    this.ldianomisService.getAllListesDianomis().subscribe(
      {next : (response) => {this.listes = response ;}
      }) ; 
  }


}
