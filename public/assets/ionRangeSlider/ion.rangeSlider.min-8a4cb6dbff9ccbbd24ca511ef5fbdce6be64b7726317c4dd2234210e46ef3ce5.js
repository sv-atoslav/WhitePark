!function(t,e,o,s){var i,a=0,r=function(){var t=s.userAgent,e=/msie\s\d+/i;return 0<t.search(e)&&(t=e.exec(t).toString(),9>(t=t.split(" ")[1]))}(),n="ontouchstart"in o||0<s.msMaxTouchPoints,l=function(t){return"Number"!=typeof t&&(t=parseFloat(t)),isNaN(t)?null:t},p={init:function(s){return this.each(function(){var p=t.extend({min:null,max:null,from:null,to:null,type:"single",step:null,prefix:"",postfix:"",maxPostfix:"",hasGrid:!1,hideMinMax:!1,hideFromTo:!1,prettify:!0,disable:!1,values:null,onChange:null,onLoad:null,onFinish:null},s),m=t(this),f=this,u=!1,d=null;if(!m.data("isActive")){m.data("isActive",!0),this.pluginCount=a+=1,m.prop("value")&&(d=m.prop("value").split(";")),"single"===p.type?d&&1<d.length?("number"!=typeof p.min?p.min=parseFloat(d[0]):"number"!=typeof p.from&&(p.from=parseFloat(d[0])),"number"!=typeof p.max&&(p.max=parseFloat(d[1]))):d&&1===d.length&&"number"!=typeof p.from&&(p.from=parseFloat(d[0])):"double"===p.type&&(d&&1<d.length?("number"!=typeof p.min?p.min=parseFloat(d[0]):"number"!=typeof p.from&&(p.from=parseFloat(d[0])),"number"!=typeof p.max?p.max=parseFloat(d[1]):"number"!=typeof p.to&&(p.to=parseFloat(d[1]))):d&&1===d.length&&("number"!=typeof p.min?p.min=parseFloat(d[0]):"number"!=typeof p.from&&(p.from=parseFloat(d[0])))),"number"==typeof m.data("min")&&(p.min=parseFloat(m.data("min"))),"number"==typeof m.data("max")&&(p.max=parseFloat(m.data("max"))),"number"==typeof m.data("from")&&(p.from=parseFloat(m.data("from"))),"number"==typeof m.data("to")&&(p.to=parseFloat(m.data("to"))),m.data("step")&&(p.step=parseFloat(m.data("step"))),m.data("type")&&(p.type=m.data("type")),m.data("prefix")&&(p.prefix=m.data("prefix")),m.data("postfix")&&(p.postfix=m.data("postfix")),m.data("maxpostfix")&&(p.maxPostfix=m.data("maxpostfix")),m.data("hasgrid")&&(p.hasGrid=m.data("hasgrid")),m.data("hideminmax")&&(p.hideMinMax=m.data("hideminmax")),m.data("hidefromto")&&(p.hideFromTo=m.data("hidefromto")),m.data("prettify")&&(p.prettify=m.data("prettify")),m.data("disable")&&(p.disable=m.data("disable")),m.data("values")&&(p.values=m.data("values").split(",")),p.min=l(p.min),p.min||0===p.min||(p.min=10),p.max=l(p.max),p.max||0===p.max||(p.max=100),"[object Array]"!==Object.prototype.toString.call(p.values)&&(p.values=null),p.values&&0<p.values.length&&(p.min=0,p.max=p.values.length-1,p.step=1,u=!0),p.from=l(p.from),p.from||0===p.from||(p.from=p.min),p.to=l(p.to),p.to||0===p.to||(p.to=p.max),p.step=l(p.step),p.step||(p.step=1),p.from<p.min&&(p.from=p.min),p.from>p.max&&(p.from=p.min),p.to<p.min&&(p.to=p.max),p.to>p.max&&(p.to=p.max),"double"===p.type&&(p.from>p.to&&(p.from=p.to),p.to<p.from&&(p.to=p.from));var x=function(t){return t=t.toString(),p.prettify&&(t=t.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g,"$1 ")),t},d='<span class="irs" id="irs-'+this.pluginCount+'"></span>';m[0].style.display="none",m.before(d);var h,y,b,c,v,g,N,X,C,M,F,P,w=m.prev(),_=t(e.body),I=t(o),k=!1,A=!1,D=!0,S={},T=0,W=0,j=0,E=0,G=0,L=0,V=0,Q=0,R=0,O=0,$=0;parseInt(p.step,10)!==parseFloat(p.step)&&($=p.step.toString().split(".")[1],$=Math.pow(10,$.length)),this.updateData=function(e){D=!0,p=t.extend(p,e),w.find("*").off(),I.off("mouseup.irs"+f.pluginCount),_.off("mouseup.irs"+f.pluginCount),_.off("mousemove.irs"+f.pluginCount),w.html(""),q()},this.removeSlider=function(){w.find("*").off(),I.off("mouseup.irs"+f.pluginCount),_.off("mouseup.irs"+f.pluginCount),_.off("mousemove.irs"+f.pluginCount),w.html("").remove(),m.data("isActive",!1),m.show()};var q=function(){w.html('<span class="irs"><span class="irs-line"><span class="irs-line-left"></span><span class="irs-line-mid"></span><span class="irs-line-right"></span></span><span class="irs-min">0</span><span class="irs-max">1</span><span class="irs-from">0</span><span class="irs-to">0</span><span class="irs-single">0</span></span><span class="irs-grid"></span>'),h=w.find(".irs"),y=h.find(".irs-min"),b=h.find(".irs-max"),c=h.find(".irs-from"),v=h.find(".irs-to"),g=h.find(".irs-single"),P=w.find(".irs-grid"),p.hideFromTo&&(c[0].style.visibility="hidden",v[0].style.visibility="hidden",g[0].style.visibility="hidden"),p.hideFromTo||(c[0].style.visibility="visible",v[0].style.visibility="visible",g[0].style.visibility="visible"),p.hideMinMax&&(y[0].style.visibility="hidden",b[0].style.visibility="hidden",j=W=0),p.hideMinMax||(y[0].style.visibility="visible",b[0].style.visibility="visible",p.values?(y.html(p.prefix+p.values[0]+p.postfix),b.html(p.prefix+p.values[p.values.length-1]+p.maxPostfix+p.postfix)):(y.html(p.prefix+x(p.min)+p.postfix),b.html(p.prefix+x(p.max)+p.maxPostfix+p.postfix)),W=y.outerWidth(),j=b.outerWidth()),z()},z=function(){"single"===p.type?(h.append('<span class="irs-slider single"></span>'),N=h.find(".single"),N.on("mousedown",function(e){e.preventDefault(),e.stopPropagation(),H(e,t(this),null),A=k=!0,i=f.pluginCount,r&&t("*").prop("unselectable",!0)}),n&&N.on("touchstart",function(e){e.preventDefault(),e.stopPropagation(),H(e.originalEvent.touches[0],t(this),null),A=k=!0,i=f.pluginCount})):"double"===p.type&&(h.append('<span class="irs-diapason"></span><span class="irs-slider from"></span><span class="irs-slider to"></span>'),X=h.find(".from"),C=h.find(".to"),F=h.find(".irs-diapason"),J(),X.on("mousedown",function(e){e.preventDefault(),e.stopPropagation(),t(this).addClass("last"),C.removeClass("last"),H(e,t(this),"from"),A=k=!0,i=f.pluginCount,r&&t("*").prop("unselectable",!0)}),C.on("mousedown",function(e){e.preventDefault(),e.stopPropagation(),t(this).addClass("last"),X.removeClass("last"),H(e,t(this),"to"),A=k=!0,i=f.pluginCount,r&&t("*").prop("unselectable",!0)}),n&&(X.on("touchstart",function(e){e.preventDefault(),e.stopPropagation(),t(this).addClass("last"),C.removeClass("last"),H(e.originalEvent.touches[0],t(this),"from"),A=k=!0,i=f.pluginCount}),C.on("touchstart",function(e){e.preventDefault(),e.stopPropagation(),t(this).addClass("last"),X.removeClass("last"),H(e.originalEvent.touches[0],t(this),"to"),A=k=!0,i=f.pluginCount})),p.to===p.max&&X.addClass("last")),_.on("mouseup.irs"+f.pluginCount,function(){i===f.pluginCount&&k&&(k=A=!1,M.removeAttr("id"),M=null,"double"===p.type&&J(),U(),r&&t("*").prop("unselectable",!1))}),_.on("mousemove.irs"+f.pluginCount,function(t){k&&(T=t.pageX,K())}),w.on("mousedown",function(){i=f.pluginCount}),w.on("mouseup",function(t){if(i===f.pluginCount&&!k&&!p.disable){t=t.pageX,D=!1,t-=w.offset().left;var e=S.fromX+(S.toX-S.fromX)/2;Q=0,V=h.width()-L,R=h.width()-L,"single"===p.type?(M=N,M.attr("id","irs-active-slider"),K(t)):"double"===p.type&&(M=t<=e?X:C,M.attr("id","irs-active-slider"),K(t),J()),M.removeAttr("id"),M=null}}),n&&(I.on("touchend",function(){k&&(k=A=!1,M.removeAttr("id"),M=null,"double"===p.type&&J(),U())}),I.on("touchmove",function(t){k&&(T=t.originalEvent.touches[0].pageX,K())})),B(),Y(),p.hasGrid&&et(),p.disable?(w.addClass("irs-disabled"),w.append('<span class="irs-disable-mask"></span>')):(w.removeClass("irs-disabled"),w.find(".irs-disable-mask").remove())},B=function(){E=h.width(),L=N?N.width():X.width(),G=E-L},H=function(t,e,o){B(),D=!1,M=e,M.attr("id","irs-active-slider"),e=M.offset().left,O=e+(t.pageX-e)-M.position().left,"single"===p.type?V=h.width()-L:"double"===p.type&&("from"===o?(Q=0,R=parseInt(C.css("left"),10)):(Q=parseInt(X.css("left"),10),R=h.width()-L))},J=function(){var e=X.width(),o=t.data(X[0],"x")||parseInt(X[0].style.left,10)||X.position().left,s=(t.data(C[0],"x")||parseInt(C[0].style.left,10)||C.position().left)-o;F[0].style.left=o+e/2+"px",F[0].style.width=s+"px"},K=function(e){var o=T-O,o=e||T-O;"single"===p.type?(0>o&&(o=0),o>V&&(o=V)):"double"===p.type&&(o<Q&&(o=Q),o>R&&(o=R),J()),t.data(M[0],"x",o),U(),e=Math.round(o),M[0].style.left=e+"px"},U=function(){var e,o={input:m,slider:w,min:p.min,max:p.max,fromNumber:0,toNumber:0,fromPers:0,toPers:0,fromX:0,fromX_pure:0,toX:0,toX_pure:0},s=p.max-p.min;"single"===p.type?(o.fromX=t.data(N[0],"x")||parseInt(N[0].style.left,10)||N.position().left,o.fromPers=o.fromX/G*100,e=s/100*o.fromPers+p.min,o.fromNumber=Math.round(e/p.step)*p.step,o.fromNumber<p.min&&(o.fromNumber=p.min),o.fromNumber>p.max&&(o.fromNumber=p.max),$&&(o.fromNumber=parseInt(o.fromNumber*$,10)/$),u&&(o.fromValue=p.values[o.fromNumber])):"double"===p.type&&(o.fromX=t.data(X[0],"x")||parseInt(X[0].style.left,10)||X.position().left,o.fromPers=o.fromX/G*100,e=s/100*o.fromPers+p.min,o.fromNumber=Math.round(e/p.step)*p.step,o.fromNumber<p.min&&(o.fromNumber=p.min),o.toX=t.data(C[0],"x")||parseInt(C[0].style.left,10)||C.position().left,o.toPers=o.toX/G*100,s=s/100*o.toPers+p.min,o.toNumber=Math.round(s/p.step)*p.step,o.toNumber>p.max&&(o.toNumber=p.max),$&&(o.fromNumber=parseInt(o.fromNumber*$,10)/$,o.toNumber=parseInt(o.toNumber*$,10)/$),u&&(o.fromValue=p.values[o.fromNumber],o.toValue=p.values[o.toNumber])),S=o,Z()},Y=function(){var e={input:m,slider:w,min:p.min,max:p.max,fromNumber:p.from,toNumber:p.to,fromPers:0,toPers:0,fromX:0,fromX_pure:0,toX:0,toX_pure:0},o=p.max-p.min;"single"===p.type?(e.fromPers=0!==o?(e.fromNumber-p.min)/o*100:0,e.fromX_pure=G/100*e.fromPers,e.fromX=Math.round(e.fromX_pure),N[0].style.left=e.fromX+"px",t.data(N[0],"x",e.fromX_pure)):"double"===p.type&&(e.fromPers=0!==o?(e.fromNumber-p.min)/o*100:0,e.fromX_pure=G/100*e.fromPers,e.fromX=Math.round(e.fromX_pure),X[0].style.left=e.fromX+"px",t.data(X[0],"x",e.fromX_pure),e.toPers=0!==o?(e.toNumber-p.min)/o*100:1,e.toX_pure=G/100*e.toPers,e.toX=Math.round(e.toX_pure),C[0].style.left=e.toX+"px",t.data(C[0],"x",e.toX_pure),J()),S=e,Z()},Z=function(){var t,e,o,s,i,a;a=L/2,o="","single"===p.type?(o=S.fromNumber===p.max?p.maxPostfix:"",c[0].style.display="none",v[0].style.display="none",o=u?p.prefix+p.values[S.fromNumber]+o+p.postfix:p.prefix+x(S.fromNumber)+o+p.postfix,g.html(o),i=g.outerWidth(),a=S.fromX-i/2+a,0>a&&(a=0),a>E-i&&(a=E-i),g[0].style.left=a+"px",p.hideMinMax||p.hideFromTo||(y[0].style.display=a<W?"none":"block",b[0].style.display=a+i>E-j?"none":"block"),m.attr("value",parseFloat(S.fromNumber))):"double"===p.type&&(o=S.toNumber===p.max?p.maxPostfix:"",u?(t=p.prefix+p.values[S.fromNumber]+p.postfix,e=p.prefix+p.values[S.toNumber]+o+p.postfix,o=S.fromNumber!==S.toNumber?p.prefix+p.values[S.fromNumber]+" \u2014 "+p.prefix+p.values[S.toNumber]+o+p.postfix:p.prefix+p.values[S.fromNumber]+o+p.postfix):(t=p.prefix+x(S.fromNumber)+p.postfix,e=p.prefix+x(S.toNumber)+o+p.postfix,o=S.fromNumber!==S.toNumber?p.prefix+x(S.fromNumber)+" \u2014 "+p.prefix+x(S.toNumber)+o+p.postfix:p.prefix+x(S.fromNumber)+o+p.postfix),c.html(t),v.html(e),g.html(o),t=c.outerWidth(),e=S.fromX-t/2+a,0>e&&(e=0),e>E-t&&(e=E-t),c[0].style.left=e+"px",o=v.outerWidth(),s=S.toX-o/2+a,0>s&&(s=0),s>E-o&&(s=E-o),v[0].style.left=s+"px",i=g.outerWidth(),a=S.fromX+(S.toX-S.fromX)/2-i/2+a,0>a&&(a=0),a>E-i&&(a=E-i),g[0].style.left=a+"px",e+t<s?(g[0].style.display="none",c[0].style.display="block",v[0].style.display="block"):(g[0].style.display="block",c[0].style.display="none",v[0].style.display="none"),p.hideMinMax||p.hideFromTo||(y[0].style.display=a<W||e<W?"none":"block",b[0].style.display=a+i>E-j||s+o>E-j?"none":"block"),m.attr("value",parseFloat(S.fromNumber)+";"+parseFloat(S.toNumber))),tt()},tt=function(){"function"!=typeof p.onFinish||A||D||p.onFinish.call(this,S),"function"!=typeof p.onChange||D||p.onChange.call(this,S),"function"==typeof p.onLoad&&!A&&D&&(p.onLoad.call(this,S),D=!1)},et=function(){w.addClass("irs-with-grid");var t,e="",o=0,o=0,s="";for(t=0;20>=t;t+=1)o=Math.floor(E/20*t),o>=E&&(o=E-1),s+='<span class="irs-grid-pol small" style="left: '+o+'px;"></span>';for(t=0;4>=t;t+=1)o=Math.floor(E/4*t),o>=E&&(o=E-1),s+='<span class="irs-grid-pol" style="left: '+o+'px;"></span>',$?(e=p.min+(p.max-p.min)/4*t,e=e/p.step*p.step,e=parseInt(e*$,10)/$):(e=Math.round(p.min+(p.max-p.min)/4*t),e=Math.round(e/p.step)*p.step,e=x(e)),u&&(p.hideMinMax?(e=Math.round(p.min+(p.max-p.min)/4*t),e=Math.round(e/p.step)*p.step,e=0===t||4===t?p.values[e]:""):e=""),0===t?s+='<span class="irs-grid-text" style="left: '+o+'px; text-align: left;">'+e+"</span>":4===t?(o-=100,s+='<span class="irs-grid-text" style="left: '+o+'px; text-align: right;">'+e+"</span>"):(o-=50,s+='<span class="irs-grid-text" style="left: '+o+'px;">'+e+"</span>");P.html(s)};q()}})},update:function(t){return this.each(function(){this.updateData(t)})},remove:function(){return this.each(function(){this.removeSlider()})}};t.fn.ionRangeSlider=function(e){return p[e]?p[e].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof e&&e?void t.error("Method "+e+" does not exist for jQuery.ionRangeSlider"):p.init.apply(this,arguments)}}(jQuery,document,window,navigator);