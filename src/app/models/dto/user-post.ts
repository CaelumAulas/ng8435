export class UserPost {
  
  username = '';
  phone = '';
  password = '';
  avatar =  '';
  name = '';
  
  constructor({nome, username, telefone, senha, avatar}){
    this.name = nome;
    this.username = username ;
    this.phone = telefone ;
    this.password = senha ;
    this.avatar = avatar ;
  }

}