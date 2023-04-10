import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Pokemon } from 'src/app/model/pokemon';
import { PokemonService } from 'src/app/service/pokemon.service';

@Component({
  selector: 'app-element-page',
  templateUrl: './element-page.component.html',
  styleUrls: ['./element-page.component.scss']
})
export class ElementPageComponent implements OnInit, OnDestroy { 

  protected factDestroyed?:Subscription;
  protected pokemonList!: Pokemon;

  constructor(private readonly pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.factDestroyed = this.pokemonService.getPokemon().subscribe((data: Pokemon) => {
      this.pokemonList = data;
      console.log(this.pokemonList);
    });
  }

  ngOnDestroy(): void {
    this.factDestroyed?.unsubscribe();
  }

}
