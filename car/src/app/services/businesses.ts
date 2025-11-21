import { Injectable } from '@angular/core';
import jsonData from '../assets/Business.json';

@Injectable({
  providedIn: 'root',
})
export class BusinessesData {

  pageSize: number = 3;

  // Fetch all data
  getBusinesses(page: number){
    let pageStart = (page - 1) * this.pageSize;
    let pageEnd = pageStart + this.pageSize;
    return jsonData.slice(pageStart,pageEnd);
  }

  // Get the last page number
  getLastPageNumber(){
    return Math.ceil(jsonData.length / this.pageSize);
  }

  // Get one data
  getBusiness(id: any){
    let dataToReturn: any = [];
    jsonData.forEach(function(business){
      if (business._id.$oid == id){
        dataToReturn.push(business);
      }
    })
    return dataToReturn;
  }
  
}
