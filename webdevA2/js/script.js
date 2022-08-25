document.addEventListener('click', function(e) {
				
	if(e.target.tagName == "H1") {
					
		element = e.target;
		element.nextElementSibling.classList.toggle('hideme');
					
	}
	else {
					
		element = null;
					
	}
				
				
});


