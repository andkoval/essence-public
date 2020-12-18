import {
  AfterViewInit,
  Component,
  OnInit,
  VERSION,
  ViewChild
} from "@angular/core";
import { MatSidenav } from "@angular/material/sidenav";
import { SidenavService } from "./services/sidenav.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild("sidenav") public sidenav: MatSidenav;

  constructor(private readonly sidenavService: SidenavService) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.sidenavService.setSidenav(this.sidenav);
  }
}
