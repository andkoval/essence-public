import { Component, OnInit } from "@angular/core";
import { SidenavService } from "../../services/sidenav.service";

@Component({
  selector: "essence-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  constructor(private readonly sidenav: SidenavService) {}

  ngOnInit() {}

  public openSidenav(): void {
    this.sidenav.toggle();
  }
}
