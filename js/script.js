jQuery(document).ready(function($) {
	// navbar effects
	$( '.navbar .navbar-nav .nav-link' ).on( 'click', function () {
		$( '.navbar .navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
		$( this ).parent().addClass( 'active' );
	});

	$(window).on("scroll", function() {
  		var currentPos = $(window).scrollTop();

	  	$('.navbar-nav li a').each(function() {
	    	var sectionLink = $(this);
	    	// capture the height of the navbar
	    	var navHeight = $('.navbar-nav').outerHeight() + 1;
	    	var section = $(sectionLink.attr('href'));

	    	// subtract the navbar height from the top of the section
	    	if(section.position().top - navHeight  <= currentPos && sectionLink.offset().top + section.height()> currentPos) {
	     		$('.navbar-nav .nav-item').removeClass('active');
	      		sectionLink.parent().addClass('active');
	    	} else {
	      		sectionLink.parent().removeClass('active');
	    	}
	  	});        
	});

	// work experience toggle
	var show_more = true;
	$('#toggle_button').click(function() {
		if(show_more) {
			// add divs
			$('.hide').addClass('show').removeClass('hide');
			document.getElementById("toggle_button").innerText = "Show Less";			
			show_more = false;
		} else {
			// remove div
			$('.show').addClass('hide').removeClass('show');
			document.getElementById("toggle_button").innerText = "Show More";
			show_more = true;
		}
	});

	

	var json = 
		{
			projects: {
				previews: [
					{ id: "01", title: "Autonomous Quadcopter",	dates: "Jul 2017 - Jan 2019",	imgSrc: "https://graysonhobby.com/media/catalog/category/FPV-Drone-Racer.jpg"},
					{ id: "02", title: "Music Theory App",		dates: "Jul 2017 - Jan 2019",	imgSrc: "css/images/music.png" },
					{ id: "03", title: "Hack Computer",			dates: "Jul 2017 - Jan 2019",	imgSrc: "https://onlinejpgtools.com/images/examples-onlinejpgtools/random-grid.jpg" },
					{ id: "04", title: "JAVA Physics Engine",	dates: "Jul 2017 - Jan 2019",	imgSrc: "css/images/physics.jpg" },
					{ id: "05", title: "Pacman AI Agent",		dates: "January 2019", 			imgSrc: "https://androidapksfree.com/wp-content/uploads/2016/12/PAC-MAN-apk.png"},
					{ id: "06", title: "This Website",			dates: "Dec 2018 - Mar 2019", 	imgSrc: "css/images/code.jpeg"}
				],
				modals: [
					{ 
						id: "01",
						title: "Autonomous Quadcopter",
						githubLink: "github.com/ltrooney/quadcopter",
						skills: "C++, Arduino, PID Controller, Motors, Power Systems",
						description: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
					},
					{ 
						id: "02",
						title: "Music Theory App",
						githubLink: "github.com/ltrooney/music_theory_app",
						skills: "C++, Arduino, PID Controller, Motors, Power Systems",
						description: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
					},
					{ 
						id: "03",
						title: "Hack Computer",
						githubLink: "github.com/ltrooney/hack-computer",
						skills: "C++, Arduino, PID Controller, Motors, Power Systems",
						description: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
					},
					{ 
						id: "04",
						title: "JAVA Physics Engine",
						githubLink: "github.com/ltrooney/physics-engine",
						skills: "Java",
						description: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
					},
					{ 
						id: "05",
						title: "Pacman AI Agent",
						githubLink: null,
						skills: "Python",
						description: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
					},
					{ 
						id: "06",
						title: "This Website",
						githubLink: "github.com/ltrooney/luke-rooney-website",
						skills: "HTML/CSS, JavaScript",
						description: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
					}
				]
			}
		};

	var modalPrefix = "project-modal-";

	// parse data for projects section
	var projectsJSON = json.projects;
  	projectsJSON.previews.forEach(function(previewData) {
  		var html = `<div class='single_portfolio_text mx-2'>
  						<img src="` + previewData.imgSrc + `" />
						<div class='portfolio_images_overlay text-center my-auto'>
  							<div class='space-header-wrapper d-flex align-items-center'>
  								<h6 class='space-header gallery-text'>` + previewData.title + `</h6>
							</div>
  							<p class='dates'>` + previewData.dates + `</p>
  							<button type='button' class='btn btn-dark btn-lg' data-toggle='modal' data-target='#` + modalPrefix + previewData.id + `'>View</button>
  						</div>
  					</div>"`;

  		$('#project-previews').append(html);
  	});

  	projectsJSON.modals.forEach(function(modalData) {
  		var html = 
  		`<div class="modal fade" id="` + modalPrefix + modalData.id + `" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
	        <div class="modal-dialog modal-dialog-centered" role="document">
	          <div class="modal-content">
	            <div class="modal-header">
	              <h5 class="modal-title" id="exampleModalLabel">` + modalData.title + `</h5>
	              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
	                <span aria-hidden="true">&times;</span>
	              </button>
	            </div>
	            <div class="modal-body">`

	            if (modalData.githubLink != null) {
	            	html += 
	            	`<div class="project-section">
		                <h6>Project Links</h6>
		            	<a href="https://` + modalData.githubLink + `"><i class="fab fa-github mr-2"></i>` + modalData.githubLink +`</a>
		             </div>`;
	            }
	             
	            html +=  
	              `<div class="project-section">
	                <h6>Skills</h6>
	                <p>` + modalData.skills + `</p>
	              </div>
	              <div class="project-section">
	                <h6>Description</h6>
	                <p>` + modalData.description + `</p>
	              </div>
	            </div>
	            <div class="modal-footer justify-content-centerw">
	              <button type="button" class="btn btn-dark" data-dismiss="modal">Close</button>
	            </div>
	          </div>
	        </div>
	      </div>`;
  		$('#projects').append(html);
  	});

  	// slick carousel
	$('.center').slick({
		dots: true,
		slidesToShow: 7,
		autoplay: true,
		autoplaySpeed: 350000,
		responsive: [
		{
		  breakpoint: 2000,
		  settings: {
		    centerMode: true,
		    slidesToShow: 5
		  }
		},
		{
		  breakpoint: 1600,
		  settings: {
		    slidesToShow: 4
		  }
		},
		{
		  breakpoint: 992,
		  settings: {
		    arrows: true,
		    slidesToShow: 3
		  }
		},
		{
		  breakpoint: 768,
		  settings: {
		    arrows: false,
		    centerMode: true,
		    centerPadding: '40px',
		    slidesToShow: 1
		  }
		}
		]
	});
});

