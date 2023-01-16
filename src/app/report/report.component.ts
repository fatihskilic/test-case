import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { SeriesService } from "../services";
import { Chart, registerables } from "chart.js";
import { Subscription } from "rxjs";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "report",
  templateUrl: "./report.component.html",
})
export class ReportComponent implements OnDestroy, AfterViewInit {
  daterRange = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  stock = new FormControl("");

  stockList: string[] = ["IBM", "AAPL", "MSFT", "AMZN", "GOOG"];

  valuesOfSeries: any[];

  chart: any;

  ctx: any;

  canvas: any;

  subs: Subscription;
  constructor(
    private seriesService: SeriesService,
    protected toastrService: ToastrService
  ) {
    Chart.register(...registerables);
  }

  ngAfterViewInit() {}

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  getSeries() {
    this.subs = this.seriesService.getSerires(this.stock.value).subscribe(
      (data) => {
        const serieNameObject: any[] = Object.values(data);
        if (this.stock.value) {
          this.valuesOfSeries = Object.entries(serieNameObject[1]).filter(
            (item) => {
              return new Date(item[0]) >= this.daterRange.value.start &&
                new Date(item[0]) <= this.daterRange.value.end
                ? item
                : null;
            }
          );

          this.createChart();
        } else {
          this.toastrService.info("Lütfen hisse senedi seçiniz !");
        }
      },
      (error) => {
        this.toastrService.error(error);
      }
    );
  }

  createChart() {
    const dates = this.valuesOfSeries.map((item) => {
      return item[0];
    });
    const values = this.valuesOfSeries.map((item) => {
      return item[1]["4. close"];
    });
    if (dates.length > 0) {
      if (this.chart) {
        this.chart.destroy();
      }
      this.canvas = document.getElementById("myChart");
      this.ctx = this.canvas.getContext("2d");
      this.chart = new Chart(this.ctx, {
        type: "line", //this denotes tha type of chart

        data: {
          // values on X-Axis
          labels: dates,
          datasets: [
            {
              label: this.stock.value,
              data: values,
              backgroundColor: "blue",
            },
          ],
        },
        options: {
          aspectRatio: 7,
          responsive: true,
        },
      });
    } else {
      this.toastrService.info("Lütfen tarih seçiniz !");
    }
  }
}
