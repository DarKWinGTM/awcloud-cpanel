// LIST ALL NFT IN WAX ID
//		fetch("https://wax.api.aa.atomichub.io/atomicmarket/v1/assets", {
//		  "headers": {
//		    "accept": "*/*",
//		    "accept-language": "en-US,en;q=0.9",
//		    "cache-control": "no-cache",
//		    "content-type": "application/json",
//		    "pragma": "no-cache",
//		    "sec-ch-ua": "\"Chromium\";v=\"96\", \"Opera\";v=\"82\", \";Not A Brand\";v=\"99\"",
//		    "sec-ch-ua-mobile": "?0",
//		    "sec-ch-ua-platform": "\"Linux\"",
//		    "sec-fetch-dest": "empty",
//		    "sec-fetch-mode": "cors",
//		    "sec-fetch-site": "same-site"
//		  },
//		  "referrer": "https://wax.atomichub.io/",
//		  "referrerPolicy": "strict-origin-when-cross-origin",
//		  "body": "{\"limit\":\"100\",\"order\":\"desc\",\"owner\":\"gj1xc.wam\",\"sort\":\"transferred\",\"page\":\"1\"}",
//		  "method": "POST",
//		  "mode": "cors",
//		  "credentials": "omit"
//		});

//		        	<form action="#KEY" onsubmit="return false" class="row row-cols-auto needs-validation" style="margin-block-end: 0.2em;" validate disabled>
//		        		<div class="input-group">
//		        			<div class="input-group-text" id="basic-addon WAX" style="width: 72px;">
//	                            <div class="form-check-inline form-switch" style="margin-right: 0rem; ">
//	                                <label class="form-check-label"><input type="checkbox" class="form-check-input masterKey-switch" value="0" ><span style="padding-left: 5;"></span></label>
//	                            </div>
//	                        </div>
//		        			<div class="input-group-text" id="basic-addon WAX" style="width: 202px;"><a href="#WHAT_IS_MASTER_KEY">WHAT IS MASTER KEY ? (Active)</a></div>
//		        			<input type="text" class="form-control" placeholder="PRV_K1_"   aria-label="KEY PRV ACTIVE" required>
//		        			<input type="text" class="form-control" placeholder="KEY NAME"  aria-label="KEY TAG ACTIVE" style="max-width: 256px;"required disabled>
//		        			<button type="submit" class="btn btn-primary key-add" style="width: 60px; " disabled>ADD</button>
//		        			<button type="submit" class="btn btn-primary key-del" style="width: 60px; ">DEL</button>
//		        		</div>
//		        	</form>

