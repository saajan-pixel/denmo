import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;

  constructor(private _apiService: DemoService) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
    });
  }

  token = {
    refresh:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY4NTU1MTU3NywiaWF0IjoxNjg1NDY1MTc3LCJqdGkiOiJjOGExMDg0MTgzMDk0MTNjOWIxZDAzYWRiZGFlYTgxZCIsInVzZXJfaWQiOjQsImVtYWlsIjoic2FjYXJAc2FjYXIuY29tIn0.VTZSWBB_BL0mhPQ9CEy1L-Y-VS5yL0TpurOofqHzyJ0',
    access:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjg1NDY1Nzc3LCJpYXQiOjE2ODU0NjUxNzcsImp0aSI6IjVlM2U5MTVkZTc1ZDRiYWQ4NDc0NmVkYWNiMjMxYzk3IiwidXNlcl9pZCI6NCwiZW1haWwiOiJzYWNhckBzYWNhci5jb20ifQ.SaOxD3BpqFA4SEgjOBcyaRKrEr0dcNCDdpr_Am0HHBo',
    user_email: 'sacar@sacar.com',
  };

  login() {
    console.log(this.form.value);

    localStorage.setItem('token', JSON.stringify(this.token));
    /* This code is making a HTTP POST request to the API service's `login` endpoint with the form data
    as the request body. The `subscribe` method is used to handle the response from the server. When
    the response is received, it logs the response to the console and sets the token in the local
    storage. It also has a commented out line that would display an alert message if the login was
    successful. */
    this._apiService.login(this.form.value).subscribe((res) => {
      console.log('login response', res);
      localStorage.setItem('token', JSON.stringify(this.token));
      // alert("Logged in Successfully !")
    });
  }

  getList() {
    this._apiService.getBlogList().subscribe((res) => console.log(res));
  }
}
