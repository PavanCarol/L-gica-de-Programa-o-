const fetch = require("node-fetch");

async function getPersonData() {
  // Preencha os dados da pessoa
  const nome = "Carol";
  const endereco = "Rua Gastão Gruls, 127";
  const cep = "09050-480";

  // Validação do CEP usando a API ViaCEP
  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    if (response.ok) {
      const responseData = await response.json();
      console.log("CEP válido. Dados do endereço:", responseData);
    } else {
      console.log("CEP inválido.");
    }
  } catch (error) {
    console.error("Erro ao validar o CEP:", error.message);
  }
}

getPersonData();
