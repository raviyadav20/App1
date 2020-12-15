import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Prediction, SalesUnit, Districts, States, Plants} from '../shared/prediction';

@Component({
  selector: 'app-prediction',
  templateUrl: './prediction.component.html',
  styleUrls: ['./prediction.component.scss']
})
export class PredictionComponent implements OnInit {

  prediction:Prediction;
  salesUnits=SalesUnit;
  districts = Districts;
  states = States;
  plants = Plants;
  predictionForm: FormGroup;
 

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm() {

    this.predictionForm = this.fb.group({
      salesUnits: '',
      quantity: '',
      productCode: '',
      liveItem: '',
      materialnumber: '',
      billingDate: '',
      districts: '',
      states: '',
      plants: '',
      freeQuantity: ''
    });
  }

  onSubmit() {
    console.log('Form Submit')
    this.prediction = this.predictionForm.value;
    console.log(this.prediction);
    this.predictionForm.reset();
  }

}
