import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { HiwComponent } from "./pages/hiw/hiw.component";
import { TreeComponent } from "./pages/tree/tree.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "how-it-works",
    component: HiwComponent
  },
  {
    path: "tree",
    component: TreeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
