import { NgModule } from "@angular/core";
import { ReportComponent } from "./report.component";
import { MatNativeDateModule } from "@angular/material/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { ChartModule } from "../../@vex/components/chart/chart.module";
import { MatSelectModule } from "@angular/material/select";
import { MatInputModule } from "@angular/material/input";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatButtonModule } from "@angular/material/button";
import { SeriesService } from "../services";
import { CommonModule } from "@angular/common";
import { MatTableModule } from "@angular/material/table";
import { ToastrModule } from "ngx-toastr";
@NgModule({
  declarations: [ReportComponent],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    ChartModule,
    MatDatepickerModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatTableModule,
    ToastrModule.forRoot({
      positionClass :'toast-top-right'
    })
  ],
  exports: [ReportComponent],
  providers: [SeriesService],
})
export class ReportModule {}
