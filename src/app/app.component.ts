import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';


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
  viewValue: string[] = [ ];
  paymentList: string[] = ['Payment pending', 'Fully Paid', 'Partially Paid', 'In Dispute', 'Closed'];
  DueList: string[] = ['This week', 'This month'];
  DateRange: string[] = ['This week', 'Last 7 days', 'Last 30 days'];
  showbutton: boolean = true;
  customList: any = 
    ['hello', 'Issued Date Range', 'World']
  ;

  submitForm() {
    let formObj = {
      status: this.status.value,
      Dues: this.Dues.value,
      Dates: this.Dates.value      
    }
    console.log(formObj)

  }
  hideButton() {
    this.showbutton = false;
  }


}
