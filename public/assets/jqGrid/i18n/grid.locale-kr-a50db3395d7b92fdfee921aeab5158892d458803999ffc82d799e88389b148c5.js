!function(e){e.jgrid=e.jgrid||{},e.extend(e.jgrid,{defaults:{recordtext:"\ubcf4\uae30 {0} - {1} / {2}",emptyrecords:"\ud45c\uc2dc\ud560 \ud589\uc774 \uc5c6\uc2b5\ub2c8\ub2e4",loadtext:"\uc870\ud68c\uc911...",pgtext:"\ud398\uc774\uc9c0 {0} / {1}"},search:{caption:"\uac80\uc0c9...",Find:"\ucc3e\uae30",Reset:"\ucd08\uae30\ud654",odata:[{oper:"eq",text:"\uac19\ub2e4"},{oper:"ne",text:"\uac19\uc9c0 \uc54a\ub2e4"},{oper:"lt",text:"\uc791\ub2e4"},{oper:"le",text:"\uc791\uac70\ub098 \uac19\ub2e4"},{oper:"gt",text:"\ud06c\ub2e4"},{oper:"ge",text:"\ud06c\uac70\ub098 \uac19\ub2e4"},{oper:"bw",text:"\ub85c \uc2dc\uc791\ud55c\ub2e4"},{oper:"bn",text:"\ub85c \uc2dc\uc791\ud558\uc9c0 \uc54a\ub294\ub2e4"},{oper:"in",text:"\ub0b4\uc5d0 \uc788\ub2e4"},{oper:"ni",text:"\ub0b4\uc5d0 \uc788\uc9c0 \uc54a\ub2e4"},{oper:"ew",text:"\ub85c \ub05d\ub09c\ub2e4"},{oper:"en",text:"\ub85c \ub05d\ub098\uc9c0 \uc54a\ub294\ub2e4"},{oper:"cn",text:"\ub0b4\uc5d0 \uc874\uc7ac\ud55c\ub2e4"},{oper:"nc",text:"\ub0b4\uc5d0 \uc874\uc7ac\ud558\uc9c0 \uc54a\ub294\ub2e4"},{oper:"nu",text:"is null"},{oper:"nn",text:"is not null"}],groupOps:[{op:"AND",text:"\uc804\ubd80"},{op:"OR",text:"\uc784\uc758"}],operandTitle:"Click to select search operation.",resetTitle:"Reset Search Value"},edit:{addCaption:"\ud589 \ucd94\uac00",editCaption:"\ud589 \uc218\uc815",bSubmit:"\uc804\uc1a1",bCancel:"\ucde8\uc18c",bClose:"\ub2eb\uae30",saveData:"\uc790\ub8cc\uac00 \ubcc0\uacbd\ub418\uc5c8\uc2b5\ub2c8\ub2e4! \uc800\uc7a5\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",bYes:"\uc608",bNo:"\uc544\ub2c8\uc624",bExit:"\ucde8\uc18c",msg:{required:"\ud544\uc218\ud56d\ubaa9\uc785\ub2c8\ub2e4",number:"\uc720\ud6a8\ud55c \ubc88\ud638\ub97c \uc785\ub825\ud574 \uc8fc\uc138\uc694",minValue:"\uc785\ub825\uac12\uc740 \ud06c\uac70\ub098 \uac19\uc544\uc57c \ud569\ub2c8\ub2e4",maxValue:"\uc785\ub825\uac12\uc740 \uc791\uac70\ub098 \uac19\uc544\uc57c \ud569\ub2c8\ub2e4",email:"\uc720\ud6a8\ud558\uc9c0 \uc54a\uc740 \uc774\uba54\uc77c\uc8fc\uc18c\uc785\ub2c8\ub2e4",integer:"\uc720\ud6a8\ud55c \uc22b\uc790\ub97c \uc785\ub825\ud558\uc138\uc694",date:"\uc720\ud6a8\ud55c \ub0a0\uc9dc\ub97c \uc785\ub825\ud558\uc138\uc694",url:"\uc740 \uc720\ud6a8\ud558\uc9c0 \uc54a\uc740 URL\uc785\ub2c8\ub2e4. \ubb38\uc7a5\uc55e\uc5d0 \ub2e4\uc74c\ub2e8\uc5b4\uac00 \ud544\uc694\ud569\ub2c8\ub2e4('http://' or 'https://')",nodefined:" \uc740 \uc815\uc758\ub3c4\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4!",novalue:" \ubc18\ud658\uac12\uc774 \ud544\uc694\ud569\ub2c8\ub2e4!",customarray:"\uc0ac\uc6a9\uc790\uc815\uc758 \ud568\uc218\ub294 \ubc30\uc5f4\uc744 \ubc18\ud658\ud574\uc57c \ud569\ub2c8\ub2e4!",customfcheck:"Custom function should be present in case of custom checking!"}},view:{caption:"\ud589 \uc870\ud68c",bClose:"\ub2eb\uae30"},del:{caption:"\uc0ad\uc81c",msg:"\uc120\ud0dd\ub41c \ud589\uc744 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",bSubmit:"\uc0ad\uc81c",bCancel:"\ucde8\uc18c"},nav:{edittext:"",edittitle:"\uc120\ud0dd\ub41c \ud589 \ud3b8\uc9d1",addtext:"",addtitle:"\ud589 \uc0bd\uc785",deltext:"",deltitle:"\uc120\ud0dd\ub41c \ud589 \uc0ad\uc81c",searchtext:"",searchtitle:"\ud589 \ucc3e\uae30",refreshtext:"",refreshtitle:"\uadf8\ub9ac\ub4dc \uac31\uc2e0",alertcap:"\uacbd\uace0",alerttext:"\ud589\uc744 \uc120\ud0dd\ud558\uc138\uc694",viewtext:"",viewtitle:"\uc120\ud0dd\ub41c \ud589 \uc870\ud68c"},col:{caption:"\uc5f4\uc744 \uc120\ud0dd\ud558\uc138\uc694",bSubmit:"\ud655\uc778",bCancel:"\ucde8\uc18c"},errors:{errcap:"\uc624\ub958",nourl:"\uc124\uc815\ub41c url\uc774 \uc5c6\uc2b5\ub2c8\ub2e4",norecords:"\ucc98\ub9ac\ud560 \ud589\uc774 \uc5c6\uc2b5\ub2c8\ub2e4",model:"colNames\uc758 \uae38\uc774\uac00 colModel\uacfc \uc77c\uce58\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4!"},formatter:{integer:{thousandsSeparator:",",defaultValue:"0"},number:{decimalSeparator:".",thousandsSeparator:",",decimalPlaces:2,defaultValue:"0.00"},currency:{decimalSeparator:".",thousandsSeparator:",",decimalPlaces:2,prefix:"",suffix:"",defaultValue:"0.00"},date:{dayNames:["Sun","Mon","Tue","Wed","Thr","Fri","Sat","\uc77c","\uc6d4","\ud654","\uc218","\ubaa9","\uae08","\ud1a0"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","1\uc6d4","2\uc6d4","3\uc6d4","4\uc6d4","5\uc6d4","6\uc6d4","7\uc6d4","8\uc6d4","9\uc6d4","10\uc6d4","11\uc6d4","12\uc6d4"],AmPm:["am","pm","AM","PM"],S:function(e){return e<11||e>13?["st","nd","rd","th"][Math.min((e-1)%10,3)]:"th"},srcformat:"Y-m-d",newformat:"m-d-Y",parseRe:/[#%\\\/:_;.,\t\s-]/,masks:{ISO8601Long:"Y-m-d H:i:s",ISO8601Short:"Y-m-d",ShortDate:"Y/j/n",LongDate:"l, F d, Y",FullDateTime:"l, F d, Y g:i:s A",MonthDay:"F d",ShortTime:"g:i A",LongTime:"g:i:s A",SortableDateTime:"Y-m-d\\TH:i:s",UniversalSortableDateTime:"Y-m-d H:i:sO",YearMonth:"F, Y"},reformatAfterEdit:!1},baseLinkUrl:"",showAction:"",target:"",checkbox:{disabled:!0},idName:"id"}})}(jQuery);