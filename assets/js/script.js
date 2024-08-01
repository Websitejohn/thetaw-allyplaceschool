document.addEventListener("DOMContentLoaded", function() {
    const galleryImages = document.querySelectorAll('.gallery img');
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-image');
    const closeBtn = document.querySelector('.close');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentIndex = 0;

    function openModal(index) {
        modal.style.display = "block";
        modalImg.src = galleryImages[index].src;
        currentIndex = index;
    }

    function closeModal() {
        modal.style.display = "none";
    }

    function showPrevImage() {
        currentIndex = (currentIndex === 0) ? galleryImages.length - 1 : currentIndex - 1;
        modalImg.src = galleryImages[currentIndex].src;
    }

    function showNextImage() {
        currentIndex = (currentIndex === galleryImages.length - 1) ? 0 : currentIndex + 1;
        modalImg.src = galleryImages[currentIndex].src;
    }

    galleryImages.forEach((image, index) => {
        image.addEventListener('click', () => openModal(index));
    });

    closeBtn.addEventListener('click', closeModal);
    prevBtn.addEventListener('click', showPrevImage);
    nextBtn.addEventListener('click', showNextImage);

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Select the popup and the close button
    const popup = document.getElementById("popup");
    const closeButton = document.getElementById("close-popup");
    
    // Function to open the popup
    function openPopup() {
        popup.style.display = "block";
    }
    
    // Function to close the popup
    function closePopup() {
        popup.style.display = "none";
    }
    
    // Event listener to close the popup when the close button is clicked
    closeButton.addEventListener("click", closePopup);
    
    // Open the popup automatically when the page loads
    openPopup();
});

document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.banner');
    const bannerWrapper = document.querySelector('.banner-wrapper');
    const leftArrow = document.querySelector('.scroll-arrow.left a img');
    const rightArrow = document.querySelector('.scroll-arrow.right a img');
    let currentIndex = 0;

    function scrollToSection(index) {
        if (index >= 0 && index < sections.length) {
            bannerWrapper.style.transform = `translateX(-${index * 100}%)`;
            currentIndex = index;
        }
    }

    leftArrow.addEventListener('click', function (e) {
        e.preventDefault();
        scrollToSection((currentIndex - 1 + sections.length) % sections.length);
    });

    rightArrow.addEventListener('click', function (e) {
        e.preventDefault();
        scrollToSection((currentIndex + 1) % sections.length);
    });

    function autoScroll() {
        scrollToSection((currentIndex + 1) % sections.length);
    }

    setInterval(autoScroll, 10000); // Change every 10 seconds
});
document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('click', () => {
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        const captionText = document.getElementById('caption');

        lightbox.style.display = "block";
        lightboxImg.src = img.src;
        captionText.innerHTML = img.alt;
    });
});

document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('lightbox').style.display = "none";
});


	// scroll
	var scrollWindow = function() {
		$(window).scroll(function(){
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.ftco_navbar'),
					sd = $('.js-scroll-wrap');

			if (st > 150) {
				if ( !navbar.hasClass('scrolled') ) {
					navbar.addClass('scrolled');	
				}
			} 
			if (st < 150) {
				if ( navbar.hasClass('scrolled') ) {
					navbar.removeClass('scrolled sleep');
				}
			} 
			if ( st > 350 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 350 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();

	
	var counter = function() {
		
		$('#section-counter').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
						console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();

	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();


// magnific popup
$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

  document.addEventListener("DOMContentLoaded", function() {
    var popup = document.getElementById("popup");
    var close = document.getElementById("closePopup");

    // Display the popup
    popup.style.display = "flex";

    // Close the popup when the user clicks on the close button
    close.onclick = function() {
        popup.style.display = "none";
    }

    // Close the popup when the user clicks anywhere outside of the popup content
    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = "none";
        }
    }
});
 
