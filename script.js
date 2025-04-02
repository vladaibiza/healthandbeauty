document.getElementById("order-form").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("form-response").innerText = "Спасибо! Мы свяжемся с вами.";
    this.reset();
});
