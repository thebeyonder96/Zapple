import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchTerm!:string;

  constructor(private route:ActivatedRoute,private router:Router){
    this.route.params.subscribe(val=>{
      if(val.searchTerm) this.searchTerm = val.searchTerm;
    })
  }

  search(term:string){
    console.log(term);

    if(term) this.router.navigate(['/search/'+term])
  }
}
