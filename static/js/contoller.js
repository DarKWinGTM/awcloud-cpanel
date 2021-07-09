$(document).ready(function() {
	
	window.onload = function (){
	
		(function thiscode(){
			
			fetch(
				'/',
				{method : 'POST'}
			).then(
				result => result.json()
			).then(result => {
				window['information-data'] = result; /*!	console.clear(); !*/
				for (TRELE of document.querySelectorAll(`tr[id*=".wam"]`)){
					if(
						!Object.keys( window['information-data']['DATA'] ).includes(TRELE.getAttribute('id'))
					){
						TRELE.remove(); 
					}; 
				}; 
				for (WAXID in window['information-data']['DATA']){
					//	console.log( window['information-data']['DATA'][WAXID] ); 
					if(
						!document.querySelector(`tr[id*="${WAXID}"]`)
					){
						document.querySelector('table').querySelector('thead').appendChild(
							Object.assign(document.createElement('tr'), {
								id          : WAXID, 
								innerHTML   : window['information-data']['DOMS'].replace(
									'{ WAXID }', 
									WAXID
								).replace(
									'{ STAKE }', 
									window['information-data']['DATA'][WAXID]['cpu']['stake']
								).replace(
									'{ LAND }', 
									window['information-data']['DATA'][WAXID]['land'].replace(/(^)1099512/gi, '')
								).replace(
									'{ LAST TLM }', 
									window['information-data']['DATA'][WAXID]['last_mine']['mine']
								).replace(
									'{ LAST CPU }', 
									window['information-data']['DATA'][WAXID]['cpu']['last_cpu_usage']
								).replace(
									'{ LAST MINE DELAY }', 
									window['information-data']['DATA'][WAXID]['cooldown']
								).replace(
									'{ LAST MINE STAMP }', 
									window['information-data']['DATA'][WAXID]['last_mine']['time']
								).replace(
									'{ WAX TOTAL }', 
									window['information-data']['DATA'][WAXID]['balance']['WAX']
								).replace(
									'{ TLM TOTAL }', 
									window['information-data']['DATA'][WAXID]['balance']['TLM']
								).replace(
									'{ CPU MAX }', 
									window['information-data']['DATA'][WAXID]['cpu']['max']
								).replace(
									'{ CPU NOW }', 
									0
								).replace(
									/{ CPU PER }/g, 
									(100 - Number(window['information-data']['DATA'][WAXID]['cpu']['per']))
								).replace(
									'-------------------------', 
									window['information-data']['DATA'][WAXID]['text'][ window['information-data']['DATA'][WAXID]['text']['step'] ]
								)
								
							})
						); 
						(function thiscode(w){
							setTimeout(function () {
								w.innerText = `${Number(w.innerText.split('/')[0]) + 1}/s`; thiscode(w); 
							}, 1000); 
						})(window[WAXID].querySelector('[id*="lastminedelay"]')); 
					}else{
						window[WAXID].querySelector('[id*="lastminedelay"]').innerText  = `${ window['information-data']['DATA'][WAXID]['cooldown'] }/s`; 
						window[WAXID].querySelector('[id*="lastminestamp"]').innerText  = `${ window['information-data']['DATA'][WAXID]['last_mine']['time'] }`; 
						window[WAXID].querySelector('[id*="cpu_prg"]').innerText        = `${ (100 - Number(window['information-data']['DATA'][WAXID]['cpu']['per'])) }%`; 
						window[WAXID].querySelector('[id*="cpu_prg"]').style.width 		= `${ (100 - Number(window['information-data']['DATA'][WAXID]['cpu']['per'])) }%`; 
						window[WAXID].querySelector('[id*="cpu_prg"]').setAttribute(
							'aria-valuenow', 
							0
						); 
						window[WAXID].querySelector('[id*="cpu_prg"]').setAttribute(
							'aria-valuemax', 
							`${ window['information-data']['DATA'][WAXID]['cpu']['max'] }`
						); 
						window[WAXID].querySelector('[id*="waxbalance"]').innerText     = `${ window['information-data']['DATA'][WAXID]['balance']['WAX'] } WAX`; 
						window[WAXID].querySelector('[id*="tlmbalance"]').innerText     = `${ window['information-data']['DATA'][WAXID]['balance']['TLM'] } TLM`; 
	
						window[WAXID].querySelector('[id*="land"]').innerText           = window['information-data']['DATA'][WAXID]['land'].replace(/(^)1099512/gi, ''); 
						window[WAXID].querySelector('[id*="lasttlm"]').innerText        = `${ window['information-data']['DATA'][WAXID]['last_mine']['mine'] } TLM`; 
						window[WAXID].querySelector('[id*="lastcpu"]').innerText        = `${ window['information-data']['DATA'][WAXID]['cpu']['last_cpu_usage'] } US`; 
						window[WAXID].querySelector('[id*="state"]').innerHTML          = `${ window['information-data']['DATA'][WAXID]['text'][ window['information-data']['DATA'][WAXID]['text']['step'] ] }`; 
					}; 
				}; try{ delete window.WAXID }catch(e){}; 
				
				if (
					!document.querySelector('iframe[id*="FlowChart"]')
				){
					document.querySelector('div[id*="FlowChart"]').appendChild(
						Object.assign(document.createElement('iframe'), {
							id      : 'FlowChart', 
							style   : "width: 100%;height: 0%;"
						})
					); 
				}; 
				
				if (
					window['information-data']['DATA'] && 
					Object.keys( window['information-data']['DATA'] ).length >= 1 && (
					!document.querySelector('iframe[id*="FlowChart"]') || 
					!document.querySelector('iframe[id*="FlowChart"]').getAttribute('src') || 
					!document.querySelector('iframe[id*="FlowChart"]').getAttribute('src').match(
						Object.keys( window['information-data']['DATA'] ).join('-')
					))
				){
					document.querySelector('iframe[id*="FlowChart"]').setAttribute(
						'url', `https://waxdetective.io/network/transfers?accounts=${ Object.keys( window['information-data']['DATA'] ).join('-') }&time_min=0&time_max=2555555555555`
					); 
				}else if(
					(
						!window['information-data']['DATA'] || 
						Object.keys( window['information-data']['DATA'] ).length == 0
					) && (
						!document.querySelector('iframe[id*="FlowChart"]').getAttribute('src') || 
						!document.querySelector('iframe[id*="FlowChart"]').getAttribute('src').match('waxdetective.io')
					)
				){
					document.querySelector('iframe[id*="FlowChart"]').setAttribute(
						'url', 'https://waxdetective.io/network/'
					); 
				
				}; 
				
				var i = 0; var s = setInterval(function () {
					i+= Math.ceil(Math.random() * 6) + 2;
					if (i <= 100) {
						document.querySelector('div[class*="progress-bar"][id*="time_pg"]').style.width = `${i}%`; 
					} else {
						document.querySelector('div[class*="progress-bar"][id*="time_pg"]').style.width = '0%'; 
						clearInterval(s); thiscode(); 
					}; 
				}, 180); 
				
			}).catch(error => {
				console.error('Error:', error); 
				document.querySelector('div[class*="progress-bar"][id*="time_pg"]').style.width = '0%'; 
				setTimeout(function(){ thiscode() }, 2000); 
			});  
		})();
		
		// AUTO UPDATE PROCESS BAR BY STYLE
		for (p of document.querySelectorAll('.progress-bar')){
			new MutationObserver(function(mutations) {
				mutations.forEach(function(mutationRecord) {
					mutationRecord.target.innerText = mutationRecord.target.style.width; 
					
					$('.progress-bar').each(function( index ) {
						if(
							Number($( this )[0].style.width.replace('%', '')) >= 90
						){
							$( this )[0].className = 'progress-bar bar-error'; return true; 
						}
						if (
							Number($( this )[0].style.width.replace('%', '')) >= 75
						) {
							$( this )[0].className = 'progress-bar bar-warning'; return true; 
						}
						if(
							Number($( this )[0].style.width.replace('%', '')) >= 55
						){
							$( this )[0].className = 'progress-bar bar-free'; return true; 
						}; 
						if(
							Number($( this )[0].style.width.replace('%', '')) <= 54
						){
							$( this )[0].className = 'progress-bar bar-success'; return true; 
						}; return true; 
					}); 
					
				}); 
			}).observe(p, {
				attributes          : true, 
				attributeFilter     : ['style']
			}); 
		}; 
	
		document.querySelector('form[action="#ADD"]').addEventListener('submit', function (e) {
			
			if(
				e.currentTarget.querySelector('input[aria-label*="ADD WAXID"]').value && 
				e.currentTarget.querySelector('input[aria-label*="ADD WAXID"]').value.match('.wam') && 
				e.currentTarget.querySelector('input[aria-label*="ADD TOKEN"]').value && 
				e.currentTarget.querySelector('input[aria-label*="ADD TOKEN"]').value.length == 40 && 
				!$('form[action*="#ADD"]').find('button')[0].disabled
			){
			
				$('form[action*="#ADD"]').find('button')[0].disabled = true; 
				$('form[action*="#ADD"]').find('input[aria-label*="ADD WAXID"]')[0].disabled = true; 
				$('form[action*="#ADD"]').find('input[aria-label*="ADD TOKEN"]')[0].disabled = true; 
				
				var xhr = new XMLHttpRequest();
				xhr.open("POST", `https://awcloud-data-${ window.location.hostname.match(/(awcloud-cpanel)(.*)(repl.co)/gi)[0].replace(/(.*)awcloud-cpanel|repl.co/gi, '').replace(/\./g, '').replace(/patiwatnumbut/, '') }.patiwatnumbut.repl.co/add`); 
				xhr.setRequestHeader("Content-Type", "application/json");
				xhr.onreadystatechange = function () {
				if (xhr.readyState === 4) {
					//	console.log(xhr.status);
					//	console.log(xhr.responseText); 
					
					//	window.location.assign('#'); 
					
					$('form[action*="#ADD"]').find('button').notify("ADD NEW ACCOUNT", "success", { position : "left" }); 
					
					fetch(
						`/run?repli=${ window.location.hostname.match(/(awcloud-cpanel)(.*)(repl.co)/gi)[0].replace(/(.*)awcloud-cpanel|repl.co/gi, '').replace(/\./g, '').replace(/patiwatnumbut/, '') }`,
						{method : 'GET'}
					).then(
						result => result.text()
					).then(result => {
						if(!result.match('okay')){ throw result }else{
							
							
							
							fetch(
								`/chk?waxid=${ document.querySelector('input[aria-label*="ADD WAXID"]').value.trim() }`,
								{method : 'GET'}
							).then(
								result => result.text()
							).then(result => {
								if(!result.match('okay')){ throw result }else{
									$('form[action*="#ADD"]').find('button').notify("RUN NEW ACCOUNT", "success", { position : "left" }); 
									$('form[action*="#ADD"]').find('button')[0].disabled = false; 
									$('form[action*="#ADD"]').find('input[aria-label*="ADD WAXID"]')[0].disabled = false; 
									$('form[action*="#ADD"]').find('input[aria-label*="ADD TOKEN"]')[0].disabled = false; 
									$('form[action*="#ADD"]').find('input[aria-label*="ADD WAXID"]')[0].value = ''; 
									$('form[action*="#ADD"]').find('input[aria-label*="ADD TOKEN"]')[0].value = ''; 
								}; 
							}).catch(error => {
								$('form[action*="#ADD"]').find('button').notify(`ERROR : ${ error }`, "error", { position : "left" }); 
								$('form[action*="#ADD"]').find('button')[0].disabled = false; 
								$('form[action*="#ADD"]').find('input[aria-label*="ADD WAXID"]')[0].disabled = false; 
								$('form[action*="#ADD"]').find('input[aria-label*="ADD TOKEN"]')[0].disabled = false; 
								$('form[action*="#ADD"]').find('input[aria-label*="ADD WAXID"]')[0].value = ''; 
								$('form[action*="#ADD"]').find('input[aria-label*="ADD TOKEN"]')[0].value = ''; 
								
							});  
							
							
							
							//	$('form[action*="#ADD"]').find('button').notify("RUN NEW ACCOUNT", "success", { position : "left" }); 
							//	$('form[action*="#ADD"]').find('button')[0].disabled = false; 
						}; 
					}).catch(error => {
						$('form[action*="#ADD"]').find('button').notify(`ERROR : ${ error }`, "error", { position : "left" }); 
						$('form[action*="#ADD"]').find('button')[0].disabled = false; 
						$('form[action*="#ADD"]').find('input[aria-label*="ADD WAXID"]')[0].disabled = false; 
						$('form[action*="#ADD"]').find('input[aria-label*="ADD TOKEN"]')[0].disabled = false; 
						$('form[action*="#ADD"]').find('input[aria-label*="ADD WAXID"]')[0].value = ''; 
						$('form[action*="#ADD"]').find('input[aria-label*="ADD TOKEN"]')[0].value = ''; 
					});  
					
				}}; 
				xhr.send(JSON.stringify({
					"waxid" : e.currentTarget.querySelector('input[aria-label*="ADD WAXID"]').value.trim(), 
					"token" : e.currentTarget.querySelector('input[aria-label*="ADD TOKEN"]').value.trim()
				}));
			}else{
				$('form[action*="#ADD"]').find('button').notify(`WARNING : INCORRENT INFO`, "warn", { position : "left" }); 
				e.currentTarget.querySelector('input[aria-label*="ADD WAXID"]').disabled = false; 
				e.currentTarget.querySelector('input[aria-label*="ADD TOKEN"]').disabled = false; 
				e.currentTarget.querySelector('input[aria-label*="ADD WAXID"]').value = ''; 
				e.currentTarget.querySelector('input[aria-label*="ADD TOKEN"]').value = ''; 
				$('form[action*="#ADD"]').find('button')[0].disabled = false; 
			};
			
		});
		document.querySelector('form[action="#DEL"]').addEventListener('submit', function (e) {
			
			if(
				e.currentTarget.querySelector('input[aria-label*="DEL WAXID"]').value && 
				e.currentTarget.querySelector('input[aria-label*="DEL WAXID"]').value.match('.wam') && 
				!$('form[action*="#DEL"]').find('button')[0].disabled
			){
			
				$('form[action*="#DEL"]').find('button')[0].disabled = true; 
				$('form[action*="#DEL"]').find('input[aria-label*="DEL WAXID"]')[0].disabled = true;

				
				var xhr = new XMLHttpRequest();
				xhr.open("POST", `https://awcloud-data-${ window.location.hostname.match(/(awcloud-cpanel)(.*)(repl.co)/gi)[0].replace(/(.*)awcloud-cpanel|repl.co/gi, '').replace(/\./g, '').replace(/patiwatnumbut/, '') }.patiwatnumbut.repl.co/del`); 
				xhr.setRequestHeader("Content-Type", "application/json");
				xhr.onreadystatechange = function () {
				if (xhr.readyState === 4) {
					//	console.log(xhr.status);
					//	console.log(xhr.responseText);
					
					//	window.location.assign('#'); 
					
					$('form[action*="#DEL"]').find('button').notify("DEL NEW ACCOUNT", "success", { position : "left" });
					
					fetch(
						`/cut?repli=${ window.location.hostname.match(/(awcloud-cpanel)(.*)(repl.co)/gi)[0].replace(/(.*)awcloud-cpanel|repl.co/gi, '').replace(/\./g, '').replace(/patiwatnumbut/, '') }`,
						{method : 'GET'}
					).then(
						result => result.text()
					).then(result => {
						if(!result.match('okay')){ throw result }else{

							//	(function (e){
							//	})($('form[action*="#DEL"]').find('input[aria-label*="DEL WAXID"]')[0].value.trim()); 
							
							$('form[action*="#DEL"]').find('button').notify("CHK DEL ACCOUNT", "success", { position : "left" }); 
							//	setTimeout(function () {
							//	document.querySelector(`tr[id*="${ $('form[action*="#DEL"]').find('input[aria-label*="DEL WAXID"]')[0].value.trim() }"]`).remove(); 
							//	setTimeout(function () {
							$('form[action*="#DEL"]').find('button')[0].disabled = false;
							$('form[action*="#DEL"]').find('input[aria-label*="DEL WAXID"]')[0].disabled = false;
							$('form[action*="#DEL"]').find('input[aria-label*="DEL WAXID"]')[0].value = ''; 
							//		}, 1000); 
							//	}, 5000); 
						}; 
					}).catch(error => {
						$('form[action*="#DEL"]').find('button').notify(`ERROR : ${ error }`, "error", { position : "left" }); 
						$('form[action*="#DEL"]').find('button')[0].disabled = false; 
						$('form[action*="#DEL"]').find('input[aria-label*="DEL WAXID"]')[0].disabled = false;
						$('form[action*="#DEL"]').find('input[aria-label*="DEL WAXID"]')[0].value = ''; 
					});  
					
				}}; 
				xhr.send(JSON.stringify({
					"waxid" : e.currentTarget.querySelector('input[aria-label*="DEL WAXID"]').value.trim()
				})); 
			}else{
				$('form[action*="#DEL"]').find('button').notify(`WARNING : INCORRENT INFO`, "warn", { position : "left" }); 
				e.currentTarget.querySelector('input[aria-label*="DEL WAXID"]').disabled = false;
				e.currentTarget.querySelector('input[aria-label*="DEL WAXID"]').value = ''; 
				$('form[action*="#DEL"]').find('button')[0].disabled = false; 
			}; 
		});
	
		document.querySelector('button[class="btn btn-primary run"]').onclick = function (e) {
	
			if (
				!$('button[class="btn btn-primary run"]').disabled
			){
				
				$('button[class="btn btn-primary run"]')[0].disabled = true; 
				
				fetch(
					`/run?repli=${ window.location.hostname.match(/(awcloud-cpanel)(.*)(repl.co)/gi)[0].replace(/(.*)awcloud-cpanel|repl.co/gi, '').replace(/\./g, '').replace(/patiwatnumbut/, '') }`,
					{method : 'GET'}
				).then(
					result => result.text()
				).then(result => {
					if(result != 'okay'){ throw result }else{
						$('button[class="btn btn-primary run"]').notify("RUN", "success", { position : "left" });  
						$('button[class="btn btn-primary run"]')[0].disabled = false; 
					}; 
				}).catch(error => {
					$('button[class="btn btn-primary run"]').notify(`NOT`, "error", { position : "left" });  
					$('button[class="btn btn-primary run"]')[0].disabled = false; 
				}); 
			}; 
			
		}; 
		document.querySelector('button[class="btn btn-primary off"]').onclick = function (e) {
			
			if (
				!$('button[class="btn btn-primary off"]').disabled
			){
				
				$('button[class="btn btn-primary off"]').disabled = true; 
				
				fetch(
					`/off`,
					{method : 'GET'}
				).then(
					result => result.text()
				).then(result => {
					if(result != 'okay'){ throw result }else{
						$('button[class="btn btn-primary off"]').notify("OFF", "success", { position : "left" }); 
						$('button[class="btn btn-primary off"]')[0].disabled = false; 
					}; 
				}).catch(error => {
					$('button[class="btn btn-primary off"]').notify(`NOT`, "error", { position : "left" });  
					$('button[class="btn btn-primary off"]')[0].disabled = false; 
				}); 
			};
			
		}; 
		
	}; 
	
}); 
