import { Component, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnDestroy {
  public hide = true;
  public cargando = false
  public form = new FormGroup({
    email: new FormControl('eve.holt@reqres.in', [Validators.required]),
    password: new FormControl('cityslicka', [Validators.required]),
  })
  private destroyed$ = new Subject();

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
  ) {}

  ngOnDestroy(): void {
    this.destroyed$.next(true)
  }

  login() {

    this.cargando = true
    this.authService.login({
      email: this.form.get('email')?.value || '',
      password: this.form.get('password')?.value || ''
    }).subscribe((user) => {

      this.cargando = false
      if (user) {
        this.router.navigate(['dashboard', 'home'])
      }
    })
  }
}
