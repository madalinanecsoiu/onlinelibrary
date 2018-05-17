import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import * as moment from 'moment';
@Component({
  selector: 'app-bookrenting',
  templateUrl: './bookrenting.component.html',
  styleUrls: ['./bookrenting.component.css']
})
export class BookrentingComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<BookrentingComponent>
  ) {
      this.form = formBuilder.group({
        startDate: [moment(), Validators.required],
        endDate: [moment(), Validators.required]
    });
  }

  ngOnInit() {
  }
   save() {
    this.dialogRef.close(this.form.value);
   }

  close() {
      this.dialogRef.close();
  }

}
