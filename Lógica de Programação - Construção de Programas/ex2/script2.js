var tryUser = 5;
var palavra = "Chefes";

const input = document.getElementById("inputUser");

input.addEventListener("input", () => {
  for (let i = 0; i < document.getElementsByTagName("span").length; i++) {
    const element = document.getElementsByTagName("span")[i];
    if (
      element.textContent.toLocaleLowerCase() == input.value.toLocaleLowerCase()
    ) {
      alert("Você já tentou essa letra");
      input.value = "";
      return;
    }
  }
  if (palavra.toLocaleLowerCase().includes(input.value.toLocaleLowerCase())) {
    for (let i = 0; i < palavra.length; i++) {
      const element = palavra[i];
      if (element.toLocaleLowerCase() == input.value.toLocaleLowerCase()) {
        const span = document.getElementsByTagName("span")[i];
        span.textContent = input.value.toUpperCase();
      }
    }
    input.value = "";
  } else {
    tryUser = tryUser - 1;
    document.getElementsByTagName("i")[0].textContent = tryUser;
    if (tryUser == 0) {
      alert("Tente novamente");
      location.reload();
    }
    const errorContainer = document.getElementsByClassName("wrapperError")[0];

    let span = document.createElement("span");
    span.textContent = input.value.toUpperCase();
    input.value = "";

    errorContainer.appendChild(span);
  }
});
