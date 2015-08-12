$(".menu_btn").click(function(){
	$(".menu_btn").removeClass("active");
	$(this).addClass("active");
});

resizer();

$('body').on('click','.home', function(){
	$(".menu_btn").removeClass("active");
	$(".menu_btn.home").addClass("active");
	
	largeheader();
	normalwidth();
	
	var leftcontent ="";
	leftcontent += '<div class="col col-md-4 col-xs-0 col-lg-4">';
	leftcontent += '				&nbsp;';
	leftcontent += '			</div>';
	leftcontent += '			<div class="col col-md-8 col-xs-12 col-lg-8">';
	leftcontent += '				<div class="artwork box">';
	leftcontent += '					<div class="title">Artwork<br/><br/></div>';
	leftcontent += '					<a class="artwork">';
	leftcontent += '						<div class="imagebox">';
	leftcontent += '							<img src="img/Art-icon.png"/>';
	leftcontent += '						</div>';
	leftcontent += '					</a>';
	leftcontent += '				</div>';
	leftcontent += '				<div class="academic box">';
	leftcontent += '					<div class="title">Academic <br/>writing</div>';
	leftcontent += '					<a class="academic">';
	leftcontent += '						<div class="imagebox">';
	leftcontent += '							<img src="img/Notepad-Bloc-notes-icon.png"/>';
	leftcontent += '						</div>';
	leftcontent += '					</a>';
	leftcontent += '				</div>';
	leftcontent += '				<div class="webdesign box">';
	leftcontent += '					<div class="title">Webdesign <br/>& Coding</div>';
	leftcontent += '					<a class="webcoding">';
	leftcontent += '						<div class="imagebox">';
	leftcontent += '							<img src="img/Coding-icon.png"/>';
	leftcontent += '						</div>';
	leftcontent += '					</a>';
	leftcontent += '				</div>';
	leftcontent += '				<div class="text">';
	leftcontent += '					<b>The type of work I do</b><br/>';
	leftcontent += '					I would like to encourage you to browse through some of the work I have done over the last couple of years. Although most of the recent projects have been in service of the University Medical Center in Utrecht as a e-learning developer, there are also personal projects to be found.';
	leftcontent += '';
	leftcontent += '				</div>';
	leftcontent += '			</div>';
	$('.leftcontent').html(leftcontent);
	$('.leftcontent .col:nth-child(2)').hide();

	var rightcontent = "";
	rightcontent += '	<div class="col col-md-8 col-xs-12 col-lg-8">';
	rightcontent += '				<div class="title">Contact me!</div>';
	rightcontent += '				<div class="text">Do you need a functional website, design or anything else? <br/>Fill in this form and I will contact you as soon as possible!</div><br/>';
	rightcontent += '				<table>';
	rightcontent += '					<tr>';
	rightcontent += '						<td>';
	rightcontent += '							Product:';
	rightcontent += '						</td>';
	rightcontent += '						<td>';
	rightcontent += '							What can I do for you?';
	rightcontent += '						</td>';
	rightcontent += '					</tr>';
	rightcontent += '					<tr>';
	rightcontent += '						<td>';
	rightcontent += '								';		
	rightcontent += '						</td>';
	rightcontent += '						<td>';
	rightcontent += '							<select name="product" id="product">';
	rightcontent += '								<option value="">- Select -</option>';
	rightcontent += '								<option value="completewebsite">Complete website</option>';
	rightcontent += '								<option value="webdesign">Webdesign</option>';
	rightcontent += '								<option value="webdevelopment">Webdevelopment</option>';
	rightcontent += '								<option value="logodesign">Logo design</option>';
	rightcontent += '								<option value="frontendwebdevelopment">Front-end webdevelopment</option>';
	rightcontent += '								<option value="backendwebdevelopment">Back-end webdevelopment</option>';
	rightcontent += '								<option value="mobileapplication">Mobile Application</option>';
	rightcontent += '								<option value="other">Other</option>';
	rightcontent += '							</select>';
	rightcontent += '						</td>';
	rightcontent += '					</tr>';
	rightcontent += '					<tr>';
	rightcontent += '						<td>';
	rightcontent += '							Budget:';
	rightcontent += '						</td>';
	rightcontent += '						<td>';
	rightcontent += '							What is your budget?';
	rightcontent += '						</td>';
	rightcontent += '					</tr>';
	rightcontent += '					<tr>';
	rightcontent += '						<td>';
	rightcontent += '						</td>';
	rightcontent += '						<td>';
	rightcontent += '							<select name="budget" id="budget">';
	rightcontent += '								<option value="">- Select -</option>';
	rightcontent += '								<option value="100500">&euro;100 - &euro;500 </option>';
	rightcontent += '								<option value="5001500">&euro;500 - &euro;1500 </option>';
	rightcontent += '								<option value="15003000">&euro;1500 - &euro;3000 </option>';
	rightcontent += '								<option value="3000">&euro;3000+</option>';
	rightcontent += '								<option value="not applicable">Not applicable</option>';
	rightcontent += '							</select>';
	rightcontent += '						</td>';
	rightcontent += '					</tr>';
	rightcontent += '					<tr>';
	rightcontent += '						<td>';
	rightcontent += '							Email address:';
	rightcontent += '						</td>';
	rightcontent += '						<td>';
	rightcontent += '							What is your e-mail address?';
	rightcontent += '						</td>';
	rightcontent += '					</tr>';
	rightcontent += '					<tr>';
	rightcontent += '						<td>';
	rightcontent += '						</td>';
	rightcontent += '						<td>';
	rightcontent += '							<input type="text" name="email" placeholder="E-mail address"  class="emailofuser">';
	rightcontent += '						</td>';
	rightcontent += '					</tr>';
	rightcontent += '				</table>';
	rightcontent += '				';
	rightcontent += '							';
	rightcontent += '				<br/>';
	rightcontent += '				<input type="submit" name="submit" class="submitbutton" value="Send!"><br>';
	rightcontent += '			</div>';
	rightcontent += '			<div class="col col-md-4 col-xs-0 col-lg-4">';
	rightcontent += '			</div>';
	$('.rightcontent').html(rightcontent);
	$('.rightcontent .col:nth-child(1)').hide();

	$('.leftcontent .col:nth-child(2)').delay( 500 ).fadeIn( 100 );
	$('.rightcontent .col:nth-child(1)').delay( 500 ).fadeIn( 100 );
});

