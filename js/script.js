document.querySelectorAll("nav ul li a").forEach((link) => {
    link.addEventListener("click", () => {
        alert("Você clicou no menu: " + link.textContent);
    });
});


document.querySelectorAll(".cardapio-items .item").forEach((item) => {
    item.addEventListener("click", () => {
        const itemName = item.querySelector("h3").textContent;
        alert("Você clicou no item: " + itemName);
    });
});

// Função para alterar o texto do rodapé
document.querySelector("footer").addEventListener("click", () => {
    const footerText = document.querySelector("footer p");
    footerText.textContent = "Obrigado por visitar o Bar e Lanchonete Orben! Volte sempre!";
});