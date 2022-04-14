
                if (
                    window['information-data']['DATA'] && 
                    Object.keys( window['information-data']['DATA'] ).length >= 1 && 
					!document.querySelector('iframe[id*="fwMonitor"]').getAttribute('url').match(
                        (function (arr){
						    for (WAXID in window['information-data']['DATA']){
						        if( window['information-data']['DATA'][WAXID]['vers']['fw']['sw'] == true ){ arr.push(WAXID) }
						    }; return arr.join(',')
						})([])
                    ) && (function (arr){
					    for (WAXID in window['information-data']['DATA']){
					        if( window['information-data']['DATA'][WAXID]['vers']['fw']['sw'] == true ){ arr.push(WAXID) }
					    }; return arr.join(',')
					})([]) != ''
                ){
                    document.querySelector('iframe[id*="fwMonitor"]').setAttribute(
                        'src', '/?monitor=fw&waxid=' + (function (arr){
						    for (WAXID in window['information-data']['DATA']){
						        if( window['information-data']['DATA'][WAXID]['vers']['fw']['sw'] == true ){ arr.push(WAXID) }
						    }; return arr.join(',')
						})([])
                    ); 
                    document.querySelector('iframe[id*="fwMonitor"]').setAttribute(
                        'url', '/?monitor=fw&waxid=' + (function (arr){
						    for (WAXID in window['information-data']['DATA']){
						        if( window['information-data']['DATA'][WAXID]['vers']['fw']['sw'] == true ){ arr.push(WAXID) }
						    }; return arr.join(',')
						})([])
                    ); 
					document.querySelector('iframe[id*="fwMonitor"]').parentElement.style.display= 'table-cell'; 
					document.querySelector('iframe[id*="fwMonitor"]').style.height = `${ ((new URL(window.location.href.split('#')[0] + document.querySelector('iframe[id*="fwMonitor"]').getAttribute('src'))).searchParams.get("waxid").split(',').length / 5) * 412 }`; 
                }; 