$('body').on('click','.aboutme', function(){
	$(".menu_btn").removeClass("active");
	$(".menu_btn.aboutme").addClass("active");
	smallheader();
    largeleftwidth();
	var leftcontent = "";
	leftcontent += '<div class="col col-md-3 col-xs-0 col-lg-3">';
	leftcontent += '	&nbsp;';
	leftcontent += '</div>';
	leftcontent += '<div class="col col-md-9 col-xs-0 col-lg-9">';
	leftcontent += '	<div class="box col col-md-5 col-xs-5 col-lg-5 left me">';
	leftcontent += '		<div class="imageboxsquare">';
	leftcontent += '			<img src="img/me.jpg">';
	leftcontent += '		</div>';
	leftcontent += '	</div>';
	leftcontent += '	<table>';
	leftcontent += '		<tr>';
	leftcontent += '			<td>';
	leftcontent += '				Rens Wiebenga';
	leftcontent += '			</td>';
	leftcontent += '		</tr>';
	leftcontent += '		<tr>';
	leftcontent += '			<td>';
	leftcontent += '				December 17, 1984';
	leftcontent += '			</td>';
	leftcontent += '		</tr>';
	leftcontent += '		<tr>';
	leftcontent += '			<td>';
	leftcontent += '				renswiebenga@gmail.com';
	leftcontent += '			</td>';
	leftcontent += '		</tr>';
	leftcontent += '	</table>';
	leftcontent += '<br/>';
	leftcontent += 'I am an active, social and outgoing person. I immensely enjoy sports such as indoor climbing, fitness, rugby, snowboarding, martial arts and wild water kayakking. I find it very important to develop one self both mentally as physically. I like traveling, going out or just running after frisbees and boomerangs. Building things is what I do, both in the digital and physical world. I like to see projects through to the point where there is a finished product.';
	leftcontent += '<br clear="all"/>';
	leftcontent += '<br/>';
	leftcontent += '	<ul>';
	leftcontent += '		<li>';
	leftcontent += '			Currently employed as an e-learning developer at the University Medical Center of Utrecht assigned to the "Learning without limits" project. This project strives to educate medical students and medical professionals in a myriad of care-related topics through the use of digital communication devices. In this project I function as both consultant to e-learning projects and as producer of the functional e-modules.';
	leftcontent += '		</li>';
	leftcontent += '		<li>';
	leftcontent += '			Finished Bachelor of Communication at the Hogeschool Utrecht in Digital Communication (July 2009), specialized in communication and multimedia design. Finished the Master programme New Media and Digital Culture (June 2012) with my thesis on the representation of United States law enforcement in the age of smartphones.';
	leftcontent += '		</li>';
	leftcontent += '		<li>';
	leftcontent += '			Owner and founder of Rens Wiebenga Design through which I works as a <h1>freelance webdesigner in Utrecht</h1> for several short-term and long-term clients.';
	leftcontent += '		</li>';
	leftcontent += '		<li>';
	leftcontent += '			Owner and founder of I want one of those memes. The place to be for <h1>internet meme based merchandise</h1> such as T-shirts, mugs and stickers. This fairly comical website keeps up to date with the latest online viral videos, games and images that have achieved meme-status. Through it, I create my own designs based on the most popular of videos which can be printed and ordered online by clients.';
	leftcontent += '		</li>';
	leftcontent += '		<li>';
	leftcontent += '			Recently finished employment at the <h1>Universiteit Utrecht</h1> as teaching assistant in which I lead two groups of first- and second year students in the subject of History and theory of new media.';
	leftcontent += '		</li>';
	

	leftcontent += '	</ul>';
	leftcontent += '</div>';
	$('.leftcontent').html(leftcontent);
	$('.leftcontent .col:nth-child(2)').hide();


	var rightcontent = "";
	
	rightcontent += '<div class="col col-md-6 col-xs-12 col-lg-6 invisiblewhensmall">';
	rightcontent += '	<div class="box col col-md-10 col-xs-10 col-lg-10 projects developer">';
	rightcontent += '		<div class="listtitle"><h1>Developer</h1></div>';
	rightcontent += '			<div class="imageboxsquare">';
	rightcontent += '				<img src="img/program-clipart-notebook-computer.jpg"/>';
	rightcontent += '			</div>';
	rightcontent += '		</div>';
	rightcontent += '	';
	rightcontent += '	<div class="box col col-md-10 col-xs-10 col-lg-10 projects climbing">';
	rightcontent += '		<div class="listtitle">Climbing</div>';
	rightcontent += '			<div class="imageboxsquare">';
	rightcontent += '				<img src="img/climbing.jpg"/>';
	rightcontent += '			</div>';
	rightcontent += '		</div>';
	rightcontent += '	';
	rightcontent += '	<div class="box col col-md-10 col-xs-10 col-lg-10 projects webdesigner">';
	rightcontent += '		<div class="listtitle"><h1>Webdesigner</h1></div>';
	rightcontent += '			<div class="imageboxsquare">';
	rightcontent += '				<img src="img/webdesigner.jpg"/>';
	rightcontent += '			</div>';
	rightcontent += '		</div>';
	rightcontent += '	';
	rightcontent += '	<div class="box col col-md-10 col-xs-10 col-lg-10 projects rugby">';
	rightcontent += '		<div class="listtitle">Rugby player</div>';
	rightcontent += '			<div class="imageboxsquare">';
	rightcontent += '				<img src="img/rugby.jpg"/>';
	rightcontent += '			</div>';
	rightcontent += '		</div>';
	rightcontent += '	';
	rightcontent += '</div>';
	rightcontent += '<div class="col col-md-6 col-xs-0 col-lg-6">';
	rightcontent += '	&nbsp;';
	rightcontent += '</div>';
	$('.rightcontent').html(rightcontent);
	$('.rightcontent .col:nth-child(1)').hide();

	$('.leftcontent .col:nth-child(2)').delay( 500 ).fadeIn( 100 );
	$('.rightcontent .col:nth-child(1)').delay( 500 ).fadeIn( 100 );
	resizer();
});

