!function(e){e.jgrid=e.jgrid||{},e.extend(e.jgrid,{defaults:{recordtext:"Zobrazen\xfdch {0} - {1} z {2} z\xe1znamov",emptyrecords:"Neboli n\xe1jden\xe9 \u017eiadne z\xe1znamy",loadtext:"Na\u010d\xedt\xe1m...",pgtext:"Strana {0} z {1}"},search:{caption:"Vyh\u013ead\xe1vam...",Find:"H\u013eada\u0165",Reset:"Reset",odata:[{oper:"eq",text:"rovn\xe1 sa"},{oper:"ne",text:"nerovn\xe1 sa"},{oper:"lt",text:"men\u0161ie"},{oper:"le",text:"men\u0161ie alebo rovnaj\xface sa"},{oper:"gt",text:"v\xe4\u010d\u0161ie"},{oper:"ge",text:"v\xe4\u010d\u0161ie alebo rovnaj\xface sa"},{oper:"bw",text:"za\u010d\xedna s"},{oper:"bn",text:"neza\u010d\xedna s"},{oper:"in",text:"je v"},{oper:"ni",text:"nie je v"},{oper:"ew",text:"kon\u010d\xed s"},{oper:"en",text:"nekon\u010d\xed s"},{oper:"cn",text:"obahuje"},{oper:"nc",text:"neobsahuje"},{oper:"nu",text:"is null"},{oper:"nn",text:"is not null"}],groupOps:[{op:"AND",text:"v\u0161etk\xfdch"},{op:"OR",text:"niektor\xe9ho z"}],operandTitle:"Click to select search operation.",resetTitle:"Reset Search Value"},edit:{addCaption:"Prida\u0165 z\xe1znam",editCaption:"Edit\xe1cia z\xe1znamov",bSubmit:"Ulo\u017ei\u0165",bCancel:"Storno",bClose:"Zavrie\u0165",saveData:"\xdadaje boli zmenen\xe9! Ulo\u017ei\u0165 zmeny?",bYes:"Ano",bNo:"Nie",bExit:"Zru\u0161i\u0165",msg:{required:"Pole je po\u017eadovan\xe9",number:"Pros\xedm, vlo\u017ete val\xeddne \u010d\xedslo",minValue:"hodnota mus\xed b\xfd\u0165 v\xe4\u010d\u0161ia ako alebo rovn\xe1 ",maxValue:"hodnota mus\xed b\xfd\u0165 men\u0161ia ako alebo rovn\xe1 ",email:"nie je val\xeddny e-mail",integer:"Pros\xedm, vlo\u017ete cel\xe9 \u010d\xedslo",date:"Pros\xedm, vlo\u017ete val\xeddny d\xe1tum",url:"nie je platnou URL. Po\u017eadovan\xfd prefix ('http://' alebo 'https://')",nodefined:" nie je definovan\xfd!",novalue:" je vy\u017eadovan\xe1 n\xe1vratov\xe1 hodnota!",customarray:"Custom function mala vr\xe1ti\u0165 pole!",customfcheck:"Custom function by mala by\u0165 pr\xedtomn\xe1 v pr\xedpade custom checking!"}},view:{caption:"Zobrazi\u0165 z\xe1znam",bClose:"Zavrie\u0165"},del:{caption:"Zmaza\u0165",msg:"Zmaza\u0165 vybran\xfd(\xe9) z\xe1znam(y)?",bSubmit:"Zmaza\u0165",bCancel:"Storno"},nav:{edittext:" ",edittitle:"Editova\u0165 vybran\xfd riadok",addtext:" ",addtitle:"Prida\u0165 nov\xfd riadek",deltext:" ",deltitle:"Zmaza\u0165 vybran\xfd z\xe1znam ",searchtext:" ",searchtitle:"N\xe1js\u0165 z\xe1znamy",refreshtext:"",refreshtitle:"Obnovi\u0165 tabu\u013eku",alertcap:"Varovanie",alerttext:"Pros\xedm, vyberte riadok",viewtext:"",viewtitle:"Zobrazi\u0165 vybran\xfd riadok"},col:{caption:"Zobrazit/Skr\xfd\u0165 st\u013apce",bSubmit:"Ulo\u017ei\u0165",bCancel:"Storno"},errors:{errcap:"Chyba",nourl:"Nie je nastaven\xe1 url",norecords:"\u017diadne z\xe1znamy k spracovaniu",model:"D\u013a\u017eka colNames <> colModel!"},formatter:{integer:{thousandsSeparator:" ",defaultValue:"0"},number:{decimalSeparator:".",thousandsSeparator:" ",decimalPlaces:2,defaultValue:"0.00"},currency:{decimalSeparator:".",thousandsSeparator:" ",decimalPlaces:2,prefix:"",suffix:"",defaultValue:"0.00"},date:{dayNames:["Ne","Po","Ut","St","\u0160t","Pi","So","Nedela","Pondelok","Utorok","Streda","\u0160tvrtok","Piatek","Sobota"],monthNames:["Jan","Feb","Mar","Apr","M\xe1j","J\xfan","J\xfal","Aug","Sep","Okt","Nov","Dec","Janu\xe1r","Febru\xe1r","Marec","Apr\xedl","M\xe1j","J\xfan","J\xfal","August","September","Okt\xf3ber","November","December"],AmPm:["do","od","DO","OD"],S:function(e){return e<11||e>13?["st","nd","rd","th"][Math.min((e-1)%10,3)]:"th"},srcformat:"Y-m-d",newformat:"d/m/Y",parseRe:/[#%\\\/:_;.,\t\s-]/,masks:{ISO8601Long:"Y-m-d H:i:s",ISO8601Short:"Y-m-d",ShortDate:"n/j/Y",LongDate:"l, F d, Y",FullDateTime:"l, F d, Y g:i:s A",MonthDay:"F d",ShortTime:"g:i A",LongTime:"g:i:s A",SortableDateTime:"Y-m-d\\TH:i:s",UniversalSortableDateTime:"Y-m-d H:i:sO",YearMonth:"F, Y"},reformatAfterEdit:!1},baseLinkUrl:"",showAction:"",target:"",checkbox:{disabled:!0},idName:"id"}})}(jQuery);