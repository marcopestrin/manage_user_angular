import { Component, OnInit } from '@angular/core';
import { ApiService} from '../api.service';


@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.sass']
})
export class MainListComponent implements OnInit {
  
  results$ = {'todos':''};

  constructor(private apiService: ApiService) {}

  fetchData(){
    this.apiService.fetchData().subscribe((data)=>{
      this.results$ = data;
    });
    return this.results$;
  }

  ngOnInit() {

  }

}