$('body').on('click','.webcoding', function(){
	$(".menu_btn").removeClass("active");
	$(".menu_btn.webcoding").addClass("active");

	smallheader();
	largerightwidth();
	
			
	var leftcontent = "";
	leftcontent += '<div class="col col-md-6 col-xs-0 col-lg-6 invisiblewhensmall">';
	leftcontent += '	&nbsp;';
	leftcontent += '</div>';
	leftcontent += '<div class="col col-md-6 col-xs-12 col-lg-6 ">';
	leftcontent += '	<div class="box col col-md-10 col-xs-10 col-lg-10 projects emodulewijzer">';
	leftcontent += '		<div class="title">E-modulewijzer</div>';
	leftcontent += '			<div class="imagebox">';
	leftcontent += '				<img src="img/emodulewijzer_square.jpg"/>';
	leftcontent += '			</div>';
	leftcontent += '		</div>';
	leftcontent += '	';
	leftcontent += '	<div class="box col col-md-10 col-xs-10 col-lg-10 projects qsorting">';
	leftcontent += '		<div class="title">Q-sorting</div>';
	leftcontent += '			<div class="imagebox">';
	leftcontent += '				<img src="img/q-sorting_square.jpg"/>';
	leftcontent += '			</div>';
	leftcontent += '		</div>';
	leftcontent += '	';
	leftcontent += '	<div class="box col col-md-10 col-xs-10 col-lg-10 projects gamerealm">';
	leftcontent += '		<div class="title">Gamerealm</div>';
	leftcontent += '			<div class="imagebox">';
	leftcontent += '				<img src="img/gamerealm_square.jpg"/>';
	leftcontent += '			</div>';
	leftcontent += '		</div>';
	leftcontent += '	';
	leftcontent += '	<div class="box col col-md-10 col-xs-10 col-lg-10 projects vaatrisico">';
	leftcontent += '		<div class="title">Vaatrisico app</div>';
	leftcontent += '			<div class="imagebox">';
	leftcontent += '				<img src="img/vaatrisico_square.jpg"/>';
	leftcontent += '			</div>';
	leftcontent += '		</div>';
	leftcontent += '	';
	leftcontent += '</div>';
	$('.leftcontent').html(leftcontent);
	$('.leftcontent .col:nth-child(2)').hide();

	var rightcontent = "";
	rightcontent += '<div class="col col-md-9 col-xs-12 col-lg-9 singleproject">';
	rightcontent += '<div class="col col-md-5 col-xs-5 col-lg-5">';
	rightcontent += '<div class="title">E-modulewijzer</div>';
	rightcontent += '<table>';
	rightcontent += '<tr><td>When:</td><td>2014</td></tr>';
	rightcontent += '<tr><td>Tools:</td><td>html, css, jQuery, javascript, php, sass, sql</td></tr>';
	rightcontent += '<tr><td colspan="2">This tool was built for the University Medical Center of Utrecht for the "Learning without limits" project. It is a tool which allows us (the producers of educational tools) to estimate how much time is required by the different roles/people in the project. <br/><br/> The E-modulewijzer works on the one hand as a catalog to display the possible features our project supplies. On the other hand, it functions as an communication device for the clients to confront them with the financial consequences their product entails as well as an indication to how much time they will need to invest themselves in order to create the content of the e-modules.</td></tr>';
	rightcontent += '</table>';
	rightcontent += '</div>';
	rightcontent += '<div class="col col-md-7 col-xs-7 col-lg-7">';
	rightcontent += '	<a href="http://e-modulewijzer.nl/" target="_blank"><img src="img/emodulewijzer_large.jpg" class="col col-md-12 col-xs-12 col-lg-12"/></a>';
	rightcontent += '</div>';
	rightcontent += '</div>';
	rightcontent += '<div class="col col-md-3 col-xs-0 col-lg-3">';
	rightcontent += '	&nbsp;';
	rightcontent += '</div>';
	$('.rightcontent').html(rightcontent);
	$('.rightcontent .col:nth-child(1)').hide();

	$('.leftcontent .col:nth-child(2)').delay( 500 ).fadeIn( 100 );
	$('.rightcontent .col:nth-child(1)').delay( 500 ).fadeIn( 100 );
	resizer();
});

$('.leftcontent').on('click','.emodulewijzer', function(){
	var rightcontent = "";
	rightcontent += '<div class="col col-md-9 col-xs-12 col-lg-9 singleproject">';
	rightcontent += '<div class="col col-md-5 col-xs-5 col-lg-5">';
	rightcontent += '<div class="title">E-modulewijzer</div>';
	rightcontent += '<table>';
	rightcontent += '<tr><td>When:</td><td>2014</td></tr>';
	rightcontent += '<tr><td>Tools:</td><td>html, css, jQuery, javascript, php, sass, sql</td></tr>';
	rightcontent += '<tr><td colspan="2">This tool was built for the University Medical Center of Utrecht for the "Learning without limits" project. It is a tool which allows us (the producers of educational tools) to estimate how much time is required by the different roles/people in the project. <br/><br/> The E-modulewijzer works on the one hand as a catalog to display the possible features our project supplies. On the other hand, it functions as an communication device for the clients to confront them with the financial consequences their product entails as well as an indication to how much time they will need to invest themselves in order to create the content of the e-modules.</td></tr>';
	rightcontent += '</table>';
	rightcontent += '</div>';
	rightcontent += '<div class="col col-md-7 col-xs-7 col-lg-7">';
	rightcontent += '	<a href="http://e-modulewijzer.nl/" target="_blank"><img src="img/emodulewijzer_large.jpg" class="col col-md-12 col-xs-12 col-lg-12"/></a>';
	rightcontent += '</div>';
	rightcontent += '</div>';
	rightcontent += '<div class="col col-md-3 col-xs-0 col-lg-3">';
	rightcontent += '	&nbsp;';
	rightcontent += '</div>';
	$('.rightcontent').html(rightcontent);
	$('.rightcontent .col:nth-child(1)').hide();

	$('.leftcontent .col:nth-child(2)').delay( 0 ).fadeIn( 100 );
	$('.rightcontent .col:nth-child(1)').delay( 0 ).fadeIn( 100 );
});

$('.leftcontent').on('click','.vaatrisico', function(){
	var rightcontent = "";
	rightcontent += '<div class="col col-md-9 col-xs-12 col-lg-9 singleproject">';
	rightcontent += '<div class="col col-md-5 col-xs-5 col-lg-5">';
	rightcontent += '<div class="title">Vaatrisico</div>';
	rightcontent += '<table>';
	rightcontent += '<tr><td>When:</td><td>2014</td></tr>';
	rightcontent += '<tr><td>Tools:</td><td>html, css, jQuery, javascript, cordova, json</td></tr>';
	rightcontent += '<tr><td colspan="2">This app was built by myself and one other developer of the IT-department of the University Medical Center of Utrecht. With the new " Vascular Risk app" for all types of patients, healthcare providers can easily calculate the risk of cardiovascular disease. The doctor has to fill in a few details , including age, blood pressure , cholesterol levels and sex. The Vascular Risk app is partly based on the UMC Utrecht SMART study in which more than ten thousand patients with cardiovascular disease had been followed for more than 10 years. It is an extension of the existing Risk table app UMC Utrecht , which already has about 4,000 users . This application , however, was only useful for patients with risk factors , but without any cardiovascular disease.</td></tr>';
	rightcontent += '</table>';
	rightcontent += '</div>';
	rightcontent += '<div class="col col-md-7 col-xs-7 col-lg-7">';
	rightcontent += '	<a href="http://www.umcutrecht.nl/nl/Ziekenhuis/Afdelingen/Hart-en-vaatcentrum/Nieuws/-Vaatrisico-app-voorspelt-kans-op-hart-en-vaatzi" target="_blank"><img src="img/vaatrisico.png" class="col col-md-12 col-xs-12 col-lg-12"/></a>';
	rightcontent += '</div>';
	rightcontent += '</div>';
	rightcontent += '<div class="col col-md-3 col-xs-0 col-lg-3">';
	rightcontent += '	&nbsp;';
	rightcontent += '</div>';
	$('.rightcontent').html(rightcontent);
	$('.rightcontent .col:nth-child(1)').hide();

	$('.leftcontent .col:nth-child(2)').delay( 0 ).fadeIn( 100 );
	$('.rightcontent .col:nth-child(1)').delay( 0 ).fadeIn( 100 );
});

