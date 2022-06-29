import { Component, OnInit } from "@angular/core";
import { TimeslotService } from "./timeslot.service";
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-timeslot",
  templateUrl: "./timeslot.component.html",
  styleUrls: ["./timeslot.component.css"],
})
export class TimeslotComponent implements OnInit {
  timeslotform: FormGroup;
  aslot: any;
  adate:any;
  constructor(
    private timeslots: TimeslotService,
    private router: Router,
    private formbuilder: FormBuilder
  ) {
    this.timeslotform = this.formbuilder.group({
      slotdate: ["", Validators.required],
    });
  }
  get validate() {
    return this.timeslotform.controls;
  }
  fdata = localStorage.getItem("Doctor_Id");
  timslots: any;
  splitted: any;
  ngOnInit(): void {
    this.gettimeslots();
  }
  gettimeslots() {
    this.timeslots.gettimeslots().subscribe((res: any) => {
      this.timslots = res.filter(
        (res: any) => res.doctor_id == `${this.fdata}`
      );
      this.splitted = this.timslots[0].timeslots.split(",");
      console.log(typeof this.timslots[0].timeslots);
      console.log(this.splitted);
      return res;
    });
  }

  setdateandtime(slot: any) {
    localStorage.removeItem("slot");
    localStorage.setItem("slot", slot);
    this.aslot = localStorage.getItem("slot");
    console.log(this.aslot);

    this.adate=this.timeslotform.controls['slotdate'].value;
    localStorage.removeItem('adate');
    localStorage.setItem('adate',this.adate);
    console.log(this.adate);
    this.router.navigateByUrl('bookappointment');
  }



}
