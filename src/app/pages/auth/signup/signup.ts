import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  imports: [RouterModule, FormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup {
  user = {
    username: '',
    email: '',
    password: '',
  };

  onSubmit() {
    console.log('Register form submitted:', this.user);
  }
}
