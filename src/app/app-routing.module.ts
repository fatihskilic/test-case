import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CustomLayoutComponent } from "./custom-layout/custom-layout.component";
import { ReportComponent } from "./report/report.component";

const routes: Routes = [
  {
    path: "",
    component: ReportComponent,
    children: [],
  },
  {
    path: "reports",
    component: ReportComponent,
    children: [],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // preloadingStrategy: PreloadAllModules,
      scrollPositionRestoration: "enabled",
      relativeLinkResolution: "corrected",
      anchorScrolling: "enabled",
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
