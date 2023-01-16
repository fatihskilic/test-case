import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class SeriesService {
  connection = environment.api.alpha.series;
  apiKey = "M1CLY88RDKRIW3WJ";

  constructor(private http: HttpClient) {}

  getSerires(name: string) {
    return this.http.get<any>(
      this.connection +
        "&symbol=" +
        name +
        "&apikey=" +
        this.apiKey +
        "&datatype=json"
    );
  }
}
