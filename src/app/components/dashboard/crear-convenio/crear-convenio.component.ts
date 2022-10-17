import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-convenio',
  templateUrl: './crear-convenio.component.html',
  styleUrls: ['./crear-convenio.component.css']
})
export class CrearConvenioComponent implements OnInit {

  CrearConvenios: FormGroup<any>;
  Submitted = false;

  constructor(private fb: FormBuilder) {
    this.CrearConvenios = this.fb.group({
      especificidad: ['', Validators.required],
      diaInicio: ['', Validators],
      mesInicio: ['', Validators],
      anoInicio: ['', Validators.required],
      diaFin: ['', Validators],
      mesFin: ['', Validators],
      anoFin: ['', Validators.required],
      estadoDelConvenio: ['', Validators.required],
      nombreDeLaOrganizacion: ['', Validators.required],
      sector: ['', Validators.required],
      informacionDeContacto: ['', Validators],
      correo: ['', [Validators.required, Validators.email, Validators.minLength(4)]],
      direcion: ['', Validators],
      municipio: ['', Validators],
      pais: ['', Validators.required],
      departamento: ['', Validators],
      programaAcademicoQueGestionoElConvenio: ['', Validators],
      escaneado: ['', Validators]
    })
  }

  ngOnInit(): void {
  }

}
