import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ServiceItemShipment} from "../../../services/service-item-shipment.service";
import {now} from "lodash";
import {ItemReceiptDTO} from "../../../models/item-receipt";

@Component({
  selector: 'app-item-receipt-cancel',
  templateUrl: './item-receipt-cancel.component.html',
  styleUrls: ['./item-receipt-cancel.component.scss']
})
export class ItemReceiptCancelComponent implements OnInit {

  cancelItemReceiptForm!: FormGroup;
  cancelItemReceiptDTO!: ItemReceiptDTO
  actionButton: string = "Cancel";

  constructor(private formBuilder: FormBuilder, @Inject(MAT_DIALOG_DATA) public editData: any,
              private dialogRef: MatDialogRef<ItemReceiptCancelComponent>, private itemReceiptService: ServiceItemShipment) {
  }

  ngOnInit(): void {
    this.ngGenerateCancelItemReceiptForm();
  }

  private ngGenerateCancelItemReceiptForm() {
    this.cancelItemReceiptForm = this.formBuilder.group({
      receiptCompany: ['', Validators.required],
      receiptArticle: ['', Validators.required],
      receiptAmount: ['', Validators.required]
    })
  }

  ngCancelItemReceiptDTO() {
    return {
      // id: this.cancelItemReceiptForm.controls[''].setValue(this.editData.id),
      id: null,
      stavkaPrimkePrimka: this.editData.control.stavkaPrimkePrimka,
      stavkaPrimkeRobe: this.editData.control.stavkaPrimkeRobe,
      kolicina: this.editData.control.kolicina,
      storno: true,
      datumStorno: new Date(now())
    }
  }

  ngCancelItemReceipt() {
    this.cancelItemReceiptDTO = this.ngCancelItemReceiptDTO();
    this.itemReceiptService.cancelItemShipment(this.cancelItemReceiptDTO.id,
      this.cancelItemReceiptForm.value).subscribe({
      next: () => {
        alert("Item Receipt canceled successfully");
        this.cancelItemReceiptForm.reset();
        this.dialogRef.close('cancel');
      },
      error: () => {
        alert("Error while canceling the record!");
      }
    });
  }
}
