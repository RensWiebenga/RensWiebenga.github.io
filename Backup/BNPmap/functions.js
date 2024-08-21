$(function() {
	var def = {"countries":[						
							
	{"title":"	Luxembourg	","name":"	Luxembourg		","GDP":		119488	,"pintprice":	0			},
{"title":"	Norway	","name":"	Norway		","GDP":		96930	,"pintprice":	9.61			},
{"title":"	Qatar	","name":"	Qatar		","GDP":		93990	,"pintprice":	12.36			},
{"title":"	Switzerland	","name":"	Switzerland		","GDP":		86468	,"pintprice":	6.56			},
{"title":"	Australia	","name":"	Australia		","GDP":		61066	,"pintprice":	5.05			},
{"title":"	Denmark	","name":"	Denmark		","GDP":		60947	,"pintprice":	6.16			},
{"title":"	Sweden	","name":"	Sweden		","GDP":		58538	,"pintprice":	7.22			},
{"title":"	SanMarino	","name":"	San Marino		","GDP":		56820	,"pintprice":	0			},
{"title":"	Singapore	","name":"	Singapore		","GDP":		56287	,"pintprice":	5.79			},
{"title":"	SvalbardandJanMayen	","name":"	Svalbard and Jan Mayen		","GDP":		54600	,"pintprice":	0			},
{"title":"	Ireland	","name":"	Ireland		","GDP":		54411	,"pintprice":	5.39			},
{"title":"	UnitedStates	","name":"	United States		","GDP":		54370	,"pintprice":	4.00			},
{"title":"	Iceland	","name":"	Iceland		","GDP":		52315	,"pintprice":	8.03			},
{"title":"	Netherlands	","name":"	Netherlands		","GDP":		52225	,"pintprice":	4.49			},
{"title":"	Austria	","name":"	Austria		","GDP":		51433	,"pintprice":	3.93			},
{"title":"	Canada	","name":"	Canada		","GDP":		50304	,"pintprice":	4.19			},
{"title":"	Finland	","name":"	Finland		","GDP":		50016	,"pintprice":	6.17			},
{"title":"	Germany	","name":"	Germany		","GDP":		47774	,"pintprice":	3.37			},
{"title":"	Belgium	","name":"	Belgium		","GDP":		47682	,"pintprice":	3.87			},
{"title":"	UnitedKingdom	","name":"	United Kingdom		","GDP":		45729	,"pintprice":	5.08			},
{"title":"	France	","name":"	France		","GDP":		44332	,"pintprice":	5.61			},
{"title":"	NewZealand	","name":"	New Zealand		","GDP":		43363	,"pintprice":	5.41			},
{"title":"	Kuwait	","name":"	Kuwait		","GDP":		43168	,"pintprice":	0			},
{"title":"	UnitedArabEmirates	","name":"	United Arab Emirates		","GDP":		42944	,"pintprice":	9.53			},
{"title":"	BruneiDarussalam	","name":"	Brunei Darussalam		","GDP":		41460	,"pintprice":	8.69			},
{"title":"	Israel	","name":"	Israel		","GDP":		37222	,"pintprice":	7.20			},
{"title":"	Japan	","name":"	Japan		","GDP":		36222	,"pintprice":	0			},
{"title":"	Italy	","name":"	Italy		","GDP":		35335	,"pintprice":	4.49			},
{"title":"	Spain	","name":"	Spain		","GDP":		30272	,"pintprice":	2.24			},
{"title":"	SouthKorea	","name":"	South Korea		","GDP":		27970	,"pintprice":	2.52			},
{"title":"	Bahrain	","name":"	Bahrain		","GDP":		26701	,"pintprice":	5.31			},
{"title":"	Cyprus	","name":"	Cyprus		","GDP":		26109	,"pintprice":	0			},
{"title":"	Malta	","name":"	Malta		","GDP":		24716	,"pintprice":	2.81			},
{"title":"	SaudiArabia	","name":"	Saudi Arabia		","GDP":		24252	,"pintprice":	0.80			},
{"title":"	Slovenia	","name":"	Slovenia		","GDP":		24050	,"pintprice":	0			},
{"title":"	TheBahamas	","name":"	The Bahamas		","GDP":		23629	,"pintprice":	0			},
{"title":"	Taiwan	","name":"	Taiwan		","GDP":		22600	,"pintprice":	1.53			},
{"title":"	Greenland	","name":"	Greenland		","GDP":		22507	,"pintprice":	0			},
{"title":"	Bahamas	","name":"	Bahamas		","GDP":		22312	,"pintprice":	0			},
{"title":"	Portugal	","name":"	Portugal		","GDP":		22123	,"pintprice":	1.68			},
{"title":"	Greece	","name":"	Greece		","GDP":		21648	,"pintprice":	3.93			},
{"title":"	TrinidadandTobago	","name":"	Trinidad and Tobago		","GDP":		21375	,"pintprice":	0			},
{"title":"	Oman	","name":"	Oman		","GDP":		20927	,"pintprice":	7.79			},
{"title":"	Estonia	","name":"	Estonia		","GDP":		20090	,"pintprice":	2.81			},
{"title":"	EquatorialGuinea	","name":"	Equatorial Guinea		","GDP":		19960	,"pintprice":	0			},
{"title":"	FrenchGuiana	","name":"	French Guiana		","GDP":		19828	,"pintprice":	0			},
{"title":"	CzechRepublic	","name":"	Czech Republic		","GDP":		19526	,"pintprice":	1.25			},
{"title":"	Slovakia	","name":"	Slovakia		","GDP":		18435	,"pintprice":	1.46			},
{"title":"	Uruguay	","name":"	Uruguay		","GDP":		16882	,"pintprice":	2.22			},
{"title":"	Lithuania	","name":"	Lithuania		","GDP":		16467	,"pintprice":	2.24			},
{"title":"	Latvia	","name":"	Latvia		","GDP":		15730	,"pintprice":	2.24			},
{"title":"	Barbados	","name":"	Barbados		","GDP":		15603	,"pintprice":	0			},
{"title":"	Seychelles	","name":"	Seychelles		","GDP":		15141	,"pintprice":	0			},
{"title":"	Chile	","name":"	Chile		","GDP":		14480	,"pintprice":	1.66			},
{"title":"	Poland	","name":"	Poland		","GDP":		14411	,"pintprice":	1.78			},
{"title":"	SaintKittsandNevis	","name":"	Saint Kitts and Nevis		","GDP":		14287	,"pintprice":	0			},
{"title":"	AntiguaandBarbuda	","name":"	Antigua and Barbuda		","GDP":		14126	,"pintprice":	0			},
{"title":"	Palau	","name":"	Palau		","GDP":		14066	,"pintprice":	0			},
{"title":"	Hungary	","name":"	Hungary		","GDP":		13870	,"pintprice":	1.25			},
{"title":"	Croatia	","name":"	Croatia		","GDP":		13473	,"pintprice":	2.10			},
{"title":"	Argentina	","name":"	Argentina		","GDP":		12735	,"pintprice":	2.57			},
{"title":"	Russia	","name":"	Russia		","GDP":		12718	,"pintprice":	1.00			},
{"title":"	NewCaledonia	","name":"	New Caledonia		","GDP":		12579	,"pintprice":	0			},
{"title":"	Kazakhstan	","name":"	Kazakhstan		","GDP":		12400	,"pintprice":	0			},
{"title":"	Brazil	","name":"	Brazil		","GDP":		11573	,"pintprice":	1.68			},
{"title":"	Gabon	","name":"	Gabon		","GDP":		11484	,"pintprice":	0			},
{"title":"	Panama	","name":"	Panama		","GDP":		11146	,"pintprice":	1.50			},
{"title":"	Lebanon	","name":"	Lebanon		","GDP":		11092	,"pintprice":	1.41			},
{"title":"	Malaysia	","name":"	Malaysia		","GDP":		11049	,"pintprice":	2.70			},
{"title":"	Mexico	","name":"	Mexico		","GDP":		10784	,"pintprice":	1.09			},
{"title":"	Turkey	","name":"	Turkey		","GDP":		10381	,"pintprice":	2.69			},
{"title":"	CostaRica	","name":"	Costa Rica		","GDP":		10378	,"pintprice":	2.00			},
{"title":"	Mauritius	","name":"	Mauritius		","GDP":		9999	,"pintprice":	0			},
{"title":"	Romania	","name":"	Romania		","GDP":		9981	,"pintprice":	1.25			},
{"title":"	Suriname	","name":"	Suriname		","GDP":		9427	,"pintprice":	0			},
{"title":"	Grenada	","name":"	Grenada		","GDP":		8578	,"pintprice":	0			},
{"title":"	Maldives	","name":"	Maldives		","GDP":		8433	,"pintprice":	0			},
{"title":"	Turkmenistan	","name":"	Turkmenistan		","GDP":		8271	,"pintprice":	0			},
{"title":"	SaintLucia	","name":"	Saint Lucia		","GDP":		8266	,"pintprice":	0			},
{"title":"	Belarus	","name":"	Belarus		","GDP":		8042	,"pintprice":	1.00			},
{"title":"	Azerbaijan	","name":"	Azerbaijan		","GDP":		7936	,"pintprice":	0.83			},
{"title":"	Colombia	","name":"	Colombia		","GDP":		7928	,"pintprice":	0.82			},
{"title":"	Bulgaria	","name":"	Bulgaria		","GDP":		7751	,"pintprice":	1.15			},
{"title":"	China	","name":"	China		","GDP":		7572	,"pintprice":	0.76			},
{"title":"	Dominica	","name":"	Dominica		","GDP":		7410	,"pintprice":	0			},
{"title":"	Montenegro	","name":"	Montenegro		","GDP":		7292	,"pintprice":	1.68			},
{"title":"	Botswana	","name":"	Botswana		","GDP":		7233	,"pintprice":	0			},
{"title":"	Venezuela	","name":"	Venezuela		","GDP":		6772	,"pintprice":	1.00			},
{"title":"	Libya	","name":"	Libya		","GDP":		6671	,"pintprice":	0			},
{"title":"	SaintVincentandtheGrenadines	","name":"	Saint Vincent and the Grenadines		","GDP":		6637	,"pintprice":	0			},
{"title":"	Iraq	","name":"	Iraq		","GDP":		6520	,"pintprice":	1.50			},
{"title":"	SouthAfrica	","name":"	South Africa		","GDP":		6483	,"pintprice":	1.41			},
{"title":"	DominicanRepublic	","name":"	Dominican Republic		","GDP":		6481	,"pintprice":	2.18			},
{"title":"	Peru	","name":"	Peru		","GDP":		6449	,"pintprice":	1.50			},
{"title":"	Ecuador	","name":"	Ecuador		","GDP":		6273	,"pintprice":	1.20			},
{"title":"	Namibia	","name":"	Namibia		","GDP":		6188	,"pintprice":	1.02			},
{"title":"	Serbia	","name":"	Serbia		","GDP":		6123	,"pintprice":	1.37			},
{"title":"	Cuba	","name":"	Cuba		","GDP":		6051	,"pintprice":	1.00			},
{"title":"	Thailand	","name":"	Thailand		","GDP":		5896	,"pintprice":	1.54			},
{"title":"	Macedonia	","name":"	Macedonia		","GDP":		5481	,"pintprice":	1.46			},
{"title":"	Algeria	","name":"	Algeria		","GDP":		5406	,"pintprice":	1.36			},
{"title":"	Jordan	","name":"	Jordan		","GDP":		5375	,"pintprice":	5.65			},
{"title":"	Iran	","name":"	Iran		","GDP":		5353	,"pintprice":	8.00			},
{"title":"	Angola	","name":"	Angola		","GDP":		5304	,"pintprice":	0			},
{"title":"	Jamaica	","name":"	Jamaica		","GDP":		4898	,"pintprice":	0			},
{"title":"	Fiji	","name":"	Fiji		","GDP":		4844	,"pintprice":	0			},
{"title":"	Albania	","name":"	Albania		","GDP":		4787	,"pintprice":	0			},
{"title":"	Belize	","name":"	Belize		","GDP":		4760	,"pintprice":	0			},
{"title":"	BosniaandHerzegovina	","name":"	Bosnia and Herzegovina		","GDP":		4693	,"pintprice":	1.15			},
{"title":"	Georgia	","name":"	Georgia		","GDP":		4434	,"pintprice":	0.93			},
{"title":"	Tunisia	","name":"	Tunisia		","GDP":		4422	,"pintprice":	0			},
{"title":"	Paraguay	","name":"	Paraguay		","GDP":		4379	,"pintprice":	0			},
{"title":"	Samoa	","name":"	Samoa		","GDP":		4308	,"pintprice":	0			},
{"title":"	Tonga	","name":"	Tonga		","GDP":		4280	,"pintprice":	0			},
{"title":"	Mongolia	","name":"	Mongolia		","GDP":		4115	,"pintprice":	0			},
{"title":"	Timor-Leste	","name":"	Timor-Leste		","GDP":		4037	,"pintprice":	0			},
{"title":"	Swaziland	","name":"	Swaziland		","GDP":		3994	,"pintprice":	0			},
{"title":"	ElSalvador	","name":"	El Salvador		","GDP":		3962	,"pintprice":	1.23			},
{"title":"	Armenia	","name":"	Armenia		","GDP":		3901	,"pintprice":	1.05			},
{"title":"	Kosovo	","name":"	Kosovo		","GDP":		3877	,"pintprice":	0			},
{"title":"	Guyana	","name":"	Guyana		","GDP":		3826	,"pintprice":	0			},
{"title":"	Guatemala	","name":"	Guatemala		","GDP":		3701	,"pintprice":	1.31			},
{"title":"	CaboVerde	","name":"	Cabo Verde		","GDP":		3584	,"pintprice":	0			},
{"title":"	SriLanka	","name":"	Sri Lanka		","GDP":		3574	,"pintprice":	1.36			},
{"title":"	MarshallIslands	","name":"	Marshall Islands		","GDP":		3539	,"pintprice":	0			},
{"title":"	Indonesia	","name":"	Indonesia		","GDP":		3524	,"pintprice":	1.83			},
{"title":"	Tuvalu	","name":"	Tuvalu		","GDP":		3479	,"pintprice":	0			},
{"title":"	Morocco	","name":"	Morocco		","GDP":		3316	,"pintprice":	2.57			},
{"title":"	Egypt	","name":"	Egypt		","GDP":		3304	,"pintprice":	1.35			},
{"title":"	Nigeria	","name":"	Nigeria		","GDP":		3300	,"pintprice":	1.25			},
{"title":"	RepublicofCongo	","name":"	Republic of Congo		","GDP":		3171	,"pintprice":	0			},
{"title":"	Vanuatu	","name":"	Vanuatu		","GDP":		3132	,"pintprice":	0			},
{"title":"	Ukraine	","name":"	Ukraine		","GDP":		3051	,"pintprice":	0.53			},
{"title":"	Micronesia	","name":"	Micronesia		","GDP":		2975	,"pintprice":	0			},
{"title":"	Bolivia	","name":"	Bolivia		","GDP":		2943	,"pintprice":	2.11			},
{"title":"	Philippines	","name":"	Philippines		","GDP":		2862	,"pintprice":	0.96			},
{"title":"	Bhutan	","name":"	Bhutan		","GDP":		2588	,"pintprice":	0			},
{"title":"	WesternSahara	","name":"	Western Sahara		","GDP":		2500	,"pintprice":	0			},
{"title":"	Honduras	","name":"	Honduras		","GDP":		2361	,"pintprice":	0			},
{"title":"	Moldova	","name":"	Moldova		","GDP":		2238	,"pintprice":	0.75			},
{"title":"	PapuaNewGuinea	","name":"	Papua New Guinea		","GDP":		2232	,"pintprice":	0			},
{"title":"	Syria	","name":"	Syria		","GDP":		2065	,"pintprice":	1.43			},
{"title":"	Vietnam	","name":"	Vietnam		","GDP":		2051	,"pintprice":	0.67			},
{"title":"	Uzbekistan	","name":"	Uzbekistan		","GDP":		2046	,"pintprice":	1.00			},
{"title":"	SolomonIslands	","name":"	Solomon Islands		","GDP":		2010	,"pintprice":	0			},
{"title":"	Sudan	","name":"	Sudan		","GDP":		2005	,"pintprice":	0			},
{"title":"	Nicaragua	","name":"	Nicaragua		","GDP":		1905	,"pintprice":	0			},
{"title":"	NorthKorea	","name":"	North Korea		","GDP":		1800	,"pintprice":	0			},
{"title":"	Zambia	","name":"	Zambia		","GDP":		1772	,"pintprice":	0			},
{"title":"	SaoTomeandPrincipe	","name":"	Sao Tome and Principe		","GDP":		1707	,"pintprice":	0			},
{"title":"	Laos	","name":"	Laos		","GDP":		1693	,"pintprice":	0			},
{"title":"	Djibouti	","name":"	Djibouti		","GDP":		1692	,"pintprice":	0			},
{"title":"	Kiribati	","name":"	Kiribati		","GDP":		1619	,"pintprice":	0			},
{"title":"	India	","name":"	India		","GDP":		1608	,"pintprice":	1.48			},
{"title":"	Yemen	","name":"	Yemen		","GDP":		1574	,"pintprice":	0			},
{"title":"	Ghana	","name":"	Ghana		","GDP":		1473	,"pintprice":	0			},
{"title":"	CotedIvoire	","name":"	CotedIvoire		","GDP":		1460	,"pintprice":	0			},
{"title":"	Kenya	","name":"	Kenya		","GDP":		1420	,"pintprice":	1.98			},
{"title":"	Cameroon	","name":"	Cameroon		","GDP":		1410	,"pintprice":	0			},
{"title":"	Mauritania	","name":"	Mauritania		","GDP":		1403	,"pintprice":	0			},
{"title":"	Pakistan	","name":"	Pakistan		","GDP":		1326	,"pintprice":	2.59			},
{"title":"	Kyrgyzstan 	","name":"	Kyrgyzstan 		","GDP":		1263	,"pintprice":	0			},
{"title":"	KyrgyzRepublic	","name":"	Kyrgyz Republic		","GDP":		1256	,"pintprice":	0			},
{"title":"	SouthSudan	","name":"	South Sudan		","GDP":		1256	,"pintprice":	0			},
{"title":"	Chad	","name":"	Chad		","GDP":		1236	,"pintprice":	0			},
{"title":"	Myanmar	","name":"	Myanmar		","GDP":		1228	,"pintprice":	0			},
{"title":"	Bangladesh	","name":"	Bangladesh		","GDP":		1162	,"pintprice":	3.18			},
{"title":"	Lesotho	","name":"	Lesotho		","GDP":		1162	,"pintprice":	0			},
{"title":"	Tajikistan	","name":"	Tajikistan		","GDP":		1113	,"pintprice":	0			},
{"title":"	Cambodia	","name":"	Cambodia		","GDP":		1081	,"pintprice":	1.00			},
{"title":"	Senegal	","name":"	Senegal		","GDP":		1079	,"pintprice":	0			},
{"title":"	Zimbabwe	","name":"	Zimbabwe		","GDP":		1043	,"pintprice":	0			},
{"title":"	Tanzania	","name":"	Tanzania		","GDP":		1029	,"pintprice":	0			},
{"title":"	Comoros	","name":"	Comoros		","GDP":		899	,"pintprice":	0			},
{"title":"	Haiti	","name":"	Haiti		","GDP":		833	,"pintprice":	0			},
{"title":"	Benin	","name":"	Benin		","GDP":		820	,"pintprice":	0			},
{"title":"	SierraLeone	","name":"	Sierra Leone		","GDP":		773	,"pintprice":	0			},
{"title":"	Mali	","name":"	Mali		","GDP":		766	,"pintprice":	0			},
{"title":"	BurkinaFaso	","name":"	Burkina Faso		","GDP":		717	,"pintprice":	0			},
{"title":"	Uganda	","name":"	Uganda		","GDP":		713	,"pintprice":	1.11			},
{"title":"	Rwanda	","name":"	Rwanda		","GDP":		712	,"pintprice":	0			},
{"title":"	Nepal	","name":"	Nepal		","GDP":		703	,"pintprice":	1.85			},
{"title":"	Togo	","name":"	Togo		","GDP":		657	,"pintprice":	0			},
{"title":"	Afghanistan	","name":"	Afghanistan		","GDP":		654	,"pintprice":	0			},
{"title":"	Guinea-Bissau	","name":"	Guinea-Bissau		","GDP":		639	,"pintprice":	0			},
{"title":"	Mozambique	","name":"	Mozambique		","GDP":		630	,"pintprice":	0			},
{"title":"	Ethiopia	","name":"	Ethiopia		","GDP":		620	,"pintprice":	0			},
{"title":"	Eritrea	","name":"	Eritrea		","GDP":		590	,"pintprice":	0			},
{"title":"	Guinea	","name":"	Guinea		","GDP":		557	,"pintprice":	0			},
{"title":"	Liberia	","name":"	Liberia		","GDP":		481	,"pintprice":	0			},
{"title":"	Niger	","name":"	Niger		","GDP":		469	,"pintprice":	0			},
{"title":"	DemocraticRepublicofCongo	","name":"	Democratic Republic of Congo		","GDP":		453	,"pintprice":	0			},
{"title":"	Madagascar	","name":"	Madagascar		","GDP":		453	,"pintprice":	0			},
{"title":"	TheGambia	","name":"	The Gambia		","GDP":		427	,"pintprice":	0			},
{"title":"	CentralAfricanRepublic	","name":"	Central African Republic		","GDP":		367	,"pintprice":	0			},
{"title":"	Malawi	","name":"	Malawi		","GDP":		344	,"pintprice":	0			},
{"title":"	Burundi	","name":"	Burundi		","GDP":		336	,"pintprice":	0			},
{"title":"	Somalia	","name":"	Somalia		","GDP":		145	,"pintprice":	0			}


								

	]}						
						
	var max = Math.sqrt(def.countries[0].GDP);
	//var max = def.countries[0].GDP;
	var min = def.countries.sort().reverse()[0].GDP;

		$.each(def.countries, function() {
			
			if ($('.second').find('path[title='+this.title+']'))
			{
				//console.log(this.title + " asd " + this.GDP);
				$('.second').find('path[title='+this.title+']').attr( "data-GDP", this.GDP);
				$('.second').find('path[title='+this.title+']').attr( "name", this.name);
				$('.second').find('path[title='+this.title+']').attr( "pintprice", this.pintprice);
				var ratio = (1/max)*Math.sqrt(this.GDP);
				
				//var ratio = (1/max)*this.GDP;
				$('.second').find('path[title='+this.title+']').css({'opacity':ratio});
			}
			

		});	

	   $('[data-toggle="tooltip"]').tooltip();

	$('.land2').mouseover(function(){
		var id = $(this).attr( "title" );
		var name = $(this).attr( "name" );
		var GDP = $(this).attr( "data-GDP" );
		var pintprice = $(this).attr( "pintprice" );
		
		$(".land[title='"+id+"']").toggleClass('selectedCountry');
		$(this).toggleClass('selectedCountry');
		$('.myTooltip').toggleClass('invisible');
		
		if($("input[name='currency']").is(':checked')) { 
			//alert($("input[name='currency']").val()); 
		}

		var selectedVal = "";
		var selected = $("input[name='currency']:checked");
		if (selected.val() == "euro") {
			selectedVal = "&euro;";
			GDP = GDP*0.89;
			pintprice = pintprice*0.89;
		} else {
			selectedVal = "&dollar;";
		}
		if(pintprice == 0 || undefined){
			pintprice = "Unknown";
		}
		//alert(selectedVal);

		$('.myTooltip').html("<h1 class='countryTitle'>"+name+"</h1><br/>GDP: "+GDP + " " + selectedVal +" per year<br/>Pint Price:"+pintprice+ " " + selectedVal);
		
		/*$.each(def.countries, function() {
			if(this.title = id){
				console.log(this.GDP);
			}


		});*/
		
	});
	$('.land2').mouseleave(function(){
		var id = $(this).attr( "title" );
		$(".land[title='"+id+"']").toggleClass('selectedCountry');
		$(this).toggleClass('selectedCountry');
		$('.myTooltip').toggleClass('invisible');

	});

	
	
						
});						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
