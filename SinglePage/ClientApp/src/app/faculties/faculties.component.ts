import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'faculties',
  templateUrl: './faculties.component.html'
})
export class FacultiesComponent {
  public faculties: Faculty[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Faculty[]>(baseUrl + 'api/Faculties').subscribe(result => {
      this.faculties = result;
    }, error => console.error(error));    
  }  
}

interface Faculty {
  id: string;
  name: string;
}
