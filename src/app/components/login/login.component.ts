import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorTxt: any;
  iserror:boolean = false;

  constructor( private router: Router) { }

  ngOnInit(): void {
  }
  login(user: string, pass: string) {
    if (user === "admin" && pass === "admin") {
      this.iserror = false;
      this.router.navigate(["/list"]);
    } else {
      this.iserror = true;
      this.errorTxt = "Please enter valid credentials."
    }
  }

}
