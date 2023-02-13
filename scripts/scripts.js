"use strict";
const cep = document.querySelector("#cep");
cep.addEventListener("blur", fetchZipCode);

function presentData(data) {
  for (const camp in data) {
    if (document.querySelector("#" + camp)) {
      document.querySelector("#" + camp).value = data[camp];
    }
  }
}

function fetchZipCode(e) {
  let search = cep.value.replace("-", "");

  const option = {
    method: "get",
    mode: "cors",
    cache: "default",
  };
  fetch(`https://viacep.com.br/ws/${search}/json/`).then((response) => {
    response
      .json()
      .then((data) => {
        presentData(data);
      })
      .catch((e) => {
        console.log("Erro:", e, message);
      });
  });
}
