
		let hiddenElements = document.getElementsByClassName("hidden");
		let fine_dining_section = document.getElementsByClassName("fine-dining-section")[0];
		//console.log(fine_dining_section);
		function checkPosition(){
			//console.log("scroll");image_plate.classList.add('animate-slidein1');
			//fine_dining_section[0].classList.add('fade-in');
			for(let i=0;i<hiddenElements.length;i++){
				console.log(typeof hiddenElements[i].className);
				let windowHeight = window.innerHeight;
				console.log(windowHeight);
				let positionFromTop = hiddenElements[i].getBoundingClientRect().top;

				if(positionFromTop-windowHeight<=0){
					//if(hiddenElements[i].className.c)
					if(hiddenElements[i].className.includes("fadingEffect")){
						hiddenElements[i].classList.add('fade-in');
						hiddenElements[i].classList.remove('hidden');
					}
					else{
						hiddenElements[i].classList.add('animate-slidein1');
						hiddenElements[i].classList.remove('hidden');
					}
				
				}
			}
		}
		window.addEventListener("scroll",checkPosition);
		////////////slide show///////////
		var slideIndex = 1;
		showSlides(slideIndex);

		// Next/previous controls
		function plusSlides(n) {
		  showSlides(slideIndex += n);
		}

		// Thumbnail image controls
		function currentSlide(n) {
		  showSlides(slideIndex = n);
		}

		function showSlides(n) {
		  var i;
		  var slides = document.getElementsByClassName("mySlides");
		  var dots = document.getElementsByClassName("dot");
		  if (n > slides.length) {slideIndex = 1} 
		  if (n < 1) {slideIndex = slides.length}
		  for (i = 0; i < slides.length; i++) {
		      slides[i].style.display = "none"; 
		  }
		  for (i = 0; i < dots.length; i++) {
		      dots[i].classList.remove('active');
		  }
		  slides[slideIndex-1].style.display = "block"; 
		  dots[slideIndex-1].classList.add('active');	  
		}

		let icon = document.getElementsByClassName("icon")[0];
		let hamburger = '<i class="fa fa-bars"></i>';
		let cross = '<i class="fa fa-times"></i>';
		let font_awesome_icon = icon.innerHTML;
		console.log(font_awesome_icon);
		
		//console.log(icon);
		function toggleClass(e){
			console.log(font_awesome_icon);
			let items = document.getElementsByClassName("items");
			for(let elem of items){
				elem.classList.toggle('showHide');
				if(font_awesome_icon==hamburger){
					icon.innerHTML = cross;
					font_awesome_icon = cross;
					
				}
				else if(font_awesome_icon==cross){
					icon.innerHTML = hamburger;
					font_awesome_icon = hamburger;
	
				}
			}
		}
		icon.addEventListener("click", toggleClass);