$(document).ready(function() {
    
    window.onload = function (){
        
        window['waxserver'] = {}; window['waxserver']['endpoint'] = [
			//	{
			//		'headers' : {
			//			'x-requested-with' 		: 'XMLHttpRequest', 
			//			'x-cors-grida-api-key' 	: '61dbebf9-36c6-45c6-909e-323209a8116d'
			//		}, 'url' : 'cors.bridged.cc/https://api.waxsweden.org'
			//	}, 
			//	{
			//		'headers' : {
			//			'x-requested-with' 		: 'XMLHttpRequest', 
			//			'x-cors-grida-api-key' 	: '61dbebf9-36c6-45c6-909e-323209a8116d'
			//		}, 'url' : 'cors.bridged.cc/https://api-wax.eosauthority.com'
			//	}, 
			//	{
			//		'headers' : {}, 
			//		'url' : 'wax.eosrio.io'
			//	}, 
			//	{
			//		'headers' : {}, 
			//		'url' : 'wax.blokcrafters.io'
			//	}, 
			//	{
			//		'headers' : {}, 
			//		'url' : 'waxapi.ledgerwise.io'
			//	}, 
			{
				'headers' : {}, 
				'url' : 'api.wax.greeneosio.com'
			}, {
				'headers' : {}, 
				'url' : 'wax.hivebp.io'
			}, {
				'headers' : {}, 
				'url' : 'wax.eosphere.io'
			}, {
				'headers' : {}, 
				'url' : 'hyperion.sentnl.io'
			}, {
				'headers' : {}, 
				'url' : 'wax.eosdublin.io'
			}
			//	{
			//		'headers' : {}, 
			//		'url' : 'wax.eosphere.io'
			//	}, 
			//	, {
			//		'headers' : {}, 
			//		'url' : 'api-wax.eosauthority.com'
			//	}, 
			//	, {
			//		'headers' : {}, 
			//		'url' : 'api.waxsweden.org'
			//	}
            //			//	'wax.cryptolions.io', 
            //			'cors.bridged.cc/https://wax.eosrio.io', 
            //			'wax.blokcrafters.io', 
            //			'waxapi.ledgerwise.io', 
            //			//	'cors.bridged.cc/https://apiwax.3dkrender.com', 
            //			//	'wax.cryptolions.io', 
			//			'api-wax.eosauthority.com', 
            //			'cors.bridged.cc/https://api-wax.eosauthority.com', 
            //			'api.wax.greeneosio.com', 
            //			'wax.eosphere.io', 
            //			'cors.bridged.cc/https://wax.eosrio.io', 
            //			'wax.blokcrafters.io', 
            //			'waxapi.ledgerwise.io', 
            //			//	'cors.bridged.cc/https://apiwax.3dkrender.com', 
            //			//	'wax.cryptolions.io', 
			//			'api-wax.eosauthority.com', 
            //			'cors.bridged.cc/https://api-wax.eosauthority.com', 
            //			'api.wax.greeneosio.com', 
            //			'wax.eosphere.io', 
            //			'cors.bridged.cc/https://wax.eosrio.io', 
            //			'wax.blokcrafters.io', 
            //			'waxapi.ledgerwise.io', 
            //			//	'cors.bridged.cc/https://apiwax.3dkrender.com', 
            //			//	'wax.cryptolions.io', 
			//			'api-wax.eosauthority.com', 
            //			'cors.bridged.cc/https://api-wax.eosauthority.com', 
            //			'api.wax.greeneosio.com', 
            //			'wax.eosphere.io', 
            //			'cors.bridged.cc/https://wax.eosrio.io', 
            //			'wax.blokcrafters.io', 
            //			'waxapi.ledgerwise.io', 
            //			//	'cors.bridged.cc/https://apiwax.3dkrender.com', 
            //			'cors.bridged.cc/https://api.waxsweden.org', 
            //			'cors.bridged.cc/https://api.waxsweden.org'
            //			//	'cors.bridged.cc/https://api.waxsweden.org', 
            //			//	'cors.bridged.cc/https://api.waxsweden.org'
            //			//  , 
            //			//  'cors.bridged.cc/https://apiminingv2.idigger.online', 
            //			//  'cors.bridged.cc/https://apiminingv2.idigger.online', 
            //			//  'cors.bridged.cc/https://apiminingv2.idigger.online', 
            //			//  'cors.bridged.cc/https://apiminingv2.idigger.online', 
            //			//  'cors.bridged.cc/https://apiminingv2.idigger.online', 
            //			//  'cors.bridged.cc/https://apiminingv2.idigger.online', 
            //			//  'cors.bridged.cc/https://apiminingv2.idigger.online', 
            //			//  'cors.bridged.cc/https://apiminingv2.idigger.online', 
            //			//  'cors.bridged.cc/https://apiminingv2.idigger.online', 
            //			//  'cors.bridged.cc/https://apiminingv2.idigger.online', 
            //			//  'cors.bridged.cc/https://apiminingv2.idigger.online', 
            //			//  'cors.bridged.cc/https://apiminingv2.idigger.online'
        ]; 
        
        document.querySelector('div.modal.fade#poolMineable').addEventListener('shown.bs.modal', function () {
            document.querySelector('div.modal.fade#poolMineable').querySelector('iframe').setAttribute(
                'src', `https://wax.stats.eosusa.news/d-solo/g-n07fbGz/alienworlds-planet-info-big?orgId=1&refresh=1m&from=now-5m&to=now&fullscreen&panelId=9`
                //  `https://wax.stats.eosusa.news/d/Mfo5qfbMz/alienworlds-planet-info-big?orgId=1&refresh=1m&from=now-5m&to=now&fullscreen&panelId=9`
                // https://wax.stats.eosusa.news/d-solo/g-n07fbGz/alienworlds-planet-info?orgId=1&refresh=60s&from=1628522900956&to=1628526500956&var-planet=All&theme=light&panelId=9
            ); 
        }); 
        document.querySelector('div.modal.fade#poolMineable').addEventListener('hide.bs.modal', function () {
            document.querySelector('div.modal.fade#poolMineable').querySelector('iframe').setAttribute(
                'src', ``
            ); 
        }); 
        
        (function thiscode(){
            fetch(
                '/',
                {method : 'POST'}
            ).then(
                result => result.json()
            ).then(result => {
                
                window['information-data'] = result; /*!    console.clear(); !*/
                
                try{ clearInterval(window['fetchProcessSec']) }catch(e){}; 
                var i = 0; window['fetchProcessSec'] = setInterval(function () {
                    i+= Math.ceil(Math.random() * 12) + 1;
                    if (i < 100) {
                        document.querySelector('div[class*="progress-bar"][id*="time_pg"]').style.width = `${i}%`; 
                    }else{
                        document.querySelector('div[class*="progress-bar"][id*="time_pg"]').style.width = '100%'; 
                    }; 
                    if (i >= 180) {
                        document.querySelector('div[class*="progress-bar"][id*="time_pg"]').style.width = '0%'; 
                        clearInterval(window['fetchProcessSec']); thiscode(); 
                    }; 
                }, 200); 
                
                for (TRELE of document.querySelectorAll(`tr[id*=".wam"]`)){
                    if(
                        !Object.keys( window['information-data']['DATA'] ).includes( TRELE.getAttribute('id') ) && (
                            $('button[class="btn btn-primary pau"]')[0].innerText == 'PAUSE'
                        )
                    ){
						
						try{ window[`${ TRELE.getAttribute('id') }-aw-monitor`].parentElement.remove() }catch(e){}; 
						try{ window[`${ TRELE.getAttribute('id') }-fw-monitor`].parentElement.remove() }catch(e){}; 
						try{ window[`${ TRELE.getAttribute('id') }-fw-panel-monitor`].parentElement.remove() }catch(e){}; 
						try{ window[`${ TRELE.getAttribute('id') }-ss-monitor`].parentElement.remove() }catch(e){}; 
						try{ window[`${ TRELE.getAttribute('id') }-ss-panel-monitor`].parentElement.remove() }catch(e){}; 
						try{ window[`${ TRELE.getAttribute('id') }-kq-monitor`].parentElement.remove() }catch(e){};  
						try{ window[`${ TRELE.getAttribute('id') }-kq-panel-monitor`].parentElement.remove() }catch(e){};  
						try{ window[`${ TRELE.getAttribute('id') }-cc-monitor`].parentElement.remove() }catch(e){};  
						try{ window[`${ TRELE.getAttribute('id') }-cc-panel-monitor`].parentElement.remove() }catch(e){};  
						try{ window[`${ TRELE.getAttribute('id') }-gx-monitor`].parentElement.remove() }catch(e){};  
						try{ window[`${ TRELE.getAttribute('id') }-gx-panel-monitor`].parentElement.remove() }catch(e){};  
						try{ window[`${ TRELE.getAttribute('id') }-bl-monitor`].parentElement.remove() }catch(e){};  
						try{ window[`${ TRELE.getAttribute('id') }-bl-panel-monitor`].parentElement.remove() }catch(e){};  
						//	try{ window[`${ TRELE.getAttribute('id') }-ft-monitor`].parentElement.remove() }catch(e){};  
						//	try{ window[`${ TRELE.getAttribute('id') }-ft-panel-monitor`].parentElement.remove() }catch(e){};  
                        try{ TRELE.remove() }catch(e){}; 
						
                    }; 
                }; 
                
                for (WAXID in window['information-data']['DATA']){
                    if(
                        !document.querySelector(`tr[id*="${WAXID}"]`)
                    ){
                        try{
                            document.querySelector('table').querySelector('thead').appendChild(
                                Object.assign(document.createElement('tr'), {
                                    id          : WAXID, 
                                    innerHTML   : window['information-data']['DOMS'].replace(
                                        '{ WAXID }', 
                                        `${ WAXID.replace('.wam', '.').slice(0, 2) }` + (function(x){ if (x.length % 2){ return '-' }else{ return '--' } })(WAXID.replace('.wam', '.')) + `${ WAXID.replace('.wam', '.').slice(-2) }`
                                    ).replace(
                                        '{ STAKE }', 
                                        window['information-data']['DATA'][WAXID]['cpu']['stake']['alls'].toString().split('.')[0]
                                    ).replace(
                                        '{ LAND }', 
                                        `${ window['information-data']['DATA'][WAXID]['land']['id'].replace(/(^)1099512/gi, '') } : ${ window['information-data']['DATA'][WAXID]['land']['commission'].toFixed(2) }`
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
                                        //  window['information-data']['DATA'][WAXID]['last_mine']['time'].replace('T', ' ')
                                        (new Date(
                                            `${ window['information-data']['DATA'][WAXID]['last_mine']['time'].replace('T', ' ') }+0000`
                                        ).toLocaleString(
                                            "en-US", {
                                                timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone, 
                                                year    : 'numeric', 
                                                month   : '2-digit', 
                                                day     : '2-digit', 
                                                hour    : '2-digit', 
                                                hour12  : false, 
                                                minute  : '2-digit', 
                                                second  : '2-digit'
                                            }
                                        ))
                                    ).replace(
                                        '{ WAX TOTAL }', 
                                        Number( window['information-data']['DATA'][WAXID]['balance']['WAX'] ).toFixed(4)
                                    ).replace(
                                        '{ TLM TOTAL }', 
                                        Number( window['information-data']['DATA'][WAXID]['balance']['TLM'] ).toFixed(4)
                                    ).replace(
                                        /{ CPU MAX }/g, 
                                        window['information-data']['DATA'][WAXID]['cpu']['max']
                                    ).replace(
                                        '{ CPU NOW }', 
                                        0
                                    ).replace(
                                        '{ MAXIMUM COOLDOWN }', 
                                        parseInt( window['information-data']['DATA'][WAXID]['maxdelay'] )
                                    ).replace(
                                        /{ CPU PER }/g, 
                                        `${ (100 - Number(window['information-data']['DATA'][WAXID]['cpu']['per'])) }`
                                    )
									//	.replace(
                                    //	    '-------------------------', 
                                    //	    window['information-data']['DATA'][WAXID]['text'][ window['information-data']['DATA'][WAXID]['text']['step'] ]['text']
                                    //	)
                                })
                            ); 
                            document.querySelector('table').querySelector('thead').appendChild(
                                Object.assign(document.createElement('tr'), {
                                    innerHTML   : `
<th
    colspan     = "9"
    style       = "display: none;"
	id 			= "${ WAXID }-aw-monitor"
>
    <iframe
    url         = "https://mining.idigger.online/affiliate?waxid=${ WAXID }"
    style       = "width : 100%; height : 580px;"
    scrolling   = "no"
    ></iframe>
</th>`
                                })
                            ); 
                            document.querySelector('table').querySelector('thead').appendChild(
                                Object.assign(document.createElement('tr'), {
                                    innerHTML   : `
<th
    colspan     = "7"
    style       = "display: none; "
	id 			= "${ WAXID }-fw-monitor"
>
    <iframe
    url         = "https://farmersworld.idigger.online/affiliate?waxid=${ WAXID }"
    style       = "width : 100%; height : 1408px;"
    scrolling   = "no"
    ></iframe>
</th>
<th colspan="2" style="display: none; vertical-align: top; max-width: 486px;" id="${ WAXID }-fw-panel-monitor">
	<div class="input-group fw-deposit-fwf">
		<div class="input-group-text" style="width: inherit; justify-content: center; ">AUTO DEPOSIT TO GAME WHEN HAVE NOT ENOUGH SUPPLY</div>
		<div class="input-group-text">
			<div class="form-check-inline form-switch" style="margin-right: 0rem; ">
				<label class="form-check-label">
					<input type="checkbox" class="form-check-input fw-deposit-fwf-switch" value="0">
				</label>
			</div>
		</div>
		<div class="input-group-text fw-deposit-fwf-text" style="width: 248px;">DEPOSIT FWF 0000</div>
		<input type="range" class="form-control fw-deposit-fwf-input" placeholder="50" value="50" step="5" min="0" max="3100" >
	</div>
	<div class="input-group fw-deposit-fwg">
		<div class="input-group-text">
			<div class="form-check-inline form-switch" style="margin-right: 0rem; ">
				<label class="form-check-label">
					<input type="checkbox" class="form-check-input fw-deposit-fwg-switch" value="0">
				</label>
			</div>
		</div>
		<div class="input-group-text fw-deposit-fwg-text" style="width: 248px;">DEPOSIT FWG 0000</div>
		<input type="range" class="form-control fw-deposit-fwg-input" placeholder="50" value="50" step="5" min="0" max="3100" >
	</div>
	<div class="input-group fw-swap-wax-fwf">
		<div class="input-group-text" style="width: inherit; justify-content: center; ">AUTO SWAP WHEN HAVE NOT ENOUGH SUPPLY</div>
		<div class="input-group-text">
			<div class="form-check-inline form-switch" style="margin-right: 0rem; ">
				<label class="form-check-label">
					<input type="checkbox" class="form-check-input fw-swap-wax-fwf-switch" value="0">
				</label>
			</div>
		</div>
		<div class="input-group-text" style="width: 248px;">WAX TO FWF 0000</div>
		<input type="range" class="form-control fw-swap-wax-fwf-input" placeholder="20" value="20" step="5" min="0" max="600" >
	</div>
	<div class="input-group fw-swap-wax-fwg">
		<div class="input-group-text">
			<div class="form-check-inline form-switch" style="margin-right: 0rem; ">
				<label class="form-check-label">
					<input type="checkbox" class="form-check-input fw-swap-wax-fwg-switch" value="0">
				</label>
			</div>
		</div>
		<div class="input-group-text" style="width: 248px;">WAX TO FWG 0000</div>
		<input type="range" class="form-control fw-swap-wax-fwg-input" placeholder="20" value="20" step="5" min="0" max="600" >
	</div>
	<div class="input-group fw-withdraw-deposit">
		<div class="input-group-text" style="width: inherit; justify-content: center; ">W 0.0 F 0.00 G 0.0 : WITH [0%] DEPO : W 0.0 F 0.0 G 0.0</div>
		<button type="submit" class="btn btn-primary fw-withdraw" style="width: 20%; "">WITHDRAW</button>
		<input type="number" class="form-control" placeholder="FWW" value="" step="5" min="5" max="100" aria-label="">
		<input type="number" class="form-control" placeholder="FWF" value="" step="5" min="5" max="100" aria-label="">
		<input type="number" class="form-control" placeholder="FWG" value="" step="5" min="5" max="100" aria-label="">
		<button type="submit" class="btn btn-primary fw-deposit" style="width: 20%; "">DEPOSIT</button>
	</div>
	<div class="input-group fw-swap-fww-wax">
		<div class="input-group-text" style="width: 248px;">MANUAL SELL FWW TO WAX</div>
		<input type="number" class="form-control" placeholder="0.0000" value="0.0000" step="5" min="0" max="100" >
		<input type="number" class="form-control" placeholder="0.0000" value="0.0000" step="5" min="0" max="100" disabled>
		<button type="submit" class="btn btn-primary fw-swap-fww-wax-set" style="width: 60px; ">SET</button>
	</div>
	<div class="input-group fw-swap-fwg-wax">
		<div class="input-group-text" style="width: 248px;">MANUAL SELL FWG TO WAX</div>
		<input type="number" class="form-control" placeholder="0.0000" value="0.0000" step="5" min="0" max="100" >
		<input type="number" class="form-control" placeholder="0.0000" value="0.0000" step="5" min="0" max="100" disabled>
		<button type="submit" class="btn btn-primary fw-swap-fww-wax-set" style="width: 60px; ">SET</button>
	</div>
	<div class="input-group fw-swap-fwf-wax">
		<div class="input-group-text" style="width: 248px;">MANUAL SELL FWF TO WAX</div>
		<input type="number" class="form-control" placeholder="0.0000" value="0.0000" step="5" min="0" max="100" >
		<input type="number" class="form-control" placeholder="0.0000" value="0.0000" step="5" min="0" max="100" disabled>
		<button type="submit" class="btn btn-primary fw-swap-fww-wax-set" style="width: 60px; ">SET</button>
	</div>
	<div class="input-group fw-auto-plant">
		<div class="input-group-text" style="width: inherit; justify-content: center; ">
		<div class="form-check-inline form-switch" style="align-self: flex-start; margin-right: auto; ">
			<label class="form-check-label">
				<input
					type 			= "checkbox"
					class 			= "form-check-input fw-auto-plant-switch"
					value 			= "0"
				>
				<!--span style="padding-left: 5;"></span-->
			</label>
		</div>AUTO PLANTS CORN OR BARLEY</div>
		<div class="input-group-text" style="width: 96px;">CORN</div>
		<input type="number" class="form-control fw-auto-plant-corn-input" placeholder="CORN" value="0" step="1" min="0" max="8" aria-label="">
		<div class="input-group-text" style="width: 96px;">BARLEY</div>
		<input type="number" class="form-control fw-auto-plant-barley-input" placeholder="BARLEY" value="0" step="1" min="0" max="8" aria-label="">
		<button type="submit" class="btn btn-primary fw-auto-plant-set" style="width: 60px; ">SET</button>
	</div>
	<div class="input-group fw-auto-buy-seed-plant">
		<div class="input-group-text" style="width: inherit; justify-content: center; ">
		<div class="form-check-inline form-switch" style="align-self: flex-start; margin-right: auto; ">
			<label class="form-check-label">
				<input
					type 			= "checkbox"
					class 			= "form-check-input fw-auto-buy-seed-switch"
					value 			= "0"
				>
				<!--span style="padding-left: 5;"></span-->
			</label>
		</div>AUTO BUY CORN OR BARLEY SEED</div>
	</div>
	<!--
	<div class="input-group fw-buy-seed">
		<div class="input-group-text" style="width: inherit; ">BUY SEED</div>
		<div class="input-group-text" style="width: 96px;">CORN</div>
		<input type="number" class="form-control" placeholder="CORN" value="0" step="1" min="0" max="8" aria-label="">
		<div class="input-group-text" style="width: 96px;">BARLEY</div>
		<input type="number" class="form-control" placeholder="BARLEY" value="0" step="1" min="0" max="8" aria-label="">
		<button type="submit" class="btn btn-primary fw-buy-seed-buy" style="width: 60px; ">BUY</button>
	</div>
	-->
	<div class="input-group fw-breed">
		<div class="input-group-text" style="width: inherit; ">BREED</div>
		<div class="input-group-text" style="width: 96px;">MALE</div>
		<select class="form-select" id="fw-breed-male"><option value=""></option></select>
		<div class="input-group-text" style="width: 96px;">FEMALE</div>
		<select class="form-select" id="fw-breed-female"><option value=""></option></select>
		<button type="submit" class="btn btn-primary fw-breed-get" style="width: 60px; ">GET</button>
	</div>
	<div class="input-group fw-craft">
		<div class="input-group-text" style="width: inherit; ">CRAFT</div>
		<div class="input-group-text" style="width: 96px;">TOOL</div>
		<select class="form-select" id="fw-craft-tools"><option value=""></option></select>
		<div class="input-group-text" style="width: 96px;">PLOT</div>
		<select class="form-select" id="fw-craft-plot"><option value=""></option></select>
		<button type="submit" class="btn btn-primary fw-craft-get" style="width: 60px; ">GET</button>
	</div>
	<div class="input-group fw-withdraw-fww">
		<div class="input-group-text" style="width: inherit; justify-content: center; ">AUTO WITHDRAW WHEN 5%, KEEP MINIMIUM SUPPLY IN GAME</div>
		<div class="input-group-text">
			<div class="form-check-inline form-switch" style="margin-right: 0rem; ">
				<label class="form-check-label">
					<input type="checkbox" class="form-check-input fw-withdraw-fww-switch" value="0">
					<!--span style="padding-left: 5;"></span-->
				</label>
			</div>
		</div>
		<div class="input-group-text fw-withdraw-fww-text" style="width: 248px;">WITHDRAW FWW 0000</div>
		<input type="range" class="form-control fw-withdraw-fww-input" placeholder="40" value="50" step="5" min="0" max="3100" >
		<!--div class="input-group-text" id="basic-addon WAX" style="width: 38px;">%</div-->
	</div>
	<div class="input-group fw-withdraw-fwf">
		<div class="input-group-text">
			<div class="form-check-inline form-switch" style="margin-right: 0rem; ">
				<label class="form-check-label">
					<input type="checkbox" class="form-check-input fw-withdraw-fwf-switch" value="0">
					<!--span style="padding-left: 5;"></span-->
				</label>
			</div>
		</div>
		<div class="input-group-text fw-withdraw-fwf-text" style="width: 248px;">WITHDRAW FWF 0000</div>
		<input type="range" class="form-control fw-withdraw-fwf-input" placeholder="40" value="50" step="5" min="0" max="3100" >
		<!--div class="input-group-text" id="basic-addon WAX" style="width: 38px;">%</div-->
	</div>
	<div class="input-group fw-withdraw-fwg">
		<div class="input-group-text">
			<div class="form-check-inline form-switch" style="margin-right: 0rem; ">
				<label class="form-check-label">
					<input type="checkbox" class="form-check-input fw-withdraw-fwg-switch" value="0">
					<!--span style="padding-left: 5;"></span-->
				</label>
			</div>
		</div>
		<div class="input-group-text fw-withdraw-fwg-text" style="width: 248px;">WITHDRAW FWG 0000</div>
		<input type="range" class="form-control fw-withdraw-fwg-input" placeholder="40" value="50" step="5" min="0" max="3100" >
		<!--div class="input-group-text" id="basic-addon WAX" style="width: 38px;">%</div-->
	</div>
	<div class="input-group fw-feature">
		<div class="input-group-text" style="width: inherit; justify-content: center; ">FEATURE</div>
		<div class="input-group-text" style="width: inherit; justify-content: center; ">
			<div class="form-check-inline form-switch" style="margin-right: 2rem; ">
				<label class="form-check-label">
					<input type="checkbox" class="form-check-input fw-feature-mbr-mine-switch" value="0">
					<span style="padding-left: 5;">MBR MINE</span>
				</label>
			</div>
			<div class="form-check-inline form-switch" style="margin-right: 2rem; ">
				<label class="form-check-label">
					<input type="checkbox" class="form-check-input fw-feature-eco-mine-switch" value="0">
					<span style="padding-left: 5;">ECO MINE</span>
				</label>
			</div>
			<div class="form-check-inline form-switch" style="margin-right: 0.5rem; ">
				<label class="form-check-label">
					<input type="checkbox" class="form-check-input fw-feature-fee-mine-switch" value="0">
					<span style="padding-left: 5;">FEE MINE</span>
				</label>
			</div>
		</div>
	</div>
	<div class="input-group fw-auto-transfer-supply">
		<div class="input-group-text" style="width: inherit; justify-content: center; ">AUTO TRANSFER SUPPLY WHEN AMOUNG IS OVER</div>
		
		<div class="input-group fw-auto-transfer-supply-corn">
			<div class="input-group-text">
				<div class="form-check-inline form-switch" style="margin-right: 0rem; ">
					<label class="form-check-label">
						<input type="checkbox" class="form-check-input fw-auto-transfer-supply-corn-switch" value="0">
						<!--span style="padding-left: 5;"></span-->
					</label>
				</div>
			</div>
			<div class="input-group-text fw-auto-transfer-supply-corn-text" style="width: 248px;">Corn 0000</div>
			<input type="range" class="form-control fw-auto-transfer-supply-corn-input" placeholder="40" value="10" step="1" min="1" max="99">
			<!--div class="input-group-text" id="basic-addon WAX" style="width: 38px;">%</div-->
			<div class="input-group-text" style="width: inherit; justify-content: center; ">
				<div class="input-group-text" id="basic-addon WAX">TO ADDRESS</div>
				<input type="text" class="form-control fw-auto-transfer-supply-corn-id-input" placeholder="xxxxx.wam" aria-label="AUTO TRANSFER SUPPLY TO ADDRESS" >
			</div>
		</div>
		<div class="input-group fw-auto-transfer-supply-barley">
			<div class="input-group-text">
				<div class="form-check-inline form-switch" style="margin-right: 0rem; ">
					<label class="form-check-label">
						<input type="checkbox" class="form-check-input fw-auto-transfer-supply-barley-switch" value="0">
						<!--span style="padding-left: 5;"></span-->
					</label>
				</div>
			</div>
			<div class="input-group-text fw-auto-transfer-supply-barley-text" style="width: 248px;">Barley 0000</div>
			<input type="range" class="form-control fw-auto-transfer-supply-barley-input" placeholder="40" value="10" step="1" min="1" max="99">
			<!--div class="input-group-text" id="basic-addon WAX" style="width: 38px;">%</div-->
			<div class="input-group-text" style="width: inherit; justify-content: center; ">
				<div class="input-group-text" id="basic-addon WAX">TO ADDRESS</div>
				<input type="text" class="form-control fw-auto-transfer-supply-barley-id-input" placeholder="xxxxx.wam" aria-label="AUTO TRANSFER SUPPLY TO ADDRESS" >
			</div>
		</div>
		<div class="input-group fw-auto-transfer-supply-milk">
			<div class="input-group-text">
				<div class="form-check-inline form-switch" style="margin-right: 0rem; ">
					<label class="form-check-label">
						<input type="checkbox" class="form-check-input fw-auto-transfer-supply-milk-switch" value="0">
						<!--span style="padding-left: 5;"></span-->
					</label>
				</div>
			</div>
			<div class="input-group-text fw-auto-transfer-supply-milk-text" style="width: 248px;">Milk 0000</div>
			<input type="range" class="form-control fw-auto-transfer-supply-milk-input" placeholder="40" value="10" step="1" min="1" max="99">
			<!--div class="input-group-text" id="basic-addon WAX" style="width: 38px;">%</div-->
			<div class="input-group-text" style="width: inherit; justify-content: center; ">
				<div class="input-group-text" id="basic-addon WAX">TO ADDRESS</div>
				<input type="text" class="form-control fw-auto-transfer-supply-milk-id-input" placeholder="xxxxx.wam" aria-label="AUTO TRANSFER SUPPLY TO ADDRESS" >
			</div>
		</div>
		<div class="input-group fw-auto-transfer-supply-chicken-egg">
			<div class="input-group-text">
				<div class="form-check-inline form-switch" style="margin-right: 0rem; ">
					<label class="form-check-label">
						<input type="checkbox" class="form-check-input fw-auto-transfer-supply-chicken-egg-switch" value="0">
						<!--span style="padding-left: 5;"></span-->
					</label>
				</div>
			</div>
			<div class="input-group-text fw-auto-transfer-supply-chicken-egg-text" style="width: 248px;">Chicken Egg 0000</div>
			<input type="range" class="form-control fw-auto-transfer-supply-chicken-egg-input" placeholder="40" value="10" step="1" min="1" max="99">
			<!--div class="input-group-text" id="basic-addon WAX" style="width: 38px;">%</div-->
			<div class="input-group-text" style="width: inherit; justify-content: center; ">
				<div class="input-group-text" id="basic-addon WAX">TO ADDRESS</div>
				<input type="text" class="form-control fw-auto-transfer-supply-chicken-egg-id-input" placeholder="xxxxx.wam" aria-label="AUTO TRANSFER SUPPLY TO ADDRESS" >
			</div>
		</div>
		<div class="input-group fw-auto-transfer-supply-farmer-coin">
			<div class="input-group-text">
				<div class="form-check-inline form-switch" style="margin-right: 0rem; ">
					<label class="form-check-label">
						<input type="checkbox" class="form-check-input fw-auto-transfer-supply-farmer-coin-switch" value="0">
						<!--span style="padding-left: 5;"></span-->
					</label>
				</div>
			</div>
			<div class="input-group-text fw-auto-transfer-supply-farmer-coin-text" style="width: 248px;">Farmer Coin 0000</div>
			<input type="range" class="form-control fw-auto-transfer-supply-farmer-coin-input" placeholder="40" value="10" step="1" min="1" max="99">
			<!--div class="input-group-text" id="basic-addon WAX" style="width: 38px;">%</div-->
			<div class="input-group-text" style="width: inherit; justify-content: center; ">
				<div class="input-group-text" id="basic-addon WAX">TO ADDRESS</div>
				<input type="text" class="form-control fw-auto-transfer-supply-farmer-coin-id-input" placeholder="xxxxx.wam" aria-label="AUTO TRANSFER SUPPLY TO ADDRESS" >
			</div>
		</div>
	</div>
</th>`
                                })
                            ); 
							document.querySelector(`th[id*="${ WAXID }-fw-panel-monitor"]`).querySelector('input.fw-auto-plant-switch').addEventListener('change', function(e) {
								this['var'] = {
									'id' : this.parentElement.parentElement.parentElement.parentElement.parentElement.id.split('-')[0], 
									'db' : {}
								}; 
								this['var']['db'] = {
									'check' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-plant-switch').checked, 
									'corn' 		: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-plant-corn-input').value, 
									'barley' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-plant-barley-input').value
								}; 
								
								if ( parseInt(this['var']['db']['corn']) + parseInt(this['var']['db']['barley']) >= 8 ){
									this['var']['db']['corn'] = Math.max(0, (8 - parseInt(this['var']['db']['barley']))); 
									document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-plant-corn-input').value = this['var']['db']['corn']; 
								}; 
								if ( parseInt(this['var']['db']['barley']) + parseInt(this['var']['db']['corn']) >= 8 ){
									this['var']['db']['barley'] = Math.max(0, (8 - parseInt(this['var']['db']['corn']))); 
									document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-plant-barley-input').value = this['var']['db']['barley']; 
								}; console.debug( this['var'] ); 
								
								fetch(
									`/vers/fw/set?waxid=${ this['var']['id'] }&auto_plants=${ this['var']['db']['check'] }` + 
									',' + this['var']['db']['corn'] + 
									',' + this['var']['db']['barley'], 
									{method : 'GET'}
								); 
							}); 
							document.querySelector(`th[id*="${ WAXID }-fw-panel-monitor"]`).querySelector('input.fw-auto-plant-corn-input').addEventListener('change', function(e) {
								this['var'] = {
									'id' : this.parentElement.parentElement.id.split('-')[0], 
									'db' : {}
								}; 
								this['var']['db'] = {
									'check' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-plant-switch').checked, 
									'corn' 		: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-plant-corn-input').value, 
									'barley' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-plant-barley-input').value, 
								}; 
								
								if ( parseInt(this['var']['db']['corn']) + parseInt(this['var']['db']['barley']) >= 8 ){
									this['var']['db']['corn'] = Math.max(0, (8 - parseInt(this['var']['db']['barley']))); 
									document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-plant-corn-input').value = this['var']['db']['corn']; 
								}; console.debug( this['var'] ); 
								
								fetch(
									`/vers/fw/set?waxid=${ this['var']['id'] }&auto_plants=${ this['var']['db']['check'] }` + 
									',' + this['var']['db']['corn'] + 
									',' + this['var']['db']['barley'], 
									{method : 'GET'}
								); 
							}); 
							document.querySelector(`th[id*="${ WAXID }-fw-panel-monitor"]`).querySelector('input.fw-auto-plant-barley-input').addEventListener('change', function(e) {
								this['var'] = {
									'id' : this.parentElement.parentElement.id.split('-')[0], 
									'db' : {}
								}; 
								this['var']['db'] = {
									'check' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-plant-switch').checked, 
									'corn' 		: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-plant-corn-input').value, 
									'barley' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-plant-barley-input').value, 
								}; 
								
								if ( parseInt(this['var']['db']['barley']) + parseInt(this['var']['db']['corn']) >= 8 ){
									this['var']['db']['barley'] = Math.max(0, (8 - parseInt(this['var']['db']['corn']))); 
									document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-plant-barley-input').value = this['var']['db']['barley']; 
								}; console.debug( this['var'] ); 
								
								fetch(
									`/vers/fw/set?waxid=${ this['var']['id'] }&auto_plants=${ this['var']['db']['check'] }` + 
									',' + this['var']['db']['corn'] + 
									',' + this['var']['db']['barley'], 
									{method : 'GET'}
								); 
							}); 
							document.querySelector(`th[id*="${ WAXID }-fw-panel-monitor"]`).querySelector('input.fw-deposit-fwf-switch').addEventListener('change', function(e) {
								this['var'] = {
									'id' : this.parentElement.parentElement.parentElement.parentElement.parentElement.id.split('-')[0], 
									'db' : {}
								}; 
								this['var']['db'] = {
									'check' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-deposit-fwf-switch').checked, 
									'value' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-deposit-fwf-input').value, 
								}; console.debug( this['var'] ); 
								
								document.querySelector(
									'th[id*="' + this['var']['id'] + '-fw-panel-monitor"]'
								).querySelector(
									'div.fw-deposit-fwf-text'
								).innerText = 'DEPOSIT FWF ' + ('0000' + this['var']['db']['value']).slice(-'0000'.length); 
								
								fetch(
									`/vers/fw/set?waxid=${ this['var']['id'] }&auto_depo_fwf=${ this['var']['db']['check'] }` + 
									',' + this['var']['db']['value'], 
									{method : 'GET'}
								); 
							}); 
							document.querySelector(`th[id*="${ WAXID }-fw-panel-monitor"]`).querySelector('input.fw-deposit-fwf-input').addEventListener('change', function(e) {
								this['var'] = {
									'id' : this.parentElement.parentElement.id.split('-')[0], 
									'db' : {}
								}; 
								this['var']['db'] = {
									'check' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-deposit-fwf-switch').checked, 
									'value' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-deposit-fwf-input').value, 
								}; console.debug( this['var'] ); 
								
								document.querySelector(
									'th[id*="' + this['var']['id'] + '-fw-panel-monitor"]'
								).querySelector(
									'div.fw-deposit-fwf-text'
								).innerText = 'DEPOSIT FWF ' + ('0000' + this['var']['db']['value']).slice(-'0000'.length); 
								
								fetch(
									`/vers/fw/set?waxid=${ this['var']['id'] }&auto_depo_fwf=${ this['var']['db']['check'] }` + 
									',' + this['var']['db']['value'], 
									{method : 'GET'}
								); 
							}); 
							document.querySelector(`th[id*="${ WAXID }-fw-panel-monitor"]`).querySelector('input.fw-deposit-fwf-input').addEventListener('input', function(e) {
								this['var'] = {
									'id' : this.parentElement.parentElement.id.split('-')[0], 
									'db' : {}
								}; 
								this['var']['db'] = {
									'check' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-deposit-fwf-switch').checked, 
									'value' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-deposit-fwf-input').value, 
								}; console.debug( this['var'] ); 
								
								document.querySelector(
									'th[id*="' + this['var']['id'] + '-fw-panel-monitor"]'
								).querySelector(
									'div.fw-deposit-fwf-text'
								).innerText = 'DEPOSIT FWF ' + ('0000' + this['var']['db']['value']).slice(-'0000'.length); 
								
							}); 
							document.querySelector(`th[id*="${ WAXID }-fw-panel-monitor"]`).querySelector('input.fw-deposit-fwg-switch').addEventListener('change', function(e) {
								this['var'] = {
									'id' : this.parentElement.parentElement.parentElement.parentElement.parentElement.id.split('-')[0], 
									'db' : {}
								}; 
								this['var']['db'] = {
									'check' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-deposit-fwg-switch').checked, 
									'value' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-deposit-fwg-input').value, 
								}; console.debug( this['var'] ); 
								
								document.querySelector(
									'th[id*="' + this['var']['id'] + '-fw-panel-monitor"]'
								).querySelector(
									'div.fw-deposit-fwg-text'
								).innerText = 'DEPOSIT FWG ' + ('0000' + this['var']['db']['value']).slice(-'0000'.length); 
								
								fetch(
									`/vers/fw/set?waxid=${ this['var']['id'] }&auto_depo_fwg=${ this['var']['db']['check'] }` + 
									',' + this['var']['db']['value'], 
									{method : 'GET'}
								); 
							}); 
							document.querySelector(`th[id*="${ WAXID }-fw-panel-monitor"]`).querySelector('input.fw-deposit-fwg-input').addEventListener('change', function(e) {
								this['var'] = {
									'id' : this.parentElement.parentElement.id.split('-')[0], 
									'db' : {}
								}; 
								this['var']['db'] = {
									'check' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-deposit-fwg-switch').checked, 
									'value' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-deposit-fwg-input').value, 
								}; console.debug( this['var'] ); 
								
								document.querySelector(
									'th[id*="' + this['var']['id'] + '-fw-panel-monitor"]'
								).querySelector(
									'div.fw-deposit-fwg-text'
								).innerText = 'DEPOSIT FWG ' + ('0000' + this['var']['db']['value']).slice(-'0000'.length); 
								
								fetch(
									`/vers/fw/set?waxid=${ this['var']['id'] }&auto_depo_fwg=${ this['var']['db']['check'] }` + 
									',' + this['var']['db']['value'], 
									{method : 'GET'}
								); 
							}); 
							document.querySelector(`th[id*="${ WAXID }-fw-panel-monitor"]`).querySelector('input.fw-deposit-fwg-input').addEventListener('input', function(e) {
								this['var'] = {
									'id' : this.parentElement.parentElement.id.split('-')[0], 
									'db' : {}
								}; 
								this['var']['db'] = {
									'check' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-deposit-fwg-switch').checked, 
									'value' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-deposit-fwg-input').value, 
								}; console.debug( this['var'] );  
								
								document.querySelector(
									'th[id*="' + this['var']['id'] + '-fw-panel-monitor"]'
								).querySelector(
									'div.fw-deposit-fwg-text'
								).innerText = 'DEPOSIT FWG ' + ('0000' + this['var']['db']['value']).slice(-'0000'.length); 
								
							}); 
							
							
							document.querySelector(`th[id*="${ WAXID }-fw-panel-monitor"]`).querySelector('input.fw-withdraw-fww-switch').addEventListener('change', function(e) {
								this['var'] = {
									'id' : this.parentElement.parentElement.parentElement.parentElement.parentElement.id.split('-')[0], 
									'db' : {}
								}; 
								this['var']['db'] = {
									'check' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-withdraw-fww-switch').checked, 
									'value' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-withdraw-fww-input').value, 
								}; console.debug( this['var'] ); 
								
								document.querySelector(
									'th[id*="' + this['var']['id'] + '-fw-panel-monitor"]'
								).querySelector(
									'div.fw-withdraw-fww-text'
								).innerText = 'WITHDRAW FWW ' + ('0000' + this['var']['db']['value']).slice(-'0000'.length); 
								
								fetch(
									`/vers/fw/set?waxid=${ this['var']['id'] }&auto_with_fww=${ this['var']['db']['check'] }` + 
									',' + this['var']['db']['value'], 
									{method : 'GET'}
								); 
							}); 
							document.querySelector(`th[id*="${ WAXID }-fw-panel-monitor"]`).querySelector('input.fw-withdraw-fww-input').addEventListener('change', function(e) {
								this['var'] = {
									'id' : this.parentElement.parentElement.id.split('-')[0], 
									'db' : {}
								}; 
								this['var']['db'] = {
									'check' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-withdraw-fww-switch').checked, 
									'value' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-withdraw-fww-input').value, 
								}; console.debug( this['var'] ); 
								
								document.querySelector(
									'th[id*="' + this['var']['id'] + '-fw-panel-monitor"]'
								).querySelector(
									'div.fw-withdraw-fww-text'
								).innerText = 'WITHDRAW FWW ' + ('0000' + this['var']['db']['value']).slice(-'0000'.length); 
								
								fetch(
									`/vers/fw/set?waxid=${ this['var']['id'] }&auto_with_fww=${ this['var']['db']['check'] }` + 
									',' + this['var']['db']['value'], 
									{method : 'GET'}
								); 
							}); 
							document.querySelector(`th[id*="${ WAXID }-fw-panel-monitor"]`).querySelector('input.fw-withdraw-fww-input').addEventListener('input', function(e) {
								this['var'] = {
									'id' : this.parentElement.parentElement.id.split('-')[0], 
									'db' : {}
								}; 
								this['var']['db'] = {
									'check' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-withdraw-fww-switch').checked, 
									'value' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-withdraw-fww-input').value, 
								}; console.debug( this['var'] ); 
								
								document.querySelector(
									'th[id*="' + this['var']['id'] + '-fw-panel-monitor"]'
								).querySelector(
									'div.fw-withdraw-fww-text'
								).innerText = 'WITHDRAW FWW ' + ('0000' + this['var']['db']['value']).slice(-'0000'.length); 
								
							}); 
							
							document.querySelector(`th[id*="${ WAXID }-fw-panel-monitor"]`).querySelector('input.fw-withdraw-fwf-switch').addEventListener('change', function(e) {
								this['var'] = {
									'id' : this.parentElement.parentElement.parentElement.parentElement.parentElement.id.split('-')[0], 
									'db' : {}
								}; 
								this['var']['db'] = {
									'check' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-withdraw-fwf-switch').checked, 
									'value' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-withdraw-fwf-input').value, 
								}; console.debug( this['var'] ); 
								
								document.querySelector(
									'th[id*="' + this['var']['id'] + '-fw-panel-monitor"]'
								).querySelector(
									'div.fw-withdraw-fwf-text'
								).innerText = 'WITHDRAW FWF ' + ('0000' + this['var']['db']['value']).slice(-'0000'.length); 
								
								fetch(
									`/vers/fw/set?waxid=${ this['var']['id'] }&auto_with_fwf=${ this['var']['db']['check'] }` + 
									',' + this['var']['db']['value'], 
									{method : 'GET'}
								); 
							}); 
							document.querySelector(`th[id*="${ WAXID }-fw-panel-monitor"]`).querySelector('input.fw-withdraw-fwf-input').addEventListener('change', function(e) {
								this['var'] = {
									'id' : this.parentElement.parentElement.id.split('-')[0], 
									'db' : {}
								}; 
								this['var']['db'] = {
									'check' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-withdraw-fwf-switch').checked, 
									'value' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-withdraw-fwf-input').value, 
								}; console.debug( this['var'] ); 
								
								document.querySelector(
									'th[id*="' + this['var']['id'] + '-fw-panel-monitor"]'
								).querySelector(
									'div.fw-withdraw-fwf-text'
								).innerText = 'WITHDRAW FWF ' + ('0000' + this['var']['db']['value']).slice(-'0000'.length); 
								
								fetch(
									`/vers/fw/set?waxid=${ this['var']['id'] }&auto_with_fwf=${ this['var']['db']['check'] }` + 
									',' + this['var']['db']['value'], 
									{method : 'GET'}
								); 
							}); 
							document.querySelector(`th[id*="${ WAXID }-fw-panel-monitor"]`).querySelector('input.fw-withdraw-fwf-input').addEventListener('input', function(e) {
								this['var'] = {
									'id' : this.parentElement.parentElement.id.split('-')[0], 
									'db' : {}
								}; 
								this['var']['db'] = {
									'check' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-withdraw-fwf-switch').checked, 
									'value' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-withdraw-fwf-input').value, 
								}; console.debug( this['var'] ); 
								
								document.querySelector(
									'th[id*="' + this['var']['id'] + '-fw-panel-monitor"]'
								).querySelector(
									'div.fw-withdraw-fwf-text'
								).innerText = 'WITHDRAW FWF ' + ('0000' + this['var']['db']['value']).slice(-'0000'.length); 
								
							}); 
							
							document.querySelector(`th[id*="${ WAXID }-fw-panel-monitor"]`).querySelector('input.fw-withdraw-fwg-switch').addEventListener('change', function(e) {
								this['var'] = {
									'id' : this.parentElement.parentElement.parentElement.parentElement.parentElement.id.split('-')[0], 
									'db' : {}
								}; 
								this['var']['db'] = {
									'check' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-withdraw-fwg-switch').checked, 
									'value' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-withdraw-fwg-input').value, 
								}; console.debug( this['var'] ); 
								
								document.querySelector(
									'th[id*="' + this['var']['id'] + '-fw-panel-monitor"]'
								).querySelector(
									'div.fw-withdraw-fwg-text'
								).innerText = 'WITHDRAW FWF ' + ('0000' + this['var']['db']['value']).slice(-'0000'.length); 
								
								fetch(
									`/vers/fw/set?waxid=${ this['var']['id'] }&auto_with_fwg=${ this['var']['db']['check'] }` + 
									',' + this['var']['db']['value'], 
									{method : 'GET'}
								); 
							}); 
							document.querySelector(`th[id*="${ WAXID }-fw-panel-monitor"]`).querySelector('input.fw-withdraw-fwg-input').addEventListener('change', function(e) {
								this['var'] = {
									'id' : this.parentElement.parentElement.id.split('-')[0], 
									'db' : {}
								}; 
								this['var']['db'] = {
									'check' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-withdraw-fwg-switch').checked, 
									'value' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-withdraw-fwg-input').value, 
								}; console.debug( this['var'] ); 
								
								document.querySelector(
									'th[id*="' + this['var']['id'] + '-fw-panel-monitor"]'
								).querySelector(
									'div.fw-withdraw-fwg-text'
								).innerText = 'WITHDRAW FWG ' + ('0000' + this['var']['db']['value']).slice(-'0000'.length); 
								
								fetch(
									`/vers/fw/set?waxid=${ this['var']['id'] }&auto_with_fwg=${ this['var']['db']['check'] }` + 
									',' + this['var']['db']['value'], 
									{method : 'GET'}
								); 
							}); 
							document.querySelector(`th[id*="${ WAXID }-fw-panel-monitor"]`).querySelector('input.fw-withdraw-fwg-input').addEventListener('input', function(e) {
								this['var'] = {
									'id' : this.parentElement.parentElement.id.split('-')[0], 
									'db' : {}
								}; 
								this['var']['db'] = {
									'check' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-withdraw-fwg-switch').checked, 
									'value' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-withdraw-fwg-input').value, 
								}; console.debug( this['var'] ); 
								
								document.querySelector(
									'th[id*="' + this['var']['id'] + '-fw-panel-monitor"]'
								).querySelector(
									'div.fw-withdraw-fwg-text'
								).innerText = 'WITHDRAW FWG ' + ('0000' + this['var']['db']['value']).slice(-'0000'.length); 
								
							}); 
							
							document.querySelector(`th[id*="${ WAXID }-fw-panel-monitor"]`).querySelector('input.fw-auto-transfer-supply-corn-id-input').addEventListener('change', function(e) {
								this['var'] = {
									'id' : this.parentElement.parentElement.parentElement.parentElement.id.split('-')[0], 
									'db' : {}
								}; 
								this['var']['db'] = {
									'check' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-corn-switch').checked, 
									'value' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-corn-input').value, 
									'waxid' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-corn-id-input').value
								}; console.debug( this['var'] ); 
								
								fetch(
									`/vers/fw/set?waxid=${ this['var']['id'] }&auto_comp_cor=${ this['var']['db']['check'] }` + 
									',' + this['var']['db']['value'] + 
									',' + this['var']['db']['waxid'], 
									{method : 'GET'}
								); 
							}); 
							document.querySelector(`th[id*="${ WAXID }-fw-panel-monitor"]`).querySelector('input.fw-auto-transfer-supply-corn-id-input').addEventListener('input', function(e) {
								this['var'] = {
									'id' : this.parentElement.parentElement.parentElement.parentElement.id.split('-')[0], 
									'db' : {}
								}; 
								this['var']['db'] = {
									'check' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-corn-switch').checked, 
									'value' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-corn-input').value, 
									'waxid' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-corn-id-input').value
								}; console.debug( this['var'] ); 
								
								fetch(
									`/vers/fw/set?waxid=${ this['var']['id'] }&auto_comp_cor=${ this['var']['db']['check'] }` + 
									',' + this['var']['db']['value'] + 
									',' + this['var']['db']['waxid'], 
									{method : 'GET'}
								); 
							}); 
							document.querySelector(`th[id*="${ WAXID }-fw-panel-monitor"]`).querySelector('input.fw-auto-transfer-supply-corn-switch').addEventListener('change', function(e) {
								this['var'] = {
									'id' : this.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.id.split('-')[0], 
									'db' : {}
								}; 
								this['var']['db'] = {
									'check' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-corn-switch').checked, 
									'value' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-corn-input').value, 
									'waxid' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-corn-id-input').value
								}; console.debug( this['var'] ); 
								
								document.querySelector(
									'th[id*="' + this['var']['id'] + '-fw-panel-monitor"]'
								).querySelector(
									'div.fw-auto-transfer-supply-corn-text'
								).innerText = 'Corn ' + ('0000' + this['var']['db']['value']).slice(-'0000'.length); 
								
								fetch(
									`/vers/fw/set?waxid=${ this['var']['id'] }&auto_comp_cor=${ this['var']['db']['check'] }` + 
									',' + this['var']['db']['value'] + 
									',' + this['var']['db']['waxid'], 
									{method : 'GET'}
								); 
							}); 
							document.querySelector(`th[id*="${ WAXID }-fw-panel-monitor"]`).querySelector('input.fw-auto-transfer-supply-corn-input').addEventListener('change', function(e) {
								this['var'] = {
									'id' : this.parentElement.parentElement.parentElement.id.split('-')[0], 
									'db' : {}
								}; 
								this['var']['db'] = {
									'check' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-corn-switch').checked, 
									'value' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-corn-input').value, 
									'waxid' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-corn-id-input').value
								}; console.debug( this['var'] ); 
								
								document.querySelector(
									'th[id*="' + this['var']['id'] + '-fw-panel-monitor"]'
								).querySelector(
									'div.fw-auto-transfer-supply-corn-text'
								).innerText = 'Corn ' + ('0000' + this['var']['db']['value']).slice(-'0000'.length); 
								
								fetch(
									`/vers/fw/set?waxid=${ this['var']['id'] }&auto_comp_cor=${ this['var']['db']['check'] }` + 
									',' + this['var']['db']['value'] + 
									',' + this['var']['db']['waxid'], 
									{method : 'GET'}
								); 
							}); 
							document.querySelector(`th[id*="${ WAXID }-fw-panel-monitor"]`).querySelector('input.fw-auto-transfer-supply-corn-input').addEventListener('input', function(e) {
								this['var'] = {
									'id' : this.parentElement.parentElement.parentElement.id.split('-')[0], 
									'db' : {}
								}; 
								this['var']['db'] = {
									'check' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-corn-switch').checked, 
									'value' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-corn-input').value, 
									'waxid' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-corn-id-input').value
								}; console.debug( this['var'] ); 
								
								document.querySelector(
									'th[id*="' + this['var']['id'] + '-fw-panel-monitor"]'
								).querySelector(
									'div.fw-auto-transfer-supply-corn-text'
								).innerText = 'Corn ' + ('0000' + this['var']['db']['value']).slice(-'0000'.length); 
								
							}); 
							
							document.querySelector(`th[id*="${ WAXID }-fw-panel-monitor"]`).querySelector('input.fw-auto-transfer-supply-barley-id-input').addEventListener('change', function(e) {
								this['var'] = {
									'id' : this.parentElement.parentElement.parentElement.parentElement.id.split('-')[0], 
									'db' : {}
								}; 
								this['var']['db'] = {
									'check' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-barley-switch').checked, 
									'value' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-barley-input').value, 
									'waxid' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-barley-id-input').value
								}; console.debug( this['var'] ); 
								
								fetch(
									`/vers/fw/set?waxid=${ this['var']['id'] }&auto_comp_bar=${ this['var']['db']['check'] }` + 
									',' + this['var']['db']['value'] + 
									',' + this['var']['db']['waxid'], 
									{method : 'GET'}
								); 
							}); 
							document.querySelector(`th[id*="${ WAXID }-fw-panel-monitor"]`).querySelector('input.fw-auto-transfer-supply-barley-id-input').addEventListener('input', function(e) {
								this['var'] = {
									'id' : this.parentElement.parentElement.parentElement.parentElement.id.split('-')[0], 
									'db' : {}
								}; 
								this['var']['db'] = {
									'check' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-barley-switch').checked, 
									'value' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-barley-input').value, 
									'waxid' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-barley-id-input').value
								}; console.debug( this['var'] ); 
								
								fetch(
									`/vers/fw/set?waxid=${ this['var']['id'] }&auto_comp_bar=${ this['var']['db']['check'] }` + 
									',' + this['var']['db']['value'] + 
									',' + this['var']['db']['waxid'], 
									{method : 'GET'}
								); 
							}); 
							document.querySelector(`th[id*="${ WAXID }-fw-panel-monitor"]`).querySelector('input.fw-auto-transfer-supply-barley-switch').addEventListener('change', function(e) {
								this['var'] = {
									'id' : this.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.id.split('-')[0], 
									'db' : {}
								}; 
								this['var']['db'] = {
									'check' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-barley-switch').checked, 
									'value' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-barley-input').value, 
									'waxid' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-barley-id-input').value
								}; console.debug( this['var'] ); 
								
								document.querySelector(
									'th[id*="' + this['var']['id'] + '-fw-panel-monitor"]'
								).querySelector(
									'div.fw-auto-transfer-supply-barley-text'
								).innerText = 'Barley ' + ('0000' + this['var']['db']['value']).slice(-'0000'.length); 
								
								fetch(
									`/vers/fw/set?waxid=${ this['var']['id'] }&auto_comp_bar=${ this['var']['db']['check'] }` + 
									',' + this['var']['db']['value'] + 
									',' + this['var']['db']['waxid'], 
									{method : 'GET'}
								); 
							}); 
							document.querySelector(`th[id*="${ WAXID }-fw-panel-monitor"]`).querySelector('input.fw-auto-transfer-supply-barley-input').addEventListener('change', function(e) {
								this['var'] = {
									'id' : this.parentElement.parentElement.parentElement.id.split('-')[0], 
									'db' : {}
								}; 
								this['var']['db'] = {
									'check' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-barley-switch').checked, 
									'value' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-barley-input').value, 
									'waxid' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-barley-id-input').value
								}; console.debug( this['var'] ); 
								
								document.querySelector(
									'th[id*="' + this['var']['id'] + '-fw-panel-monitor"]'
								).querySelector(
									'div.fw-auto-transfer-supply-barley-text'
								).innerText = 'Barley ' + ('0000' + this['var']['db']['value']).slice(-'0000'.length); 
								
								fetch(
									`/vers/fw/set?waxid=${ this['var']['id'] }&auto_comp_bar=${ this['var']['db']['check'] }` + 
									',' + this['var']['db']['value'] + 
									',' + this['var']['db']['waxid'], 
									{method : 'GET'}
								); 
							}); 
							document.querySelector(`th[id*="${ WAXID }-fw-panel-monitor"]`).querySelector('input.fw-auto-transfer-supply-barley-input').addEventListener('input', function(e) {
								this['var'] = {
									'id' : this.parentElement.parentElement.parentElement.id.split('-')[0], 
									'db' : {}
								}; 
								this['var']['db'] = {
									'check' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-barley-switch').checked, 
									'value' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-barley-input').value, 
									'waxid' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-barley-id-input').value
								}; console.debug( this['var'] ); 
								
								document.querySelector(
									'th[id*="' + this['var']['id'] + '-fw-panel-monitor"]'
								).querySelector(
									'div.fw-auto-transfer-supply-barley-text'
								).innerText = 'Barley ' + ('0000' + this['var']['db']['value']).slice(-'0000'.length); 
								
							}); 
							
							document.querySelector(`th[id*="${ WAXID }-fw-panel-monitor"]`).querySelector('input.fw-auto-transfer-supply-milk-id-input').addEventListener('change', function(e) {
								this['var'] = {
									'id' : this.parentElement.parentElement.parentElement.parentElement.id.split('-')[0], 
									'db' : {}
								}; 
								this['var']['db'] = {
									'check' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-milk-switch').checked, 
									'value' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-milk-input').value, 
									'waxid' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-milk-id-input').value
								}; console.debug( this['var'] ); 
								
								fetch(
									`/vers/fw/set?waxid=${ this['var']['id'] }&auto_comp_mil=${ this['var']['db']['check'] }` + 
									',' + this['var']['db']['value'] + 
									',' + this['var']['db']['waxid'], 
									{method : 'GET'}
								); 
							}); 
							document.querySelector(`th[id*="${ WAXID }-fw-panel-monitor"]`).querySelector('input.fw-auto-transfer-supply-milk-id-input').addEventListener('input', function(e) {
								this['var'] = {
									'id' : this.parentElement.parentElement.parentElement.parentElement.id.split('-')[0], 
									'db' : {}
								}; 
								this['var']['db'] = {
									'check' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-milk-switch').checked, 
									'value' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-milk-input').value, 
									'waxid' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-milk-id-input').value
								}; console.debug( this['var'] ); 
								
								fetch(
									`/vers/fw/set?waxid=${ this['var']['id'] }&auto_comp_mil=${ this['var']['db']['check'] }` + 
									',' + this['var']['db']['value'] + 
									',' + this['var']['db']['waxid'], 
									{method : 'GET'}
								); 
							}); 
							document.querySelector(`th[id*="${ WAXID }-fw-panel-monitor"]`).querySelector('input.fw-auto-transfer-supply-milk-switch').addEventListener('change', function(e) {
								this['var'] = {
									'id' : this.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.id.split('-')[0], 
									'db' : {}
								}; 
								this['var']['db'] = {
									'check' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-milk-switch').checked, 
									'value' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-milk-input').value, 
									'waxid' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-milk-id-input').value
								}; console.debug( this['var'] ); 
								
								document.querySelector(
									'th[id*="' + this['var']['id'] + '-fw-panel-monitor"]'
								).querySelector(
									'div.fw-auto-transfer-supply-milk-text'
								).innerText = 'Milk ' + ('0000' + this['var']['db']['value']).slice(-'0000'.length); 
								
								fetch(
									`/vers/fw/set?waxid=${ this['var']['id'] }&auto_comp_mil=${ this['var']['db']['check'] }` + 
									',' + this['var']['db']['value'] + 
									',' + this['var']['db']['waxid'], 
									{method : 'GET'}
								); 
							}); 
							document.querySelector(`th[id*="${ WAXID }-fw-panel-monitor"]`).querySelector('input.fw-auto-transfer-supply-milk-input').addEventListener('change', function(e) {
								this['var'] = {
									'id' : this.parentElement.parentElement.parentElement.id.split('-')[0], 
									'db' : {}
								}; 
								this['var']['db'] = {
									'check' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-milk-switch').checked, 
									'value' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-milk-input').value, 
									'waxid' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-milk-id-input').value
								}; console.debug( this['var'] ); 
								
								document.querySelector(
									'th[id*="' + this['var']['id'] + '-fw-panel-monitor"]'
								).querySelector(
									'div.fw-auto-transfer-supply-milk-text'
								).innerText = 'Milk ' + ('0000' + this['var']['db']['value']).slice(-'0000'.length); 
								
								fetch(
									`/vers/fw/set?waxid=${ this['var']['id'] }&auto_comp_mil=${ this['var']['db']['check'] }` + 
									',' + this['var']['db']['value'] + 
									',' + this['var']['db']['waxid'], 
									{method : 'GET'}
								); 
							}); 
							document.querySelector(`th[id*="${ WAXID }-fw-panel-monitor"]`).querySelector('input.fw-auto-transfer-supply-milk-input').addEventListener('input', function(e) {
								this['var'] = {
									'id' : this.parentElement.parentElement.parentElement.id.split('-')[0], 
									'db' : {}
								}; 
								this['var']['db'] = {
									'check' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-milk-switch').checked, 
									'value' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-milk-input').value, 
									'waxid' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-milk-id-input').value
								}; console.debug( this['var'] ); 
								
								document.querySelector(
									'th[id*="' + this['var']['id'] + '-fw-panel-monitor"]'
								).querySelector(
									'div.fw-auto-transfer-supply-milk-text'
								).innerText = 'Milk ' + ('0000' + this['var']['db']['value']).slice(-'0000'.length); 
								
							}); 
							
							document.querySelector(`th[id*="${ WAXID }-fw-panel-monitor"]`).querySelector('input.fw-auto-transfer-supply-chicken-egg-id-input').addEventListener('change', function(e) {
								this['var'] = {
									'id' : this.parentElement.parentElement.parentElement.parentElement.id.split('-')[0], 
									'db' : {}
								}; 
								this['var']['db'] = {
									'check' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-chicken-egg-switch').checked, 
									'value' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-chicken-egg-input').value, 
									'waxid' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-chicken-egg-id-input').value
								}; console.debug( this['var'] ); 
								
								fetch(
									`/vers/fw/set?waxid=${ this['var']['id'] }&auto_comp_egg=${ this['var']['db']['check'] }` + 
									',' + this['var']['db']['value'] + 
									',' + this['var']['db']['waxid'], 
									{method : 'GET'}
								); 
							}); 
							document.querySelector(`th[id*="${ WAXID }-fw-panel-monitor"]`).querySelector('input.fw-auto-transfer-supply-chicken-egg-id-input').addEventListener('input', function(e) {
								this['var'] = {
									'id' : this.parentElement.parentElement.parentElement.parentElement.id.split('-')[0], 
									'db' : {}
								}; 
								this['var']['db'] = {
									'check' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-chicken-egg-switch').checked, 
									'value' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-chicken-egg-input').value, 
									'waxid' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-chicken-egg-id-input').value
								}; console.debug( this['var'] ); 
								
								fetch(
									`/vers/fw/set?waxid=${ this['var']['id'] }&auto_comp_egg=${ this['var']['db']['check'] }` + 
									',' + this['var']['db']['value'] + 
									',' + this['var']['db']['waxid'], 
									{method : 'GET'}
								); 
							}); 
							document.querySelector(`th[id*="${ WAXID }-fw-panel-monitor"]`).querySelector('input.fw-auto-transfer-supply-chicken-egg-switch').addEventListener('change', function(e) {
								this['var'] = {
									'id' : this.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.id.split('-')[0], 
									'db' : {}
								}; 
								this['var']['db'] = {
									'check' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-chicken-egg-switch').checked, 
									'value' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-chicken-egg-input').value, 
									'waxid' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-chicken-egg-id-input').value
								}; console.debug( this['var'] ); 
								
								document.querySelector(
									'th[id*="' + this['var']['id'] + '-fw-panel-monitor"]'
								).querySelector(
									'div.fw-auto-transfer-supply-chicken-egg-text'
								).innerText = 'Chicken Egg ' + ('0000' + this['var']['db']['value']).slice(-'0000'.length); 
								
								fetch(
									`/vers/fw/set?waxid=${ this['var']['id'] }&auto_comp_egg=${ this['var']['db']['check'] }` + 
									',' + this['var']['db']['value'] + 
									',' + this['var']['db']['waxid'], 
									{method : 'GET'}
								); 
							}); 
							document.querySelector(`th[id*="${ WAXID }-fw-panel-monitor"]`).querySelector('input.fw-auto-transfer-supply-chicken-egg-input').addEventListener('change', function(e) {
								this['var'] = {
									'id' : this.parentElement.parentElement.parentElement.id.split('-')[0], 
									'db' : {}
								}; 
								this['var']['db'] = {
									'check' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-chicken-egg-switch').checked, 
									'value' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-chicken-egg-input').value, 
									'waxid' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-chicken-egg-id-input').value
								}; console.debug( this['var'] ); 
								
								document.querySelector(
									'th[id*="' + this['var']['id'] + '-fw-panel-monitor"]'
								).querySelector(
									'div.fw-auto-transfer-supply-chicken-egg-text'
								).innerText = 'Chicken Egg ' + ('0000' + this['var']['db']['value']).slice(-'0000'.length); 
								
								fetch(
									`/vers/fw/set?waxid=${ this['var']['id'] }&auto_comp_egg=${ this['var']['db']['check'] }` + 
									',' + this['var']['db']['value'] + 
									',' + this['var']['db']['waxid'], 
									{method : 'GET'}
								); 
							}); 
							document.querySelector(`th[id*="${ WAXID }-fw-panel-monitor"]`).querySelector('input.fw-auto-transfer-supply-chicken-egg-input').addEventListener('input', function(e) {
								this['var'] = {
									'id' : this.parentElement.parentElement.parentElement.id.split('-')[0], 
									'db' : {}
								}; 
								this['var']['db'] = {
									'check' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-chicken-egg-switch').checked, 
									'value' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-chicken-egg-input').value, 
									'waxid' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-chicken-egg-id-input').value
								}; console.debug( this['var'] ); 
								
								document.querySelector(
									'th[id*="' + this['var']['id'] + '-fw-panel-monitor"]'
								).querySelector(
									'div.fw-auto-transfer-supply-chicken-egg-text'
								).innerText = 'Chicken Egg ' + ('0000' + this['var']['db']['value']).slice(-'0000'.length); 
								
							}); 
							
							document.querySelector(`th[id*="${ WAXID }-fw-panel-monitor"]`).querySelector('input.fw-auto-transfer-supply-farmer-coin-id-input').addEventListener('change', function(e) {
								this['var'] = {
									'id' : this.parentElement.parentElement.parentElement.parentElement.id.split('-')[0], 
									'db' : {}
								}; 
								this['var']['db'] = {
									'check' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-farmer-coin-switch').checked, 
									'value' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-farmer-coin-input').value, 
									'waxid' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-farmer-coin-id-input').value
								}; console.debug( this['var'] ); 
								
								fetch(
									`/vers/fw/set?waxid=${ this['var']['id'] }&auto_comp_fmc=${ this['var']['db']['check'] }` + 
									',' + this['var']['db']['value'] + 
									',' + this['var']['db']['waxid'], 
									{method : 'GET'}
								); 
							}); 
							document.querySelector(`th[id*="${ WAXID }-fw-panel-monitor"]`).querySelector('input.fw-auto-transfer-supply-farmer-coin-id-input').addEventListener('input', function(e) {
								this['var'] = {
									'id' : this.parentElement.parentElement.parentElement.parentElement.id.split('-')[0], 
									'db' : {}
								}; 
								this['var']['db'] = {
									'check' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-farmer-coin-switch').checked, 
									'value' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-farmer-coin-input').value, 
									'waxid' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-farmer-coin-id-input').value
								}; console.debug( this['var'] ); 
								
								fetch(
									`/vers/fw/set?waxid=${ this['var']['id'] }&auto_comp_fmc=${ this['var']['db']['check'] }` + 
									',' + this['var']['db']['value'] + 
									',' + this['var']['db']['waxid'], 
									{method : 'GET'}
								); 
							}); 
							document.querySelector(`th[id*="${ WAXID }-fw-panel-monitor"]`).querySelector('input.fw-auto-transfer-supply-farmer-coin-switch').addEventListener('change', function(e) {
								this['var'] = {
									'id' : this.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.id.split('-')[0], 
									'db' : {}
								}; 
								this['var']['db'] = {
									'check' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-farmer-coin-switch').checked, 
									'value' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-farmer-coin-input').value, 
									'waxid' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-farmer-coin-id-input').value
								}; console.debug( this['var'] ); 
								
								document.querySelector(
									'th[id*="' + this['var']['id'] + '-fw-panel-monitor"]'
								).querySelector(
									'div.fw-auto-transfer-supply-farmer-coin-text'
								).innerText = 'Farmer Coin ' + ('0000' + this['var']['db']['value']).slice(-'0000'.length); 
								
								fetch(
									`/vers/fw/set?waxid=${ this['var']['id'] }&auto_comp_fmc=${ this['var']['db']['check'] }` + 
									',' + this['var']['db']['value'] + 
									',' + this['var']['db']['waxid'], 
									{method : 'GET'}
								); 
							}); 
							document.querySelector(`th[id*="${ WAXID }-fw-panel-monitor"]`).querySelector('input.fw-auto-transfer-supply-farmer-coin-input').addEventListener('change', function(e) {
								this['var'] = {
									'id' : this.parentElement.parentElement.parentElement.id.split('-')[0], 
									'db' : {}
								}; 
								this['var']['db'] = {
									'check' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-farmer-coin-switch').checked, 
									'value' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-farmer-coin-input').value, 
									'waxid' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-farmer-coin-id-input').value
								}; console.debug( this['var'] ); 
								
								document.querySelector(
									'th[id*="' + this['var']['id'] + '-fw-panel-monitor"]'
								).querySelector(
									'div.fw-auto-transfer-supply-farmer-coin-text'
								).innerText = 'Farmer Coin ' + ('0000' + this['var']['db']['value']).slice(-'0000'.length); 
								
								fetch(
									`/vers/fw/set?waxid=${ this['var']['id'] }&auto_comp_fmc=${ this['var']['db']['check'] }` + 
									',' + this['var']['db']['value'] + 
									',' + this['var']['db']['waxid'], 
									{method : 'GET'}
								); 
							}); 
							document.querySelector(`th[id*="${ WAXID }-fw-panel-monitor"]`).querySelector('input.fw-auto-transfer-supply-farmer-coin-input').addEventListener('input', function(e) {
								this['var'] = {
									'id' : this.parentElement.parentElement.parentElement.id.split('-')[0], 
									'db' : {}
								}; 
								this['var']['db'] = {
									'check' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-farmer-coin-switch').checked, 
									'value' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-farmer-coin-input').value, 
									'waxid' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-farmer-coin-id-input').value
								}; console.debug( this['var'] ); 
								
								document.querySelector(
									'th[id*="' + this['var']['id'] + '-fw-panel-monitor"]'
								).querySelector(
									'div.fw-auto-transfer-supply-farmer-coin-text'
								).innerText = 'Farmer Coin ' + ('0000' + this['var']['db']['value']).slice(-'0000'.length); 
								
							}); 
							
							
							document.querySelector(`th[id*="${ WAXID }-fw-panel-monitor"]`).querySelector('input.fw-feature-mbr-mine-switch').addEventListener('change', function(e) {
								this['var'] = {
									'id' : this.parentElement.parentElement.parentElement.parentElement.parentElement.id.split('-')[0], 
									'db' : {}
								}; 
								this['var']['db'] = {
									'check' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-feature-mbr-mine-switch').checked, 
								}; 
								
								fetch(
									`/vers/fw/set?waxid=${ this['var']['id'] }&mbr_mine=${ this['var']['db']['check'] }`, 
									{method : 'GET'}
								); 
							}); 
							document.querySelector(`th[id*="${ WAXID }-fw-panel-monitor"]`).querySelector('input.fw-feature-eco-mine-switch').addEventListener('change', function(e) {
								this['var'] = {
									'id' : this.parentElement.parentElement.parentElement.parentElement.parentElement.id.split('-')[0], 
									'db' : {}
								}; 
								this['var']['db'] = {
									'check' 	: document.querySelector('th[id*="' + this['var']['id'] + '-fw-panel-monitor"]').querySelector('input.fw-feature-eco-mine-switch').checked, 
								}; 
								
								fetch(
									`/vers/fw/set?waxid=${ this['var']['id'] }&eco_mine=${ this['var']['db']['check'] }`, 
									{method : 'GET'}
								); 
							}); 
							
							
							
                            document.querySelector('table').querySelector('thead').appendChild(
                                Object.assign(document.createElement('tr'), {
                                    innerHTML   : `
<th
    colspan     = "7"
    style       = "display: none; "
	id 			= "${ WAXID }-ss-monitor"
>
    <iframe
    url         = "https://starship-explorer.io/?user=${ WAXID }"
    style       = "width : 100%; height : 3038px; filter: invert(0.95) contrast(1.0) saturate(0.6);"
    scrolling   = "no"
    ></iframe>
</th>
<th colspan="2" style="display: none; vertical-align: top; max-width: 486px;" id = "${ WAXID }-ss-panel-monitor">
	<div class="input-group ss-target-set">
		<div class="input-group-text" style="width: inherit; justify-content: center; "> 0.0000 : WALLET : [] : STAKED : 0.0000 </div>
		<div class="input-group-text">
			<div class="form-check-inline form-switch" style="margin-right: 0rem; ">
				<label class="form-check-label">
					<!--input type="checkbox" class="form-check-input ss-target-switch" value="0"-->
					<!--span style="padding-left: 5;"></span-->
				</label>
			</div>
		</div>
		<div class="input-group-text" style="width: 248px;">PLANET TARGET<span style="visibility: hidden;">_</span><a href="https://starship.primatepirate.com/planetarium" target="_blank">ID</a></div>
		<input type="number" class="form-control" placeholder="SS-TARGET-SWITCH" value="SS-TARGET-SWITCH" step="1" min="1" max="100000" aria-label="">
		<!--div class="input-group-text" id="basic-addon WAX" style="width: 38px;">%</div-->
		<button type="submit" class="btn btn-primary ss-target-set" style="width: 60px; ">SET</button>
	</div>
</th>`.replace( /SS-TARGET-SWITCH/gi, window['information-data']['DATA'][WAXID]['vers']['ss']['db']['target'] )
                                })
                            ); 
                            document.querySelector('table').querySelector('thead').appendChild(
                                Object.assign(document.createElement('tr'), {
                                    innerHTML   : `
									

<th
    colspan     = "7"
    style       = "display: none; "
	id 			= "${ WAXID }-kq-monitor"
>
	<textarea 
		class 		= "form-control ${ WAXID }"
		id 			= "message-text ${ WAXID }"
		style 		= "width : 100%;height : 580px; background: transparent; color: white; resize: none; border: 0 none;"
		scrolling 	= "no"
	></textarea>
</th>
<th colspan="2" style="display: none; vertical-align: top; max-width: 486px;" id = "${ WAXID }-kq-panel-monitor">
	<div class="input-group kq-offchain-mainchain">
		<div class="input-group-text" style="width: inherit; justify-content: center; ">C 0.00 K 0.00 : WITH [0%] DEPO : C 0.00 K 0.00</div>
	</div>
	<div class="input-group kq-score">
		<div class="input-group-text" style="width: inherit; justify-content: center; ">000000 TEAM SORE : TEAM RANGE 000000</div>
	</div>
	<div class="input-group fq-auto-repair">
		<div class="input-group-text" style="width: inherit; justify-content: center; ">
		<div class="form-check-inline form-switch" style="align-self: flex-start; margin-right: auto; ">
			<label class="form-check-label">
				<input
					type 			= "checkbox"
					class 			= "form-check-input fq-auto-repair-switch"
					value 			= "0"
					checked
				>
			</label>
		</div>AUTO REPAIR ROBO</div>
	</div>
	<div class="input-group fq-auto-defect">
		<div class="input-group-text" style="width: inherit; justify-content: center; ">
		<div class="form-check-inline form-switch" style="align-self: flex-start; margin-right: auto; ">
			<label class="form-check-label">
				<input
					type 			= "checkbox"
					class 			= "form-check-input fq-auto-defect-switch"
					value 			= "0"
					checked
				>
			</label>
		</div>AUTO DEFECT ENEMY</div>
	</div>
	<div class="input-group fq-auto-revive">
		<div class="input-group-text" style="width: inherit; justify-content: center; ">
		<div class="form-check-inline form-switch" style="align-self: flex-start; margin-right: auto; ">
			<label class="form-check-label">
				<input
					type 			= "checkbox"
					class 			= "form-check-input fq-auto-revive-switch"
					value 			= "0"
				>
			</label>
		</div>AUTO REVIVE ROBO</div>
	</div>
</th>`
                                })
                            ); 
                            document.querySelector('table').querySelector('thead').appendChild(
                                Object.assign(document.createElement('tr'), {
                                    innerHTML   : `
									

<th
    colspan     = "7"
    style       = "display: none; "
	id 			= "${ WAXID }-cc-monitor"
>
	<textarea 
		class 		= "form-control ${ WAXID }"
		id 			= "message-text ${ WAXID }"
		style 		= "width : 100%;height : 580px; background: transparent; color: white; resize: none; border: 0 none;"
		scrolling 	= "no"
	></textarea>
</th>
<th colspan="2" style="display: none; vertical-align: top; max-width: 486px;" id = "${ WAXID }-cc-panel-monitor">
	<div class="input-group cc-offchain-mainchain">
		<div class="input-group-text" style="width: inherit; justify-content: center; ">FGL 0.0000 : WITH [0%] DEPO : FGL 0.0000</div>
	</div>
	<div class="input-group cc-auto-battle-season">
		<div class="input-group-text" style="width: inherit; justify-content: center; ">
		<div class="form-check-inline form-switch" style="align-self: flex-start; margin-right: auto; ">
			<label class="form-check-label">
				<input
					type 			= "checkbox"
					class 			= "form-check-input cc-auto-battle-season-switch"
					value 			= "0"
				>
			</label>
		</div>AUTO BATTLE SEASON</div>
	</div>
	<div class="input-group cc-auto-battle-weekly">
		<div class="input-group-text" style="width: inherit; justify-content: center; ">
		<div class="form-check-inline form-switch" style="align-self: flex-start; margin-right: auto; ">
			<label class="form-check-label">
				<input
					type 			= "checkbox"
					class 			= "form-check-input cc-auto-battle-weekly-switch"
					value 			= "0"
				>
			</label>
		</div>AUTO BATTLE WEEKLY</div>
	</div>
</th>`
                                })
                            ); 
                            document.querySelector('table').querySelector('thead').appendChild(
                                Object.assign(document.createElement('tr'), {
                                    innerHTML   : `
<th
    colspan     = "7"
    style       = "display: none; "
	id 			= "${ WAXID }-gx-monitor"
>
    <!--
		iframe
		url         = "https://farmersworld.idigger.online/affiliate?waxid=${ WAXID }"
		style       = "width : 100%; height : 954px;"
		scrolling   = "no"
		></iframe
	-->
	<textarea 
		class 		= "form-control ${ WAXID }"
		id 			= "message-text ${ WAXID }"
		style 		= "width : 100%;height : 580px; background: transparent; color: white; resize: none; border: 0 none;"
		scrolling 	= "no"
	></textarea>
</th>
<th colspan="2" style="display: none; vertical-align: top; max-width: 486px;" id="${ WAXID }-gx-panel-monitor">
	<div class="input-group gx-deposit-gmo">
		<div class="input-group-text" style="width: inherit; justify-content: center; ">AUTO DEPOSIT TO GAME WHEN HAVE NOT ENOUGH SUPPLY</div>
		<div class="input-group-text">
			<div class="form-check-inline form-switch" style="margin-right: 0rem; ">
				<label class="form-check-label">
					<input type="checkbox" class="form-check-input gx-deposit-gmo-switch" value="0">
				</label>
			</div>
		</div>
		<div class="input-group-text gx-deposit-gmo-text" style="width: 248px;">DEPOSIT GMO 0000</div>
		<input type="range" class="form-control gx-deposit-gmo-input" placeholder="50" value="50" step="5" min="0" max="3100" >
	</div>
	<div class="input-group gx-deposit-gmp">
		<div class="input-group-text">
			<div class="form-check-inline form-switch" style="margin-right: 0rem; ">
				<label class="form-check-label">
					<input type="checkbox" class="form-check-input gx-deposit-gmp-switch" value="0">
				</label>
			</div>
		</div>
		<div class="input-group-text gx-deposit-gmp-text" style="width: 248px;">DEPOSIT GMP 0000</div>
		<input type="range" class="form-control gx-deposit-gmp-input" placeholder="50" value="50" step="5" min="0" max="3100" >
	</div>
	<div class="input-group gx-swap-wax-gmo">
		<div class="input-group-text" style="width: inherit; justify-content: center; ">AUTO SWAP WHEN HAVE NOT ENOUGH SUPPLY</div>
		<div class="input-group-text">
			<div class="form-check-inline form-switch" style="margin-right: 0rem; ">
				<label class="form-check-label">
					<input type="checkbox" class="form-check-input gx-swap-wax-gmo-switch" value="0">
				</label>
			</div>
		</div>
		<div class="input-group-text" style="width: 248px;">WAX TO GMO 0000</div>
		<input type="range" class="form-control gx-swap-wax-gmo-input" placeholder="20" value="20" step="5" min="0" max="600" >
	</div>
	<div class="input-group gx-swap-wax-gmp">
		<div class="input-group-text">
			<div class="form-check-inline form-switch" style="margin-right: 0rem; ">
				<label class="form-check-label">
					<input type="checkbox" class="form-check-input gx-swap-wax-gmp-switch" value="0">
				</label>
			</div>
		</div>
		<div class="input-group-text" style="width: 248px;">WAX TO GMP 0000</div>
		<input type="range" class="form-control gx-swap-wax-gmp-input" placeholder="20" value="20" step="5" min="0" max="600" >
	</div>
	<div class="input-group gx-withdraw-deposit">
		<div class="input-group-text" style="width: inherit; justify-content: center; ">A 0.0 P 0.00 O 0.0 : WITH [0%] DEPO : W 0.0 F 0.0 G 0.0</div>
		<button type="submit" class="btn btn-primary gx-withdraw" style="width: 20%; "">WITHDRAW</button>
		<input type="number" class="form-control" placeholder="GMA" value="" step="5" min="5" max="100" aria-label="">
		<input type="number" class="form-control" placeholder="GMP" value="" step="5" min="5" max="100" aria-label="">
		<input type="number" class="form-control" placeholder="GMO" value="" step="5" min="5" max="100" aria-label="">
		<button type="submit" class="btn btn-primary gx-deposit" style="width: 20%; "">DEPOSIT</button>
	</div>
	<div class="input-group gx-swap-gma-wax">
		<div class="input-group-text" style="width: 248px;">MANUAL SELL GMA TO WAX</div>
		<input type="number" class="form-control" placeholder="0.0000" value="0.0000" step="5" min="0" max="100" >
		<input type="number" class="form-control" placeholder="0.0000" value="0.0000" step="5" min="0" max="100" disabled>
		<button type="submit" class="btn btn-primary gx-swap-gma-wax-set" style="width: 60px; ">SET</button>
	</div>
	<div class="input-group gx-swap-gmp-wax">
		<div class="input-group-text" style="width: 248px;">MANUAL SELL GMP TO WAX</div>
		<input type="number" class="form-control" placeholder="0.0000" value="0.0000" step="5" min="0" max="100" >
		<input type="number" class="form-control" placeholder="0.0000" value="0.0000" step="5" min="0" max="100" disabled>
		<button type="submit" class="btn btn-primary gx-swap-gma-wax-set" style="width: 60px; ">SET</button>
	</div>
	<div class="input-group gx-swap-gmo-wax">
		<div class="input-group-text" style="width: 248px;">MANUAL SELL GMO TO WAX</div>
		<input type="number" class="form-control" placeholder="0.0000" value="0.0000" step="5" min="0" max="100" >
		<input type="number" class="form-control" placeholder="0.0000" value="0.0000" step="5" min="0" max="100" disabled>
		<button type="submit" class="btn btn-primary gx-swap-gma-wax-set" style="width: 60px; ">SET</button>
	</div>
	<div class="input-group gx-withdraw-gma">
		<div class="input-group-text" style="width: inherit; justify-content: center; ">AUTO WITHDRAW WHEN 5%, KEEP MINIMIUM SUPPLY IN GAME</div>
		<div class="input-group-text">
			<div class="form-check-inline form-switch" style="margin-right: 0rem; ">
				<label class="form-check-label">
					<input type="checkbox" class="form-check-input gx-waithdraw-gma-switch" value="0">
					<!--span style="padding-left: 5;"></span-->
				</label>
			</div>
		</div>
		<div class="input-group-text" style="width: 248px;">WITHDRAW GMA 0000</div>
		<input type="range" class="form-control gx-withdraw-gma-input" placeholder="40" value="40" step="5" min="0" max="600" >
		<!--div class="input-group-text" id="basic-addon WAX" style="width: 38px;">%</div-->
	</div>
	<div class="input-group gx-withdraw-gmo">
		<div class="input-group-text">
			<div class="form-check-inline form-switch" style="margin-right: 0rem; ">
				<label class="form-check-label">
					<input type="checkbox" class="form-check-input gx-withdraw-gmo-switch" value="0">
					<!--span style="padding-left: 5;"></span-->
				</label>
			</div>
		</div>
		<div class="input-group-text" style="width: 248px;">WITHDRAW GMO 0000</div>
		<input type="range" class="form-control gx-withdraw-gmo-input" placeholder="40" value="40" step="5" min="0" max="600" >
		<!--div class="input-group-text" id="basic-addon WAX" style="width: 38px;">%</div-->
	</div>
	<div class="input-group gx-withdraw-gmp">
		<div class="input-group-text">
			<div class="form-check-inline form-switch" style="margin-right: 0rem; ">
				<label class="form-check-label">
					<input type="checkbox" class="form-check-input gx-withdraw-gmp-switch" value="0">
					<!--span style="padding-left: 5;"></span-->
				</label>
			</div>
		</div>
		<div class="input-group-text" style="width: 248px;">WITHDRAW GMP 0000</div>
		<input type="range" class="form-control gx-withdraw-gmp-input" placeholder="40" value="40" step="5" min="0" max="600" >
		<!--div class="input-group-text" id="basic-addon WAX" style="width: 38px;">%</div-->
	</div>
	<div class="input-group gx-feature">
		<div class="input-group-text" style="width: inherit; justify-content: center; ">FEATURE</div>
		<div class="input-group-text" style="width: inherit; justify-content: center; ">
			<div class="form-check-inline form-switch" style="margin-right: 2rem; display: none;">
				<label class="form-check-label">
					<input type="checkbox" class="form-check-input gx-feature-mbr-mine-switch" value="0">
					<span style="padding-left: 5;">MBR MINE</span>
				</label>
			</div>
			<div class="form-check-inline form-switch" style="margin-right: 2rem; display: none;">
				<label class="form-check-label">
					<input type="checkbox" class="form-check-input gx-feature-eco-mine-switch" value="0">
					<span style="padding-left: 5;">ECO MINE</span>
				</label>
			</div>
			<div class="form-check-inline form-switch" style="margin-right: 0.5rem; ">
				<label class="form-check-label">
					<input type="checkbox" class="form-check-input gx-feature-fee-mine-switch" value="0">
					<span style="padding-left: 5;">FEE MINE</span>
				</label>
			</div>
		</div>
	</div>
</th>`
                                })
                            ); 
							document.querySelector(`th[id*="${ WAXID }-gx-panel-monitor"]`).querySelector('input.gx-deposit-gmo-switch').addEventListener('change', function(e) {
								this['var'] = {
									'id' : this.parentElement.parentElement.parentElement.parentElement.parentElement.id.split('-')[0], 
									'db' : {}
								}; 
								this['var']['db'] = {
									'check' 	: document.querySelector('th[id*="' + this['var']['id'] + '-gx-panel-monitor"]').querySelector('input.gx-deposit-gmo-switch').checked, 
									'value' 	: document.querySelector('th[id*="' + this['var']['id'] + '-gx-panel-monitor"]').querySelector('input.gx-deposit-gmo-input').value, 
								}; console.debug( this['var'] ); 
								
								document.querySelector(
									'th[id*="' + this['var']['id'] + '-gx-panel-monitor"]'
								).querySelector(
									'div.gx-deposit-gmo-text'
								).innerText = 'DEPOSIT GMO ' + ('0000' + this['var']['db']['value']).slice(-'0000'.length); 
								
								fetch(
									`/vers/gx/set?waxid=${ this['var']['id'] }&auto_depo_gmo=${ this['var']['db']['check'] }` + 
									',' + this['var']['db']['value'], 
									{method : 'GET'}
								); 
							}); 
							document.querySelector(`th[id*="${ WAXID }-gx-panel-monitor"]`).querySelector('input.gx-deposit-gmo-input').addEventListener('change', function(e) {
								this['var'] = {
									'id' : this.parentElement.parentElement.id.split('-')[0], 
									'db' : {}
								}; 
								this['var']['db'] = {
									'check' 	: document.querySelector('th[id*="' + this['var']['id'] + '-gx-panel-monitor"]').querySelector('input.gx-deposit-gmo-switch').checked, 
									'value' 	: document.querySelector('th[id*="' + this['var']['id'] + '-gx-panel-monitor"]').querySelector('input.gx-deposit-gmo-input').value, 
								}; console.debug( this['var'] ); 
								
								document.querySelector(
									'th[id*="' + this['var']['id'] + '-gx-panel-monitor"]'
								).querySelector(
									'div.gx-deposit-gmo-text'
								).innerText = 'DEPOSIT GMO ' + ('0000' + this['var']['db']['value']).slice(-'0000'.length); 
								
								fetch(
									`/vers/gx/set?waxid=${ this['var']['id'] }&auto_depo_gmo=${ this['var']['db']['check'] }` + 
									',' + this['var']['db']['value'], 
									{method : 'GET'}
								); 
							}); 
							document.querySelector(`th[id*="${ WAXID }-gx-panel-monitor"]`).querySelector('input.gx-deposit-gmo-input').addEventListener('input', function(e) {
								this['var'] = {
									'id' : this.parentElement.parentElement.id.split('-')[0], 
									'db' : {}
								}; 
								this['var']['db'] = {
									'check' 	: document.querySelector('th[id*="' + this['var']['id'] + '-gx-panel-monitor"]').querySelector('input.gx-deposit-gmo-switch').checked, 
									'value' 	: document.querySelector('th[id*="' + this['var']['id'] + '-gx-panel-monitor"]').querySelector('input.gx-deposit-gmo-input').value, 
								}; console.debug( this['var'] ); 
								
								document.querySelector(
									'th[id*="' + this['var']['id'] + '-gx-panel-monitor"]'
								).querySelector(
									'div.gx-deposit-gmo-text'
								).innerText = 'DEPOSIT GMO ' + ('0000' + this['var']['db']['value']).slice(-'0000'.length); 
								
							}); 
							document.querySelector(`th[id*="${ WAXID }-gx-panel-monitor"]`).querySelector('input.gx-deposit-gmp-switch').addEventListener('change', function(e) {
								this['var'] = {
									'id' : this.parentElement.parentElement.parentElement.parentElement.parentElement.id.split('-')[0], 
									'db' : {}
								}; 
								this['var']['db'] = {
									'check' 	: document.querySelector('th[id*="' + this['var']['id'] + '-gx-panel-monitor"]').querySelector('input.gx-deposit-gmp-switch').checked, 
									'value' 	: document.querySelector('th[id*="' + this['var']['id'] + '-gx-panel-monitor"]').querySelector('input.gx-deposit-gmp-input').value, 
								}; console.debug( this['var'] ); 
								
								document.querySelector(
									'th[id*="' + this['var']['id'] + '-gx-panel-monitor"]'
								).querySelector(
									'div.gx-deposit-gmp-text'
								).innerText = 'DEPOSIT GMP ' + ('0000' + this['var']['db']['value']).slice(-'0000'.length); 
								
								fetch(
									`/vers/gx/set?waxid=${ this['var']['id'] }&auto_depo_gmp=${ this['var']['db']['check'] }` + 
									',' + this['var']['db']['value'], 
									{method : 'GET'}
								); 
							}); 
							document.querySelector(`th[id*="${ WAXID }-gx-panel-monitor"]`).querySelector('input.gx-deposit-gmp-input').addEventListener('change', function(e) {
								this['var'] = {
									'id' : this.parentElement.parentElement.id.split('-')[0], 
									'db' : {}
								}; 
								this['var']['db'] = {
									'check' 	: document.querySelector('th[id*="' + this['var']['id'] + '-gx-panel-monitor"]').querySelector('input.gx-deposit-gmp-switch').checked, 
									'value' 	: document.querySelector('th[id*="' + this['var']['id'] + '-gx-panel-monitor"]').querySelector('input.gx-deposit-gmp-input').value, 
								}; console.debug( this['var'] ); 
								
								document.querySelector(
									'th[id*="' + this['var']['id'] + '-gx-panel-monitor"]'
								).querySelector(
									'div.gx-deposit-gmp-text'
								).innerText = 'DEPOSIT GMP ' + ('0000' + this['var']['db']['value']).slice(-'0000'.length); 
								
								fetch(
									`/vers/gx/set?waxid=${ this['var']['id'] }&auto_depo_gmp=${ this['var']['db']['check'] }` + 
									',' + this['var']['db']['value'], 
									{method : 'GET'}
								); 
							}); 
							document.querySelector(`th[id*="${ WAXID }-gx-panel-monitor"]`).querySelector('input.gx-deposit-gmp-input').addEventListener('input', function(e) {
								this['var'] = {
									'id' : this.parentElement.parentElement.id.split('-')[0], 
									'db' : {}
								}; 
								this['var']['db'] = {
									'check' 	: document.querySelector('th[id*="' + this['var']['id'] + '-gx-panel-monitor"]').querySelector('input.gx-deposit-gmp-switch').checked, 
									'value' 	: document.querySelector('th[id*="' + this['var']['id'] + '-gx-panel-monitor"]').querySelector('input.gx-deposit-gmp-input').value, 
								}; console.debug( this['var'] );  
								
								document.querySelector(
									'th[id*="' + this['var']['id'] + '-gx-panel-monitor"]'
								).querySelector(
									'div.gx-deposit-gx-text'
								).innerText = 'DEPOSIT GMP ' + ('0000' + this['var']['db']['value']).slice(-'0000'.length); 
								
							}); 
							document.querySelector(`th[id*="${ WAXID }-gx-panel-monitor"]`).querySelector('input.gx-feature-fee-mine-switch').addEventListener('change', function(e) {
								this['var'] = {
									'id' : this.parentElement.parentElement.parentElement.parentElement.parentElement.id.split('-')[0], 
									'db' : {}
								}; 
								this['var']['db'] = {
									'check' 	: document.querySelector('th[id*="' + this['var']['id'] + '-gx-panel-monitor"]').querySelector('input.gx-feature-eco-mine-switch').checked, 
								}; 
								
								fetch(
									`/vers/gx/set?waxid=${ this['var']['id'] }&eco_mine=${ this['var']['db']['check'] }`, 
									{method : 'GET'}
								); 
							}); 
                            document.querySelector('table').querySelector('thead').appendChild(
                                Object.assign(document.createElement('tr'), {
                                    innerHTML   : `
									

<th
    colspan     = "7"
    style       = "display: none; "
	id 			= "${ WAXID }-bl-monitor"
>
	<textarea 
		class 		= "form-control ${ WAXID }"
		id 			= "message-text ${ WAXID }"
		style 		= "width : 100%;height : 580px; background: transparent; color: white; resize: none; border: 0 none;"
		scrolling 	= "no"
	></textarea>
</th>
<th colspan="2" style="display: none; vertical-align: top; max-width: 486px;" id = "${ WAXID }-bl-panel-monitor">
	<div class="input-group bl-offchain-mainchain">
		<div class="input-group-text" style="width: inherit; justify-content: center; ">BRWL 0.0000 : WITH [0%] DEPO : BRWL 0.0000</div>
	</div>
</th>`
                                })
                            ); 
							
							
							
                            try{
                                window[WAXID].querySelector('input.pause_switch[type="checkbox"]').checked 	= !window['information-data']['DATA'][WAXID]['pause'] || false
                                window[WAXID].querySelector('input.eco_switch[type="checkbox"]').checked 	= window['information-data']['DATA'][WAXID]['lmlw']
                                window[WAXID].querySelector('input.resm_switch[type="checkbox"]').checked 	= window['information-data']['DATA'][WAXID]['resm']
                                //  (function (state){
                                //      if (!state){
                                //          return true
                                //      }else{
                                //          return false
                                //      }
                                //  })( window['information-data']['DATA'][WAXID]['state'] )
								
                                window[WAXID].querySelector('input.pause_switch[type="checkbox"]').addEventListener('change', function(e) {
                                    if (
                                        !$(this).attr('disabled')
                                    ){
                                        $(this).prop( "disabled", true ); $(this).attr('readonly', true);
                                        
                                        fetch(
                                            `/set?waxid=${this.parentElement.parentElement.parentElement.parentElement.parentElement.id}&pause=${!this.checked}`,
                                            {method : 'GET'}
                                        ).then(
                                            result => result.json()
                                        ).then(result => {
                                            if(result['text'] != 'okay'){ throw result }else{
                                                if (
                                                    result['code'] == true
                                                ){
                                                    this.checked = false; 
                                                    $(this).notify(
                                                        'PAUSE', 
                                                        "success", { position : "top" }
                                                    ); 
                                                }else{
                                                    this.checked = true; 
                                                    $(this).notify(
                                                        'RERUN', 
                                                        "success", { position : "top" }
                                                    ); 
                                                };
                                                (function (checkbox){
                                                    setTimeout(function(){ $(checkbox).prop( "disabled", false ); $(this).attr('readonly', false); }, 2000); 
                                                })(this); 
                                            }; 
                                        }).catch(error => {
                                            $.notify(`NOT : ${error}`, "error", { position : "top" }); 
                                            (function (checkbox){
                                                setTimeout(function(){ $(checkbox).prop( "disabled", false ); $(this).attr('readonly', false); }, 2000); checkbox.checked = !checkbox.checked;
                                            })(this); 
                                        }); 
                                    };
                                    //  if (this.checked) {
                                    //      console.log("Checkbox is checked..");
                                    //  }else{
                                    //      console.log("Checkbox is not checked..");
                                    //  }; 
                                });
                                //	window[WAXID].querySelector('input.eco_switch[type="checkbox"]').addEventListener('change', function(e) {
                                //	    if (
                                //	        !$(this).attr('disabled')
                                //	    ){
                                //	        $(this).prop( "disabled", true ); $(this).attr('readonly', true);
                                //	        
                                //	        fetch(
                                //	            `/eco/lmlw?waxid=${ this.parentElement.parentElement.parentElement.parentElement.parentElement.id }&value=${ this.checked }`,
                                //	            {method : 'GET'}
                                //	        ).then(
                                //	            result => result.json()
                                //	        ).then(result => {
                                //	            if(result['text'] != 'okay'){ throw result }else{
                                //	                if (
                                //	                    result['data'] == true
                                //	                ){
                                //	                    this.checked = true; 
                                //	                    $( this.parentElement.parentElement.parentElement.parentElement.parentElement ).notify(
                                //	                        'ECO MODE ON', 
                                //	                        "success", { position : "top" }
                                //	                    ); 
                                //	                }else{
                                //	                    this.checked = false; 
                                //	                    $( this.parentElement.parentElement.parentElement.parentElement.parentElement ).notify(
                                //	                        'ECO MODE NO', 
                                //	                        "error", { position : "top" }
                                //	                    ); 
                                //	                };
                                //	                (function (checkbox){
                                //	                    setTimeout(function(){ $(checkbox).prop( "disabled", false ); $(this).attr('readonly', false); }, 2000); 
                                //	                })(this); 
                                //	            }; 
                                //	        }).catch(error => {
                                //	            $.notify(`ECO MODE : ${ error['text'] }`, "error", { position : "top" }); 
                                //	            (function (checkbox){
                                //	                setTimeout(function(){ $(checkbox).prop( "disabled", false ); $(this).attr('readonly', false); }, 2000); checkbox.checked = !checkbox.checked;
                                //	            })(this); 
                                //	        }); 
                                //	    };
                                //	    //  if (this.checked) {
                                //	    //      console.log("Checkbox is checked..");
                                //	    //  }else{
                                //	    //      console.log("Checkbox is not checked..");
                                //	    //  }; 
                                //	});
                                window[WAXID].querySelector('input.resm_switch[type="checkbox"]').addEventListener('change', function(e) {
                                    if (
                                        !$(this).attr('disabled')
                                    ){
                                        $(this).prop( "disabled", true ); $(this).attr('readonly', true);
                                        
                                        fetch(
                                            `/resm?waxid=${ this.parentElement.parentElement.parentElement.parentElement.parentElement.id }&value=${ this.checked }`,
                                            {method : 'GET'}
                                        ).then(
                                            result => result.json()
                                        ).then(result => {
                                            if(result['text'] != 'okay'){ throw result }else{
                                                if (
                                                    result['data'] == true
                                                ){
                                                    this.checked = true; 
                                                    $( this ).notify(
                                                        'RES MODE ON', 
                                                        "success", { position : "top" }
                                                    ); 
                                                }else{
                                                    this.checked = false; 
                                                    $( this ).notify(
                                                        'RES MODE NO', 
                                                        "error", { position : "top" }
                                                    ); 
                                                };
                                                (function (checkbox){
                                                    setTimeout(function(){ $(checkbox).prop( "disabled", false ); $(this).attr('readonly', false); }, 2000); 
                                                })(this); 
                                            }; 
                                        }).catch(error => {
                                            $.notify(`RES MODE : ${ error['text'] }`, "error", { position : "top" }); 
                                            (function (checkbox){
                                                setTimeout(function(){ $(checkbox).prop( "disabled", false ); $(this).attr('readonly', false); }, 2000); checkbox.checked = !checkbox.checked;
                                            })(this); 
                                        }); 
                                    };
                                    //  if (this.checked) {
                                    //      console.log("Checkbox is checked..");
                                    //  }else{
                                    //      console.log("Checkbox is not checked..");
                                    //  }; 
                                });
                                window[WAXID].querySelector('button#delete').addEventListener('click', function(e) {
                                    if (
                                        !$(this).attr('disabled')
                                    ){
										
                                        $(this).prop( "disabled", true ); 
										
                                        fetch(`/off`, {
											method 		: 'POST', 
											headers 	: {
												"accept"        : "application/json",
												"content-type"  : "application/json"
											},
											body 		: JSON.stringify({
												"waxid" 	: this.parentElement.parentElement.parentElement.id
											})
										}).then(
                                            result => result.text()
                                        ).then(result => {
                                            if(result != 'okay'){ throw result }else{
                                                $(this).notify(
                                                    'DELETE DONE', 
                                                    "success", { position : "top" }
                                                ); 
                                                (function (button){
                                                    setTimeout(function(){ $(button).prop( "disabled", false ); }, 2000); 
                                                })(this); 
                                            }; 
                                        }).catch(error => {
                                            $.notify(`DELETE ERROR ${ error }`, "error", { position : "top" }); 
                                            (function (button){
                                                setTimeout(function(){ $(button).prop( "disabled", false ); }, 2000); 
                                            })(this); 
                                        }); 
                                    };
                                    //  if (this.checked) {
                                    //      console.log("Checkbox is checked..");
                                    //  }else{
                                    //      console.log("Checkbox is not checked..");
                                    //  }; 
                                });
								
								
								
                                window[WAXID].querySelector('input.ss_switch[type="checkbox"]').addEventListener('change', function(e) {
                                    if (
                                        !$(this).attr('disabled')
                                    ){
										
                                        $(this).prop( "disabled", true ); 
										
                                        fetch(`/vers/ss/set?waxid=${ this.parentElement.parentElement.parentElement.parentElement.parentElement.id }&switch=${ this.checked }`, 
											{method : 'GET'}
										).then(
                                            result => result.json()
                                        ).then(result => {
                                            if(result['text'] != 'okay'){ throw result }else{
                                                if (
                                                    result['data'] == true
                                                ){
                                                    this.checked = true; setTimeout(function(){ window.location.reload(true) }, 3000); 
                                                    $( this.parentElement.parentElement.parentElement.parentElement.parentElement ).notify(
                                                        'STARSHIP ON', 
                                                        "success", { position : "top" }
                                                    ); 
                                                }else{
                                                    this.checked = false; setTimeout(function(){ window.location.reload(true) }, 3000); 
                                                    $( this.parentElement.parentElement.parentElement.parentElement.parentElement ).notify(
                                                        'STARSHIP NO', 
                                                        "error", { position : "top" }
                                                    ); 
                                                };
                                                (function (checkbox){
                                                    setTimeout(function(){ $(checkbox).prop( "disabled", false ); $(this).attr('readonly', false); }, 2000); 
                                                })(this); 
                                            }; 
                                        }).catch(error => {
                                            $.notify(`STARSHIP : ${ error['text'] }`, "error", { position : "top" }); 
                                            (function (button){
                                                setTimeout(function(){ $(button).prop( "disabled", false ); }, 2000); 
                                            })(this); 
                                        }); 
                                    };
                                }); 
								document.querySelector(`th[id="${ WAXID }-ss-panel-monitor"]`).querySelector('div.input-group.ss-target-set button').addEventListener('click', function(e) {
                                    if (
                                        !$(this).attr('disabled')
                                    ){
										
                                        $(this).prop( "disabled", true ); 
										
                                        fetch(`/vers/ss/set?waxid=${ this.parentElement.parentElement.id.split('-')[0] }&target=${ this.parentElement.querySelector('div.input-group.ss-target-set input').value }`, 
											{method : 'GET'}
										).then(
                                            res => res.json()
                                        ).then(res => {
                                            if(res['text'] != 'okay'){ throw res }else{
                                                if (
                                                    res['code'] == 200
                                                ){
                                                    //	this.checked = true; setTimeout(function(){ window.location.reload(true) }, 3000); 
                                                    $( this.parentElement ).notify(
                                                        'PLANET TARGET SETUP', 
                                                        "success", { position : "top" }
                                                    ); 
                                                }else{
                                                    //	this.checked = false; setTimeout(function(){ window.location.reload(true) }, 3000); 
                                                    $( this.parentElement ).notify(
                                                        'PLANET TARGET UNSET', 
                                                        "error", { position : "top" }
                                                    ); 
                                                };
                                                (function (checkbox){
                                                    setTimeout(function(){ $(checkbox).prop( "disabled", false ); $(this).attr('readonly', false); }, 2000); 
                                                })(this); 
                                            }; 
                                        }).catch(error => {
                                            $.notify(`PLANET TARGET ERROR : ${ error['text'] }`, "error", { position : "top" }); 
                                            (function (button){
                                                setTimeout(function(){ $(button).prop( "disabled", false ); }, 2000); 
                                            })(this); 
                                        }); 
                                    };
                                });
								
                                window[WAXID].querySelector('input.fw_switch[type="checkbox"]').addEventListener('change', function(e) {
                                    if (
                                        !$(this).attr('disabled')
                                    ){
										
                                        $(this).prop( "disabled", true ); 
										
                                        fetch(`/vers/fw/set?waxid=${ this.parentElement.parentElement.parentElement.parentElement.parentElement.id }&switch=${ this.checked }`, 
											{method : 'GET'}
										).then(
                                            result => result.json()
                                        ).then(result => {
                                            if(result['text'] != 'okay'){ throw result }else{
                                                if (
                                                    result['data'] == true
                                                ){
                                                    this.checked = true; setTimeout(function(){ window.location.reload(true) }, 3000); 
                                                    $( this.parentElement.parentElement.parentElement.parentElement.parentElement ).notify(
                                                        'FARMER WORLDS ON', 
                                                        "success", { position : "top" }
                                                    ); 
                                                }else{
                                                    this.checked = false; setTimeout(function(){ window.location.reload(true) }, 3000); 
                                                    $( this.parentElement.parentElement.parentElement.parentElement.parentElement ).notify(
                                                        'FARMER WORLDS NO', 
                                                        "error", { position : "top" }
                                                    ); 
                                                };
                                                (function (checkbox){
                                                    setTimeout(function(){ $(checkbox).prop( "disabled", false ); $(this).attr('readonly', false); }, 2000); 
                                                })(this); 
                                            }; 
                                        }).catch(error => {
                                            $.notify(`FARMER WORLDS : ${ error['text'] }`, "error", { position : "top" }); 
                                            (function (button){
                                                setTimeout(function(){ $(button).prop( "disabled", false ); }, 2000); 
                                            })(this); 
                                        }); 
                                    };
                                });
								
                                window[WAXID].querySelector('input.kq_switch[type="checkbox"]').addEventListener('change', function(e) {
                                    if (
                                        !$(this).attr('disabled')
                                    ){
										
                                        $(this).prop( "disabled", true ); 
										
                                        fetch(`/vers/kq/set?waxid=${ this.parentElement.parentElement.parentElement.parentElement.parentElement.id }&switch=${ this.checked }`, 
											{method : 'GET'}
										).then(
                                            result => result.json()
                                        ).then(result => {
                                            if(result['text'] != 'okay'){ throw result }else{
                                                if (
                                                    result['data'] == true
                                                ){
                                                    this.checked = true; setTimeout(function(){ window.location.reload(true) }, 3000); 
                                                    $( this.parentElement.parentElement.parentElement.parentElement.parentElement ).notify(
                                                        'KRYPTON QUEST ON', 
                                                        "success", { position : "top" }
                                                    ); 
                                                }else{
                                                    this.checked = false; setTimeout(function(){ window.location.reload(true) }, 3000); 
                                                    $( this.parentElement.parentElement.parentElement.parentElement.parentElement ).notify(
                                                        'KRYPTON QUEST NO', 
                                                        "error", { position : "top" }
                                                    ); 
                                                };
                                                (function (checkbox){
                                                    setTimeout(function(){ $(checkbox).prop( "disabled", false ); $(this).attr('readonly', false); }, 2000); 
                                                })(this); 
                                            }; 
                                        }).catch(error => {
                                            $.notify(`KRYPTON QUEST : ${ error['text'] }`, "error", { position : "top" }); 
                                            (function (button){
                                                setTimeout(function(){ $(button).prop( "disabled", false ); }, 2000); 
                                            })(this); 
                                        }); 
                                    };
                                });
								
                                window[WAXID].querySelector('input.cc_switch[type="checkbox"]').addEventListener('change', function(e) {
                                    if (
                                        !$(this).attr('disabled')
                                    ){
										
                                        $(this).prop( "disabled", true ); 
										
                                        fetch(`/vers/cc/set?waxid=${ this.parentElement.parentElement.parentElement.parentElement.parentElement.id }&switch=${ this.checked }`, 
											{method : 'GET'}
										).then(
                                            result => result.json()
                                        ).then(result => {
                                            if(result['text'] != 'okay'){ throw result }else{
                                                if (
                                                    result['data'] == true
                                                ){
                                                    this.checked = true; setTimeout(function(){ window.location.reload(true) }, 3000); 
                                                    $( this.parentElement.parentElement.parentElement.parentElement.parentElement ).notify(
                                                        'COSMIC CLASH ON', 
                                                        "success", { position : "top" }
                                                    ); 
                                                }else{
                                                    this.checked = false; setTimeout(function(){ window.location.reload(true) }, 3000); 
                                                    $( this.parentElement.parentElement.parentElement.parentElement.parentElement ).notify(
                                                        'COSMIC CLASH NO', 
                                                        "error", { position : "top" }
                                                    ); 
                                                };
                                                (function (checkbox){
                                                    setTimeout(function(){ $(checkbox).prop( "disabled", false ); $(this).attr('readonly', false); }, 2000); 
                                                })(this); 
                                            }; 
                                        }).catch(error => {
                                            $.notify(`COSMIC CLASH : ${ error['text'] }`, "error", { position : "top" }); 
                                            (function (button){
                                                setTimeout(function(){ $(button).prop( "disabled", false ); }, 2000); 
                                            })(this); 
                                        }); 
                                    };
                                });
								
                                window[WAXID].querySelector('input.gx_switch[type="checkbox"]').addEventListener('change', function(e) {
                                    if (
                                        !$(this).attr('disabled')
                                    ){
										
                                        $(this).prop( "disabled", true ); 
										
                                        fetch(`/vers/gx/set?waxid=${ this.parentElement.parentElement.parentElement.parentElement.parentElement.id }&switch=${ this.checked }`, 
											{method : 'GET'}
										).then(
                                            result => result.json()
                                        ).then(result => {
                                            if(result['text'] != 'okay'){ throw result }else{
                                                if (
                                                    result['data'] == true
                                                ){
                                                    this.checked = true; setTimeout(function(){ window.location.reload(true) }, 3000); 
                                                    $( this.parentElement.parentElement.parentElement.parentElement.parentElement ).notify(
                                                        'GALAXY MINERS ON', 
                                                        "success", { position : "top" }
                                                    ); 
                                                }else{
                                                    this.checked = false; setTimeout(function(){ window.location.reload(true) }, 3000); 
                                                    $( this.parentElement.parentElement.parentElement.parentElement.parentElement ).notify(
                                                        'GALAXY MINERS NO', 
                                                        "error", { position : "top" }
                                                    ); 
                                                };
                                                (function (checkbox){
                                                    setTimeout(function(){ $(checkbox).prop( "disabled", false ); $(this).attr('readonly', false); }, 2000); 
                                                })(this); 
                                            }; 
                                        }).catch(error => {
                                            $.notify(`GALAXY MINERS : ${ error['text'] }`, "error", { position : "top" }); 
                                            (function (button){
                                                setTimeout(function(){ $(button).prop( "disabled", false ); }, 2000); 
                                            })(this); 
                                        }); 
                                    };
                                });
								
                                window[WAXID].querySelector('input.bl_switch[type="checkbox"]').addEventListener('change', function(e) {
                                    if (
                                        !$(this).attr('disabled')
                                    ){
										
                                        $(this).prop( "disabled", true ); 
										
                                        fetch(`/vers/bl/set?waxid=${ this.parentElement.parentElement.parentElement.parentElement.parentElement.id }&switch=${ this.checked }`, 
											{method : 'GET'}
										).then(
                                            result => result.json()
                                        ).then(result => {
                                            if(result['text'] != 'okay'){ throw result }else{
                                                if (
                                                    result['data'] == true
                                                ){
                                                    this.checked = true; setTimeout(function(){ window.location.reload(true) }, 3000); 
                                                    $( this.parentElement.parentElement.parentElement.parentElement.parentElement ).notify(
                                                        'BLOCKCHAIN BRAWLERS ON', 
                                                        "success", { position : "top" }
                                                    ); 
                                                }else{
                                                    this.checked = false; setTimeout(function(){ window.location.reload(true) }, 3000); 
                                                    $( this.parentElement.parentElement.parentElement.parentElement.parentElement ).notify(
                                                        'BLOCKCHAIN BRAWLERS NO', 
                                                        "error", { position : "top" }
                                                    ); 
                                                };
                                                (function (checkbox){
                                                    setTimeout(function(){ $(checkbox).prop( "disabled", false ); $(this).attr('readonly', false); }, 2000); 
                                                })(this); 
                                            }; 
                                        }).catch(error => {
                                            $.notify(`BLOCKCHAIN BRAWLERS : ${ error['text'] }`, "error", { position : "top" }); 
                                            (function (button){
                                                setTimeout(function(){ $(button).prop( "disabled", false ); }, 2000); 
                                            })(this); 
                                        }); 
                                    };
                                });
								
								
								
                            }catch(e){}; 
							
                            try{ document.querySelector(`tr[id*="${WAXID}"]`).setAttribute('class', 'align-middle') }catch(e){}; 

                            (function thiscode(w){
                                setTimeout(function () {
                                    w.innerText = `${Number(w.innerText.split('/')[0]) + 1}/s`; thiscode(w); 
                                }, 1000); 
                            })( window[WAXID].querySelector('[id*="lastminedelay"]') ); 
							
                            (function thiscode(w, endpoint){
                                if (
                                    (
                                        Math.ceil(Math.random() * 100) >= 32 ||
                                        w.querySelector('span[id="tlmperday"]').innerText.match("0.0000/h")
                                    ) && 
                                    window[ w.id ].querySelector('input').checked == true && 
                                    document.querySelector('button.btn.btn-primary.pau') && 
                                    document.querySelector('button.btn.btn-primary.pau').getAttribute('value') == 'PAUSE'
                                ){
                                    //  if (
                                    //      Math.ceil(Math.random() * 100) >= 80
                                    //  ){
                                    //      fetch("https://cors.bridged.cc/https://wax.greymass.com/v1/history/get_actions", {
                                    //          "headers"   : {
                                    //              "accept"        : "application/json",
                                    //              "content-type"  : "application/json"
                                    //          },
                                    //          "body"      : `{\"account_name\":\"${w.id}\",\"pos\":0,\"offset\":0,\"filter\":\"string\",\"sort\":\"desc\",\"after\":\"${ 2021-09-06T10:19:30.419Z }\",\"before\":\"${ 2021-09-06T11:19:30.419Z }\",\"parent\":0}`,
                                    //          "method"    : "POST",
                                    //      });
                                    //  
                                    //  }; 
                                    fetch(`https://${
										endpoint['url']
                                    }/v2/history/get_actions?account=${
                                        w.id
                                    }&skip=0&limit=100&sort=desc&transfer.to=${
                                        w.id
                                    }&transfer.from=m.federation&after=${
                                        (new Date(Date.now() - (86400000 / 24 * 1.25))).toJSON()
                                    }&before=${
                                        new Date().toJSON()
                                    }`, {
										"headers" 	: endpoint['headers'], 
                                        "method" 	: 'GET'
									}).then(
                                        result => result.json()
                                    ).then(result => {
                                        if(
                                            result['actions'].length >= 1
                                        ){
                                            window[w.id].TLM = {
                                                'amount' : 0.0000, 
                                                'length' : 0
                                            }; for (x of result['actions']){
                                                try{
                                                    window[w.id].TLM['amount'] += x['act']['data']['amount']
                                                    window[w.id].TLM['length'] += 1
                                                }catch(e){}; 
                                            }; 
                                            window[w.id].querySelector('span[id="tlmperday"]').innerText = `${ window[w.id].TLM['amount'].toFixed(4) }/h [${ window[w.id].TLM['length'] }]`; 
											setTimeout(function(){ thiscode(
												w, (function (a) {return a[Math.floor((Math.random()*a.length))]})( window['waxserver']['endpoint'] )
											) }, 16000); try{ delete window.TLM }catch(e){}; 
                                        }else{
                                            window[w.id].TLM = {
                                                'amount' : (window[w.id].TLM || {'amount' : 0.0000})['amount'], 
                                                'length' : (window[w.id].TLM || {'length' : 0})['length']
                                            }; //   window[w.id].TLM['amount'] = window[w.id].TLM || 0.0000; window[w.id].TLM = window[w.id].TLM || 0.0000
											setTimeout(function(){ thiscode(
												w, (function (a) {return a[Math.floor((Math.random()*a.length))]})( window['waxserver']['endpoint'] )
											) }, 16000); try{ delete window.TLM }catch(e){}; 
                                        }; 
                                    }).catch(error => {
                                        //  console.error(`Error : ${ error }`); 
										setTimeout(function(){ thiscode(
											w, (function (a) {return a[Math.floor((Math.random()*a.length))]})( window['waxserver']['endpoint'] )
										) }, 16000); try{ delete window.TLM }catch(e){}; 
                                    }); 
                                }else{
                                    setTimeout(function(){ thiscode(
										w, (function (a) {return a[Math.floor((Math.random()*a.length))]})( window['waxserver']['endpoint'] )
									) }, 16000); 
                                }; 
                            })(
                                window[WAXID], 
								(function (a) {return a[Math.floor((Math.random()*a.length))]})( window['waxserver']['endpoint'] )
                            ); 
                        }catch(e){}; 
                        
                        try{
                            document.querySelector(`tr[id*="${ WAXID }"]`).querySelector('span[id="waxid"]').parentElement.setAttribute(
                                'title', `${ WAXID }`
                            ); 
                        }catch(e){}; 
                        try{
                            document.querySelector(`tr[id*="${ WAXID }"]`).querySelector('span[id="waxid"]').parentElement.setAttribute(
                                'class', 'text-nowrap overflow-hidden'
                            ); 
                        }catch(e){}; 
                        try{
                            document.querySelector(`tr[id*="${ WAXID }"]`).querySelector('span[id="waxid"]').parentElement.setAttribute(
                                'data-toggle', `tooltip`
                            ); 
                        }catch(e){}; 
                        try{
                            document.querySelector(`tr[id*="${ WAXID }"]`).querySelector('span[id="waxid"]').parentElement.setAttribute(
                                'data-bs-placement', `top`
                            ); 
                        }catch(e){}; 
                        try{
                            document.querySelector(`tr[id*="${ WAXID }"]`).querySelector('span[id="waxid"]').parentElement.setAttribute(
                                'data-bs-original-title', `${ WAXID }`
                            ); 
                        }catch(e){}; 
                        try{
                            document.querySelector(`tr[id*="${ WAXID }"]`).querySelector('span[id="waxid"]').setAttribute(
                                'data-waxid', document.querySelector(`tr[id*="${ WAXID }"]`).querySelector('span[id="waxid"]').innerText
                            ); 
                        }catch(e){}; 
                        try{
                            document.querySelector(`tr[id*="${ WAXID }"]`).querySelector('span[id="waxid"]').setAttribute(
                                'onmouseover', `this.innerText = '${ WAXID.replace('.wam', '.') }';`
                            ); 
                        }catch(e){}; 
                        try{
                            document.querySelector(`tr[id*="${ WAXID }"]`).querySelector('span[id="waxid"]').setAttribute(
                                'onmouseout', `this.innerText = this.getAttribute('data-waxid');`
                            ); 
                        }catch(e){}; 
						try{
							window[ WAXID ].querySelector('input[class*="form-check-input ss_switch"]').checked = window['information-data']["DATA"][ WAXID ]['vers']['ss']["sw"]; 
						}catch(e){ }; 
						try{
							window[ WAXID ].querySelector('input[class*="form-check-input fw_switch"]').checked = window['information-data']["DATA"][ WAXID ]['vers']['fw']["sw"]; 
						}catch(e){ }; 
						try{
							window[ WAXID ].querySelector('input[class*="form-check-input kq_switch"]').checked = window['information-data']["DATA"][ WAXID ]['vers']['kq']["sw"]; 
						}catch(e){ }; 
						try{
							window[ WAXID ].querySelector('input[class*="form-check-input cc_switch"]').checked = window['information-data']["DATA"][ WAXID ]['vers']['cc']["sw"]; 
						}catch(e){ }; 
						try{
							window[ WAXID ].querySelector('input[class*="form-check-input gx_switch"]').checked = window['information-data']["DATA"][ WAXID ]['vers']['gx']["sw"]; 
						}catch(e){ }; 
						try{
							window[ WAXID ].querySelector('input[class*="form-check-input bl_switch"]').checked = window['information-data']["DATA"][ WAXID ]['vers']['bl']["sw"]; 
						}catch(e){ }; 
                        //  try{ $('[data-toggle="tooltip"]').tooltip() }catch(e){}; 
                        
                        (function thiscode(ID){
							setTimeout(function(){
								fetch(`https://api-wax.eosauthority.com/v1/chain/get_table_rows`, {
									method  : 'POST',
									body    : JSON.stringify({
										"json"          : true, 
										"code"          : "m.federation", 
										"scope"         : "m.federation", 
										"table"         : "claims", 
										"lower_bound"   : ID, 
										"upper_bound"   : ID
									}),
									header: {}
								}).then(function (result) { return result.json() }).then((result) => {
									if (Array.isArray(result.rows) && result.rows.length) {
										if(
											window[ID] && window[ID].hasAttributes('classList') &&  
											!window[ID].querySelector('button[data-bs-target="#boxNFT"]').classList.contains("blink-okay")
										){
											setTimeout(function(){ thiscode(ID) }, 600000); 
											window[ID].querySelector('button[data-bs-target="#getNFT"]').classList.add('blink-okay'); 
											window[ID].querySelector('button[data-bs-target="#getNFT"]')['claim'] = result.rows; 
											
											window[ID].querySelector('button[data-bs-target="#getNFT"]')['claim'][0]['template_ids'][0].forEach(function (id){
												console.log(`MINER ${ window[ID].querySelector('button[data-bs-target="#getNFT"]')['claim'][0]['miner'] } : ${id}`); 
												//  fetch(`https://wax.blokcrafters.io/atomicassets/v1/templates/alien.worlds/${ id }`, {
												//      "headers"   : {},
												//      "body"      : null,
												//      "method"    : "GET",
												//  }); 
												//  
												//  {"success":true,"data":{"contract":"atomicassets","template_id":"19553","is_transferable":true,"is_burnable":true,"issued_supply":"376762","max_supply":"0","collection":{"collection_name":"alien.worlds","name":"Alien Worlds","img":"QmZBpRKm5qigpfDdYgxtcefZ7Cn3GeWHCMBEsk6wYXP4gg","author":"federation","allow_notify":true,"authorized_accounts":["federation","open.worlds","terra.worlds","m.federation","s.federation"],"notify_accounts":["federation","m.federation"],"market_fee":0.01,"created_at_block":"70292143","created_at_time":"1596576277500"},"schema":{"schema_name":"tool.worlds","format":[{"name":"cardid","type":"uint16"},{"name":"name","type":"string"},{"name":"img","type":"image"},{"name":"backimg","type":"image"},{"name":"rarity","type":"string"},{"name":"shine","type":"string"},{"name":"material_grade","type":"uint64"},{"name":"type","type":"string"},{"name":"delay","type":"uint16"},{"name":"difficulty","type":"uint8"},{"name":"ease","type":"uint16"},{"name":"luck","type":"uint16"},{"name":"last_mine","type":"uint32"}],"created_at_block":"81610774","created_at_time":"1602238106500"},"immutable_data":{"img":"QmVUZHpUkc3PuLkJ7BDvJ3S3AgDySjsqWQib1sVKziHCbS","ease":20,"luck":7,"name":"Standard Drill","type":"Extractor","delay":120,"shine":"Stone","cardid":2,"rarity":"Abundant","backimg":"QmaUNXHeeFvMGD4vPCC3vpGTr77tJvBHjh1ndUm4J7o4tP","difficulty":1},"created_at_time":"1602238108000","created_at_block":"81610777","name":"Standard Drill"},"query_time":1631813304860}
											}); 
											
										}else{
											if( window[ID] && window[ID].hasAttributes('classList') ){
												setTimeout(function(){ thiscode(ID) }, 600000); 
												window[ID].querySelector('button[data-bs-target="#getNFT"]')['claim'] = result.rows; 
											}; 
										}; 
									}else{
										if( window[ID] && window[ID].hasAttributes('classList') ){
											window[ID].querySelector('button[data-bs-target="#getNFT"]').classList.remove('blink-okay'); 
											setTimeout(function(){ thiscode(ID) }, 600000); 
										}; 
									}; 
								}).catch((err) => {
									if( window[ID] && window[ID].hasAttributes('classList') ){
										window[ID].querySelector('button[data-bs-target="#getNFT"]').classList.remove('blink-okay'); 
										setTimeout(function(){ thiscode(ID) }, 60000); 
									}; 
								}); 
							}, 500 + Math.ceil(Math.random() * 10000)); 
                        })(WAXID); 
                        //	(function thiscode(ID){
						//		setTimeout(function(){
						//			//	fetch(`https://${ $( document.querySelector('select[aria-label*="Endpoint"]') ).find("option:selected").val() }/v1/chain/get_table_rows`, {
						//			//	  "headers": {},
						//			//	  "body": JSON.stringify({
						//			//	      "json"              : true,
						//			//	      "code"              : "token.worlds",
						//			//	      "scope"             : event.relatedTarget.parentNode.parentNode.id,
						//			//	      "table"             : "accounts",
						//			//	      "table_key"         : "",
						//			//	      "lower_bound"       : "",
						//			//	      "upper_bound"       : "",
						//			//	      "index_position"    : 1,
						//			//	      "key_type"          : "",
						//			//	      "limit"             : 1,
						//			//	      "reverse"           : false,
						//			//	      "show_payer"        : false
						//			//	  }),
						//			//	  "method": "POST",
						//			//	}).then(
						//			//	    result => result.json()
						//			//	).then(result => {
						//			//	    
						//			//	    for (x in result['rows']){
						//			//	        document.querySelector('div.modal.fade#transferWax').querySelector(`[value*="${ result['rows'][x]['balance'].split(' ')[1] }-alien.worlds"]`).setAttribute(
						//			//	            'val', result['rows'][x]['balance'].split(' ')[0]
						//			//	        ); 
						//			//	    }
						//			//	    
						//			//	}).catch(error => {
						//			//	    console.debug( error ); 
						//			//	}); 
						//			fetch(`https://${ $( document.querySelector('select[aria-label*="Endpoint"]') ).find("option:selected").val() }/v1/chain/get_table_rows`, {
						//				method  : 'POST',
						//				body    : JSON.stringify({
						//					"json"              : true,
						//					"code"              : "token.worlds",
						//					"scope"             : ID,
						//					"table"             : "accounts",
						//					"table_key"         : "",
						//					"lower_bound"       : "",
						//					"upper_bound"       : "",
						//					"index_position"    : 1,
						//					"key_type"          : "",
						//					"limit"             : 1,
						//					"reverse"           : false,
						//					"show_payer"        : false
						//				}),
						//				header: {}
						//			}).then(function (res) { return res.json() }).then((res) => {
						//				console.debug( res ); 
						//				//	if (Array.isArray(res.rows) && res.rows.length) {
						//				//	    if(
						//				//	        window[ID] && window[ID].hasAttributes('classList') &&  
						//				//	        !window[ID].querySelector('button[data-bs-target="#boxNFT"]').classList.contains("blink-okay")
						//				//	    ){
						//				//	        setTimeout(function(){ thiscode(ID) }, 600000); 
						//				//	        window[ID].querySelector('button[data-bs-target="#getNFT"]').classList.add('blink-okay'); 
						//				//	        window[ID].querySelector('button[data-bs-target="#getNFT"]')['claim'] = res.rows; 
						//				//	        
						//				//	        window[ID].querySelector('button[data-bs-target="#getNFT"]')['claim'][0]['template_ids'][0].forEach(function (id){
						//				//	            console.log(`MINER ${ window[ID].querySelector('button[data-bs-target="#getNFT"]')['claim'][0]['miner'] } : ${id}`); 
						//				//	            //  fetch(`https://wax.blokcrafters.io/atomicassets/v1/templates/alien.worlds/${ id }`, {
						//				//	            //      "headers"   : {},
						//				//	            //      "body"      : null,
						//				//	            //      "method"    : "GET",
						//				//	            //  }); 
						//				//	            //  
						//				//	            //  {"success":true,"data":{"contract":"atomicassets","template_id":"19553","is_transferable":true,"is_burnable":true,"issued_supply":"376762","max_supply":"0","collection":{"collection_name":"alien.worlds","name":"Alien Worlds","img":"QmZBpRKm5qigpfDdYgxtcefZ7Cn3GeWHCMBEsk6wYXP4gg","author":"federation","allow_notify":true,"authorized_accounts":["federation","open.worlds","terra.worlds","m.federation","s.federation"],"notify_accounts":["federation","m.federation"],"market_fee":0.01,"created_at_block":"70292143","created_at_time":"1596576277500"},"schema":{"schema_name":"tool.worlds","format":[{"name":"cardid","type":"uint16"},{"name":"name","type":"string"},{"name":"img","type":"image"},{"name":"backimg","type":"image"},{"name":"rarity","type":"string"},{"name":"shine","type":"string"},{"name":"material_grade","type":"uint64"},{"name":"type","type":"string"},{"name":"delay","type":"uint16"},{"name":"difficulty","type":"uint8"},{"name":"ease","type":"uint16"},{"name":"luck","type":"uint16"},{"name":"last_mine","type":"uint32"}],"created_at_block":"81610774","created_at_time":"1602238106500"},"immutable_data":{"img":"QmVUZHpUkc3PuLkJ7BDvJ3S3AgDySjsqWQib1sVKziHCbS","ease":20,"luck":7,"name":"Standard Drill","type":"Extractor","delay":120,"shine":"Stone","cardid":2,"rarity":"Abundant","backimg":"QmaUNXHeeFvMGD4vPCC3vpGTr77tJvBHjh1ndUm4J7o4tP","difficulty":1},"created_at_time":"1602238108000","created_at_block":"81610777","name":"Standard Drill"},"query_time":1631813304860}
						//				//	        }); 
						//				//	        
						//				//	    }else{
						//				//	        if( window[ID] && window[ID].hasAttributes('classList') ){
						//				//	            setTimeout(function(){ thiscode(ID) }, 600000); 
						//				//	            window[ID].querySelector('button[data-bs-target="#getNFT"]')['claim'] = res.rows; 
						//				//	        }; 
						//				//	    }; 
						//				//	}else{
						//				//	    if( window[ID] && window[ID].hasAttributes('classList') ){
						//				//	        window[ID].querySelector('button[data-bs-target="#getNFT"]').classList.remove('blink-okay'); 
						//				//	        setTimeout(function(){ thiscode(ID) }, 600000); 
						//				//	    }; 
						//				//	}; 
						//			}).catch((err) => {
						//				console.debug( err ); 
						//				//	if( window[ID] && window[ID].hasAttributes('classList') ){
						//				//	    window[ID].querySelector('button[data-bs-target="#getNFT"]').classList.remove('blink-okay'); 
						//				//	    setTimeout(function(){ thiscode(ID) }, 60000); 
						//				//	}; 
						//			}); 
						//		}, 100 + Math.ceil(Math.random() * 4000)); 
                        //	})(WAXID); 
                    }else{
						
						(function (_WAXID){
							
							setTimeout(function(){
								try{ window[_WAXID].querySelector('[id*="lastminedelay"]').innerText     = `${ window['information-data']['DATA'][_WAXID]['cooldown'] }/s`}catch(e){}; 
								//  try{ window[_WAXID].querySelector('[id*="lastminestamp"]').innerText     = `${ window['information-data']['DATA'][_WAXID]['last_mine']['time'].replace('T', ' ') }`}catch(e){}; 
								try{
									//  window[_WAXID].querySelector('[id*="lastminestamp"]').innerText          = (new Date( `${ window['information-data']['DATA'][_WAXID]['last_mine']['time'].replace('T', ' ') } +0000` ).toLocaleString("en-US", {timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone, year : 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', hour12: false, minute:'2-digit', second:'2-digit'}))
									window[_WAXID].querySelector('[id*="lastminestamp"]').innerText          = (new Date(
										`${ window['information-data']['DATA'][_WAXID]['last_mine']['time'].replace('T', ' ') }+0000`
									).toLocaleString(
										"en-US", {
											timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone, 
											year    : 'numeric', 
											month   : '2-digit', 
											day     : '2-digit', 
											hour    : '2-digit', 
											hour12  : false, 
											minute  : '2-digit', 
											second  : '2-digit'
										}
									))
								}catch(e){}; 
								try{ window[_WAXID].querySelector('[id*="cpustake"]').innerText          = `${ window['information-data']['DATA'][_WAXID]['cpu']['stake']['alls'].toString().split('.')[0] } WAX`}catch(e){}; 
								try{ window[_WAXID].querySelector('[id*="cpu_prg"]').innerText           = `CPU ${ (100 - Number(window['information-data']['DATA'][_WAXID]['cpu']['per'])) }% ${ window['information-data']['DATA'][_WAXID]['cpu']['max']}`}catch(e){}; 
								try{ window[_WAXID].querySelector('[id*="cpu_prg"]').style.width         = `${ (100 - Number(window['information-data']['DATA'][_WAXID]['cpu']['per'])) }%`}catch(e){}; 
								try{ window[_WAXID].querySelector('[id*="cpu_prg"]').setAttribute(
									'aria-valuenow', 0
								)}catch(e){}; 
								try{ window[_WAXID].querySelector('[id*="cpu_prg"]').setAttribute(
									'aria-valuemax', `${ window['information-data']['DATA'][_WAXID]['cpu']['max'] }`
								)}catch(e){}; 
								try{ window[_WAXID].querySelector('[id*="net_prg"]').innerText           = `NET ${ (window['information-data']['DATA'][_WAXID]['net']['total']['use'] * 100 / window['information-data']['DATA'][_WAXID]['net']['total']['max']).toFixed(2) }%`}catch(e){}; 
								try{ window[_WAXID].querySelector('[id*="net_prg"]').style.width         = `${ Number(window['information-data']['DATA'][_WAXID]['net']['total']['use'] * 100 / window['information-data']['DATA'][_WAXID]['net']['total']['max']) }%`}catch(e){}; 
								try{ window[_WAXID].querySelector('[id*="net_prg"]').setAttribute(
									'aria-valuenow', 0
								)}catch(e){}; 
								try{ window[_WAXID].querySelector('[id*="net_prg"]').setAttribute(
									'aria-valuemax', `${ window['information-data']['DATA'][_WAXID]['net']['total']['max'] }`
								)}catch(e){}; 
								try{ window[_WAXID].querySelector('[id*="ram_prg"]').innerText           = `RAM ${ (window['information-data']['DATA'][_WAXID]['ram']['total']['use'] * 100 / window['information-data']['DATA'][_WAXID]['ram']['total']['max']).toFixed(2) }%`}catch(e){}; 
								try{ window[_WAXID].querySelector('[id*="ram_prg"]').style.width         = `${ Number(window['information-data']['DATA'][_WAXID]['ram']['total']['use'] * 100 / window['information-data']['DATA'][_WAXID]['ram']['total']['max']) }%`}catch(e){}; 
								try{ window[_WAXID].querySelector('[id*="ram_prg"]').setAttribute(
									'aria-valuenow', 0
								)}catch(e){}; 
								try{ window[_WAXID].querySelector('[id*="ram_prg"]').setAttribute(
									'aria-valuemax', `${ window['information-data']['DATA'][_WAXID]['ram']['total']['max'] }`
								)}catch(e){}; 
								
								try{ window[_WAXID].querySelector('[id*="waxbalance"]').innerText        = `${ Number( window['information-data']['DATA'][_WAXID]['balance']['WAX'] ).toFixed(4) }`}catch(e){}; 
								try{ window[_WAXID].querySelector('[id*="tlmbalance"]').innerText        = `${ Number( window['information-data']['DATA'][_WAXID]['balance']['TLM'] ).toFixed(4) }`}catch(e){}; 
								try{
									if (
										window[_WAXID].querySelector('[id*="land"]').getAttribute('type') == 'submit'
									){
										window[_WAXID].querySelector('[id*="land"]').innerText           = `${ window['information-data']['DATA'][_WAXID]['land']['id'].replace(/(^)1099512/gi, '') } : ${ window['information-data']['DATA'][_WAXID]['land']['commission'].toFixed(2) }`
									}; 
								}catch(e){
									
								}; 
								try{ window[_WAXID].querySelector('[id*="lasttlm"]').innerText           = `${ window['information-data']['DATA'][_WAXID]['last_mine']['mine'] }`}catch(e){}; 
								try{ window[_WAXID].querySelector('[id*="lastcpu"]').innerText           = `${ window['information-data']['DATA'][_WAXID]['cpu']['last_cpu_usage'] }us`}catch(e){}; 
								//	try{ window[_WAXID].querySelector('[id*="state"]').innerHTML             = `${ window['information-data']['DATA'][_WAXID]['text'][ window['information-data']['DATA'][_WAXID]['text']['step'] ] }`}catch(e){}; 
								try{ window[_WAXID].querySelector('[id*="state"]').className             = `${ window['information-data']['DATA'][_WAXID]['text'][ window['information-data']['DATA'][_WAXID]['text']['step'] ]['class'] }`}catch(e){}; 
								try{ window[_WAXID].querySelector('[id*="state"]').innerText             = `${ window['information-data']['DATA'][_WAXID]['text'][ window['information-data']['DATA'][_WAXID]['text']['step'] ]['text'] }`}catch(e){}; 
								try{ window[_WAXID].querySelector('[id*="maximumcooldown"]').innerText   = `${ parseInt( window['information-data']['DATA'][_WAXID]['maxdelay'] ) }/s`}catch(e){}; 
								
								try{
									//	window[_WAXID].querySelector('input[type="checkbox"]').checked = !window['information-data']['DATA'][_WAXID]['pause'] || false
									window[WAXID].querySelector('input.pause_switch[type="checkbox"]').checked 	= !window['information-data']['DATA'][WAXID]['pause'] || false
								}catch(e){}; 
								try{
									window[WAXID].querySelector('input.eco_switch[type="checkbox"]').checked 	= window['information-data']['DATA'][WAXID]['lmlw']
								}catch(e){}; 
								try{
									window[WAXID].querySelector('input.resm_switch[type="checkbox"]').checked 	= window['information-data']['DATA'][WAXID]['resm']
								}catch(e){}; 
								
								try{
									window['total'] = {
										'Stake'     : 0, 
										'Profit'    : {
											'wax' : 0,
											'tlm' : 0, 
											'day' : 0
										}, 
									}; 
									for (x in window['information-data']['DATA']){
										window['total']['Stake']                += window['information-data']['DATA'][ x ]['cpu']['stake']['alls']
										window['total']['Profit']['wax']        += Number(
											window['information-data']['DATA'][ x ]['balance']['WAX']
										); 
										window['total']['Profit']['tlm']        += Number(
											window['information-data']['DATA'][ x ]['balance']['TLM']
										); 
										try{
											window['total']['Profit']['day']    += window[x].TLM['amount']
										}catch(e){}
									}; 
								}catch(e){}; 
								
								try{
									if(
										window['coinMarketCap'] && window['coinMarketCap'].getAttribute('wax')
									){
										TotalStake.innerText = `${ ( Number( window['coinMarketCap'].getAttribute('wax') ) * window['total']['Stake'] ).toFixed(2) } THB : ${ window['total']['Stake'].toFixed(1) } WAX`
									}else{
										TotalStake.innerText = `0.0 THB : 0.0 WAX`
									};
								}catch(e){
									TotalStake.innerText = `0.0 THB : 0.0 WAX`
								}; 
								try{
									if(
										window['coinMarketCap'] && 
										window['coinMarketCap'].getAttribute('wax') && 
										window['coinMarketCap'].getAttribute('tlm')
									){
										TotalProfit.innerText = `${ (Number(( Number( window['coinMarketCap'].getAttribute('wax') ) * window['total']['Profit']['wax'] ).toFixed(2)) + Number(( Number( window['coinMarketCap'].getAttribute('tlm') ) * window['total']['Profit']['tlm'] ).toFixed(2))).toFixed(2) } THB : ${ window['total']['Profit']['wax'].toFixed(2) } WAX, ${ window['total']['Profit']['tlm'].toFixed(4) } TLM`
									}else{
										TotalProfit.innerText = `0.0 THB : 0.0 WAX | 0.0 THB : 0.0 TLM`
									};
								}catch(e){
									TotalProfit.innerText = `0.0 THB : 0.0 WAX | 0.0 THB : 0.0 TLM`
								}; 
								try{
									if(
										window['coinMarketCap'] && 
										window['coinMarketCap'].getAttribute('wax') && 
										window['coinMarketCap'].getAttribute('tlm') && 
										window['total']['Profit']['day'] >= 0.0001
									){
										TotalTLMPerHour.innerText = ` ${ Number(Number( window['total']['Profit']['day'] ) * Number( window['coinMarketCap'].getAttribute('tlm') )).toFixed(2) } THB/h : ${ Number( window['total']['Profit']['day'] ).toFixed(4) } TLM/h`
									}else{
										TotalTLMPerHour.innerText = `0.00 THB/h : 0.0000 TLM/h`
									};
								}catch(e){
									TotalTLMPerHour.innerText = `0.00 THB/h : 0.0000 TLM/h`
								}; 
								try{
									if(
										window['information-data']["DATA"][ _WAXID ]['vers']['fw']["sw"] == true && 
										Object.keys( window['information-data']['DATA'] ).length >= 1 && 
										!document.querySelector(`iframe[src*="farmersworld.idigger.online/affiliate?waxid=${ _WAXID }"]`) 
									){
										document.querySelector(`iframe[url*="farmersworld.idigger.online/affiliate?waxid=${ _WAXID }"]`).setAttribute(
											'src', document.querySelector(`iframe[url*="farmersworld.idigger.online/affiliate?waxid=${ _WAXID }"]`).getAttribute('url')
										); 
										document.querySelector(`iframe[url*="farmersworld.idigger.online/affiliate?waxid=${ _WAXID }"]`).parentElement.parentElement.querySelector('th[colspan*="7"]').style.display = 'table-cell'; 
										document.querySelector(`iframe[url*="farmersworld.idigger.online/affiliate?waxid=${ _WAXID }"]`).parentElement.parentElement.querySelector('th[colspan*="2"]').style.display = 'table-cell'; 
										
									}; 
									if(
										window['information-data']["DATA"][ _WAXID ]['vers']['fw']["sw"] == true && 
										Object.keys( window['information-data']['DATA'] ).length >= 1 && 
										document.querySelector(`iframe[src*="farmersworld.idigger.online/affiliate?waxid=${ _WAXID }"]`) 
									){
										try{
											document.querySelector('th[id*="' + _WAXID + '-fw-panel-monitor"]').querySelector('input.fw-auto-plant-switch').checked 		= window['information-data']['DATA'][_WAXID]['vers']['fw']['cf']['auto_plants'][0]; 
										}catch(e){ }; 
										try{
											document.querySelector('th[id*="' + _WAXID + '-fw-panel-monitor"]').querySelector('input.fw-auto-plant-corn-input').value 		= window['information-data']['DATA'][_WAXID]['vers']['fw']['cf']['auto_plants'][1]; 
										}catch(e){ }; 
										try{
											document.querySelector('th[id*="' + _WAXID + '-fw-panel-monitor"]').querySelector('input.fw-auto-plant-barley-input').value 	= window['information-data']['DATA'][_WAXID]['vers']['fw']['cf']['auto_plants'][2]; 
										}catch(e){ }; 
										
										try{
											document.querySelector('th[id*="' + _WAXID + '-fw-panel-monitor"]').querySelector('input.fw-feature-mbr-mine-switch').checked 	= window['information-data']['DATA'][_WAXID]['vers']['fw']['cf']['mbr_mine']; 
										}catch(e){ }; 
										try{
											document.querySelector('th[id*="' + _WAXID + '-fw-panel-monitor"]').querySelector('input.fw-feature-eco-mine-switch').checked 	= window['information-data']['DATA'][_WAXID]['vers']['fw']['cf']['eco_mine']; 
										}catch(e){ }; 
										try{
											document.querySelector('th[id*="' + _WAXID + '-fw-panel-monitor"]').querySelector('input.fw-feature-fee-mine-switch').checked 	= window['information-data']['DATA'][_WAXID]['vers']['fw']['cf']['fee_mine']; 
										}catch(e){ }; 
										
										try{
											document.querySelector(
												'th[id*="' + _WAXID + '-fw-panel-monitor"]'
											).querySelector(
												'div.fw-deposit-fwf-text'
											).innerText = 'DEPOSIT FWF ' + ( '0000' + window['information-data']['DATA'][_WAXID]['vers']['fw']['cf']['auto_depo_fwf'][1] ).slice(-'0000'.length); 
										}catch(e){ }; 
										try{
											document.querySelector('th[id*="' + _WAXID + '-fw-panel-monitor"]').querySelector('input.fw-deposit-fwf-switch').checked 		= window['information-data']['DATA'][_WAXID]['vers']['fw']['cf']['auto_depo_fwf'][0]; 
											document.querySelector('th[id*="' + _WAXID + '-fw-panel-monitor"]').querySelector('input.fw-deposit-fwf-input').value 			= window['information-data']['DATA'][_WAXID]['vers']['fw']['cf']['auto_depo_fwf'][1]; 
										}catch(e){ }; 
										try{
											document.querySelector('th[id*="' + _WAXID + '-fw-panel-monitor"]').querySelector('input.fw-deposit-fwg-switch').checked 		= window['information-data']['DATA'][_WAXID]['vers']['fw']['cf']['auto_depo_fwg'][0]; 
											document.querySelector('th[id*="' + _WAXID + '-fw-panel-monitor"]').querySelector('input.fw-deposit-fwg-input').value 			= window['information-data']['DATA'][_WAXID]['vers']['fw']['cf']['auto_depo_fwg'][1]; 
										}catch(e){ }; 
										try{
											document.querySelector('th[id*="' + _WAXID + '-fw-panel-monitor"]').querySelector('input.fw-withdraw-fww-switch').checked 		= window['information-data']['DATA'][_WAXID]['vers']['fw']['cf']['auto_with_fww'][0]; 
											document.querySelector('th[id*="' + _WAXID + '-fw-panel-monitor"]').querySelector('input.fw-withdraw-fww-input').value 			= window['information-data']['DATA'][_WAXID]['vers']['fw']['cf']['auto_with_fww'][1]; 
										}catch(e){ }; 
										try{
											document.querySelector('th[id*="' + _WAXID + '-fw-panel-monitor"]').querySelector('input.fw-withdraw-fwf-switch').checked 		= window['information-data']['DATA'][_WAXID]['vers']['fw']['cf']['auto_with_fwf'][0]; 
											document.querySelector('th[id*="' + _WAXID + '-fw-panel-monitor"]').querySelector('input.fw-withdraw-fwf-input').value 			= window['information-data']['DATA'][_WAXID]['vers']['fw']['cf']['auto_with_fwf'][1]; 
										}catch(e){ }; 
										try{
											document.querySelector('th[id*="' + _WAXID + '-fw-panel-monitor"]').querySelector('input.fw-withdraw-fwg-switch').checked 		= window['information-data']['DATA'][_WAXID]['vers']['fw']['cf']['auto_with_fwg'][0]; 
											document.querySelector('th[id*="' + _WAXID + '-fw-panel-monitor"]').querySelector('input.fw-withdraw-fwg-input').value 			= window['information-data']['DATA'][_WAXID]['vers']['fw']['cf']['auto_with_fwg'][1]; 
										}catch(e){ }; 
										
										try{
											document.querySelector('th[id*="' + _WAXID + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-corn-switch').checked 		= window['information-data']['DATA'][_WAXID]['vers']['fw']['cf']['auto_comp_cor'][0]; 
											document.querySelector('th[id*="' + _WAXID + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-corn-input').value 		= window['information-data']['DATA'][_WAXID]['vers']['fw']['cf']['auto_comp_cor'][1]; 
											document.querySelector('th[id*="' + _WAXID + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-corn-id-input').value 		= window['information-data']['DATA'][_WAXID]['vers']['fw']['cf']['auto_comp_cor'][2]; 
											if (!window['information-data']['DATA'][_WAXID]['vers']['fw']['cf']['auto_comp_cor'][2]){
												$(
													document.querySelector('th[id*="' + _WAXID + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-corn-switch')
												).prop( "disabled", true ); 
												$(
													document.querySelector('th[id*="' + _WAXID + '-fw-panel-monitor"]').querySelector('input.input.fw-auto-transfer-supply-corn-input')
												).prop( "disabled", true ); 
											}else{
												$(
													document.querySelector('th[id*="' + _WAXID + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-corn-switch')
												).prop( "disabled", false ); 
												$(
													document.querySelector('th[id*="' + _WAXID + '-fw-panel-monitor"]').querySelector('input.input.fw-auto-transfer-supply-corn-input')
												).prop( "disabled", false ); 
											}; 
										}catch(e){ }; 
										try{
											document.querySelector('th[id*="' + _WAXID + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-barley-switch').checked 	= window['information-data']['DATA'][_WAXID]['vers']['fw']['cf']['auto_comp_bar'][0]; 
											document.querySelector('th[id*="' + _WAXID + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-barley-input').value 		= window['information-data']['DATA'][_WAXID]['vers']['fw']['cf']['auto_comp_bar'][1]; 
											document.querySelector('th[id*="' + _WAXID + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-barley-id-input').value 	= window['information-data']['DATA'][_WAXID]['vers']['fw']['cf']['auto_comp_bar'][2]; 
											if (!window['information-data']['DATA'][_WAXID]['vers']['fw']['cf']['auto_comp_bar'][2]){
												$(
													document.querySelector('th[id*="' + _WAXID + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-barley-switch')
												).prop( "disabled", true ); 
												$(
													document.querySelector('th[id*="' + _WAXID + '-fw-panel-monitor"]').querySelector('input.input.fw-auto-transfer-supply-barley-input')
												).prop( "disabled", true ); 
											}else{
												$(
													document.querySelector('th[id*="' + _WAXID + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-barley-switch')
												).prop( "disabled", false ); 
												$(
													document.querySelector('th[id*="' + _WAXID + '-fw-panel-monitor"]').querySelector('input.input.fw-auto-transfer-supply-barley-input')
												).prop( "disabled", false ); 
											}; 
										}catch(e){ }; 
										try{
											document.querySelector('th[id*="' + _WAXID + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-milk-switch').checked 		= window['information-data']['DATA'][_WAXID]['vers']['fw']['cf']['auto_comp_mil'][0]; 
											document.querySelector('th[id*="' + _WAXID + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-milk-input').value 		= window['information-data']['DATA'][_WAXID]['vers']['fw']['cf']['auto_comp_mil'][1]; 
											document.querySelector('th[id*="' + _WAXID + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-milk-id-input').value 		= window['information-data']['DATA'][_WAXID]['vers']['fw']['cf']['auto_comp_mil'][2]; 
											if (!window['information-data']['DATA'][_WAXID]['vers']['fw']['cf']['auto_comp_mil'][2]){
												$(
													document.querySelector('th[id*="' + _WAXID + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-milk-switch')
												).prop( "disabled", true ); 
												$(
													document.querySelector('th[id*="' + _WAXID + '-fw-panel-monitor"]').querySelector('input.input.fw-auto-transfer-supply-milk-input')
												).prop( "disabled", true ); 
											}else{
												$(
													document.querySelector('th[id*="' + _WAXID + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-milk-switch')
												).prop( "disabled", false ); 
												$(
													document.querySelector('th[id*="' + _WAXID + '-fw-panel-monitor"]').querySelector('input.input.fw-auto-transfer-supply-milk-input')
												).prop( "disabled", false ); 
											}; 
										}catch(e){ }; 
										try{
											document.querySelector('th[id*="' + _WAXID + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-chicken-egg-switch').checked 	= window['information-data']['DATA'][_WAXID]['vers']['fw']['cf']['auto_comp_egg'][0]; 
											document.querySelector('th[id*="' + _WAXID + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-chicken-egg-input').value 		= window['information-data']['DATA'][_WAXID]['vers']['fw']['cf']['auto_comp_egg'][1]; 
											document.querySelector('th[id*="' + _WAXID + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-chicken-egg-id-input').value 	= window['information-data']['DATA'][_WAXID]['vers']['fw']['cf']['auto_comp_egg'][2]; 
											if (!window['information-data']['DATA'][_WAXID]['vers']['fw']['cf']['auto_comp_egg'][2]){
												$(
													document.querySelector('th[id*="' + _WAXID + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-chicken-egg-switch')
												).prop( "disabled", true ); 
												$(
													document.querySelector('th[id*="' + _WAXID + '-fw-panel-monitor"]').querySelector('input.input.fw-auto-transfer-supply-chicken-egg-input')
												).prop( "disabled", true ); 
											}else{
												$(
													document.querySelector('th[id*="' + _WAXID + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-chicken-egg-switch')
												).prop( "disabled", false ); 
												$(
													document.querySelector('th[id*="' + _WAXID + '-fw-panel-monitor"]').querySelector('input.input.fw-auto-transfer-supply-chicken-egg-input')
												).prop( "disabled", false ); 
											}; 
										}catch(e){ }; 
										try{
											document.querySelector('th[id*="' + _WAXID + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-farmer-coin-switch').checked 	= window['information-data']['DATA'][_WAXID]['vers']['fw']['cf']['auto_comp_fmc'][0]; 
											document.querySelector('th[id*="' + _WAXID + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-farmer-coin-input').value 		= window['information-data']['DATA'][_WAXID]['vers']['fw']['cf']['auto_comp_fmc'][1]; 
											document.querySelector('th[id*="' + _WAXID + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-farmer-coin-id-input').value 	= window['information-data']['DATA'][_WAXID]['vers']['fw']['cf']['auto_comp_fmc'][2]; 
											if (!window['information-data']['DATA'][_WAXID]['vers']['fw']['cf']['auto_comp_fmc'][2]){
												$(
													document.querySelector('th[id*="' + _WAXID + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-farmer-coin-switch')
												).prop( "disabled", true ); 
												$(
													document.querySelector('th[id*="' + _WAXID + '-fw-panel-monitor"]').querySelector('input.input.fw-auto-transfer-supply-farmer-coin-input')
												).prop( "disabled", true ); 
											}else{
												$(
													document.querySelector('th[id*="' + _WAXID + '-fw-panel-monitor"]').querySelector('input.fw-auto-transfer-supply-farmer-coin-switch')
												).prop( "disabled", false ); 
												$(
													document.querySelector('th[id*="' + _WAXID + '-fw-panel-monitor"]').querySelector('input.input.fw-auto-transfer-supply-farmer-coin-input')
												).prop( "disabled", false ); 
											}; 
										}catch(e){ }; 
										
										try{
											document.querySelector(
												'th[id*="' + _WAXID + '-fw-panel-monitor"]'
											).querySelector(
												'div.fw-deposit-fwg-text'
											).innerText = 'DEPOSIT FWG ' + ( '0000' + window['information-data']['DATA'][_WAXID]['vers']['fw']['cf']['auto_depo_fwg'][1] ).slice(-'0000'.length); 
										}catch(e){ }; 
										try{
											document.querySelector(
												'th[id*="' + _WAXID + '-fw-panel-monitor"]'
											).querySelector(
												'div.fw-withdraw-fww-text'
											).innerText = 'WITHDRAW FWW ' + ( '0000' + window['information-data']['DATA'][_WAXID]['vers']['fw']['cf']['auto_with_fww'][1] ).slice(-'0000'.length); 
										}catch(e){ }; 
										try{
											document.querySelector(
												'th[id*="' + _WAXID + '-fw-panel-monitor"]'
											).querySelector(
												'div.fw-withdraw-fwf-text'
											).innerText = 'WITHDRAW FWF ' + ( '0000' + window['information-data']['DATA'][_WAXID]['vers']['fw']['cf']['auto_with_fwf'][1] ).slice(-'0000'.length); 
										}catch(e){ }; 
										try{
											document.querySelector(
												'th[id*="' + _WAXID + '-fw-panel-monitor"]'
											).querySelector(
												'div.fw-withdraw-fwg-text'
											).innerText = 'WITHDRAW FWG ' + ( '0000' + window['information-data']['DATA'][_WAXID]['vers']['fw']['cf']['auto_with_fwg'][1] ).slice(-'0000'.length); 
										}catch(e){ }; 
										
										try{
											document.querySelector(
												'th[id*="' + _WAXID + '-fw-panel-monitor"]'
											).querySelector(
												'div.fw-auto-transfer-supply-corn-text'
											).innerText = 'Corn ' + ( '0000' + window['information-data']['DATA'][_WAXID]['vers']['fw']['cf']['auto_comp_cor'][1] ).slice(-'0000'.length); 
										}catch(e){ }; 
										try{
											document.querySelector(
												'th[id*="' + _WAXID + '-fw-panel-monitor"]'
											).querySelector(
												'div.fw-auto-transfer-supply-barley-text'
											).innerText = 'Barley ' + ( '0000' + window['information-data']['DATA'][_WAXID]['vers']['fw']['cf']['auto_comp_bar'][1] ).slice(-'0000'.length); 
										}catch(e){ }; 
										try{
											document.querySelector(
												'th[id*="' + _WAXID + '-fw-panel-monitor"]'
											).querySelector(
												'div.fw-auto-transfer-supply-milk-text'
											).innerText = 'Milk ' + ( '0000' + window['information-data']['DATA'][_WAXID]['vers']['fw']['cf']['auto_comp_mil'][1] ).slice(-'0000'.length); 
										}catch(e){ }; 
										try{
											document.querySelector(
												'th[id*="' + _WAXID + '-fw-panel-monitor"]'
											).querySelector(
												'div.fw-auto-transfer-supply-chicken-egg-text'
											).innerText = 'Chicken Egg ' + ( '0000' + window['information-data']['DATA'][_WAXID]['vers']['fw']['cf']['auto_comp_egg'][1] ).slice(-'0000'.length); 
										}catch(e){ }; 
										try{
											document.querySelector(
												'th[id*="' + _WAXID + '-fw-panel-monitor"]'
											).querySelector(
												'div.fw-auto-transfer-supply-farmer-coin-text'
											).innerText = 'Farmer Coin ' + ( '0000' + window['information-data']['DATA'][_WAXID]['vers']['fw']['cf']['auto_comp_fmc'][1] ).slice(-'0000'.length); 
										}catch(e){ }; 
										
										try{
											document.querySelector('th[id*="' + _WAXID + '-fw-panel-monitor"]').querySelector('div.fw-withdraw-deposit div').innerText 		= `W ${
												parseFloat(window['information-data']['DATA'][_WAXID]['vers']['fw']['db']['balance']['pre']['FWW']).toFixed(1)
											} F ${
												parseFloat(window['information-data']['DATA'][_WAXID]['vers']['fw']['db']['balance']['pre']['FWF']).toFixed(1)
											} G ${
												parseFloat(window['information-data']['DATA'][_WAXID]['vers']['fw']['db']['balance']['pre']['FWG']).toFixed(1)
											} : WITH [${ window['information-data']['DATA'][_WAXID]['vers']['fw']['db']['power']['tax_limite'] }%] DEPO : W ${
												parseFloat(window['information-data']['DATA'][_WAXID]['vers']['fw']['db']['balance']['has']['FWW']).toFixed(1)
											} F ${
												parseFloat(window['information-data']['DATA'][_WAXID]['vers']['fw']['db']['balance']['has']['FWF']).toFixed(1)
											} G ${
												parseFloat(window['information-data']['DATA'][_WAXID]['vers']['fw']['db']['balance']['has']['FWG']).toFixed(1)
											}`; 
										}catch(e){ }; 
									}; 
								}catch(e){ }; 
								try{
									if(
										window['information-data']["DATA"][ _WAXID ]['vers']['ss']["sw"] == true && 
										Object.keys( window['information-data']['DATA'] ).length >= 1 && 
										!document.querySelector(`iframe[src*="starship-explorer.io/?user=${ _WAXID }"]`) 
									){
										document.querySelector(`iframe[url*="starship-explorer.io/?user=${ _WAXID }"]`).setAttribute(
											'src', document.querySelector(`iframe[url*="starship-explorer.io/?user=${ _WAXID }"]`).getAttribute('url')
										); 
										document.querySelector(`iframe[url*="starship-explorer.io/?user=${ _WAXID }"]`).parentElement.parentElement.querySelector('th[colspan*="7"]').style.display = 'table-cell'; 
										document.querySelector(`iframe[url*="starship-explorer.io/?user=${ _WAXID }"]`).parentElement.parentElement.querySelector('th[colspan*="2"]').style.display = 'table-cell'; 
										
									}; 
									if(
										window['information-data']["DATA"][ _WAXID ]['vers']['ss']["sw"] == true && 
										Object.keys( window['information-data']['DATA'] ).length >= 1 && 
										document.querySelector(`iframe[src*="starship-explorer.io/?user=${ _WAXID }"]`) 
									){
										try{
											document.querySelector('th[id*="' + _WAXID + '-ss-panel-monitor"]').querySelector('div.ss-target-set div').innerText 			= `${
												parseFloat(window['information-data']['DATA'][_WAXID]['vers']['ss']['db']['balance']['pre']['KYANITE']).toFixed(4)
											} : STAKED [] WALLET : ${
												parseFloat(window['information-data']['DATA'][_WAXID]['vers']['ss']['db']['balance']['has']['KYANITE']).toFixed(4)
											}`; 
										}catch(e){ }; 
									}; 
								}catch(e){ }; 
								try{
									if(
										window['information-data']["DATA"][ _WAXID ]['vers']['kq']["sw"] == true
									){
										document.querySelector(`th[id*="${ _WAXID }-kq-monitor"] textarea[id*="message-text ${ _WAXID }"]`).parentElement.parentElement.querySelector('th[colspan*="7"]').style.display = 'table-cell'; 
										document.querySelector(`th[id*="${ _WAXID }-kq-monitor"] textarea[id*="message-text ${ _WAXID }"]`).parentElement.parentElement.querySelector('th[colspan*="2"]').style.display = 'table-cell'; 
										
										window['information-data']['DATA'][_WAXID]['vers']['kq']['db']['log'] = []; 
										for (logs in window['information-data']['DATA'][_WAXID]['vers']['kq']['db']['event']){
											window['information-data']['DATA'][_WAXID]['vers']['kq']['db']['log'][ logs ] = window['information-data']['DATA'][_WAXID]['vers']['kq']['db']['event'][ logs ].replace(
												/1\d{9,9}.\d{3,6}/gi, (new Date(
													window['information-data']['DATA'][_WAXID]['vers']['kq']['db']['event'][ logs ].match(/1\d{9,9}.\d{3,6}/gi)[0] * 1000
												).toLocaleString(
													"en-US", {
														timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone, 
														year    : 'numeric', 
														month   : '2-digit', 
														day     : '2-digit', 
														hour    : '2-digit', 
														hour12  : false, 
														minute  : '2-digit', 
														second  : '2-digit'
													}
												))
											); 
											//	console.debug( window['information-data']['DATA'][_WAXID]['vers']['kq']['db']['log'][ logs ] ); 
										}; 
									}; 
									document.querySelector(`th[id*="${ _WAXID }-kq-monitor"] textarea[id*="message-text ${ _WAXID }"]`).value = window['information-data']['DATA'][_WAXID]['vers']['kq']['db']['log'].concat(JSON.stringify(window['information-data']['DATA'][_WAXID]['vers']['kq']['db'], undefined, 4)).join(''); 

									try{
										document.querySelector('th[id*="' + _WAXID + '-kq-panel-monitor"]').querySelector('div.kq-offchain-mainchain div').innerText 		= `C ${
											parseFloat(window['information-data']['DATA'][_WAXID]['vers']['kq']['db']['balance']['pre']['CUBE']).toFixed(2)
										} K ${
											parseFloat(window['information-data']['DATA'][_WAXID]['vers']['kq']['db']['balance']['pre']['KRYPTON']).toFixed(2)
										} : WITH [0%] DEPO : C ${
											parseFloat(window['information-data']['DATA'][_WAXID]['vers']['kq']['db']['balance']['has']['CUBE']).toFixed(2)
										} K ${
											parseFloat(window['information-data']['DATA'][_WAXID]['vers']['kq']['db']['balance']['has']['KRYPTON']).toFixed(2)
										}`; 
									}catch(e){ }; 
									
								}catch(e){ }; 
								try{
									if(
										window['information-data']["DATA"][ _WAXID ]['vers']['cc']["sw"] == true
									){
										document.querySelector(`th[id*="${ _WAXID }-cc-monitor"] textarea[id*="message-text ${ _WAXID }"]`).parentElement.parentElement.querySelector('th[colspan*="7"]').style.display = 'table-cell'; 
										document.querySelector(`th[id*="${ _WAXID }-cc-monitor"] textarea[id*="message-text ${ _WAXID }"]`).parentElement.parentElement.querySelector('th[colspan*="2"]').style.display = 'table-cell'; 
										
										//	window['information-data']['DATA'][_WAXID]['vers']['kq']['db']['log'] = []; 
										//	for (logs in window['information-data']['DATA'][_WAXID]['vers']['kq']['db']['event']){
										//		window['information-data']['DATA'][_WAXID]['vers']['kq']['db']['log'][ logs ] = window['information-data']['DATA'][_WAXID]['vers']['kq']['db']['event'][ logs ].replace(
										//			/1\d{9,9}.\d{3,6}/gi, (new Date(
										//				window['information-data']['DATA'][_WAXID]['vers']['kq']['db']['event'][ logs ].match(/1\d{9,9}.\d{3,6}/gi)[0] * 1000
										//			).toLocaleString(
										//				"en-US", {
										//					timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone, 
										//					year    : 'numeric', 
										//					month   : '2-digit', 
										//					day     : '2-digit', 
										//					hour    : '2-digit', 
										//					hour12  : false, 
										//					minute  : '2-digit', 
										//					second  : '2-digit'
										//				}
										//			))
										//		); 
										//		//	console.debug( window['information-data']['DATA'][_WAXID]['vers']['kq']['db']['log'][ logs ] ); 
										//	}; 
									}; 
									document.querySelector(`th[id*="${ _WAXID }-cc-monitor"] textarea[id*="message-text ${ _WAXID }"]`).value = JSON.stringify(window['information-data']['DATA'][_WAXID]['vers']['cc']['db'], undefined, 4); 

									try{
										document.querySelector('th[id*="' + _WAXID + '-cc-panel-monitor"]').querySelector('div.cc-offchain-mainchain div').innerText 		= `FGL ${
											parseFloat(window['information-data']['DATA'][_WAXID]['vers']['cc']['db']['balance']['pre']['FGL']).toFixed(4)
										} : WITH [0%] DEPO : FGL ${
											parseFloat(window['information-data']['DATA'][_WAXID]['vers']['cc']['db']['balance']['has']['FGL']).toFixed(4)
										}`; 
									}catch(e){ }; 
									
								}catch(e){ }; 
								try{
									//	if(
									//		window['information-data']["DATA"][ _WAXID ]['vers']['gx']["sw"] == true && 
									//		Object.keys( window['information-data']['DATA'] ).length >= 1 && 
									//		!document.querySelector(`iframe[src*="farmersworld.idigger.online/affiliate?waxid=${ _WAXID }"]`) 
									//	){
									//		document.querySelector(`iframe[url*="farmersworld.idigger.online/affiliate?waxid=${ _WAXID }"]`).setAttribute(
									//			'src', document.querySelector(`iframe[url*="farmersworld.idigger.online/affiliate?waxid=${ _WAXID }"]`).getAttribute('url')
									//		); 
									//		document.querySelector(`iframe[url*="farmersworld.idigger.online/affiliate?waxid=${ _WAXID }"]`).parentElement.parentElement.querySelector('th[colspan*="7"]').style.display = 'table-cell'; 
									//		document.querySelector(`iframe[url*="farmersworld.idigger.online/affiliate?waxid=${ _WAXID }"]`).parentElement.parentElement.querySelector('th[colspan*="2"]').style.display = 'table-cell'; 
									//		
									//	}; 
									if(
										window['information-data']["DATA"][ _WAXID ]['vers']['gx']["sw"] == true && 
										Object.keys( window['information-data']['DATA'] ).length >= 1
									){
										
										document.querySelector(`th[id*="${ _WAXID }-gx-monitor"] textarea[id*="message-text ${ _WAXID }"]`).parentElement.parentElement.querySelector('th[colspan*="7"]').style.display = 'table-cell'; 
										document.querySelector(`th[id*="${ _WAXID }-gx-monitor"] textarea[id*="message-text ${ _WAXID }"]`).parentElement.parentElement.querySelector('th[colspan*="2"]').style.display = 'table-cell'; 
										
										//	try{
										//		document.querySelector('th[id*="' + _WAXID + '-gx-panel-monitor"]').querySelector('input.gx-feature-mbr-mine-switch').checked 	= window['information-data']['DATA'][_WAXID]['vers']['gx']['cf']['mbr_mine']; 
										//	}catch(e){ }; 
										//	try{
										//		document.querySelector('th[id*="' + _WAXID + '-gx-panel-monitor"]').querySelector('input.gx-feature-eco-mine-switch').checked 	= window['information-data']['DATA'][_WAXID]['vers']['gx']['cf']['eco_mine']; 
										//	}catch(e){ }; 
										try{
											document.querySelector('th[id*="' + _WAXID + '-gx-panel-monitor"]').querySelector('input.gx-feature-fee-mine-switch').checked 	= window['information-data']['DATA'][_WAXID]['vers']['gx']['cf']['fee_mine']; 
										}catch(e){ }; 
										
										try{
											document.querySelector(
												'th[id*="' + _WAXID + '-gx-panel-monitor"]'
											).querySelector(
												'div.gx-deposit-gmo-text'
											).innerText = 'DEPOSIT GMO ' + ( '0000' + window['information-data']['DATA'][_WAXID]['vers']['gx']['cf']['auto_depo_gmo'][1] ).slice(-'0000'.length); 
										}catch(e){ }; 
										try{
											document.querySelector('th[id*="' + _WAXID + '-gx-panel-monitor"]').querySelector('input.gx-deposit-gmo-switch').checked 		= window['information-data']['DATA'][_WAXID]['vers']['gx']['cf']['auto_depo_gmo'][0]; 
											document.querySelector('th[id*="' + _WAXID + '-gx-panel-monitor"]').querySelector('input.gx-deposit-gmo-input').value 			= window['information-data']['DATA'][_WAXID]['vers']['gx']['cf']['auto_depo_gmo'][1]; 
										}catch(e){ }; 
										try{
											document.querySelector(
												'th[id*="' + _WAXID + '-gx-panel-monitor"]'
											).querySelector(
												'div.gx-deposit-gmp-text'
											).innerText = 'DEPOSIT GMP ' + ( '0000' + window['information-data']['DATA'][_WAXID]['vers']['gx']['cf']['auto_depo_gmp'][1] ).slice(-'0000'.length); 
										}catch(e){ }; 
										try{
											document.querySelector('th[id*="' + _WAXID + '-gx-panel-monitor"]').querySelector('input.gx-deposit-gmp-switch').checked 		= window['information-data']['DATA'][_WAXID]['vers']['gx']['cf']['auto_depo_gmp'][0]; 
											document.querySelector('th[id*="' + _WAXID + '-gx-panel-monitor"]').querySelector('input.gx-deposit-gmp-input').value 			= window['information-data']['DATA'][_WAXID]['vers']['gx']['cf']['auto_depo_gmp'][1]; 
										}catch(e){ }; 
										
										try{
											document.querySelector('th[id*="' + _WAXID + '-gx-panel-monitor"]').querySelector('div.gx-withdraw-deposit div').innerText 		= `A ${
												parseFloat(window['information-data']['DATA'][_WAXID]['vers']['gx']['db']['balance']['pre']['GMA']).toFixed(1)
											} P ${
												parseFloat(window['information-data']['DATA'][_WAXID]['vers']['gx']['db']['balance']['pre']['GMP']).toFixed(1)
											} O ${
												parseFloat(window['information-data']['DATA'][_WAXID]['vers']['gx']['db']['balance']['pre']['GMO']).toFixed(1)
											} : WITH [0%] DEPO : A ${
												parseFloat(window['information-data']['DATA'][_WAXID]['vers']['gx']['db']['balance']['has']['GMA']).toFixed(1)
											} P ${
												parseFloat(window['information-data']['DATA'][_WAXID]['vers']['gx']['db']['balance']['has']['GMP']).toFixed(1)
											} O ${
												parseFloat(window['information-data']['DATA'][_WAXID]['vers']['gx']['db']['balance']['has']['GMO']).toFixed(1)
											}`; 
										}catch(e){ }; 
									}; 
								}catch(e){ }; 
								try{
									if(
										window['information-data']["DATA"][ _WAXID ]['vers']['bl']["sw"] == true
									){
										document.querySelector(`th[id*="${ _WAXID }-bl-monitor"] textarea[id*="message-text ${ _WAXID }"]`).parentElement.parentElement.querySelector('th[colspan*="7"]').style.display = 'table-cell'; 
										document.querySelector(`th[id*="${ _WAXID }-bl-monitor"] textarea[id*="message-text ${ _WAXID }"]`).parentElement.parentElement.querySelector('th[colspan*="2"]').style.display = 'table-cell'; 
										
										//	window['information-data']['DATA'][_WAXID]['vers']['kq']['db']['log'] = []; 
										//	for (logs in window['information-data']['DATA'][_WAXID]['vers']['kq']['db']['event']){
										//		window['information-data']['DATA'][_WAXID]['vers']['kq']['db']['log'][ logs ] = window['information-data']['DATA'][_WAXID]['vers']['kq']['db']['event'][ logs ].replace(
										//			/1\d{9,9}.\d{3,6}/gi, (new Date(
										//				window['information-data']['DATA'][_WAXID]['vers']['kq']['db']['event'][ logs ].match(/1\d{9,9}.\d{3,6}/gi)[0] * 1000
										//			).toLocaleString(
										//				"en-US", {
										//					timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone, 
										//					year    : 'numeric', 
										//					month   : '2-digit', 
										//					day     : '2-digit', 
										//					hour    : '2-digit', 
										//					hour12  : false, 
										//					minute  : '2-digit', 
										//					second  : '2-digit'
										//				}
										//			))
										//		); 
										//		//	console.debug( window['information-data']['DATA'][_WAXID]['vers']['kq']['db']['log'][ logs ] ); 
										//	}; 
									}; 
									document.querySelector(`th[id*="${ _WAXID }-bl-monitor"] textarea[id*="message-text ${ _WAXID }"]`).value = JSON.stringify(window['information-data']['DATA'][_WAXID]['vers']['bl']['db'], undefined, 4); 

									try{
										document.querySelector('th[id*="' + _WAXID + '-bl-panel-monitor"]').querySelector('div.bl-offchain-mainchain div').innerText 		= `BRWL ${
											parseFloat(window['information-data']['DATA'][_WAXID]['vers']['bl']['db']['balance']['pre']['BRWL']).toFixed(4)
										} : WITH [0%] DEPO : BRWL ${
											parseFloat(window['information-data']['DATA'][_WAXID]['vers']['bl']['db']['balance']['has']['BRWL']).toFixed(4)
										}`; 
									}catch(e){ }; 
									
								}catch(e){ }; 
								
								//  try{
								//      delete window.window['total']['Stake']; 
								//  }catch(e){}; 
								//  try{
								//      delete window.window['total']['Profit']; 
								//  }catch(e){}; 
								
							}, 1000 + Math.ceil(Math.random() * 8000)); 
						})(WAXID); 
                        
                    }; 

                    try{
                        if(
                            window['information-data']['DATA'][WAXID]['flag']['ntm'] == true &&
                            !window[WAXID].querySelector('button.btn.btn-primary[data-bs-target*="#gotBAN"]').classList.contains("blink-alert") || (
                                window['information-data']['DATA'][WAXID]['flag']['num'] != '' && 
                                window['information-data']['DATA'][WAXID]['flag']['num'].split('**-**')[0] != '00000'
                            )
                        ){
                            window[WAXID].querySelector('button.btn.btn-primary[data-bs-target*="#gotBAN"]').classList.add('blink-alert'); 
                            //  $(window[WAXID].querySelector('button.btn.btn-primary[data-bs-target*="#gotBAN"]')).prop(  "disabled", false ); 
                        }else if(
                            !window['information-data']['DATA'][WAXID]['flag']['ntm'] || 
                            window['information-data']['DATA'][WAXID]['flag']['ntm'] == false || (
                                window['information-data']['DATA'][WAXID]['flag']['num'] != '' && 
                                window['information-data']['DATA'][WAXID]['flag']['num'].split('**-**')[0] != '00000'
                            )
                        ){
                            window[WAXID].querySelector('button.btn.btn-primary[data-bs-target*="#gotBAN"]').classList.remove('blink-alert'); 
                            //  $(window[WAXID].querySelector('button.btn.btn-primary[data-bs-target*="#gotBAN"]')).prop(  "disabled", true ); 
                        }; 
                    }catch(e){}; 
                    
                }; try{ delete window['WAXID']; delete WAXID }catch(e){}; 
                
                if (
                    !document.querySelector('iframe[id*="FlowChart"]')
                ){
                    document.querySelector('div[id*="FlowChart"]').appendChild(
                        Object.assign(document.createElement('iframe'), {
                            id      : 'FlowChart', 
                            style   : "width: 100%;height: 100%;"
                        })
                    ); 
                }; 
                
                if (
                    !document.querySelector('iframe[id*="SessionsToken"]')
                ){
                    document.querySelector('div[id*="SessionsToken"]').appendChild(
                        Object.assign(document.createElement('iframe'), {
                            id      : 'SessionsToken', 
                            style   : "width: 100%;height: 100%;"
                        })
                    ); 
                    document.querySelector('div.modal.fade#sessionsToken').addEventListener('shown.bs.modal', function () {
                        document.querySelector('iframe[id*="SessionsToken"]').setAttribute(
                            'src', `https://awcloud-token.${ window.location.href.match(/\.(.*)\.repl\./gi).join('').replace(/\.repl\./gi, '').replace(/\./gi, '') }.repl.co/`
                        ); 
                    }); 
                    document.querySelector('div.modal.fade#sessionsToken').addEventListener('hide.bs.modal', function () {
                        document.querySelector('iframe[id*="SessionsToken"]').setAttribute(
                            'src', ``
                        ); 
                    }); 
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
                    document.querySelector('div.modal.fade#waxDetective').addEventListener('shown.bs.modal', function () {
                        document.querySelector('iframe[id*="FlowChart"]').setAttribute(
                            'src', `https://waxdetective.io/network/transfers?accounts=${ Object.keys( window['information-data']['DATA'] ).join('-') }&time_min=0&time_max=2555555555555`
                        ); 
                    }); 
                    document.querySelector('div.modal.fade#waxDetective').addEventListener('hide.bs.modal', function () {
                        document.querySelector('iframe[id*="FlowChart"]').setAttribute(
                            'src', ''
                        ); 
                    }); 
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
                if (
                    window['information-data']['DATA'] && 
                    Object.keys( window['information-data']['DATA'] ).length >= 1 && (
                    !document.querySelector('iframe[id*="iframeChart"]') || 
                    !document.querySelector('iframe[id*="iframeChart"]').getAttribute('src') || 
                    !document.querySelector('iframe[id*="iframeChart"]').getAttribute('src').match(
                        Object.keys( window['information-data']['DATA'] ).join(',')
                    ))
                ){
                    document.querySelector('iframe[id*="iframeChart"]').setAttribute(
                        'src', `https://mining.idigger.online/iframeChart?waxid=${ Object.keys( window['information-data']['DATA'] ).join(',') }`
                    ); 
                }; 
                
                try{ window['check-wax-pool-before-mine'].checked = window['information-data']['POOL']['fr']['check']['wax'] }catch(e){}; 
                try{
                    if (window['check-wax-pool-before-mine'].parentNode.querySelector('input[type="range"]').getAttribute('value') == 0.00){
                        window['check-wax-pool-before-mine'].parentNode.querySelector('input[type="range"]').setAttribute(
                            'value', 
                            window['information-data']['POOL']['fr']['might']['wax']
                        ); window['check-wax-pool-before-mine'].parentNode.querySelector('input[type="range"]').value = window['information-data']['POOL']['fr']['might']['wax']; 
                        window['check-wax-pool-before-mine'].parentNode.querySelector('label').innerText = `CURRENT RATE ${ window['information-data']['POOL']['fr']['might']['wax'] } : Enable Check WAX Pool Before Mine.`; 
                    }; 
                }catch(e){}; 
                try{ window['check-eos-pool-before-mine'].checked = window['information-data']['POOL']['fr']['check']['eos'] }catch(e){}; 
                try{
                    if (window['check-eos-pool-before-mine'].parentNode.querySelector('input[type="range"]').getAttribute('value') == 0.00){
                        window['check-eos-pool-before-mine'].parentNode.querySelector('input[type="range"]').setAttribute(
                            'value', 
                            window['information-data']['POOL']['fr']['might']['eos']
                        ); window['check-eos-pool-before-mine'].parentNode.querySelector('input[type="range"]').value = window['information-data']['POOL']['fr']['might']['eos']; 
                        window['check-eos-pool-before-mine'].parentNode.querySelector('label').innerText = `CURRENT RATE ${ window['information-data']['POOL']['fr']['might']['eos'] } : Enable Check EOS Pool Before Mine.`; 
                    }; 
                }catch(e){}; 
                try{ window['check-random-mine'].checked = window['information-data']['POOL']['fr']['randm']['var'] }catch(e){}; 
                try{
                    window['check-random-mine'].parentNode.querySelector('input[type="range"]').setAttribute(
                        'value', window['information-data']['POOL']['fr']['randm']['sec']
                    ); window['check-random-mine'].parentNode.querySelector('input[type="range"]').value = window['information-data']['POOL']['fr']['randm']['sec'] ; 
				}catch(e){}; 

            }).catch(error => {
                console.error(`Error : ${ error }`); 
                document.querySelector('div[class*="progress-bar"][id*="time_pg"]').style.width = '0%'; 
				
                try{ clearInterval(window['fetchProcessSec']) }catch(e){}; 
                var i = 0; window['fetchProcessSec'] = setInterval(function () {
                    i+= Math.ceil(Math.random() * 12) + 1;
                    if (i >= 180) {
                        document.querySelector('div[class*="progress-bar"][id*="time_pg"]').style.width = '0%'; 
                        clearInterval(window['fetchProcessSec']); thiscode(); 
                    }; 
                }, 200); 
                
            });  
            
            try{
				if (
					window['information-data']['POOL']['MASTERKE']['PrvKey'] == 'YES' && 
					window['information-data']['POOL']['MASTERKE']['TagKey']
				){
					document.querySelector('input[aria-label="KEY PRV ACTIVE"]').value = window['information-data']['POOL']['MASTERKE']['PubKey']; 
					document.querySelector('input[aria-label="KEY TAG ACTIVE"]').value = `${ window['information-data']['POOL']['MASTERKE']['TagKey'].substring(0, 5) }XXXXXXX`; 
					if( !$( document.querySelector('form[action="#KEY"] input.masterKey-switch') ).attr('disabled') ){
						document.querySelector('form[action="#KEY"] input.masterKey-switch').checked = window['information-data']['POOL']['MASTERKE']['Switch']; 
					}; 
						
					$( document.querySelector('input[aria-label="KEY PRV ACTIVE"]') ).prop( "disabled", true ); 
					
					fetch(`https://${ $( document.querySelector('select[aria-label*="Endpoint"]') ).find("option:selected").val() }/v1/chain/get_account`, {
						"headers": {
							"accept"            : "*/*",
							"content-type"      : "text/plain;charset=UTF-8"
						},
						"body"              : JSON.stringify({
							"account_name" : window['information-data']['POOL']['MASTERKE']['TagKey']
						}),
						"method"            : "POST"
					}).then(
						result => result.json()
					).then(result => {
						
						try{
							//	document.querySelector('form[action*="#KEY"]').parentElement.querySelector('div[id*="masterKey_cpu_prg"]').parentElement.querySelector('div.progress-label').innerText = `CPU ${ Number( (100 - result['cpu_limit']['available'] * 100 / result['cpu_limit']['max']) ).toFixed(2) }%`
							document.querySelector('form[action*="#KEY"]').parentElement.querySelector('div[id*="masterKey_cpu_prg"]').parentElement.querySelector('div.progress-label').innerText = `CPU ${ result['cpu_limit']['max'] }`
						}catch(e){}; 
						//	try{ document.querySelector('form[action*="#KEY"]').parentElement.querySelector('div[id*="masterKey_cpu_prg"]').innerText           = `${ result['cpu_limit']['max'] }`}catch(e){}; 
						try{ document.querySelector('form[action*="#KEY"]').parentElement.querySelector('div[id*="masterKey_cpu_prg"]').style.width         = `${ Number(100 - Number( result['cpu_limit']['available'] * 100 / result['cpu_limit']['max'] )).toFixed(2) }%`}catch(e){}; 
						try{ document.querySelector('form[action*="#KEY"]').parentElement.querySelector('div[id*="masterKey_cpu_prg"]').setAttribute(
							'aria-valuenow', 0
						)}catch(e){}; 
						try{ document.querySelector('form[action*="#KEY"]').parentElement.querySelector('div[id*="masterKey_cpu_prg"]').setAttribute(
							'aria-valuemax', 
							`${ result['cpu_limit']['max'] }`
						)}catch(e){}; 

						try{
							//	document.querySelector('form[action*="#KEY"]').parentElement.querySelector('div[id*="masterKey_net_prg"]').parentElement.querySelector('div.progress-label').innerText = `NET ${ Number( (100 - result['net_limit']['available'] * 100 / result['net_limit']['max']) ).toFixed(2) }%`
							document.querySelector('form[action*="#KEY"]').parentElement.querySelector('div[id*="masterKey_net_prg"]').parentElement.querySelector('div.progress-label').innerText = `NET ${ result['net_limit']['max'] }`
						}catch(e){}; 
						//	try{ document.querySelector('form[action*="#KEY"]').parentElement.querySelector('div[id*="masterKey_net_prg"]').innerText           = `${ result['net_limit']['max'] }`}catch(e){}; 
						try{ document.querySelector('form[action*="#KEY"]').parentElement.querySelector('div[id*="masterKey_net_prg"]').style.width         = `${ Number(100 - Number( result['net_limit']['available'] * 100 / result['net_limit']['max'] )).toFixed(2) }%`}catch(e){}; 
						try{ document.querySelector('form[action*="#KEY"]').parentElement.querySelector('div[id*="masterKey_net_prg"]').setAttribute(
							'aria-valuenow', 0
						)}catch(e){}; 
						try{ document.querySelector('form[action*="#KEY"]').parentElement.querySelector('div[id*="masterKey_net_prg"]').setAttribute(
							'aria-valuemax', 
							`${ result['net_limit']['max'] }`
						)}catch(e){}; 

						try{
							//	document.querySelector('form[action*="#KEY"]').parentElement.querySelector('div[id*="masterKey_ram_prg"]').parentElement.querySelector('div.progress-label').innerText = `RAM ${ Number( 100 - ((result['ram_quota'] - result['ram_usage']) * 100 / result['ram_quota']) ).toFixed(2) }%` 
							document.querySelector('form[action*="#KEY"]').parentElement.querySelector('div[id*="masterKey_ram_prg"]').parentElement.querySelector('div.progress-label').innerText = `RAM ${ result['ram_quota'] }` 
						}catch(e){}; 
						//	try{ document.querySelector('form[action*="#KEY"]').parentElement.querySelector('div[id*="masterKey_ram_prg"]').innerText           = `${ result['ram_quota'] }`}catch(e){}; 
						try{ document.querySelector('form[action*="#KEY"]').parentElement.querySelector('div[id*="masterKey_ram_prg"]').style.width         = `${ Number(100 - Number( (result['ram_quota'] - result['ram_usage']) * 100 / result['ram_quota'] )).toFixed(2) }%`}catch(e){}; 
						try{ document.querySelector('form[action*="#KEY"]').parentElement.querySelector('div[id*="masterKey_ram_prg"]').setAttribute(
							'aria-valuenow', 0
						)}catch(e){}; 
						try{ document.querySelector('form[action*="#KEY"]').parentElement.querySelector('div[id*="masterKey_ram_prg"]').setAttribute(
							'aria-valuemax', 
							`${ result['ram_quota'] }`
						)}catch(e){}; 
					}).catch(error => {});
				}; 
			}catch(e){}; 
            
        })();

        // AUTO UPDATE PROCESS BAR BY STYLE
        // AUTO UPDATE PROCESS BAR BY STYLE
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
        // AUTO UPDATE PROCESS BAR BY STYLE
        // AUTO UPDATE PROCESS BAR BY STYLE
        // AUTO UPDATE PROCESS BAR BY STYLE

        document.querySelector('form[action="#ADD"]').addEventListener('submit', function (e) {
            if(
                e.currentTarget.querySelector('input[aria-label*="ADD EMAIL"]').value && 
                e.currentTarget.querySelector('input[aria-label*="ADD EMAIL"]').value.match('@') && 
                e.currentTarget.querySelector('input[aria-label*="ADD EMAIL"]').value.match('.') && 
                e.currentTarget.querySelector('input[aria-label*="ADD PASSW"]').value && 
                e.currentTarget.querySelector('input[aria-label*="ADD PASSW"]').value.length >= 3 && 
                e.currentTarget.querySelector('input[aria-label*="ADD SECRET"]').value && 
                e.currentTarget.querySelector('input[aria-label*="ADD SECRET"]').value.length >= 16 && 
                e.currentTarget.querySelector('input[aria-label*="ADD WAXID"]').value && 
                e.currentTarget.querySelector('input[aria-label*="ADD WAXID"]').value.match('.wam') && 
                !$('button[class*="btn btn-primary add"]').attr('disabled')
            ){
            
                $('button[class*="btn btn-primary add"]').prop( "disabled", true ); 
                $('input[aria-label*="ADD EMAIL"]').prop(  "disabled", true ); 
                $('input[aria-label*="ADD PASSW"]').prop(  "disabled", true ); 
                $('input[aria-label*="ADD SECRET"]').prop( "disabled", true ); 
                $('input[aria-label*="ADD BACKUP"]').prop( "disabled", true ); 
                $('input[aria-label*="ADD WAXID"]').prop(  "disabled", true ); 
                
                var xhr = new XMLHttpRequest();
                xhr.open(
                    "POST", '/add'
                ); 
                xhr.setRequestHeader("Content-Type", "application/json");
                xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    
                    if(xhr.responseText != 'okay'){ 
                        //	$('form[action*="#ADD"]').find('button').notify(`ERROR : ${ xhr.responseText }`, "error", { position : "top" }); 
                        $.notify(`ERROR : ${ xhr.responseText }`, "error", { position : "top" }); 
                        $('button[class*="btn btn-primary add"]').prop( "disabled", false ); 
                        $('input[aria-label*="ADD EMAIL"]').prop(  "disabled", false ); 
                        $('input[aria-label*="ADD PASSW"]').prop(  "disabled", false ); 
                        $('input[aria-label*="ADD SECRET"]').prop( "disabled", false ); 
                        $('input[aria-label*="ADD BACKUP"]').prop( "disabled", false ); 
                        $('input[aria-label*="ADD WAXID"]').prop(  "disabled", false ); 
                        //	$('form[action*="#ADD"]').find('input[aria-label*="ADD EMAIL"]')[0].value = ''; 
                        //	$('form[action*="#ADD"]').find('input[aria-label*="ADD PASSW"]')[0].value = ''; 
                        //	$('form[action*="#ADD"]').find('input[aria-label*="ADD SECRET"]')[0].value = ''; 
                        //	$('form[action*="#ADD"]').find('input[aria-label*="ADD BACKUP"]')[0].value = ''; 
                        //	$('form[action*="#ADD"]').find('input[aria-label*="ADD WAXID"]')[0].value = ''; 
                    }else{
                        //	$('form[action*="#ADD"]').find('button').notify("ADD NEW ACCOUNT", "success", { position : "top" }); 
                        $.notify("ADD NEW ACCOUNT", "success", { position : "top" }); 
                        $('button[class*="btn btn-primary add"]').prop( "disabled", false ); 
                        $('input[aria-label*="ADD EMAIL"]').prop(  "disabled", false ); 
                        $('input[aria-label*="ADD PASSW"]').prop(  "disabled", false ); 
                        $('input[aria-label*="ADD SECRET"]').prop( "disabled", false ); 
                        $('input[aria-label*="ADD BACKUP"]').prop( "disabled", false ); 
                        $('input[aria-label*="ADD WAXID"]').prop(  "disabled", false ); 
                        $('form[action*="#ADD"]').find('input[aria-label*="ADD EMAIL"]')[0].value = ''; 
                        $('form[action*="#ADD"]').find('input[aria-label*="ADD PASSW"]')[0].value = ''; 
                        $('form[action*="#ADD"]').find('input[aria-label*="ADD SECRET"]')[0].value = ''; 
                        $('form[action*="#ADD"]').find('input[aria-label*="ADD BACKUP"]')[0].value = ''; 
                        $('form[action*="#ADD"]').find('input[aria-label*="ADD WAXID"]')[0].value = ''; 
                    }; 
                    
                }}; 
                xhr.send(JSON.stringify({
                    "waxid"     : e.currentTarget.querySelector('input[aria-label*="ADD WAXID"]').value.trim(), 
                    "email"     : e.currentTarget.querySelector('input[aria-label*="ADD EMAIL"]').value.trim(), 
                    "password"  : e.currentTarget.querySelector('input[aria-label*="ADD PASSW"]').value.trim(), 
                    "secret"    : e.currentTarget.querySelector('input[aria-label*="ADD SECRET"]').value.trim(), 
                    "backup"    : e.currentTarget.querySelector('input[aria-label*="ADD BACKUP"]').value.trim()
                }));
            }else{
                //	$('form[action*="#ADD"]').find('button').notify(`WARNING : INCORRENT INFO`, "warn", { position : "top" }); 
                $.notify(`WARNING : INCORRENT INFO`, "warn", { position : "top" }); 
                $('input[aria-label*="ADD EMAIL"]').prop(  "disabled", false ); 
                $('input[aria-label*="ADD PASSW"]').prop(  "disabled", false ); 
                $('input[aria-label*="ADD SECRET"]').prop( "disabled", false ); 
                $('input[aria-label*="ADD BACKUP"]').prop( "disabled", false ); 
                $('input[aria-label*="ADD WAXID"]').prop(  "disabled", false ); 
                //	$('form[action*="#ADD"]').find('input[aria-label*="ADD EMAIL"]')[0].value = ''; 
                //	$('form[action*="#ADD"]').find('input[aria-label*="ADD PASSW"]')[0].value = ''; 
                //	$('form[action*="#ADD"]').find('input[aria-label*="ADD SECRET"]')[0].value = ''; 
                //	$('form[action*="#ADD"]').find('input[aria-label*="ADD BACKUP"]')[0].value = ''; 
                //	$('form[action*="#ADD"]').find('input[aria-label*="ADD WAXID"]')[0].value = ''; 
                $('button[class*="btn btn-primary add"]').prop( "disabled", false ); 
            };
        }); 
        
        document.querySelector('form[action="#DEL"]').addEventListener('submit', function (e) {
            
            if(
                e.currentTarget.querySelector('input[aria-label*="DEL WAXID"]').value && 
                e.currentTarget.querySelector('input[aria-label*="DEL WAXID"]').value.match('.wam') && 
                !$('button[class="btn btn-primary del"]').attr('disabled')
            ){
                
                $('button[class="btn btn-primary del"]').prop( "disabled", true ); 
                $('input[aria-label*="DEL WAXID"]').prop( "disabled", true );
                
                var xhr = new XMLHttpRequest();
                xhr.open("POST", '/off'); 
                xhr.setRequestHeader("Content-Type", "application/json");
                xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    
                    if(
                        xhr.responseText == 'okay'
                    ){
                        $.notify("REMOVED ACCOUNT", "success");
                        $('button[class*="btn btn-primary del"]').prop( "disabled", false ); 
                        $('input[aria-label*="DEL WAXID"]').prop(  "disabled", false ); 
                        $('form[action*="#DEL"]').find('input[aria-label*="DEL WAXID"]')[0].value = ''; 
                    }else{
                        $.notify(`ERROR : ${ xhr.responseText }`, "error"); 
                        $('button[class*="btn btn-primary del"]').prop( "disabled", false ); 
                        $('input[aria-label*="DEL WAXID"]').prop(  "disabled", false ); 
                        $('form[action*="#DEL"]').find('input[aria-label*="DEL WAXID"]')[0].value = ''; 
                    }; 
                    
                }}; 
                xhr.send(JSON.stringify({
                    "waxid" : e.currentTarget.querySelector('input[aria-label*="DEL WAXID"]').value.trim()
                })); 
            }; 
        }); 
        
        document.querySelector('button[class="btn btn-primary run"]').onclick = function (e) {
    
            if (
                !$('button[class="btn btn-primary run"]').attr('disabled')
            ){
                
                $('button[class="btn btn-primary run"]').prop( "disabled", true );
                
                fetch(
                    '/run',
                    {method : 'GET'}
                ).then(
                    result => result.text()
                ).then(result => {
                    if(result != 'okay'){ throw result }else{
                        $('button[class="btn btn-primary run"]').notify("START", "success", { position : "top" });  
                        $('button[class="btn btn-primary run"]').prop( "disabled", false );
                    }; 
                }).catch(error => {
                    $('button[class="btn btn-primary run"]').notify(`NOT`, "error", { position : "top" });  
                    $('button[class="btn btn-primary run"]').prop( "disabled", false );
                }); 
            }; 
            
        }; 
        document.querySelector('button[class="btn btn-primary pau"]').addEventListener(
            "click", 
            function (e) {
                if (
                    !$('button[class="btn btn-primary pau"]').attr('disabled')
                ){
                    $('button[class="btn btn-primary pau"]').prop( "disabled", true );
                 
                    fetch(
                        `/pau`,
                        {method : 'GET'}
                    ).then(
                        result => result.json()
                    ).then(result => {
                        if(result['text'] != 'okay'){ throw result }else{
                            if (
                                result['code'] == 200
                            ){
                                
                                $('button[class="btn btn-primary pau"]')[0].setAttribute('value', 'PAUSE')
                                $('button[class="btn btn-primary pau"]')[0].innerText = 'PAUSE'; 
                                $('button[class="btn btn-primary pau"]').notify(
                                    'RERUN', 
                                    "success", { position : "top" }
                                ); 
                            }else{
                                
                                $('button[class="btn btn-primary pau"]')[0].setAttribute('value', 'RERUN')
                                
                                $('button[class="btn btn-primary pau"]')[0].innerText = 'RERUN'; 
                                $('button[class="btn btn-primary pau"]').notify(
                                    'PAUSE', 
                                    "success", { position : "top" }
                                ); 
                            };
                            setTimeout(function(){ $('button[class="btn btn-primary pau"]').prop( "disabled", false );  }, 1500); 
                        }; 
                    }).catch(error => {
                        $('button[class="btn btn-primary pau"]').notify(`NOT`, "error", { position : "top" });  
                        setTimeout(function(){ $('button[class="btn btn-primary pau"]').prop( "disabled", false );  }, 1500); 
                    }); 
                };
            }, true
        );
        document.querySelector('button[class="btn btn-primary ren"]').onclick = function (e) {
            
            if (
                !$('button[class="btn btn-primary ren"]').attr('disabled')
            ){
                
                $('button[class="btn btn-primary ren"]').prop( "disabled", true ); 
                
                fetch(
                    `/update`,
                    {method : 'GET'}
                ).then(
                    result => result.text()
                ).then(result => {
                    if(result != 'okay'){ throw result }else{
                        $('button[class="btn btn-primary ren"]').notify("RENEW", "success", { position : "top" }); 
                        $('button[class="btn btn-primary ren"]').prop( "disabled", false ); 
                    }; 
                }).catch(error => {
                    $('button[class="btn btn-primary ren"]').notify(`NOT`, "error", { position : "top" });  
                    $('button[class="btn btn-primary ren"]').prop( "disabled", false ); 
                }); 
            };
            
        }; 
        document.querySelector('button[class="btn btn-primary res"]').onclick = function (e) {
            
            if (
                !$('button[class="btn btn-primary res"]').attr('disabled')
            ){
                
                $('button[class="btn btn-primary res"]').prop( "disabled", true ); 
                
                fetch(
                    `/res`,
                    {method : 'GET'}
                ).then(
                    result => result.text()
                ).then(result => {
                    if(result != 'okay'){ throw result }else{
                        $('button[class="btn btn-primary res"]').notify("RESET", "success", { position : "top" }); 
                        $('button[class="btn btn-primary res"]').prop( "disabled", false ); 
                    }; 
                }).catch(error => {
                    $('button[class="btn btn-primary res"]').notify(`NOT`, "error", { position : "top" });  
                    $('button[class="btn btn-primary res"]').prop( "disabled", false ); 
                }); 
            };
            
        }; 
        

        window['check-wax-pool-before-mine'].addEventListener('change', function(e) {
            if (
                !$(this).attr('disabled')
            ){
                $(this).prop( "disabled", true ); $(this).attr('readonly', true); 
                
                fetch(
                    `/planet/wax/set?check=${this.checked}&might=${ parseFloat(window['check-wax-pool-before-mine'].parentNode.querySelector('input[type="range"]').value).toFixed(2) }`,
                    {method : 'GET'}
                ).then(
                    result => result.json()
                ).then(result => {
                    if(result['text'] != 'okay'){ throw result }else{
                        if (
                            result['check'] == false
                        ){
                            this.checked = false; 
                            $(this).notify(
                                'REMOVE POOL CHECK', 
                                "success", { position : "top" }
                            ); 
                        }else{
                            this.checked = true; 
                            $(this).notify(
                                'ENABLE POOL CHECK', 
                                "success", { position : "top" }
                            ); 
                        };
                        (function (checkbox){
                            setTimeout(function(){ $(checkbox).prop( "disabled", false ); $(this).attr('readonly', false); }, 1000); 
                        })(this); 
                    }; 
                }).catch(error => {
                    $.notify(`NOT : ${error}`, "error", { position : "top" }); 
                    (function (checkbox){
                        setTimeout(function(){ $(checkbox).prop( "disabled", false ); $(this).attr('readonly', false); }, 1000); checkbox.checked = !checkbox.checked;
                    })(this); 
                }); 
            };
        }); 
        window['check-eos-pool-before-mine'].addEventListener('change', function(e) {
            if (
                !$(this).attr('disabled')
            ){
                $(this).prop( "disabled", true ); $(this).attr('readonly', true); 
                
                fetch(
                    `/planet/eos/set?check=${this.checked}&might=${ parseFloat(window['check-eos-pool-before-mine'].parentNode.querySelector('input[type="range"]').value).toFixed(2) }`,
                    {method : 'GET'}
                ).then(
                    result => result.json()
                ).then(result => {
                    if(result['text'] != 'okay'){ throw result }else{
                        if (
                            result['check'] == false
                        ){
                            this.checked = false; 
                            $(this).notify(
                                'REMOVE POOL CHECK', 
                                "success", { position : "top" }
                            ); 
                        }else{
                            this.checked = true; 
                            $(this).notify(
                                'ENABLE POOL CHECK', 
                                "success", { position : "top" }
                            ); 
                        };
                        (function (checkbox){
                            setTimeout(function(){ $(checkbox).prop( "disabled", false ); $(this).attr('readonly', false); }, 1000); 
                        })(this); 
                    }; 
                }).catch(error => {
                    $.notify(`NOT : ${error}`, "error", { position : "top" }); 
                    (function (checkbox){
                        setTimeout(function(){ $(checkbox).prop( "disabled", false ); $(this).attr('readonly', false); }, 1000); checkbox.checked = !checkbox.checked;
                    })(this); 
                }); 
                
            };
        }); 
		
        document.querySelector('input[aria-label="KEY PRV ACTIVE"]').addEventListener('change', function (e) {
			document.querySelector('input[aria-label="KEY PRV ACTIVE"]').PrivateKey  = document.querySelector('input[aria-label="KEY PRV ACTIVE"]').value; 
			try{
				if (
					eosjs_ecc.isValidPrivate( document.querySelector('input[aria-label="KEY PRV ACTIVE"]').PrivateKey ) == true
				){
					document.querySelector('input[aria-label="KEY PRV ACTIVE"]').PublicKey 		= eosjs_ecc.PrivateKey.fromString( document.querySelector('input[aria-label="KEY PRV ACTIVE"]').PrivateKey ).toPublic().toString(); 
					document.querySelector('input[aria-label="KEY PRV ACTIVE"]').value 			= document.querySelector('input[aria-label="KEY PRV ACTIVE"]').PublicKey; 
					
					fetch("https://wax.greymass.com/v1/chain/get_accounts_by_authorizers", {
						"headers": {
							"accept": "application/json, text/plain, */*",
							"accept-language": "en-US",
							"content-type": "application/json;charset=UTF-8",
							"sec-fetch-dest": "empty",
							"sec-fetch-mode": "cors",
							"sec-fetch-site": "cross-site"
						},
						"body"              : JSON.stringify({
							'keys' 			: [document.querySelector('input[aria-label="KEY PRV ACTIVE"]').PublicKey]
						}),
						"method"            : "POST",
						"mode" 				: "cors",
						"credentials" 		: "omit"
					}).then(
						result => result.json()
					).then(result => {
						document.querySelector('input[aria-label="KEY PRV ACTIVE"]').TagKey = result['accounts'][0]['account_name']; 
						if (
							document.querySelector('input[aria-label="KEY PRV ACTIVE"]').TagKey
						){
							document.querySelector('input[aria-label="KEY TAG ACTIVE"]').value = document.querySelector('input[aria-label="KEY PRV ACTIVE"]').TagKey; 
							$( document.querySelector('form[action*="#KEY"] button.btn-primary.key-add') ).prop( "disabled", false )
						}else{
							document.querySelector('input[aria-label="KEY TAG ACTIVE"]').value = ''; 
							$( document.querySelector('form[action*="#KEY"] button.btn-primary.key-add') ).prop( "disabled", true )
						}; 
					}).catch(error => {
						e.srcElement.value = ''; $( document.querySelector('form[action*="#KEY"] button.btn-primary.key-add') ).prop( "disabled", true ); 
					});
				}else{
					e.srcElement.value = ''; $( document.querySelector('form[action*="#KEY"] button.btn-primary.key-add') ).prop( "disabled", true ); 
				}
			}catch(e){
				e.srcElement.value = ''; $( document.querySelector('form[action*="#KEY"] button.btn-primary.key-add') ).prop( "disabled", true ); 
			}; 
        }); 
        document.querySelector('form[action="#KEY"]').addEventListener('submit', function (e) {
            if (
                !$( e.submitter ).attr('disabled') && e.submitter == document.querySelector('form[action="#KEY"] button.btn.btn-primary.key-add')
            ){
                $( e.submitter ).prop( "disabled", true ); $(this).attr('readonly', true); 
                fetch(
                    `/masterKey/add`, {
						"headers" 			: {
                            "accept"        : "application/json",
                            "content-type"  : "application/json"
						},
						"body"              : JSON.stringify({
							'PrvKey'        : document.querySelector('input[aria-label="KEY PRV ACTIVE"]').PrivateKey, 
							'PubKey'        : document.querySelector('input[aria-label="KEY PRV ACTIVE"]').PublicKey, 
							'TagKey'        : document.querySelector('input[aria-label="KEY PRV ACTIVE"]').TagKey
						}),
						"method"            : "POST"
					}
                ).then(
                    result => result.text()
                ).then(result => {
					if(result != 'okay'){ throw result }else{
						$.notify(`MASTER KEY : ADD DONE`, "success", { position : "top" }); 
						//	$( document.querySelector('input[aria-label="KEY TAG ACTIVE"]') ).prop( "disabled", true ); $(this).attr('readonly', true); 
						$( document.querySelector('input[aria-label="KEY PRV ACTIVE"]') ).prop( "disabled", true ); $(this).attr('readonly', true); 
						$( e.submitter ).prop( "disabled", true ); $(this).attr('readonly', true); 
					}; 
                }).catch(error => {
                    $.notify(`MASTER KEY : ADD FAIL`, "error", { position : "top" }); 
					document.querySelector('input[aria-label="KEY TAG ACTIVE"]').value = ''; 
					document.querySelector('input[aria-label="KEY PRV ACTIVE"]').value = ''; 
					$( e.submitter ).prop( "disabled", false ); $(this).attr('readonly', false); 
                }); 
            };
            if (
                !$( e.submitter ).attr('disabled') && e.submitter == document.querySelector('form[action="#KEY"] button.btn.btn-primary.key-del')
            ){
                $( e.submitter ).prop( "disabled", true ); $(this).attr('readonly', true); 
                fetch(
                    `/masterKey/del`, {
						"headers" 			: {
                            "accept"        : "application/json",
                            "content-type"  : "application/json"
						},
						"method"            : "GET"
					}
                ).then(
                    result => result.text()
                ).then(result => {
					if(result != 'okay'){ throw result }else{
						$.notify(`MASTER KEY : DEL DONE`, "success", { position : "top" }); 
						
						setTimeout(function(){ 
							document.querySelector('input[aria-label="KEY TAG ACTIVE"]').value = ''; 
							document.querySelector('input[aria-label="KEY PRV ACTIVE"]').value = ''; 
							//	$( document.querySelector('input[aria-label="KEY TAG ACTIVE"]') ).prop( "disabled", false ); $(this).attr('readonly', false); 
							$( document.querySelector('input[aria-label="KEY PRV ACTIVE"]') ).prop( "disabled", false ); $(this).attr('readonly', false); 
							document.querySelector('form[action="#KEY"] input.masterKey-switch').checked = false; 
							$( document.querySelector('form[action="#KEY"] input.masterKey-switch') ).prop( "disabled", true ); 
							$( e.submitter ).prop( "disabled", false ); $(this).attr('readonly', false); 
							
							try{
								document.querySelector('form[action*="#KEY"]').parentElement.querySelector('div[id*="masterKey_cpu_prg"]').parentElement.querySelector('div.progress-label').innerText = `CPU 0000000`
							}catch(e){}; 
							//	try{ document.querySelector('form[action*="#KEY"]').parentElement.querySelector('div[id*="masterKey_cpu_prg"]').innerText           = ``}catch(e){}; 
							try{ document.querySelector('form[action*="#KEY"]').parentElement.querySelector('div[id*="masterKey_cpu_prg"]').style.width         = `0%`}catch(e){}; 
							try{ document.querySelector('form[action*="#KEY"]').parentElement.querySelector('div[id*="masterKey_cpu_prg"]').setAttribute(
								'aria-valuenow', 0
							)}catch(e){}; 
							try{ document.querySelector('form[action*="#KEY"]').parentElement.querySelector('div[id*="masterKey_cpu_prg"]').setAttribute(
								'aria-valuemax', 
								``
							)}catch(e){}; 
							try{
								document.querySelector('form[action*="#KEY"]').parentElement.querySelector('div[id*="masterKey_net_prg"]').parentElement.querySelector('div.progress-label').innerText = `NET 0000000`
							}catch(e){}; 
							//	try{ document.querySelector('form[action*="#KEY"]').parentElement.querySelector('div[id*="masterKey_net_prg"]').innerText           = ``}catch(e){}; 
							try{ document.querySelector('form[action*="#KEY"]').parentElement.querySelector('div[id*="masterKey_net_prg"]').style.width         = `0%`}catch(e){}; 
							try{ document.querySelector('form[action*="#KEY"]').parentElement.querySelector('div[id*="masterKey_net_prg"]').setAttribute(
								'aria-valuenow', 0
							)}catch(e){}; 
							try{ document.querySelector('form[action*="#KEY"]').parentElement.querySelector('div[id*="masterKey_net_prg"]').setAttribute(
								'aria-valuemax', 
								``
							)}catch(e){}; 
							try{
								document.querySelector('form[action*="#KEY"]').parentElement.querySelector('div[id*="masterKey_ram_prg"]').parentElement.querySelector('div.progress-label').innerText = `RAM 0000000`
							}catch(e){}; 
							//	try{ document.querySelector('form[action*="#KEY"]').parentElement.querySelector('div[id*="masterKey_ram_prg"]').innerText           = ``}catch(e){}; 
							try{ document.querySelector('form[action*="#KEY"]').parentElement.querySelector('div[id*="masterKey_ram_prg"]').style.width         = `0%`}catch(e){}; 
							try{ document.querySelector('form[action*="#KEY"]').parentElement.querySelector('div[id*="masterKey_ram_prg"]').setAttribute(
								'aria-valuenow', 0
							)}catch(e){}; 
							try{ document.querySelector('form[action*="#KEY"]').parentElement.querySelector('div[id*="masterKey_ram_prg"]').setAttribute(
								'aria-valuemax', 
								``
							)}catch(e){}; 
						}, 5000)
						
					}; 
                }).catch(error => {
                    $.notify(`MASTER KEY : DEL FAIL`, "error", { position : "top" }); 
					$( e.submitter ).prop( "disabled", false ); $(this).attr('readonly', false); 
                }); 
            };
        }); 
		
        document.querySelector('input.masterKey-switch[type="checkbox"]').addEventListener('change', function(e) {
            if (
                !$(this).attr('disabled')
            ){
                $(this).prop( "disabled", true ); $(this).attr('readonly', true);
                
                fetch(
                    `/masterKey/set?switch=${ this.checked }`,
                    {method : 'GET'}
                ).then(
                    result => result.json()
                ).then(result => {
                    if(result['text'] != 'okay'){ throw result }else{
                        if (
                            result['code'] == true
                        ){
                            this.checked = true; 
                            $(this).notify(
                                'MASTER KEY : ON', 
                                "success", { position : "top" }
                            ); 
                        }else{
                            this.checked = false; 
                            $(this).notify(
                                'MASTER KEY : NO', 
                                "error", { position : "top" }
                            ); 
                        };
                        (function (checkbox){
                            setTimeout(function(){ $(checkbox).prop( "disabled", false ); $(this).attr('readonly', false); }, 6000); 
                        })(this); 
                    }; 
                }).catch(error => {
                    $.notify(`MASTER KEY : ${error}`, "error", { position : "top" }); 
                    (function (checkbox){
                        setTimeout(function(){ $(checkbox).prop( "disabled", false ); $(this).attr('readonly', false); }, 6000); checkbox.checked = !checkbox.checked;
                    })(this); 
                }); 
            };
            //	if (this.checked) {
            //	    console.log("Checkbox is checked..", this.checked);
            //	}else{
            //	    console.log("Checkbox is not checked..", this.checked);
            //	}; 
        });
    }; 
}); 







