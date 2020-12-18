import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";

import { SidenavService } from "./services/sidenav.service";

import { CountDownComponent } from "./components/count-down/count-down.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";

import { StakeModalComponent } from "./components/stake-modal/stake-modal.component";

import { HomeComponent } from "./pages/home/home.component";

const ANGULAR_MODULES = [
  BrowserModule,
  BrowserAnimationsModule,
  AppRoutingModule
];

const MATERIAL_MODULES = [
  MatButtonModule,
  MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatSidenavModule,
  MatToolbarModule
];

const SERVICE_PROVIDERS = [SidenavService];

// const MODALS = [StakeModalComponent];

const COMPONENTS = [
  CountDownComponent,
  FooterComponent,
  HeaderComponent
  // SidenavComponent,
  // ...MODALS
];

const PAGES = [
  HomeComponent
  // HiwComponent,
  // TreeComponent
];

@NgModule({
  imports: [...ANGULAR_MODULES, ...MATERIAL_MODULES],
  declarations: [AppComponent, ...PAGES, ...COMPONENTS],
  providers: [...SERVICE_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule {}
