import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

const ContactType = ['None', 'Tel', 'Email'];


@Component({
  selector: 'app-visualization',
  templateUrl: './visualization.component.html',
  styleUrls: ['./visualization.component.scss']
})
export class VisualizationComponent implements OnInit {

contactType = ContactType
  visualizationForm:FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
   }

  ngOnInit(): void {
  }

  createForm() {

    this.visualizationForm = this.fb.group({
      State: [''],
      District: [''],
      City: [''],
      contacttype: 'None',
    });
  }

  onSubmit() {
   console.log('Form Submit')
  }


}
