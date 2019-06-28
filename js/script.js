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

	var json = 
		{
			projects: [
				{
					enabled: true,
					id: "01",
					title: "Autonomous Quadcopter",
					preview: {
						dates: "Jul 2017 - Jan 2019",
						imgSrc: "https://graysonhobby.com/media/catalog/category/FPV-Drone-Racer.jpg"
					},
					modal: {
						isPrivate: false,
						githubLink: "github.com/ltrooney/quadcopter",
						skills: "C++, Arduino, PID Controller, Motors, Power Systems",
						description: "I have spent over 200 hours designing, building, and testing a 450mm quadcopter. I purchased each part individually and wrote all of the Arduino-based flight controller code from scratch. During the design phase I performed power budget analysis, wrote a dynamics simulation, and added fault protection as a means of verifying that the system was going to work as intended. This is by far the largest physical project that I have ever worked on and it truly taught me the power of research and learning with a particular application in mind."
					}	
				},
				{
					enabled: false,
					id: "02",
					title: "Music Theory App",
					preview: {
						dates: "Jul 20178",
						imgSrc: "css/images/music.png"
					},
					modal: {
						isPrivate: false,
						githubLink: "github.com/ltrooney/music_theory_app",
						skills: "Python, Music Theory",
						description: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
					}	
				},
				{
					enabled: true,
					id: "03",
					title: "Hack Computer",
					preview: {
						dates: "Jul 2017 - Sept 2017",
						imgSrc: "https://onlinejpgtools.com/images/examples-onlinejpgtools/random-grid.jpg"
					},
					modal: {
						isPrivate: false,
						githubLink: "github.com/ltrooney/hack-computer",
						skills: "Java, Computer Architecture, Logic Gates, Operating Systems, Compilers",
						description: "This project is a bottom-up build of a 16-bit computer architecture. The hardware components including the CPU and memory were build entirely in software, then unit tested for correctness. The assembler, virtual language parser, compiler, and operating system were written in Java."
					}	
				},
				{
					enabled: true,
					id: "04",
					title: "Java Physics Engine",
					preview: {
						dates: "Jul 2017 - Jan 2019",
						imgSrc: "css/images/physics.jpg"
					},
					modal: {
						isPrivate: false,
						githubLink: "github.com/ltrooney/physics-engine",
						skills: "C++, Arduino, PID Controller, Motors, Power Systems",
						description: "Rigid body kinematics simulation implemented in Java."
					}	
				},
				{
					enabled: true,
					id: "05",
					title: "Pacman AI Agent",
					preview: {
						dates: "January 2019",
						imgSrc: "https://androidapksfree.com/wp-content/uploads/2016/12/PAC-MAN-apk.png"
					},
					modal: {
						isPrivate: true,
						githubLink: null,
						skills: "Python, Reinforcement Learning, A* Graph Search, Dijkstra's Algorithm, Markov Decision Processes (MDP), Bayes Net and Inference, Particle Filtering",
						description: "Implemented various uninformed and informed pathfinding algorithms. Modeled Pacman as an adversarial agent which can collect all food in an environment while avoiding ghosts."
					}	
				},
				{
					enabled: true,
					id: "06",
					title: "This Website",
					preview: {
						dates: "Dec 2018 - May 2019",
						imgSrc: "css/images/code.jpeg"
					},
					modal: {
						isPrivate: false,
						githubLink: "github.com/ltrooney/luke-rooney-website",
						skills: "HTML, CSS, JavaScript, jQuery, Bootstrap",
						description: "I built this static webpage from scratch."
					}	
				},
				{
					enabled: true,
					id: "07",
					title: "Bear Maps",
					preview: {
						dates: "March 2019",
						imgSrc: "css/images/bearmaps.png"
					},
					modal: {
						isPrivate: true,
						githubLink: null,
						skills: "Java, Priority Queues, K-d Trees",
						description: "Bear Maps was a large project given in my data structures class. The project was intended for students to use various data structures to replicate a simplified, efficient version of Google Maps and its underlying algorithms for location searching and tile rendering."
					}	
				},
				{
					enabled: true,
					id: "08",
					title: "16-Bit Adventure Game",
					preview: {
						dates: "April 2019",
						imgSrc: "css/images/avatar.png"
					},
					modal: {
						isPrivate: true,
						githubLink: null,
						skills: "Java, Minimum Spanning Trees, Dijkstra's Algorithm, Disjoint Sets, Software Engineering",
						description: ""
					}	
				},
				{
					enabled: true,
					id: "09",
					title: "Quadcopter Motion Simulation",
					preview: {
						dates: "Mar 2019 - Apr 2019",
						imgSrc: "css/images/quad_motion_sim.png"
					},
					modal: {
						isPrivate: false,
						githubLink: "github.com/ltrooney/quadcopter",
						skills: "MATLAB, Dynamics Simulation, Control Theory",
						description: "A simulation designed to visualize the dynamics of a quadcopter with customizable parameters. The final simulation reproduces the results obtained in Andrew Gibiansky's research titled Quadcopter Dynamics, Simulation, and Control."
					}	
				},
				{
					enabled: true,
					id: "10",
					title: "Handwritten Digit Classification",
					preview: {
						dates: "April 2019",
						imgSrc: "css/images/digit_classification.png"
					},
					modal: {
						isPrivate: true,
						githubLink: null,
						skills: "Python, Machine Learning, Perceptron, Logistic Regression, Neural Networks",
						description: "Built a neural network to identify handwritten digits with up to 98% accuracy."
					}	
				},
			],
			experience: [
				{ 
					imgSrc: "css/images/jpl.jpg",
					imgAlt: "JPL Logo",
					institution: "Jet Propulsion Laboratory",
					location: "Pasadena, CA",
					jobTitle: "Electrical Systems Engineering",
					dates: "September 2016 - July 2018 & Summer 2019",
					description: "I worked as a year-round intern in the Electrical Systems Engineering group. My primary focus included the creation of circuit diagrams and functional block diagrams for the NISAR and Mars 2020 flight projects. I learned the basics of Model-Based Systems Engineering as applied to the development of large, complex systems such as spacecraft and rovers."
				},
				/*{ 
					imgSrc: "css/images/coc.png",
					imgAlt: "COC Logo",
					institution: "College of the Canyons",
					location: "Valencia, CA",
					jobTitle: "College Assistant - Financial Aid",
					dates: "September 2016 - July 2018",
					description: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
				}*/
			],
			faqs: [
				{
					question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
					answer: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
				},
				{
					question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
					answer: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
				},
				{
					question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
					answer: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
				}
			]
		};

	var modalsEnabled = true;
	var modalPrefix = "project-modal";

	// parse data for projects section
	var projectsJSON = json.projects;
  	projectsJSON.forEach(function(projectsData) {
  		if (projectsData.enabled) {
	  		var html = 
	  		`<div class='single_portfolio_text mx-2'>
				<img src="${projectsData.preview.imgSrc}" />
				<div class='portfolio_images_overlay text-center my-auto'>
					<div class='space-header-wrapper d-flex align-items-center'>
						<h6 class='space-header gallery-text'>${projectsData.title}</h6>
					</div>
					<p class='dates'>${projectsData.preview.dates}</p>`;
					if (modalsEnabled) {
						html += `<button type='button' class='btn btn-dark btn-lg' data-toggle='modal' data-target='#${modalPrefix}-${projectsData.id}'>View</button>`;
					}
				html += `</div></div>"`;
			$('#project-previews').append(html);
		}
  		

  		if (modalsEnabled) {
  			var modalData = projectsData.modal;
	  		var modal_html = 
	  		`<div class="modal fade" id="${modalPrefix}-${projectsData.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
		        <div class="modal-dialog modal-dialog-centered" role="document">
		          <div class="modal-content">
		            <div class="modal-header">
		              <h5 class="modal-title" id="exampleModalLabel">${projectsData.title}</h5>
		              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
		                <span aria-hidden="true">&times;</span>
		              </button>
		            </div>
		            <div class="modal-body">`

		            if (modalData.isPrivate) {
		            	modal_html += 
		            	`<div class="project-section">
			                <h6>Project Links</h6>
			            	<p>(Private Source)</p>
			             </div>`;
		            } else if (modalData.githubLink != null) {
		            	modal_html += 
		            	`<div class="project-section">
			                <h6>Project Links</h6>
			            	<a href="https://${modalData.githubLink}"><i class="fab fa-github mr-2"></i>${modalData.githubLink}</a>
			             </div>`;
		            }
		             
		            modal_html +=  
		              `<div class="project-section">
		                <h6>Skills</h6>
		                <p>${modalData.skills}</p>
		              </div>
		              <div class="project-section">
		                <h6>Description</h6>
		                <p>${modalData.description}</p>
		              </div>
		            </div>
		            <div class="modal-footer justify-content-centerw">
		              <button type="button" class="btn btn-dark" data-dismiss="modal">Close</button>
		            </div>
		          </div>
		        </div>
		      </div>`;
	  		$('#projects').append(modal_html);
  		}
  	});

  	
  	json.experience.forEach(function(experienceData) {
  		var html = 
  		`<div class="row mb-4">
          <div class="col-lg-8 col-md-12 col-centered">
            <div class="row">
              <div class="col-lg-4 col-md-4 col-sm-12 mb-4 text-center">
                <img class="img-fluid" src="${experienceData.imgSrc}" alt="${experienceData.imgAlt}">
              </div>
              <div class="col-lg-8 col-md-8 col-sm-12">
                <h4><strong>${experienceData.institution}</strong></h4>
                <h6 class="my-2"><i class="fas fa-map-marker-alt mr-2"></i>${experienceData.location}</h6>
                <h6 class="mb-1">${experienceData.jobTitle}</h6>
                <i>${experienceData.dates}</i>
                <p class="mt-3">${experienceData.description}</p>
              </div>
            </div>
          </div>
        </div>`;
        $('#experiences').append(html);
  	});

  	// work experience toggle

  	if (json.experience.length > 2) {
  		var btnHtml = 
  		`<div class="row">
	        <div class="col-lg-8 col-md-12 col-centered text-center">
	          <a id="toggle_button" href="#more-exp" class="btn show-btn py-2 px-3">Show More</a>
	        </div>
	      </div>`;
	    $('#experience').append(btnHtml);
  	}

  	
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

  	json.faqs.forEach(function(faq) {
  		var html =
  		`<div class="row">
	        <div class="col-lg-8 col-md-10 col-centered my-2">
	          <h6 class="font-weight-bold">Q: ${faq.question}</h6>
	          <h6>A: ${faq.answer}</h6> 
	        </div>
      	</div>`;
  		$('#faqs').append(html);
  	});



  	// slick carousel
	$('.center').slick({
		dots: true,
		slidesToShow: 7,
		autoplay: true,
		autoplaySpeed: 3000,
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
		    slidesToShow: 3
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

