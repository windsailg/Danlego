/*
	Industrious by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/
(function($) {

	var	$window = $(window),
		$banner = $('#banner'),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			default:   ['1681px',   null       ],
			xlarge:    ['1281px',   '1680px'   ],
			large:     ['981px',    '1280px'   ],
			medium:    ['737px',    '980px'    ],
			small:     ['481px',    '736px'    ],
			xsmall:    ['361px',    '480px'    ],
			xxsmall:   [null,       '360px'    ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Menu.
		$('#menu')
			.append('<a href="#menu" class="close"></a>')
			.appendTo($body)
			.panel({
				target: $body,
				visibleClass: 'is-menu-visible',
				delay: 500,
				hideOnClick: true,
				hideOnSwipe: true,
				resetScroll: true,
				resetForms: true,
				side: 'right'
			});

})(jQuery);




$(document).ready(function(){



    $('#shwoctn1').hide();
    $('#shwoctn2').hide();
    $('#shwoctn3').hide();
    $('#shwoctn4').hide();
    
    
    
    $('#lm1').click(function(event){
        $('#shwoctn1').slideToggle(1000);
    });
    $('#lm2').click(function(event){
        $('#shwoctn2').slideToggle(1000);
    });
    $('#lm3').click(function(event){
        $('#shwoctn3').slideToggle(1000);
    });
    $('#lm4').click(function(event){
        $('#shwoctn4').slideToggle(1000);
    });
    
    
	

    
	});




