const form = document.querySelector("#formulario");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const nomePessoa = document.querySelector("#name").value;
    console.log("Nome:",nomePessoa);

    const cpfPessoa = document.querySelector("#CPF").value;
    console.log("CPF:",cpfPessoa);
});
