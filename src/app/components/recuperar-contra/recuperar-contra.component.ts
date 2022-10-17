import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FirebaseErrorService } from 'src/app/services/firebase-error.service';

@Component({
  selector: 'app-recuperar-contra',
  templateUrl: './recuperar-contra.component.html',
  styleUrls: ['./recuperar-contra.component.css']
})
export class RecuperarContraComponent implements OnInit {
  RecuperarUSU: FormGroup;
  loading: boolean = false;

  constructor(private fb: FormBuilder, private afAuth: AngularFireAuth, private toastr: ToastrService, private router: Router, private FirebaseError: FirebaseErrorService) {
    this.RecuperarUSU = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    })
   }

  ngOnInit(): void {
  }

  recuperar(){
    
    const email = this.RecuperarUSU.value.email;

    this.loading = true;
    this.afAuth.sendPasswordResetEmail(email).then(() => {
      this.toastr.info('Correo enviado', 'Cambio de contraseña'); 
      this.router.navigate(['/login']);

    }).catch((Error) => {
      this.loading = false;
      console.log(Error);
      this.toastr.error(this.FirebaseError.Errores(Error.code), "Error")
    })
  }

}
