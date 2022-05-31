const botaoSubmit = document.querySelector('.btnEnviar');

botaoSubmit.addEventListener('click', () => {
   const inputs = document.querySelectorAll('input:not(.btnEnviar)');
   const genInputs = document.querySelectorAll('input[type=radio]');

   let shouldSubmit = true;

   inputs.forEach(function (element) {
      if (element.value == '') {
         shouldSubmit = false;
         window.alert('Por favor preencha o campo: ' + element.placeholder);
      }
   });

   let genInputEmpty = true;

   genInputs.forEach(function (element) {
      if (element.checked) {
         genInputEmpty = false;
      }
   });

   if (genInputEmpty) {
      shouldSubmit = false;
      window.alert('Por favor escolha um gênero');
   }

   if (shouldSubmit) {
      window.alert('Formulário enviado com sucesso!');
      document.querySelector('.formulario').submit();
   }
});
