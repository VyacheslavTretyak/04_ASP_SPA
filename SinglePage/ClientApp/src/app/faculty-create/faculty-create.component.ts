import { Component, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'faculties',
  templateUrl: './faculty-create.component.html'
})
export class FacultyCreateComponent {
  public result: string;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    var body = {
      Fname: emp.Fname, Lname: emp.Lname, Email: emp.Email
    }

    return this.http.post<employee>(ROOT_URL + '/Employees', body, { headers })  
    http.post(baseUrl + 'api/Faculties', options).subscribe(result => {
      this.result = result;
    }, error => console.error(error));    
  }  
}

interface Faculty {
  id: string;
  name: string;
}
