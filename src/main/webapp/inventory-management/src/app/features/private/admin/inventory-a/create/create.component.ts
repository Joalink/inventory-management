import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../../../../../core/services/api.service';

@Component({
  selector: 'app-create',
  imports: [DialogModule, ButtonModule, InputTextModule, ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
})
export class CreateComponent {
  form: FormGroup;
  display: boolean = false;

  constructor(private fb: FormBuilder, private productService: ApiService) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      quantity: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      status: 1
    });
  }

  showDialog() {
    this.display = true;
  }


    submitForm() {
    if (this.form.valid) {
      const formData = this.form.value;
      this.productService.post('products', formData).subscribe(
        (response) => {
          console.log('Data send success:', response);
          this.display = false;
        },
        (error) => {
          console.error('Error sending data:', error);
        }
      );
    } else {
      console.log('Invalid forms');
    }
  }
}