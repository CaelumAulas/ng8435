export class Login {
  email = '';
  password = '';

  constructor({ email, senha }: {email:string, senha:string}) {
    this.email = email;
    this.password = senha;
  }

}