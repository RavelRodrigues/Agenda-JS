class ValidaFormulario{
  constructor(){
    this.formulario = document.querySelector('.formulario');
    console.log(this.formulario)
    const campos = this.formulario.querySelectorAll('.validar');
    for (let campo of campos){
        console.log('Campo:', campo.name, 'valor:', campo.value)
    }
    this.eventos();
  }
  
  eventos() {
    this.formulario.addEventListener('submit', e =>{
        console.log('formulario enviado!')

        
      this.handleSubmit(e);
    });
  }
  
  handleSubmit(e){
    e.preventDefault();
    const camposValidos = this.camposSaoValidos();
    const senhasValidas = this.senhasSaoValidas();
    
    if(camposValidos && senhasValidas){
      alert('Formulario enviado.');
      this.formulario.submit();
    }
  }
  
  senhasSaoValidas(){
    let valid = true;
    
    const senha = this.formulario.querySelector('.senha');
    const repetirSenha = this.formulario.querySelector('.repetir-senha');
    
    if(senha.value !== repetirSenha.value){
      valid = false;
      this.criaErro(senha, 'Campos senha e repetir senha precisa ser iguais');
      this.criaErro(repetirSenha, 'Campos senha e repetir senha precisa ser iguais');
    }
    
    if(senha.value.length < 6 || senha.value.length > 12){
      valid = false;
      this.criaErro(senha, 'Senha precisa estar entre 6 e 12 caracteres');
    }
    
    return valid; // ✅ CORRIGIDO: adicionado return
  }
  
  camposSaoValidos(){
    let valid = true;

    
    
    for(let errorText of this.formulario.querySelectorAll('.error-text')){
      errorText.remove();
    }
    
    for (let campo of this.formulario.querySelectorAll('.validar')){
      const label = campo.previousElementSibling.innerText; 
      
      if(!campo.value){
        this.criaErro(campo, `Campo ${label} não pode estar em branco.`);
        valid = false;
      }
      
      // ✅ CORRIGIDO: validações movidas para dentro do loop e com parâmetro 'campo'
      if(campo.classList.contains('cpf')){
        if(!this.validaCPF(campo)) valid = false;
      }
      
      if(campo.classList.contains('usuario')){
        if(!this.validaUsuario(campo)) valid = false;
      }
    }
    
    return valid;
  }
  
  validaUsuario(campo){
    const usuario = campo.value;
    let valid = true;
    
    // ✅ CORRIGIDO: era < 12, agora é < 3
    if(usuario.length < 3 || usuario.length > 12){
      this.criaErro(campo, 'Usuário precisa ter entre 3 e 12 caracteres');
      valid = false;
    }
    
    // ✅ CORRIGIDO: adicionado ! para negar e valid = false
    if(!usuario.match(/^[a-zA-Z0-9]+$/g)){
      this.criaErro(campo, 'Nome de usuario precisa conter apenas letras e/ou numeros');
      valid = false;
    }
    
    return valid; // ✅ CORRIGIDO: era 'tue', agora retorna 'valid'
  }
  
  validaCPF(campo){
    const cpf = new ValidaCPF(campo.value);
    if(!cpf.valida()){
      this.criaErro(campo, "CPF invalido.");
      return false; // ✅ CORRIGIDO: adicionado return false
    }
    return true;
  }
  
  criaErro(campo, msg){
    const div = document.createElement('div');
    div.innerHTML = msg;
    div.classList.add('error-text');
    campo.insertAdjacentElement('afterend', div);
  }
}

// Inicializa a validação
const valida = new ValidaFormulario();