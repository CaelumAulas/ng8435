export class FormValidation {

  static validaUrl(){
    
    
  }

  static validaCampos(form) {
    for (let nomeControl in form.controls) {
      form.controls[nomeControl].markAsTouched();
    }
  }
  
}