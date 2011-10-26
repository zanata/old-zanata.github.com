function displayDiv(divId){
	hideAllDiv();
	document.getElementById(divId).style.display='block';
}

function hideAllDiv(){
	document.getElementById('zanata-desc').style.display='none';
	document.getElementById('translator-content').style.display='none';
	document.getElementById('writer-content').style.display='none';
	document.getElementById('software-dev-content').style.display='none';
}