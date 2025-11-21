import { Component } from '@angular/core';
import { BusinessesData } from '../services/businesses';
import { RouterLink, RouterOutlet, RouterModule } from "@angular/router";

@Component({
  selector: 'app-businesses',
  imports: [RouterLink, RouterOutlet,RouterModule],
  providers: [BusinessesData],
  templateUrl: './businesses.html',
  styleUrl: './businesses.css',
})
export class Businesses {
  business_list: any = [];
  page: number = 1;

  constructor(public businessData : BusinessesData) { }

  ngOnInit(){
    if (sessionStorage['page']){
      this.page = Number(sessionStorage['page']);
    }
    this.business_list = this.businessData.getBusinesses(this.page);
  }

  previousPage(){
    if(this.page > 1){
      this.page = this.page - 1;
      this.business_list = this.businessData.getBusinesses(this.page);
      sessionStorage['page'] = this.page
    }
  }

  nextPage(){
    if(this.page < this.businessData.getLastPageNumber()){
      this.page = this.page + 1;
      this.business_list = this.businessData.getBusinesses(this.page);
      sessionStorage['page'] = this.page
    }
  }


}
