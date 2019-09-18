import { Component, OnInit } from '@angular/core';
import { ApiService} from '../api.service';


@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.sass']
})
export class MainListComponent implements OnInit {
  
  results$: Object;

  constructor(private apiService: ApiService) {
    console.log("constructor: ",this.results$);
  }

  fetchData(){
    this.apiService.fetchData().subscribe((data)=>{
      this.results$ = data;
      console.log(data);

    });
    console.log("---> ",this.results$)
    return this.results$;
  }

  ngOnInit() {

  }

}
