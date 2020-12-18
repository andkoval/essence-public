import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { ReplaySubject } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable()
export class SidenavService {
  private sidenav: ReplaySubject<MatSidenav> = new ReplaySubject(1);

  public setSidenav(sidenav: MatSidenav) {
    this.sidenav.next(sidenav);
  }

  public open(): void {
    this.sidenav
      .pipe(
        take(1)
      )
      .subscribe(data => data.open());
  }

  public close(): void {
    this.sidenav
      .pipe(
        take(1)
      )
      .subscribe(data => data.close());
  }

  public toggle(): void {
    this.sidenav
      .pipe(
        take(1)
      )
      .subscribe(data => data.toggle());
  }
}
