import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  imports: [FooterComponent]
})
export class LoginComponent {

  constructor(private router: Router) {}

  login() {
      this.router.navigate(['/home']);
  }
}
