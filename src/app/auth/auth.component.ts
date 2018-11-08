import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
user: User = new User();
constructor(private router: Router, private userService: UserService) {
  }

signIn(): void {
    this.userService.signIn(this.user)
        .subscribe( data => {
          alert("Authentication success");
          console.log(data);
          this.router.navigateByUrl('/home');
    });
  };

}
