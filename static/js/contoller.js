$(document).ready(function() {
    
    window.onload = function (){
    
        (function thiscode(){
            
            //  Request URL: https://api.waxsweden.org/v2/history/get_actions?account=f4teq.wam&skip=0&limit=100&sort=desc&transfer.to=f4teq.wam&transfer.from=m.federation&after=2021-07-31T17:00:00.000Z&before=2021-08-01T16:59:59.999Z

            fetch(
                '/',
                {method : 'POST'}
            ).then(
                result => result.json()
            ).then(result => {
                window['information-data'] = result; /*!    console.clear(); !*/
                
                var i = 0; var s = setInterval(function () {
                    i+= Math.ceil(Math.random() * 12) + 2;
                    if (i < 100) {
                        document.querySelector('div[class*="progress-bar"][id*="time_pg"]').style.width = `${i}%`; 
                    }else{
                        document.querySelector('div[class*="progress-bar"][id*="time_pg"]').style.width = '100%'; 
                    }; 
                    if (i >= 150) {
                        document.querySelector('div[class*="progress-bar"][id*="time_pg"]').style.width = '0%'; 
                        clearInterval(s); thiscode(); 
                    }; 
                }, 100); 
                
                for (TRELE of document.querySelectorAll(`tr[id*=".wam"]`)){
                    if(
                        !Object.keys( window['information-data']['DATA'] ).includes( TRELE.getAttribute('id') ) && (
                            $('button[class="btn btn-primary pau"]')[0].innerText == 'PAUSE'
                        )
                    ){
                        TRELE.remove(); 
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
                                        `${ WAXID.replace('.wam', '.').slice(-4) }`
                                    ).replace(
                                        '{ STAKE }', 
                                        window['information-data']['DATA'][WAXID]['cpu']['stake'].toString().split('.')[0]
                                    ).replace(
                                        '{ LAND }', 
                                        `${ window['information-data']['DATA'][WAXID]['land'].replace(/(^)1099512/gi, '') } : ${ window['information-data']['DATA'][WAXID]['commission'].toFixed(2) }`
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
                                        window['information-data']['DATA'][WAXID]['last_mine']['time'].replace('T', ' ')
                                    ).replace(
                                        '{ WAX TOTAL }', 
                                        Number( window['information-data']['DATA'][WAXID]['balance']['WAX'] ).toFixed(4)
                                    ).replace(
                                        '{ TLM TOTAL }', 
                                        Number( window['information-data']['DATA'][WAXID]['balance']['TLM'] ).toFixed(4)
                                    ).replace(
                                        '{ CPU MAX }', 
                                        window['information-data']['DATA'][WAXID]['cpu']['max']
                                    ).replace(
                                        '{ CPU NOW }', 
                                        0
                                    ).replace(
                                        '{ MAXIMUM COOLDOWN }', 
                                        parseInt( window['information-data']['DATA'][WAXID]['maxdelay'] )
                                    ).replace(
                                        /{ CPU PER }/g, 
                                        (100 - Number(window['information-data']['DATA'][WAXID]['cpu']['per']))
                                    ).replace(
                                        '-------------------------', 
                                        window['information-data']['DATA'][WAXID]['text'][ window['information-data']['DATA'][WAXID]['text']['step'] ]
                                    )
                                })
                            ); document.querySelector(`tr[id*="${WAXID}"]`).setAttribute('class', 'align-middle'); 
                            (function thiscode(w){
                                setTimeout(function () {
                                    w.innerText = `${Number(w.innerText.split('/')[0]) + 1}/s`; thiscode(w); 
                                }, 1000); 
                            })(
                                window[WAXID].querySelector('[id*="lastminedelay"]')
                            ); 
                        
                            (function thiscode(w){
                                
                                if (
                                    Math.ceil(Math.random() * 100) >= 50 ||
                                    w.querySelector('span[id="tlmperday"]').innerText == "0.0000/h"
                                ){
                                    fetch(
                                        `https://${
                                            (function (a) {return a[Math.floor((Math.random()*a.length))]})([
                                                'wax.cryptolions.io', 
                                                'waxapi.ledgerwise.io', 
                                                'apiwax.3dkrender.com', 
                                                'wax.cryptolions.io', 
                                                'waxapi.ledgerwise.io', 
                                                'apiwax.3dkrender.com', 
                                                'wax.cryptolions.io', 
                                                'waxapi.ledgerwise.io', 
                                                'apiwax.3dkrender.com', 
                                                'wax.cryptolions.io', 
                                                'waxapi.ledgerwise.io', 
                                                'apiwax.3dkrender.com', 
                                                'api.waxsweden.org', 
                                                'cors.bridged.cc/https://api.waxsweden.org', 
                                                'cors.bridged.cc/https://api.waxsweden.org', 
                                                'cors.bridged.cc/https://api.waxsweden.org', 
                                                'cors.bridged.cc/https://api.waxsweden.org'
                                            ])
                                        }/v2/history/get_actions?account=${
                                            w.id
                                        }&skip=0&limit=100&sort=desc&transfer.to=${
                                            w.id
                                        }&transfer.from=m.federation&after=${
                                            (new Date(Date.now() - (86400000 / 24 * 1.25))).toJSON()
                                        }&before=${
                                            new Date().toJSON()
                                        }`, {
                                            method : 'GET'
                                        }
                                    ).then(
                                        result => result.json()
                                    ).then(result => {
                                        
                                        TLM = 0.0000; for (x of result['actions']){
                                            TLM += x['act']['data']['amount']
                                        }; 
                                        
                                        w.querySelector('span[id="tlmperday"]').innerText = `${ TLM.toFixed(4) }/h`; 
                                        
                                        setTimeout(function(){ thiscode(w) }, 8000); 
                                        
                                    }).catch(error => {
                                        console.error(`Error : ${ error }`); setTimeout(function(){ thiscode(w) }, 1000); 
                                    }); 
                                }else{
                                    setTimeout(function(){ thiscode(w) }, 8000); 
                                }; 
                            })(
                                window[WAXID]
                            ); // <span id="tlmperday">0.0000/24h</span> .querySelector('[id*="tlmperday"]')
                            
                        }catch(e){}; 
						
                        document.querySelector(`tr[id*="${ WAXID }"]`).querySelector('span[id="waxid"]').parentElement.setAttribute(
							'title', `${ WAXID }`
                        ); 
                        document.querySelector(`tr[id*="${ WAXID }"]`).querySelector('span[id="waxid"]').parentElement.setAttribute(
							'data-bs-toggle', `tooltip`
                        ); 
                        document.querySelector(`tr[id*="${ WAXID }"]`).querySelector('span[id="waxid"]').parentElement.setAttribute(
							'data-bs-placement', `top`
                        ); 
                        document.querySelector(`tr[id*="${ WAXID }"]`).querySelector('span[id="waxid"]').parentElement.setAttribute(
							'data-bs-original-title', `${ WAXID }`
                        ); 
						
                    }else{
                        try{ window[WAXID].querySelector('[id*="lastminedelay"]').innerText     = `${ window['information-data']['DATA'][WAXID]['cooldown'] }/s`}catch(e){}; 
                        try{ window[WAXID].querySelector('[id*="lastminestamp"]').innerText     = `${ window['information-data']['DATA'][WAXID]['last_mine']['time'].replace('T', ' ') }`}catch(e){}; 
                        try{ window[WAXID].querySelector('[id*="cpustake"]').innerText          = `${ window['information-data']['DATA'][WAXID]['cpu']['stake'].toString().split('.')[0] } WAX`}catch(e){}; 
                        try{ window[WAXID].querySelector('[id*="cpu_prg"]').innerText           = `${ (100 - Number(window['information-data']['DATA'][WAXID]['cpu']['per'])) }%`}catch(e){}; 
                        try{ window[WAXID].querySelector('[id*="cpu_prg"]').style.width         = `${ (100 - Number(window['information-data']['DATA'][WAXID]['cpu']['per'])) }%`}catch(e){}; 
                        try{ window[WAXID].querySelector('[id*="cpu_prg"]').setAttribute(
                            'aria-valuenow', 
                            0
                        )}catch(e){}; 
                        try{ window[WAXID].querySelector('[id*="cpu_prg"]').setAttribute(
                            'aria-valuemax', 
                            `${ window['information-data']['DATA'][WAXID]['cpu']['max'] }`
                        )}catch(e){}; 
                        try{ window[WAXID].querySelector('[id*="waxbalance"]').innerText        = `${ Number( window['information-data']['DATA'][WAXID]['balance']['WAX'] ).toFixed(4) }`}catch(e){}; 
                        try{ window[WAXID].querySelector('[id*="tlmbalance"]').innerText        = `${ Number( window['information-data']['DATA'][WAXID]['balance']['TLM'] ).toFixed(4) }`}catch(e){}; 
                        try{
                            if (
                                window[WAXID].querySelector('[id*="land"]').getAttribute('type') == 'submit'
                            ){
                                window[WAXID].querySelector('[id*="land"]').innerText           = `${ window['information-data']['DATA'][WAXID]['land'].replace(/(^)1099512/gi, '') } : ${ window['information-data']['DATA'][WAXID]['commission'].toFixed(2) }`
                            }; 
                        }catch(e){
                            
                        }; 
                        try{ window[WAXID].querySelector('[id*="lasttlm"]').innerText           = `${ window['information-data']['DATA'][WAXID]['last_mine']['mine'] }`}catch(e){}; 
                        try{ window[WAXID].querySelector('[id*="lastcpu"]').innerText           = `${ window['information-data']['DATA'][WAXID]['cpu']['last_cpu_usage'] }us`}catch(e){}; 
                        try{ window[WAXID].querySelector('[id*="state"]').innerHTML             = `${ window['information-data']['DATA'][WAXID]['text'][ window['information-data']['DATA'][WAXID]['text']['step'] ] }`}catch(e){}; 
                        try{ window[WAXID].querySelector('[id*="maximumcooldown"]').innerText   = `${ parseInt( window['information-data']['DATA'][WAXID]['maxdelay'] ) }/s`}catch(e){}; 
                    }; 
                }; try{ delete window.WAXID }catch(e){}; 
                
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
                            'src', `https://awcloud-token.patiwatnumbut.repl.co/`
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
                
            }).catch(error => {
                console.error(`Error : ${ error }`); 
                document.querySelector('div[class*="progress-bar"][id*="time_pg"]').style.width = '0%'; 

                var i = 0; var s = setInterval(function () {
                    i+= Math.ceil(Math.random() * 12) + 2;
                    if (i >= 150) {
                        document.querySelector('div[class*="progress-bar"][id*="time_pg"]').style.width = '0%'; 
                        clearInterval(s); thiscode(); 
                    }; 
                }, 100); 
                
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
                        $('form[action*="#ADD"]').find('button').notify(`ERROR : ${ xhr.responseText }`, "error", { position : "top" }); 
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
                    }else{
                        $('form[action*="#ADD"]').find('button').notify("ADD NEW ACCOUNT", "success", { position : "top" }); 
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
                $('form[action*="#ADD"]').find('button').notify(`WARNING : INCORRENT INFO`, "warn", { position : "top" }); 
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
                        $('button[class="btn btn-primary pau"]').prop( "disabled", false ); 
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
        
    }; 
    
}); 