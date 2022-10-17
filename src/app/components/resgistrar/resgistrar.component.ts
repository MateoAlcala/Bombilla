import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FirebaseErrorService } from 'src/app/services/firebase-error.service';

@Component({
  selector: 'app-resgistrar',
  templateUrl: './resgistrar.component.html',
  styleUrls: ['./resgistrar.component.css']
})
export class ResgistrarComponent implements OnInit {

  registrarUSU: FormGroup<any>;
  loading: boolean = false;

  constructor(private fb: FormBuilder, private afAuth: AngularFireAuth, private toastr: ToastrService, private router: Router, private FirebaseError: FirebaseErrorService) {
    this.registrarUSU = this.fb.group({
      //usu: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      password2: ['', [Validators.required, Validators.minLength(6)]]
  })
}

  ngOnInit(): void {
  }

  registrar(){
    //const usu = this.registrarUSU.value.usu;
    const email = this.registrarUSU.value.email;
    const password = this.registrarUSU.value.password;
    const password2 = this.registrarUSU.value.password2;
    console.log(/*usu,*/ email, password, password2);

    if(password !== password2){
      this.toastr.error("Las contraseñas no coinciden", "Error");
      return;
    }

    this.loading = true;

    this.afAuth.createUserWithEmailAndPassword(email, password).then((user) => {
      console.log();
      this.loading = false;
      this.toastr.success("Usuario Registrado Exitosamente", "Correcto")
      this.router.navigate(['/login']);
    }).catch((Error) => {
      this.loading = false;
      console.log(Error);
      this.toastr.error(this.FirebaseError.Errores(Error.code), "Error")
    })
  }

  verificarCorreo() {
    this.afAuth.currentUser
      .then((user) => user?.sendEmailVerification())
      .then(() => {
        this.toastr.info(
          'Le enviamos un correo electronico para su verificacion',
          'Verificar correo'
        );
        this.router.navigate(['/login']);
      });
  }

}
