import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {now} from "lodash";
import {ItemReceiptDTO} from "../../../models/item-receipt";
import {ServiceItemReceipt} from "../../../services/service-item-receipt.service";

@Component({
  selector: 'app-item-receipt-cancel',
  templateUrl: './item-receipt-cancel.component.html',
  styleUrls: ['./item-receipt-cancel.component.scss']
})
export class ItemReceiptCancelComponent implements OnInit {

  cancelItemReceiptForm!: FormGroup;
  cancelItemReceiptDTO!: ItemReceiptDTO
  actionButton: string = "YES ";

  constructor(private formBuilder: FormBuilder, @Inject(MAT_DIALOG_DATA) public editData: any,
              private dialogRef: MatDialogRef<ItemReceiptCancelComponent>, private itemReceiptService: ServiceItemReceipt) {
  }

  ngOnInit(): void {
    this.ngGenerateCancelItemReceiptForm();
    this.ngGetItemReceiptDTO();
  }

  private ngGenerateCancelItemReceiptForm() {
    this.cancelItemReceiptForm = this.formBuilder.group({
      receiptCompany: ['', Validators.required],
      receiptArticle: ['', Validators.required],
      receiptAmount: ['', Validators.required]
    })
  }

  ngGetItemReceiptDTO() {
    this.cancelItemReceiptForm.controls['receiptCompany'].setValue(this.editData.stavkaPrimkePrimka)
    this.cancelItemReceiptForm.controls['receiptArticle'].setValue(this.editData.stavkaPrimkeRobe)
    this.cancelItemReceiptForm.controls['receiptAmount'].setValue(this.editData.kolicina)
    this.cancelItemReceiptForm.controls['receiptStorno'].setValue(this.editData.storno)
    this.cancelItemReceiptForm.controls['receiptStornoDate'].setValue(this.editData.datumStorno)
  }

  ngCancelItemReceiptDTO() {
    return {
      id: null,
      stavkaPrimkePrimka: this.cancelItemReceiptForm.get("receiptCompany")?.value,
      stavkaPrimkeRobe: this.cancelItemReceiptForm.get("receiptArticle")?.value,
      kolicina: this.cancelItemReceiptForm.get("receiptAmount")?.value,
      storno: true,
      datumStorno: new Date(now())
    }
  }

  ngCancelItemReceipt() {
    this.cancelItemReceiptDTO = this.ngCancelItemReceiptDTO();
    this.itemReceiptService.cancelItemReceipt(this.editData.id, this.cancelItemReceiptDTO)
      .subscribe({
        next: () => {
          alert("Item Receipt canceled successfully");
          this.cancelItemReceiptForm.reset();
          this.dialogRef.close('save');
        }, error: () => {
          alert("Error while canceling the record!");
        }
      });
  }
}