$('.leftcontent').on('click','.qsorting', function(){
	var rightcontent = "";
	rightcontent += '<div class="col col-md-9 col-xs-12 col-lg-9 singleproject">';
	rightcontent += '<div class="col col-md-5 col-xs-5 col-lg-5">';
	rightcontent += '<div class="title">Q-sorting</div>';
	rightcontent += '<table>';
	rightcontent += '<tr><td>When:</td><td>2015</td></tr>';
	rightcontent += '<tr><td>Tools:</td><td>html, css, jQuery, javascript, cordova, json, bootstrap</td></tr>';
	rightcontent += '<tr><td colspan="2">The Q-sort method is a method of questioning participants on the culture of their work environment.  As a result, the priorities of a department become quite clear.<br/><br/>The Q-method is good to use if you want to examine a large number of variables in a small number of people. So you get a detailed picture of how people think about a particular topic. Based on this, you can determine the direction of future research. It is a method of qualitative and quantitative research. For example, it is used to determine the effectiveness of certain policies because the participants really have to think about where they place the items will result in an awareness in which significantly increased the quality of the response. The method consists of a number of statements in racks. The propositions are taken on cards. The participants put the cards on a grid with a scale, see example. The schedule forces the participant to choose which statement they find congruent with their departments culture and policies.</td></tr>';
	rightcontent += '</table>';
	rightcontent += '</div>';
	rightcontent += '<div class="col col-md-7 col-xs-7 col-lg-7">';
	rightcontent += '	<a href="http://testbak.livetolearn.org/~rens/rating_system/" target="_blank"><img src="img/qsorting.jpg" class="col col-md-12 col-xs-12 col-lg-12"/></a>';
	rightcontent += '</div>';
	rightcontent += '</div>';
	rightcontent += '<div class="col col-md-3 col-xs-0 col-lg-3">';
	rightcontent += '	&nbsp;';
	rightcontent += '</div>';
	$('.rightcontent').html(rightcontent);
	$('.rightcontent .col:nth-child(1)').hide();

	$('.leftcontent .col:nth-child(2)').delay( 00 ).fadeIn( 100 );
	$('.rightcontent .col:nth-child(1)').delay( 00 ).fadeIn( 100 );
});

$('.leftcontent').on('click','.gamerealm', function(){
	var rightcontent = "";
	rightcontent += '<div class="col col-md-9 col-xs-12 col-lg-9 singleproject">';
	rightcontent += '<div class="col col-md-5 col-xs-5 col-lg-5">';
	rightcontent += '<div class="title">Gamerealm</div>';
	rightcontent += '<table>';
	rightcontent += '<tr><td>When:</td><td>2014</td></tr>';
	rightcontent += '<tr><td>Tools:</td><td>html, css, jQuery, javascript, cordova, ajax, php, sql</td></tr>';
	rightcontent += '<tr><td colspan="2">Gamerealm is a platform created for gamers and indy game developers. Gamerealm functions as a platform for gamers to find the most popular games on the web while it allows developers to display their work publicly. <br/><br/> This idea was inspired by the demand of game developers to find platforms through which they can display and market their product. Feel free to check out the platform and play a few games while you are at it. </td></tr>';
	rightcontent += '</table>';
	rightcontent += '</div>';
	rightcontent += '<div class="col col-md-7 col-xs-7 col-lg-7">';
	rightcontent += '	<a href="http://gamerealm.eu/" target="_blank"><img src="img/gamerealm.jpg" class="col col-md-12 col-xs-12 col-lg-12"/></a>';
	rightcontent += '</div>';
	rightcontent += '</div>';
	rightcontent += '<div class="col col-md-3 col-xs-0 col-lg-3">';
	rightcontent += '	&nbsp;';
	rightcontent += '</div>';
	$('.rightcontent').html(rightcontent);
	$('.rightcontent .col:nth-child(1)').hide();

	$('.leftcontent .col:nth-child(2)').delay( 00 ).fadeIn( 100 );
	$('.rightcontent .col:nth-child(1)').delay( 00 ).fadeIn( 100 );
});

