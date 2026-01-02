import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {

  onSubmit(form: NgForm) {
  if (form.invalid) {
    alert('Oops! Please fill correct information');
    return;
  }

  // ✅ SUCCESS MESSAGE
  alert('✅ We are connected to Qleap MediaTech');

  // ✅ RESET FORM + VALIDATION STATE
  form.resetForm();
}

}
