import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-exemplo',
  templateUrl: './form-exemplo.page.html',
  styleUrls: ['./form-exemplo.page.scss'],
})
export class FormExemploPage implements OnInit {
  clienteForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.clienteForm = this.formBuilder.group({
      nome: ['', Validators.compose( [ Validators.required, Validators.minLength(3), Validators.maxLength(100) ] ) ],      
      email: [ '', Validators.compose([Validators.required, Validators.email]) ],
      telefone: [ '', Validators.required ],
      renda: [ '0', Validators.compose([ Validators.required, Validators.min(0) ]) ],
      nascimento: [ '', Validators.required ],
      genero: [ '', Validators.required ]
    });
    
  }



  submit() {

    if (this.clienteForm.invalid || this.clienteForm.pending) {
      alert('O formulário ainda não está pronto!');
      return;
    }
    
    /*
      Implementa o envio dos dados do formulário
    */

    let dadosFormulario = this.clienteForm.value;


    dadosFormulario = JSON.stringify(dadosFormulario);

    console.log('clienteForm', this.clienteForm.value);

    console.log('dadosFormulario', dadosFormulario);

  
  }

}