$('body').on('click','.academic', function(){

	$(".menu_btn").removeClass("active");
	$(".menu_btn.academic").addClass("active");
	smallheader();
	normalwidth();

	var leftcontent = "";
	leftcontent += '			<div class="col col-md-4 col-xs-0 col-lg-4">';
	leftcontent += '				&nbsp;';
	leftcontent += '			</div>';
	leftcontent += '			<div class="col col-md-8 col-xs-12 col-lg-8">';
	leftcontent += '				<div class="academic intro">';
	leftcontent += '					This page contains a selection of essays and papers written during the master programme New Media and Digital Culture at the Universiteit Utrecht. Some of these papers are written in dutch but most are written in english. Feel free to browse through these introductions or download the entire paper in the links below.';
	leftcontent += '				</div>';
	leftcontent += '				<div class="academic articletitle">';
	leftcontent += '					Master Thesis: Smartphone vs. Police brutality: A socio-technological account of the public image of militarized United States law enforcement in conjunction with new media';
	leftcontent += '				</div>';
	leftcontent += '				<div class="abstract">';
	leftcontent += '					As mobile technology has progressed in the past decade, users have been increasingly able to share content through their mobile devices. Where users were previously limited to audio and text messages in 1-to-1 communication, they are now able to audio-visually record content and distribute it over a vast network of interconnected mobile and stationary devices. This progression is now affecting the representation of United States law enforcement in online and traditional media as police misconduct is more easily recorded and distributed through smartphone technology. This technology has been excessively used by American protesters in the Occupy movement which is why it will exemplify the war of images being fought by law enforcement and the public. The role of mobile devices and social media in the movement will be analyzed in order to understand how the ubiquity and affordances of representation of digital technology is now converging with a parallel development of increased militarization and non-lethal weapon use by law enforcement.';
	leftcontent += '				</div>';
	leftcontent += '				<div class="article link">';
	leftcontent += '					<a href="articles/master_thesis_rens_wiebenga.pdf" target="_blank">For further reading click here</a>';
	leftcontent += '				</div>';

	leftcontent += '				<div class="academic articletitle">';
	leftcontent += '					Emancipation of the public through Radio, Internet and the Hive-Mind';
	leftcontent += '				</div>';
	leftcontent += '				<div class="abstract">';
	leftcontent += '					Throughout history, the utopian dreams of new media as great emancipator of the public have gotten subverted by the works of pragmatic application of new media in their respective political, historical and economic environment. Radio was, for instance, considered a great emancipator of the public who were previously subjected to the whims of wire companies who controlled the flow of information. Radio was to grant the public autonomy and freedom from socio-political forces. However, these dreams were soon to be extinguished for the sake of navy safety regulations. But this is not the only time this emancipatory dream of amateurs has been forced into submission. In the mid-nineties the same dreams surrounded the new medium called the Internet. The Internet was presented as borderless and without restrictions. Amateurs were told they had the opportunity to better themselves through the means of the Internet and thereby achieving their goals as autonomous human beings. However, since the turn of the millennium, the discourse surrounding the Internet had changed into reports on loss of privacy and the potential power of existing power structures. Instead of emancipation, the public was confronted with a system of control that constantly surveils individuals with the use of extensive networks of information, which the state and well-established institutions use to empower themselves under the banner of safety or extended service. It would seem that the Internet would undergo the same cyclical process of dashed emancipatory dreams as was done before with radio.';
	leftcontent += '				</div>';
	leftcontent += '				<div class="article link">';
	leftcontent += '					<a href="articles/final_paper_archaeology_rens_wiebenga.pdf" target="_blank">For further reading click here</a>';
	leftcontent += '				</div>';
	
	$('.leftcontent').html(leftcontent);
	$('.leftcontent .col:nth-child(2)').hide();


	var rightcontent = "";
	rightcontent += '			<div class="col col-md-8 col-xs-12 col-lg-8">';
	rightcontent += '				<div class="academic articletitle">';
	rightcontent += '					The end of griefing is nigh';
	rightcontent += '				</div>';
	rightcontent += '				<div class="abstract">';
	rightcontent += '					Since the late 1980s, a new phenomenon started to manifest itself across several platforms on the internet. Online communities were faced with a growing scourge which played an increasing role in the world of online communication and multiplayer games in particular. This phenomenon is called trolling or griefing and will be the focus of this essay.1 In the context of online communities, trolling is the practice of purposely disrupting the efforts of the community with the intent to lure potential victims into a nonsensical debate, discussion or flame war. By acting counterproductively and messaging inflammatory, naïve or off-topic messages in an online community, they hope to disrupt the communication and combined efforts of that community (Adrian, 2010) (Brandel, 2008) (Schwartz, 2008) (Herring, 2002). Ever since its inception in the late 80s, trolling has grown from a small nuisance to something that is considered a social disease (Adrian, 2010). Cultural scholar David Porter who is the author of the 1997 book Internet Culture describes trolling as a creative form of cooperative anarchy; a form of deadpan humor that thrives on being elusive. But since the first appearances of trolling the academic debate, it has taken a turn for the malicious. This malevolent turn has caused the phenomenon to attract attention of both popular media and the academic world. They both deplore its growth and malice in numerous reports and articles in which they attempt to warn the public of its destructive power. However dystopian the recent notions of academia and the popular media are, I will argue in this essay that the end for the most malicious types of trolling is near. In previous papers I have shown that anonymity of the web has facilitated the strange moral compass that is used by trolls and griefers (Wiebenga, Morele verwerpelijkheid in de online wereld, 2011). This paper will show that the new platformed business model of the game industry results in lower levels of anonymity which means that the wiggle room for malicious use of online platforms will decrease. The focus of this essay thereby is on both game culture and game technology and is a combination of both game-centric and player-centric analyses. This essay is game-centric as it also discusses console/PC-platform and their affordance2 for griefing and trolling through their essential characteristics.';
	rightcontent += '				</div>';
	rightcontent += '				<div class="article link">';
	rightcontent += '					<a href="articles/essay_renswiebenga_the_end_of_griefing_is_nigh.pdf" target="_blank">For further reading click here</a>';
	rightcontent += '				</div>';
	rightcontent += '				<div class="academic articletitle">';
	rightcontent += '					The scientific authority of visualizations';
	rightcontent += '				</div>';
	rightcontent += '				<div class="abstract">';
	rightcontent += '					In this article I will argue that the moral panic in the United States with regards to Fukushima radiation has been over sensationalized with the help of weather models and visualizations. I am hereby addressing a real life problem to the epistemological shift described by Evelyn Fox-Keller in her essay “Models, Simulation, and ‘Computer Experiments’” wherein she explains that an epistemological shift has occurred from experimentally based science to that of digital simulations. Similar to Gabriele Gramelsberger in her article “Story telling with Code – Archaeology of Climate Modelling”, I will show the consequences of this shift. By doing so, the inherent danger that lies in the agency of these simulations and visualizations will be addressed and critically examined as representations of a codified world. The danger referred to here is that the ubiquity of visual technology has led to an ever increasing possibility for amateurs to produce content (including visualizations). This allows non-scientific sources to create professionally designed visualizations of research data, which draw heavily on the authority exuded by real scientific practice. I will argue that digital technology and the ease of visualization have a tremendous agency in the way the Fukushima disaster was experienced. In this attempt I will criticize several claims made by popular media on the basis of these visualization and will also try to comprehend how a certain mappings of data has taken hold of the American public.';
	rightcontent += '				</div>';
	rightcontent += '				<div class="article link">';
	rightcontent += '					<a href="articles/the_scientific-authority-of-visualizations.pdf" target="_blank">For further reading click here</a>';
	rightcontent += '				</div>';
	rightcontent += '				<div class="academic articletitle">';
	rightcontent += '					Virtuele moraliteit';
	rightcontent += '				</div>';
	rightcontent += '				<div class="abstract">';
	rightcontent += '					In de laatste decennia hebben we een enorme ontwikkeling van computertechnologie kunnen aanschouwen. Deze technologische vooruitgang heeft onze wereld drastisch veranderd en vele mogelijkheden geboden tot virtuele interactie met anderen. Denk hierbij aan social network sites zoals Hyves, chatprogramma’s zoals MSN, multiplayer games, fora, email en virtuele ontmoetingsplaatsen zoals Second Life. De groei van deze interactiemogelijkheden brengt echter ook nieuwe zorgen met zich mee. Hoewel het internet aan de ene kant de mogelijkheid geeft voor mensen om op allerlei verschillende manieren in contact te komen met anderen, geeft het ook de mogelijkheid tot obscene, gewelddadige en misantropische handelingen in deze virtuele werelden. Het lijkt een kwestie van tijd te zijn voordat regulerende instanties een grip krijgen op het internet waardoor strafbare handelingen zoals racisme, manipulatie, pesten en geweld ook in de virtuele wereld strafbaar gesteld worden. Voordat dergelijk gedrag echter strafbaar gesteld kan worden moeten we ons eerst afvragen in welke mate dergelijke destructieve daden als immoreel beschouwd kunnen worden. Dit onderzoek zal dan ook een antwoord proberen te geven in welke mate we huidige ethische veronderstellingen nog toepasbaar zijn op virtuele werelden.';
	rightcontent += '				</div>';
	rightcontent += '				<div class="article link">';
	rightcontent += '					<a href="articles/virtuele_moraliteit.pdf" target="_blank">For further reading click here</a>';
	rightcontent += '				</div>';
	rightcontent += '			</div>';
	rightcontent += '			<div class="col col-md-4 col-xs-0 col-lg-4">';
	rightcontent += '				&nbsp;';
	rightcontent += '			</div>';

	$('.rightcontent').html(rightcontent);



	var str = $('.abstract').html();
	var res = str.substring(1, 300);
	$('.abstract').html(res+'...')
	$('.rightcontent .col:nth-child(1)').hide();

	$('.leftcontent .col:nth-child(2)').delay( 500 ).fadeIn( 100 );
	$('.rightcontent .col:nth-child(1)').delay( 500 ).fadeIn( 100 );
});

