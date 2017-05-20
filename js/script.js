var modal = document.getElementById("modal-wrap");
var modalButtom = document.getElementById("modalButton");
var closeButtom = document.getElementById("closeButton");

modalButton.addEventListener('click', function(){
	modal.style.visibility = (modal.style.visibility == "visible") ? "hidden" : "visible";
})

closeButton.addEventListener('click', function(){
	modal.style.visibility = (modal.style.visibility == "hidden") ? "visible" : "hidden";
})