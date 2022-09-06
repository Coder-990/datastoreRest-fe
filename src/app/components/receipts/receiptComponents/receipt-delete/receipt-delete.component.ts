import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ServiceReceipt} from "../../../../services/service-receipt.service";

@Component({
  selector: 'app-receipt-delete',
  templateUrl: './receipt-delete.component.html',
  styleUrls: ['./receipt-delete.component.scss']
})
export class ReceiptDeleteComponent implements OnInit {

  receiptForm!: FormGroup
  buttonConfirm: string = "YES";
  buttonClose: string = "NO";

  constructor(private formBuilder: FormBuilder, @Inject(MAT_DIALOG_DATA) public editData: any,
              private dialogRef: MatDialogRef<ReceiptDeleteComponent>, private service: ServiceReceipt) {
  }

  ngOnInit(): void {
    this.ngGenerateReceiptForm();
  }

  ngGenerateReceiptForm() {
    this.receiptForm = this.formBuilder.group({
      date: ['', Validators.required],
      company: ['', Validators.required]
    })
  }

  ngDeleteReceiptDTO() {
    this.service.deleteReceipt(this.editData.id).subscribe({
      next: () => {
        alert("Receipt deleted successfully");
        this.receiptForm.reset();
        this.dialogRef.close('delete');
      },
      error: () => {
        alert("Error while deleting the record!");
      }
    });
  }

}