$('body').on('click','.artwork', function(){
	$(".menu_btn").removeClass("active");
	$(".menu_btn.artwork").addClass("active");

	smallheader();
	largerightwidth();
	
			
	var leftcontent = "";
	leftcontent += '<div class="col col-md-6 col-xs-0 col-lg-6 invisiblewhensmall">';
	leftcontent += '	&nbsp;';
	leftcontent += '</div>';
	leftcontent += '<div class="col col-md-6 col-xs-12 col-lg-6">';
	leftcontent += '	<div class="box col col-md-10 col-xs-10 col-lg-10 projects lizard">';
	leftcontent += '		<div class="title">Lizard</div>';
	leftcontent += '			<div class="imagebox">';
	leftcontent += '				<img src="artwork/machanical_lizard_square.jpg"/>';
	leftcontent += '			</div>';
	leftcontent += '		</div>';
	leftcontent += '	';
	leftcontent += '	<div class="box col col-md-10 col-xs-10 col-lg-10 projects android">';
	leftcontent += '		<div class="title">Android</div>';
	leftcontent += '			<div class="imagebox">';
	leftcontent += '				<img src="artwork/android_square.jpg"/>';
	leftcontent += '			</div>';
	leftcontent += '		</div>';
	leftcontent += '	';
	leftcontent += '	<div class="box col col-md-10 col-xs-10 col-lg-10 projects dragon">';
	leftcontent += '		<div class="title">Dragon</div>';
	leftcontent += '			<div class="imagebox">';
	leftcontent += '				<img src="artwork/dragon_in_the_night_square.jpg"/>';
	leftcontent += '			</div>';
	leftcontent += '		</div>';
	leftcontent += '	';
	leftcontent += '	<div class="box col col-md-10 col-xs-10 col-lg-10 projects iwantoneofthosememes">';
	leftcontent += '		<div class="title">Meme t-shirt</div>';
	leftcontent += '			<div class="imagebox">';
	leftcontent += '				<img src="artwork/I_want_one_of_those_memes_square.jpg"/>';
	leftcontent += '			</div>';
	leftcontent += '		</div>';
	leftcontent += '	';
	leftcontent += '</div>';
	$('.leftcontent').html(leftcontent);
	$('.leftcontent .col:nth-child(2)').hide();

	var rightcontent = "";
	rightcontent += '<div class="col col-md-9 col-xs-12 col-lg-9 singleproject">';
	rightcontent += '	<div class="col col-md-12 col-xs-12 col-lg-12">';
	rightcontent += '		<div class="title">Mechanical lizard</div>';
	rightcontent += '	</div>';
	rightcontent += '	<div class="col col-md-12 col-xs-12 col-lg-12">';
	rightcontent += '		<img src="artwork/machanical_lizard.jpg" class="col-12 max750"/>';
	rightcontent += '	</div>';
	rightcontent += '	<div class="col col-md-12 col-xs-12 col-lg-12">';
	rightcontent += '		<br/>The Lizard was made using a picture of a chromed engine of the chopper and the picture of a lizard. With the help of a tutorial I\'ve used these two pictures to create a mechanized lizard. This version of the picture is actually the third one. It took me several tries to get the robot lizard shiny and chrome enough.';
	rightcontent += '	</div>';
	rightcontent += '</div>';
	rightcontent += '<div class="col col-md-3 col-xs-0 col-lg-3">';
	rightcontent += '	&nbsp;';
	rightcontent += '</div>';
	
	$('.rightcontent').html(rightcontent);
	$('.rightcontent .col:nth-child(1)').hide();

	$('.leftcontent .col:nth-child(2)').delay( 500 ).fadeIn( 100 );
	$('.rightcontent .col:nth-child(1)').delay( 500 ).fadeIn( 100 );
	resizer();
});

$('.leftcontent').on('click','.lizard', function(){
	var rightcontent = "";
	rightcontent += '<div class="col col-md-9 col-xs-12 col-lg-9 singleproject">';
	rightcontent += '	<div class="col col-md-12 col-xs-12 col-lg-12">';
	rightcontent += '		<div class="title">Mechanical lizard</div>';
	rightcontent += '	</div>';
	rightcontent += '	<div class="col col-md-12 col-xs-12 col-lg-12">';
	rightcontent += '		<img src="artwork/machanical_lizard.jpg" class="col-12 max750"/>';
	rightcontent += '	</div>';
	rightcontent += '	<div class="col col-md-12 col-xs-12 col-lg-12">';
	rightcontent += '		<br/>The Lizard was made using a picture of a chromed engine of the chopper and the picture of a lizard. With the help of a tutorial I\'ve used these two pictures to create a mechanized lizard. This version of the picture is actually the third one. It took me several tries to get the robot lizard shiny and chrome enough.';
	rightcontent += '	</div>';
	rightcontent += '</div>';
	rightcontent += '<div class="col col-md-3 col-xs-0 col-lg-3">';
	rightcontent += '	&nbsp;';
	rightcontent += '</div>';
	$('.rightcontent').html(rightcontent);
	$('.rightcontent .col:nth-child(1)').hide();

	$('.rightcontent .col:nth-child(1)').delay( 0 ).fadeIn( 100 );
});

$('.leftcontent').on('click','.android', function(){
	var rightcontent = "";
	rightcontent += '<div class="col col-md-9 col-xs-12 col-lg-9 singleproject">';
	rightcontent += '	<div class="col col-md-12 col-xs-12 col-lg-12">';
	rightcontent += '		<div class="title">Android</div>';
	rightcontent += '	</div>';
	rightcontent += '	<div class="col col-md-12 col-xs-12 col-lg-12">';
	rightcontent += '		<img src="artwork/android.jpg" class="col-12 max750"/>';
	rightcontent += '	</div>';
	rightcontent += '	<div class="col col-md-12 col-xs-12 col-lg-12">';
	rightcontent += '		<br/>This Android was used to create a personal poster for a friend of mine. So it has no specific purpose. I am however quite proud of this artwork of a female android because it came out almost exactly as I pictured it in my head. This artwork was made with Adobe Photoshop, 3dsMax and Adobe Illustrator.';
	rightcontent += '	</div>';
	rightcontent += '</div>';
	rightcontent += '<div class="col col-md-3 col-xs-0 col-lg-3">';
	rightcontent += '	&nbsp;';
	rightcontent += '</div>';
	$('.rightcontent').html(rightcontent);
	$('.rightcontent .col:nth-child(1)').hide();

	$('.leftcontent .col:nth-child(2)').delay( 0 ).fadeIn( 100 );
	$('.rightcontent .col:nth-child(1)').delay( 0 ).fadeIn( 100 );
});

