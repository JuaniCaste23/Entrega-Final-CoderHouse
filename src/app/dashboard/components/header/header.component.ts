import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Subject, takeUntil } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { SessionService } from 'src/app/core/services/session.service';
import { User } from 'src/app/models/usermodel';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() sidenav!: MatSidenav;
  @Output() toggleSidebar = new EventEmitter()
  public user: User | null = null;
  private destroyed$ = new Subject();
  constructor(private readonly sessionService: SessionService, public readonly authService: AuthService) {
    this.sessionService.user$
      .pipe(takeUntil(this.destroyed$))
      .subscribe((user) => {
        if (user) this.user = user;
      })
  }
  ngOnDestroy(): void {
    this.destroyed$.next(true)
  }
}
