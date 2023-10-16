import { Component, OnInit } from '@angular/core';
import { pokeData } from 'src/app/models/pokemonData';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
 pokemon:pokeData 

  constructor(
    private service:PokemonService 
  ) { 

    this.pokemon = {
        id:0,
        name:'',
        sprites:{
          front_default: ''
        },
        types:[]
      }

  }

  ngOnInit(): void {
    this.getPokemon('ditto')
  }

  getPokemon (searchName:string) {
    this.service.getPokemon(searchName).subscribe(
      {
        next: (res) => {

          this.pokemon = {
            id: res.id,
            name: res.name,
            sprites: res.sprites,
            types: res.types, 
          }

          console.log(res);
          console.log(res.types);
          console.log(this.pokemon);
          
          

          console.log(res)
          console.log(res.id)
          console.log(res.name)
          console.log(res.sprites.front_default)
          console.log(res.types)
        },
        error: (err) => console.log('not found'),
      }
    )
    
  }

}
