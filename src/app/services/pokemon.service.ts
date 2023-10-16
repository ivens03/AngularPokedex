import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { environment } from 'src/environments/environment'
import { pokeData } from '../models/pokemonData'
 
@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseURL:string = ""
  private pokeData:pokeData | any

  constructor(private http:HttpClient) {
    this.baseURL = environment.poke_api
  }

  getPokemon(pokemonName:string):Observable<pokeData>{
    this.pokeData = this.http.get<pokeData>(`${this.baseURL}${pokemonName}`)
    return this.pokeData
    
  }

}
