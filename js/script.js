var modal = document.getElementById("modal-wrap");
var modalButtom = document.getElementById("modalButton");
var closeButtom = document.getElementById("closeButton");
var modalWrap = document.getElementById("modal-wrap");

/* =====================================
ESC key event handler to close modal
======================================*/
function keyEvenHandler(evt){
	var keyCode = evt.keyCode;
	if(keyCode == 27){
		modal.style.visibility = (modal.style.visibility == "hidden") ? "visible" : "hidden";
	}
}

/* =====================================
Event handler to open a modal
======================================*/
function openModal(){
	modal.style.visibility = (modal.style.visibility == "hidden") ? "visible" : "hidden";
}

/* =====================================
Event handler to close a modal
======================================*/
function closeModal(){
	modal.style.visibility = (modal.style.visibility == "hidden") ? "visible" : "hidden";
}

/* =====================================
Even Listeners for all modal actions
======================================*/
modalButton.addEventListener('click', openModal, false);
closeButton.addEventListener('click', closeModal, false);
document.addEventListener('keydown', keyEvenHandler, false);