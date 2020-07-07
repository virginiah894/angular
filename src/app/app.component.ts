import { Component } from '@angular/core';
import { FetchingService } from './fetching.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[FetchingService]
})
export class AppComponent {
  
  movies = [{title:'Terminator'}];
  
  constructor(private api: FetchingService){
   this. getMovies();
  }
  getMovies= () =>{ 
    this.api.getAllMovies().subscribe(
      data=>{
        this.movies = data;
      },
      error=>{
      console.log(error);
      }
    )
  }
}
