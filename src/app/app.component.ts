import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';

import * as moment from 'moment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  status = new FormControl();
  Dues = new FormControl();
  Dates = new FormControl();
  selectCustom = new FormControl();
  showStat: boolean = true;
  viewValue: string[] = [];
  paymentList: string[] = ['Payment pending', 'Fully Paid', 'Partially Paid', 'In Dispute', 'Closed'];
  customList: string[] = ['Total Due Amount', 'Custom List', 'Issued Date Range', 'Last Activity On', 'Collection Status']
  DueList: string[] = ['This week', 'This month'];
  DateRange: string[] = ['Today', 'Last 7 days', 'Last 30 days'];
  showbutton: boolean = true;
  showpopup: boolean = false;

  submitForm() {
    let formObj = {
      status: this.status.value,
      issue_date_Range: this.Dates.value,
      issue_date_Range_From: moment().subtract(this.Dues.value === 'Today' ? 0 : this.Dues.value === 'Last 7 days' ? 7 : 30, 'days').format('DD-MM-YYYY'),
      issue_date_Range_To: moment().format('DD-MM-YYYY'),
    }
    console.log(formObj);
  }


  selectDropDown(e: string) {
    if (e === 'Issued Date Range') {
      this.showbutton = false;
    }
  }

  save(matSelect: any) {
    this.submitForm();
    matSelect.close();
  }

  close(matSelect: any) {
    matSelect.close();
  }

  showStatus() {
    this.showStat = false;
  }
  popupIn() {
    this.showpopup = true;
  }

  popupOut () {
    this.showpopup = false;
  }

}
