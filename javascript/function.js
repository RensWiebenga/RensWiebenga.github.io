
$(function() {
	$('.page_home_container').height($( window ).height()+'px');

	var width_dark_box = $('.dark_box').width() - 15;
	$('.dark_box').width(width_dark_box);

	$( window ).resize(function() {
		$('.page_home_container').height($( window ).height()+'px');
		
	});

	/*$('.dark_box').mouseenter(function(){
		$(this).animate({opacity: 1}, 200);
		$(this).prev('.project_box').children('img').css({
			'width':'40%',
			'margin-left':'27.5%',
			'margin-top':'27.5%',
			'margin-bottom':'29%'
		});
	});
	$('.dark_box').mouseleave(function(){
		$(this).animate({opacity: 0}, 200);
		$(this).prev('.project_box').children('img').css({
			'width':'50%',
			'margin-left':'25%',
			'margin-top':'25%',
			'margin-bottom':'25%'
		});
	});*/
	$('.nav a').click(function(event ){
		if ($(this).attr('href') != "indexnl.html" && $(this).attr('href') != "index.html")
		{
			event.preventDefault();
			$('html, body').stop().animate({
				scrollTop: $( $(this).attr('href') ).offset().top
			}, 400);
		}
	});

	$('.home').click(function(event ){
		event.preventDefault();
		$('html, body').stop().animate({
			scrollTop: $( $(this).attr('href') ).offset().top
		}, 400);
	});


	$('.portfoliolink').click(function(event ){
		event.preventDefault();
		$('html, body').stop().animate({
			scrollTop: $( $(this).attr('href') ).offset().top
		}, 400);
	});
	
	$('.project_box').mouseenter(function(){
		$(this).find('img').css({'opacity':'0.2'});
		$(this).children('.project_content').css({'opacity':'1'});
	});

	$('.project_box').mouseleave(function(){
		$(this).find('img').css({'opacity':'1'});
		$(this).children('.project_content').css({'opacity':'0'});
	});

	
	if ($('.right_content').height()<$('.left_content').height())
	{
		$('.right_content').height($('.left_content').height());
	}
	
	

	$( window ).resize(function() {
		if ($('.right_content').height()<$('.left_content').height())
		{
			$('.right_content').height($('.left_content').height());
<<<<<<< HEAD
			var max_height = $('.main_image').height();
=======
>>>>>>> origin/master
		}
	});

	$( "body" ).on( "click", ".extra_images img", function() {
		var thisimage = $(this).attr('src');

		$('.main_image').animate({
			opacity: "0",
		}, 500, function() {
			$('.main_image').attr("src", thisimage);
			$('.main_image').animate({
				opacity: "1",
			}, 500, function() {
				
			});
		});
		//$('.main_image').attr("src", thisimage);
		//alert (thisimage);
	});


	$('body').on('click', function(){
	});
		$('.navbar-toggle').click(function(){
			$('.close_menu').removeClass('display_none');
		});

		$('.close_menu').click(function(){
			$('.navbar-collapse').removeClass('in');
			$('.navbar-collapse').addClass('out');
			$('.close_menu').addClass('display_none');
		});

		$('.project_col').on('click', function(){
			var this_width = $(this).width();
			
			//$(this).remove();
			var html = '';
			var project = $(this).find('.project_box').find('.project_content').find('.project_title').html();
			
			//html = $(this).html();
			
			var portfolio_id = $(this).attr('id');
			//alert (portfolio_id);
			portfolio_id = portfolio_id.replace("project_", ""); 
			portfolio_id = portfolio_id-1;
			//alert (portfolio_id);
			

			html += '<div class="current_project_box col-md-12 col-xs-12">';
			
			html += '	<div class="col-md-8 col-xs-12">';
			html += '		<a href="'+portfolio.portfoliopieces[portfolio_id]['url']+'" target="_blank"><img src="images/'+portfolio.portfoliopieces[portfolio_id]['image']+'" class="col-md-11 col-xs-11 main_image"></a>';
			html += '			<div class="animated_vertical_line">asd</div>';
			if (portfolio.portfoliopieces[portfolio_id]['extraimage'][0])
			{
				html +=	'			<div class="extra_images">';
				html +=	'				<img src="images/'+portfolio.portfoliopieces[portfolio_id]['extraimage'][0]+'" class="col-md-4 col-xs-4">';
				html +=	'				<img src="images/'+portfolio.portfoliopieces[portfolio_id]['extraimage'][1]+'" class="col-md-4 col-xs-4">';
				html +=	'				<img src="images/'+portfolio.portfoliopieces[portfolio_id]['extraimage'][2]+'" class="col-md-4 col-xs-4">';
				html += '			</div>';
			}
			html += '	</div>';
			html += '	<div class="col-md-4 col-xs-12">';
			html += '		<div class="current_project_content">';
			html += '			<div class="current_project_title">';
			html += '				<h1>'+portfolio.portfoliopieces[portfolio_id]["title"]+'</h1>';
			html += '			</div>';
			html += '			<div class="animated_line"></div>';
			html += '			<div class="current_project_description">';
			html +=					portfolio.portfoliopieces[portfolio_id]['description'];
			html += '			</div>';
			html += '			<div class="current_project_year">';
			html +=					portfolio.portfoliopieces[portfolio_id]['year'];
			html += '			</div>';
			html += '		</div>';
			html += '	</div>';
			html += '</div>';
			
			//$('.project_container').prepend('<div class="project_col col-md-4 col-xs-4">'+html+'</div>');
			$('.hovered_pic').removeClass('hovered_pic');

			$('.current_project_container').html(html);

			/*$('.current_project_container').toggle(function(){
				$(this).animate({'height': '100px'}, 100);
			}, function(){
				$(this).animate({'height': '280px'}, 100);
			});*/
			
			function runIt() {
			  $( ".current_project_container" ).slideToggle( "normal" );
			  $( ".current_project_container" ).slideToggle( "normal" );
				
			}
			runIt();
			
			function runIt2() {
				$('.animated_line').animate({
					width: "100%",
						margin: "0 0 20 0"
				}, 5000, function() {
					$('.animated_line').animate({
						width: "30%",
						margin: "0 0 20 70%"
					}, 5000, function() {
						$('.animated_line').animate({
							margin: "0 0 20 0"
						}, 5000, function() {
							runIt2();	
						});
					});
				});
			
			};
			runIt2();

<<<<<<< HEAD
			function runIt3(max_height) {
				max_height = $('.main_image').height();
				if (max_height>200)
				{
					max_height =200;
				}
					
					$('.animated_vertical_line').animate({
						height: max_height+"px",
						margin: "0 0 0 0"
					}, 5000, function() {
						$('.animated_vertical_line').animate({
							height: "50px",
							margin: max_height-50+" 0 0 0"
						}, 5000, function() {
							$('.animated_vertical_line').animate({
								height: "50px",
								margin: "0 0 0 0"
							}, 5000, function() {
								runIt3(max_height);	
							});
						});
					});
				
			
			};
			var max_height = $('.main_image').height();
			runIt3(max_height);
=======
			function runIt3() {
				$('.animated_vertical_line').animate({
					height: "300px",
					margin: "0 0 0 0"
				}, 5000, function() {
					$('.animated_vertical_line').animate({
						height: "50px",
						margin: "250 0 0 0"
					}, 5000, function() {
						$('.animated_vertical_line').animate({
							height: "50px",
							margin: "0 0 0 0"
						}, 5000, function() {
							runIt3();	
						});
					});
				});
			
			};
			runIt3();
>>>>>>> origin/master

			/*var current_height = $('.current_project_container').height();
			$('.current_project_container').animate({
				width: "1px",
				height: "0px",
				opacity: "1",
				margin: "30px 100% 30px 0",

			  }, 500, function() {
				$('.current_project_container').html(html);
				$('.current_project_container').animate({
					//margin: "30px 45px 30px 15px ",
					width: "100%",
					opacity: "1",
					height: "100%"
				  }, 1500, function() {
					// Animation complete.
				  });
			  });*/


			

		});

		function sendData(){
		
		// This function sends the info to an email address
        var email = "renswiebenga@gmail.com"; // get email field value
        var name = 'Mail from renswiebenga.nl'; // get name field value
        
		var useremail = $('.emailofuser').val();
		var toemail = "";
		var budget = $('#budget').val();
		var product = $('#product').val();
		var msg = '';
		msg += 'product: ' +product + '<br/>';
		msg += 'budget: ' + budget + '<br/>';
		msg += 'email: ' + useremail + '<br/>';
		if (toemail == '' || toemail.indexOf('@') !== -1)
		{
			if (toemail == '')
			{
				toemail = 'nonexistant@nothing.nl';
			}
			msg += '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">';
			msg += '	<html xmlns="http://www.w3.org/1999/xhtml">';
			msg += '	<body>';
			msg += $('.emailtable').html();
			
			msg += '</body></html>';
			$.ajax(
			{
				type: "POST",
				url: "https://mandrillapp.com/api/1.0/messages/send.json",
				data: {
					'key': 'mVIYqoHhRDebIjnSLF8YJA',
					'message': {
						'from_email': useremail,
						'from_name': name,
						'headers': {
						'Reply-To': useremail
						},
						'subject': 'Mail from renswiebenga.nl',
						'html': msg,
						'to': [
						{
							'email': email,
							'name': 'Rens Wiebenga',
							'type': 'to'
						}]
					}
				}
			})
			.done(function(response) {
				alert('Contact form sent! Thank you for your time'); // show success message
				
			})
			.fail(function(response) {
				alert('Something has gone wrong!'); // show success message
			});
		} else {
			alert ('This is not a proper e-mail address');		
		}

	};
$('body').on('click','.submitbutton', function(){
	sendData();
});
	
});