$('.leftcontent').on('click','.dragon', function(){
	var rightcontent = "";
	rightcontent += '<div class="col col-md-9 col-xs-12 col-lg-9 singleproject">';
	rightcontent += '	<div class="col col-md-12 col-xs-12 col-lg-12">';
	rightcontent += '		<div class="title">Dragon in the night</div>';
	rightcontent += '	</div>';
	rightcontent += '	<div class="col col-md-12 col-xs-12 col-lg-12">';
	rightcontent += '		<img src="artwork/dragon_in_the_night.jpg" class="col-12 max750"/>';
	rightcontent += '	</div>';
	rightcontent += '	<div class="col col-md-12 col-xs-12 col-lg-12">';
	rightcontent += '		<br/>This dragon was my second serious attempt at using photoshop with a sketch tablet. I was particulary proud of this one because I feel the wings look really nice. I must admit that the wings cost me the most amount of time but it was worth it.';
	rightcontent += '	</div>';
	rightcontent += '</div>';
	rightcontent += '<div class="col col-md-3 col-xs-0 col-lg-3">';
	rightcontent += '	&nbsp;';
	rightcontent += '</div>';
	$('.rightcontent').html(rightcontent);
	$('.rightcontent .col:nth-child(1)').hide();

	$('.leftcontent .col:nth-child(2)').delay( 0 ).fadeIn( 100 );
	$('.rightcontent .col:nth-child(1)').delay( 0 ).fadeIn( 100 );
});

$('.leftcontent').on('click','.iwantoneofthosememes', function(){
	var rightcontent = "";
	rightcontent += '<div class="col col-md-9 col-xs-12 col-lg-9 singleproject">';
	rightcontent += '	<div class="col col-md-12 col-xs-12 col-lg-12">';
	rightcontent += '		<div class="title">I want one of those memes</div>';
	rightcontent += '	</div>';
	rightcontent += '	<div class="col col-md-12 col-xs-12 col-lg-12">';
	rightcontent += '		<img src="artwork/iwantoneofthosememes.png" class="col-12 max750"/>';
	rightcontent += '	</div>';
	rightcontent += '	<div class="col col-md-12 col-xs-12 col-lg-12">';
	rightcontent += '		<br/>The webshop I want one of those memes is a side-project of mine. It is a business venture created to sell meme-merchandise. What are memes you ask... An internet meme is an idea, video, game or image that is distributed like a virus on the internet. "Going viral" means that something is spread throughout the internetby means of social media and/or discussion fora. Once a certain threshold is reached, the idea, video, game or image achieves meme status through its ubiquity on the internet. ';
	rightcontent += '	</div>';
	rightcontent += '</div>';
	rightcontent += '<div class="col col-md-3 col-xs-0 col-lg-3">';
	rightcontent += '	&nbsp;';
	rightcontent += '</div>';
	$('.rightcontent').html(rightcontent);
	$('.rightcontent .col:nth-child(1)').hide();

	$('.leftcontent .col:nth-child(2)').delay( 0 ).fadeIn( 100 );
	$('.rightcontent .col:nth-child(1)').delay( 0 ).fadeIn( 100 );
});



$('body').on('click','.contact', function(){
	$(".menu_btn").removeClass("active");
	$(".menu_btn.contact").addClass("active");
	
	largeheader();
	normalwidth();
	
	var leftcontent ="";
	leftcontent += '<div class="col col-md-4 col-xs-0 col-lg-4">';
	leftcontent += '				&nbsp;';
	leftcontent += '			</div>';
	leftcontent += '			<div class="col col-md-8 col-xs-12 col-lg-8">';
	leftcontent += '				<div class="artwork box">';
	leftcontent += '					<div class="title">Artwork<br/><br/></div>';
	leftcontent += '					<a class="artwork">';
	leftcontent += '						<div class="imagebox">';
	leftcontent += '							<img src="img/Art-icon.png"/>';
	leftcontent += '						</div>';
	leftcontent += '					</a>';
	leftcontent += '				</div>';
	leftcontent += '				<div class="academic box">';
	leftcontent += '					<div class="title">Academic <br/>writing</div>';
	leftcontent += '					<a class="academic">';
	leftcontent += '						<div class="imagebox">';
	leftcontent += '							<img src="img/Notepad-Bloc-notes-icon.png"/>';
	leftcontent += '						</div>';
	leftcontent += '					</a>';
	leftcontent += '				</div>';
	leftcontent += '				<div class="webdesign box">';
	leftcontent += '					<div class="title">Webdesign <br/>& Coding</div>';
	leftcontent += '					<a class="webcoding">';
	leftcontent += '						<div class="imagebox">';
	leftcontent += '							<img src="img/Coding-icon.png"/>';
	leftcontent += '						</div>';
	leftcontent += '					</a>';
	leftcontent += '				</div>';
	leftcontent += '				<div class="text">';
	leftcontent += '					<b>The type of work I do</b><br/>';
	leftcontent += '					I would like to encourage you to browse through some of the work I have done over the last couple of years. Although some of the recent projects have been in service of the University Medical Center in Utrecht as a <h1>e-learning developer</h1>, there are also <h1>freelance projects</h1> to be found.';
	leftcontent += '';
	leftcontent += '				</div>';
	leftcontent += '			</div>';
	$('.leftcontent').html(leftcontent);
	$('.leftcontent .col:nth-child(2)').hide();

	var rightcontent = "";
	rightcontent += '	<div class="col col-md-8 col-xs-12 col-lg-8">';
	rightcontent += '				<div class="title">Contact me!</div>';
	rightcontent += '				<div class="text">Do you need a functional website, design or anything else? <br/>Fill in this form and I will contact you as soon as possible!</div><br/>';
	rightcontent += '				<form name="myform" action="http://www.mydomain.com/myformhandler.cgi" method="POST">';
	rightcontent += '				<table>';
	rightcontent += '					<tr>';
	rightcontent += '						<td>';
	rightcontent += '							Product:';
	rightcontent += '						</td>';
	rightcontent += '						<td>';
	rightcontent += '							What can I do for you?';
	rightcontent += '						</td>';
	rightcontent += '					</tr>';
	rightcontent += '					<tr>';
	rightcontent += '						<td>';
	rightcontent += '								';		
	rightcontent += '						</td>';
	rightcontent += '						<td>';
	rightcontent += '							<select name="product" id="product">';
	rightcontent += '								<option value="">- Select -</option>';
	rightcontent += '								<option value="completewebsite">Complete website</option>';
	rightcontent += '								<option value="webdesign">Webdesign</option>';
	rightcontent += '								<option value="webdevelopment">Webdevelopment</option>';
	rightcontent += '								<option value="logodesign">Logo design</option>';
	rightcontent += '								<option value="frontendwebdevelopment">Front-end webdevelopment</option>';
	rightcontent += '								<option value="backendwebdevelopment">Back-end webdevelopment</option>';
	rightcontent += '								<option value="mobileapplication">Mobile Application</option>';
	rightcontent += '								<option value="other">Other</option>';
	rightcontent += '							</select>';
	rightcontent += '						</td>';
	rightcontent += '					</tr>';
	rightcontent += '					<tr>';
	rightcontent += '						<td>';
	rightcontent += '							Budget:';
	rightcontent += '						</td>';
	rightcontent += '						<td>';
	rightcontent += '							What is your budget?';
	rightcontent += '						</td>';
	rightcontent += '					</tr>';
	rightcontent += '					<tr>';
	rightcontent += '						<td>';
	rightcontent += '						</td>';
	rightcontent += '						<td>';
	rightcontent += '							<select name="budget" id="budget">';
	rightcontent += '								<option value="">- Select -</option>';
	rightcontent += '								<option value="100500">&euro;100 - &euro;500 </option>';
	rightcontent += '								<option value="5001500">&euro;500 - &euro;1500 </option>';
	rightcontent += '								<option value="15003000">&euro;1500 - &euro;3000 </option>';
	rightcontent += '								<option value="3000">&euro;3000+</option>';
	rightcontent += '								<option value="not applicable">Not applicable</option>';
	rightcontent += '							</select>';
	rightcontent += '						</td>';
	rightcontent += '					</tr>';
	rightcontent += '					<tr>';
	rightcontent += '						<td>';
	rightcontent += '							Email address:';
	rightcontent += '						</td>';
	rightcontent += '						<td>';
	rightcontent += '							What is your e-mail address?';
	rightcontent += '						</td>';
	rightcontent += '					</tr>';
	rightcontent += '					<tr>';
	rightcontent += '						<td>';
	rightcontent += '						</td>';
	rightcontent += '						<td>';
	rightcontent += '							<input type="text" name="email" placeholder="E-mail address"  class="emailofuser">';
	rightcontent += '						</td>';
	rightcontent += '					</tr>';
	rightcontent += '				</table>';
	rightcontent += '				';
	rightcontent += '							';
	rightcontent += '				<br/>';
	rightcontent += '				<input type="submit" name="submit" class="submitbutton" value="Send!"><br>';
	rightcontent += '			</div>';
	rightcontent += '			<div class="col col-md-4 col-xs-0 col-lg-4">';
	rightcontent += '			</div>';
	$('.rightcontent').html(rightcontent);
	$('.rightcontent .col:nth-child(1)').hide();

	$('.leftcontent .col:nth-child(2)').delay( 500 ).fadeIn( 100 );
	$('.rightcontent .col:nth-child(1)').delay( 500 ).fadeIn( 100 );
});

