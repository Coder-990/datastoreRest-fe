import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ItemShipmentDTO} from "../../../models/item-shipment";
import {ServiceItemShipment} from "../../../services/service-item-shipment.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {now} from "lodash";

@Component({
  selector: 'app-item-shipment-cancel',
  templateUrl: './item-shipment-cancel.component.html',
  styleUrls: ['./item-shipment-cancel.component.scss']
})
export class ItemShipmentCancelComponent implements OnInit {

  cancelItemShipmentForm!: FormGroup;
  cancelItemShipmentDTO!: ItemShipmentDTO
  actionButton: string = "YES";

  constructor(private formBuilder: FormBuilder, @Inject(MAT_DIALOG_DATA) public editData: any,
              private dialogRef: MatDialogRef<ItemShipmentCancelComponent>, private itemShipmentService: ServiceItemShipment) {
  }

  ngOnInit(): void {
    this.ngGenerateCancelItemShipmentForm();
    this.ngGetItemShipmentDTO();
  }

  private ngGenerateCancelItemShipmentForm() {
    this.cancelItemShipmentForm = this.formBuilder.group({
      shipmentCompany: ['', Validators.required],
      shipmentArticle: ['', Validators.required],
      shipmentAmount: ['', Validators.required]
    })
  }

  ngGetItemShipmentDTO() {
    this.cancelItemShipmentForm.controls['shipmentCompany'].setValue(this.editData.stavkaPrimkePrimka)
    this.cancelItemShipmentForm.controls['shipmentArticle'].setValue(this.editData.stavkaPrimkeRobe)
    this.cancelItemShipmentForm.controls['shipmentAmount'].setValue(this.editData.kolicina)
  }

  ngCancelItemShipmentDTO() {
    return {
      id: null,
      stavkaIzdatniceIzdatnica: this.cancelItemShipmentForm.get("shipmentCompany")?.value,
      stavkaIzdatniceRobe: this.cancelItemShipmentForm.get("shipmentArticle")?.value,
      kolicina: this.cancelItemShipmentForm.get("shipmentAmount")?.value,
      storno: true,
      datumStorno: new Date(now())
    }
  }

  ngCancelItemShipment() {
    this.cancelItemShipmentDTO = this.ngCancelItemShipmentDTO();
    this.itemShipmentService.cancelItemShipment(this.editData.id, this.cancelItemShipmentDTO)
      .subscribe({
        next: () => {
          alert("Item Shipment canceled successfully");
          this.cancelItemShipmentForm.reset();
          this.dialogRef.close('save');
        },
        error: () => {
          alert("Error while canceling the record!");
        }
      });
  }

}
