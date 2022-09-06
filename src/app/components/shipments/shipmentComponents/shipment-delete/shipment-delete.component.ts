import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ServiceShipment} from "../../../../services/service-shipment.service";

@Component({
  selector: 'app-shipment-delete',
  templateUrl: './shipment-delete.component.html',
  styleUrls: ['./shipment-delete.component.scss']
})
export class ShipmentDeleteComponent implements OnInit {

  shipmentForm!: FormGroup
  buttonConfirm: string = "YES";
  buttonClose: string = "NO";

  constructor(private formBuilder: FormBuilder, @Inject(MAT_DIALOG_DATA) public editData: any,
              private dialogRef: MatDialogRef<ShipmentDeleteComponent>, private service: ServiceShipment) {
  }

  ngOnInit(): void {
    this.ngGenerateShipmentForm();
  }

  ngGenerateShipmentForm() {
    this.shipmentForm = this.formBuilder.group({
      date: ['', Validators.required],
      company: ['', Validators.required]
    })
  }

  ngDeleteShipmentDTO() {
    this.service.deleteShipment(this.editData.id).subscribe({
      next: () => {
        alert("Shipment deleted successfully");
        this.shipmentForm.reset();
        this.dialogRef.close('delete');
      },
      error: () => {
        alert("Error while deleting the record!");
      }
    });
  }
}
