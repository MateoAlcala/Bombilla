import { Injectable } from '@angular/core';
import { FirebaseCodigosError } from '../components/utils/codigoError';

@Injectable({
  providedIn: 'root'
})
export class FirebaseErrorService {

  constructor() { }

  Errores(code: string) {
    switch(code) {
      case FirebaseCodigosError.CorreoInvalido:
        return "El Correo es Invalido"

      case FirebaseCodigosError.ContraDebil:
        return "La Contraseña es muy débil"

      case FirebaseCodigosError.CorreoEnUso:
        return "El correo ya esta registrado"

      case FirebaseCodigosError.Contra_Incorrecta:
        return "Contraseña Incorrecta"

      case FirebaseCodigosError.UsuNoExiste:
        return "El USuario no existe"

      default:
        return "Error desconocido"
    }
  }



}
