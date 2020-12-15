import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Visualize, States, Districts, Cities } from '../shared/visualize';


@Component({
  selector: 'app-visualization',
  templateUrl: './visualization.component.html',
  styleUrls: ['./visualization.component.scss']
})
export class VisualizationComponent implements OnInit {

  states = States;
  districts = Districts;
  cities = Cities;
  visualizationForm: FormGroup;
  visualize:Visualize;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm() {

    this.visualizationForm = this.fb.group({
      states: '',
      districts: '',
      cities: ''
    });
  }

  onSubmit() {
    console.log('Form Submit')
    this.visualize = this.visualizationForm.value;
    console.log(this.visualize);
    this.visualizationForm.reset();
  }


}