function normalwidth(){
	$('.leftcontent').removeClass("col col-md-4");
	$('.leftcontent').removeClass("col-lg-4");
	$('.leftcontent').removeClass("col col-md-8");
	$('.leftcontent').removeClass("col-lg-8");

	$('.leftcontent').addClass("col col-md-6");
	$('.leftcontent').addClass("col-lg-6");

	$('.rightcontent').removeClass("col col-md-4");
	$('.rightcontent').removeClass("col-lg-4");
	$('.rightcontent').removeClass("col col-md-8");
	$('.rightcontent').removeClass("col-lg-8");

	$('.rightcontent').addClass("col col-md-6");
	$('.rightcontent').addClass("col-lg-6");
};

function largerightwidth(){
	$('.leftcontent').removeClass("col col-md-6");
	$('.leftcontent').removeClass("col-lg-6");
	$('.leftcontent').removeClass("col col-md-8");
	$('.leftcontent').removeClass("col-lg-8");

	$('.leftcontent').addClass("col col-md-4");
	$('.leftcontent').addClass("col-lg-4");

	$('.rightcontent').removeClass("col col-md-6");
	$('.rightcontent').removeClass("col-lg-6");
	$('.rightcontent').removeClass("col col-md-4");
	$('.rightcontent').removeClass("col-lg-4");

	$('.rightcontent').addClass("col col-md-8");
	$('.rightcontent').addClass("col-lg-8");
};

function largeleftwidth(){
	$('.leftcontent').removeClass("col col-md-6");
	$('.leftcontent').removeClass("col-lg-6");
	$('.leftcontent').removeClass("col col-md-4");
	$('.leftcontent').removeClass("col-lg-4");

	$('.leftcontent').addClass("col col-md-8");
	$('.leftcontent').addClass("col-lg-8");

	$('.rightcontent').removeClass("col col-md-6");
	$('.rightcontent').removeClass("col-lg-6");
	$('.rightcontent').removeClass("col col-md-8");
	$('.rightcontent').removeClass("col-lg-8");


	$('.rightcontent').addClass("col col-md-4");
	$('.rightcontent').addClass("col-lg-4");
};

function smallheader(){
	$('.leftcontent .col:nth-child(2)').delay( 0 ).fadeOut( 100 );
	$('.rightcontent .col:nth-child(1)').delay( 0 ).fadeOut( 100 );
	$('.middlecontent').animate({
		height: "640px"
	  }, 0);
	  $('.header').animate({
		height: "90px"
	  }, 00);
	$('.welcometext').delay( 000 ).fadeOut( 100 );
	$('.example').delay( 000 ).fadeOut( 100 );
	

	 $('.background img').animate({
		margin: "-125px -30px 0px 0"
	  }, 00);

};

function largeheader(){
	$('.leftcontent .col:nth-child(2)').delay( 0 ).fadeOut( 100 );
	$('.rightcontent .col:nth-child(1)').delay( 0 ).fadeOut( 100 );
	$('.middlecontent').animate({
		height: "380px"
	  }, 00);

	$('.header').animate({
		height: "350px"
	  }, 00);
	   $('.background img').animate({
		margin: "135px -30px 0px 0"
	  }, 00);

	$('.welcometext').delay( 300 ).fadeIn( 100 );
	$('.example').delay( 300 ).fadeIn( 100 );
};

$( window ).resize(function() {
	resizer();
});

function resizer (){
	var width = $(window).width();
	if (width < 990)
	{
		$('.rightcontent:has(.invisiblewhensmall)').css({"height":"250px"});
		$('.leftcontent:has(.invisiblewhensmall)').css({"height":"250px"});
		$('.leftheader:has(.invisiblewhensmall)').css({"display":"none"});
	} else {
		$('.rightcontent:has(.invisiblewhensmall)').css({"height":"100%"});
		$('.leftcontent:has(.invisiblewhensmall)').css({"height":"100%"});
		$('.leftheader:has(.invisiblewhensmall)').css({"display":"block"});
	}
};


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
				alert(response);
			});
		} else {
			alert ('This is not a proper e-mail address');		
		}

	};
$('body').on('click','.submitbutton', function(){
	sendData();
});