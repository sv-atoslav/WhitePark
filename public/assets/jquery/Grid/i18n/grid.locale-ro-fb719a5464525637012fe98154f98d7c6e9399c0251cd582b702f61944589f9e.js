!function(e){e.jgrid=e.jgrid||{},e.extend(e.jgrid,{defaults:{recordtext:"Vizualizare {0} - {1} din {2}",emptyrecords:"Nu exist\u0103 \xeenregistr\u0103ri de vizualizat",loadtext:"\xcenc\u0103rcare...",pgtext:"Pagina {0} din {1}"},search:{caption:"Caut\u0103...",Find:"Caut\u0103",Reset:"Resetare",odata:[{oper:"eq",text:"egal"},{oper:"ne",text:"diferit"},{oper:"lt",text:"mai mic"},{oper:"le",text:"mai mic sau egal"},{oper:"gt",text:"mai mare"},{oper:"ge",text:"mai mare sau egal"},{oper:"bw",text:"\xeencepe cu"},{oper:"bn",text:"nu \xeencepe cu"},{oper:"in",text:"se g\u0103se\u0219te \xeen"},{oper:"ni",text:"nu se g\u0103se\u0219te \xeen"},{oper:"ew",text:"se termin\u0103 cu"},{oper:"en",text:"nu se termin\u0103 cu"},{oper:"cn",text:"con\u021bine"},{oper:"nc",text:""},{oper:"nu",text:"is null"},{oper:"nn",text:"is not null"}],groupOps:[{op:"AND",text:"toate"},{op:"OR",text:"oricare"}],operandTitle:"Click to select search operation.",resetTitle:"Reset Search Value"},edit:{addCaption:"Ad\u0103ugare \xeenregistrare",editCaption:"Modificare \xeenregistrare",bSubmit:"Salveaz\u0103",bCancel:"Anulare",bClose:"\xcenchide",saveData:"Informa\u021biile au fost modificate! Salva\u021bi modific\u0103rile?",bYes:"Da",bNo:"Nu",bExit:"Anulare",msg:{required:"C\xe2mpul este obligatoriu",number:"V\u0103 rug\u0103m introduce\u021bi un num\u0103r valid",minValue:"valoarea trebuie sa fie mai mare sau egal\u0103 cu",maxValue:"valoarea trebuie sa fie mai mic\u0103 sau egal\u0103 cu",email:"nu este o adres\u0103 de e-mail valid\u0103",integer:"V\u0103 rug\u0103m introduce\u021bi un num\u0103r valid",date:"V\u0103 rug\u0103m s\u0103 introduce\u021bi o dat\u0103 valid\u0103",url:"Nu este un URL valid. Prefixul  este necesar('http://' or 'https://')",nodefined:" is not defined!",novalue:" return value is required!",customarray:"Custom function should return array!",customfcheck:"Custom function should be present in case of custom checking!"}},view:{caption:"Vizualizare \xeenregistrare",bClose:"\xcenchidere"},del:{caption:"\u0218tegere",msg:"\u0218terge\u021bi \xeenregistrarea (\xeenregistr\u0103rile) selectate?",bSubmit:"\u0218terge",bCancel:"Anulare"},nav:{edittext:"",edittitle:"Modific\u0103 r\xe2ndul selectat",addtext:"",addtitle:"Adaug\u0103 r\xe2nd nou",deltext:"",deltitle:"\u0218terge r\xe2ndul selectat",searchtext:"",searchtitle:"C\u0103utare \xeenregistr\u0103ri",refreshtext:"",refreshtitle:"Re\xeencarcare Grid",alertcap:"Avertisment",alerttext:"V\u0103 rug\u0103m s\u0103 selecta\u021bi un r\xe2nd",viewtext:"",viewtitle:"Vizualizeaz\u0103 r\xe2ndul selectat"},col:{caption:"Arat\u0103/Ascunde coloanele",bSubmit:"Salveaz\u0103",bCancel:"Anulare"},errors:{errcap:"Eroare",nourl:"Niciun url nu este setat",norecords:"Nu sunt \xeenregistr\u0103ri de procesat",model:"Lungimea colNames <> colModel!"},formatter:{integer:{thousandsSeparator:" ",defaultValue:"0"},number:{decimalSeparator:",",thousandsSeparator:" ",decimalPlaces:2,defaultValue:"0,00"},currency:{decimalSeparator:",",thousandsSeparator:" ",decimalPlaces:2,prefix:"",suffix:"",defaultValue:"0,00"},date:{dayNames:["Dum","Lun","Mar","Mie","Joi","Vin","S\xe2m","Duminic\u0103","Luni","Mar\u021bi","Miercuri","Joi","Vineri","S\xe2mb\u0103t\u0103"],monthNames:["Ian","Feb","Mar","Apr","Mai","Iun","Iul","Aug","Sep","Oct","Noi","Dec","Ianuarie","Februarie","Martie","Aprilie","Mai","Iunie","Iulie","August","Septembrie","Octombrie","Noiembrie","Decembrie"],AmPm:["am","pm","AM","PM"],S:function(e){return e<11||e>13?["st","nd","rd","th"][Math.min((e-1)%10,3)]:"th"},srcformat:"Y-m-d",newformat:"d/m/Y",parseRe:/[#%\\\/:_;.,\t\s-]/,masks:{ISO8601Long:"Y-m-d H:i:s",ISO8601Short:"Y-m-d",ShortDate:"n/j/Y",LongDate:"l, F d, Y",FullDateTime:"l, F d, Y g:i:s A",MonthDay:"F d",ShortTime:"g:i A",LongTime:"g:i:s A",SortableDateTime:"Y-m-d\\TH:i:s",UniversalSortableDateTime:"Y-m-d H:i:sO",YearMonth:"F, Y"},reformatAfterEdit:!1},baseLinkUrl:"",showAction:"",target:"",checkbox:{disabled:!0},idName:"id"}})}(jQuery);