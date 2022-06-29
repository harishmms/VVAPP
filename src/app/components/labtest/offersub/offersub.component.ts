import { Component, OnInit } from "@angular/core";
import { OffersubService } from "./offersub.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-offersub",
  templateUrl: "./offersub.component.html",
  styleUrls: ["./offersub.component.css"],
})
export class OffersubComponent implements OnInit {
  checkup_id: any;
  checkuplist: any;
  constructor(private offersub: OffersubService, private router: Router) {
    this.checkup_id = localStorage.getItem("HealthCheckupId");
  }

  ngOnInit(): void {
    this.getcheckupbyid();
  }

  getcheckupbyid() {
    this.offersub.getcheckupbyid(this.checkup_id).subscribe((res: any) => {
      this.checkuplist = res;
      console.log(this.checkuplist);
      return this.checkuplist;
    });
  }
}
