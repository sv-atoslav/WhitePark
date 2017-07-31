!function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict";function t(e){return new RegExp("^(("+e.join(")|(")+"))\\b")}function n(e){return e.scopes[e.scopes.length-1]}var r=t(["and","or","not","is"]),i=["as","assert","break","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","lambda","pass","raise","return","try","while","with","yield","in"],a=["abs","all","any","bin","bool","bytearray","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip","__import__","NotImplemented","Ellipsis","__debug__"],o={builtins:["apply","basestring","buffer","cmp","coerce","execfile","file","intern","long","raw_input","reduce","reload","unichr","unicode","xrange","False","True","None"],keywords:["exec","print"]},s={builtins:["ascii","bytes","exec","print"],keywords:["nonlocal","False","True","None"]};e.registerHelper("hintWords","python",i.concat(a)),e.defineMode("python",function(l,c){function p(e,t){if(e.sol()&&"py"==n(t).type){var r=n(t).offset;if(e.eatSpace()){var i=e.indentation();return i>r?d(e,t,"py"):i<r&&m(e,t)&&(t.errorToken=!0),null}var a=u(e,t);return r>0&&m(e,t)&&(a+=" "+h),a}return u(e,t)}function u(e,t){if(e.eatSpace())return null;if("#"==e.peek())return e.skipToEnd(),"comment";if(e.match(/^[0-9\.]/,!1)){var n=!1;if(e.match(/^\d*\.\d+(e[\+\-]?\d+)?/i)&&(n=!0),e.match(/^\d+\.\d*/)&&(n=!0),e.match(/^\.\d+/)&&(n=!0),n)return e.eat(/J/i),"number";var i=!1;if(e.match(/^0x[0-9a-f]+/i)&&(i=!0),e.match(/^0b[01]+/i)&&(i=!0),e.match(/^0o[0-7]+/i)&&(i=!0),e.match(/^[1-9]\d*(e[\+\-]?\d+)?/)&&(e.eat(/J/i),i=!0),e.match(/^0(?![\dx])/i)&&(i=!0),i)return e.eat(/L/i),"number"}return e.match(R)?(t.tokenize=f(e.current()),t.tokenize(e,t)):e.match(v)||e.match(x)?null:e.match(g)||e.match(k)||e.match(r)?"operator":e.match(b)?null:e.match(S)?"keyword":e.match(T)?"builtin":e.match(/^(self|cls)\b/)?"variable-2":e.match(w)?"def"==t.lastToken||"class"==t.lastToken?"def":"variable":(e.next(),h)}function f(e){function t(t,i){for(;!t.eol();)if(t.eatWhile(/[^'"\\]/),t.eat("\\")){if(t.next(),n&&t.eol())return r}else{if(t.match(e))return i.tokenize=p,r;t.eat(/['"]/)}if(n){if(c.singleLineStringErrors)return h;i.tokenize=p}return r}for(;"rub".indexOf(e.charAt(0).toLowerCase())>=0;)e=e.substr(1);var n=1==e.length,r="string";return t.isString=!0,t}function d(e,t,r){var i=0,a=null;if("py"==r)for(;"py"!=n(t).type;)t.scopes.pop();i=n(t).offset+("py"==r?l.indentUnit:E),"py"==r||e.match(/^(\s|#.*)*$/,!1)||(a=e.column()+1),t.scopes.push({offset:i,type:r,align:a})}function m(e,t){for(var r=e.indentation();n(t).offset>r;){if("py"!=n(t).type)return!0;t.scopes.pop()}return n(t).offset!=r}function y(e,t){var r=t.tokenize(e,t),i=e.current();if("."==i)return r=e.match(w,!1)?null:h,null==r&&"meta"==t.lastStyle&&(r="meta"),r;if("@"==i)return c.version&&3==parseInt(c.version,10)?e.match(w,!1)?"meta":"operator":e.match(w,!1)?"meta":h;"variable"!=r&&"builtin"!=r||"meta"!=t.lastStyle||(r="meta"),"pass"!=i&&"return"!=i||(t.dedent+=1),"lambda"==i&&(t.lambda=!0),":"!=i||t.lambda||"py"!=n(t).type||d(e,t,"py");var a=1==i.length?"[({".indexOf(i):-1;if(-1!=a&&d(e,t,"])}".slice(a,a+1)),-1!=(a="])}".indexOf(i))){if(n(t).type!=i)return h;t.scopes.pop()}return t.dedent>0&&e.eol()&&"py"==n(t).type&&(t.scopes.length>1&&t.scopes.pop(),t.dedent-=1),r}var h="error",b=c.singleDelimiters||new RegExp("^[\\(\\)\\[\\]\\{\\}@,:`=;\\.]"),g=c.doubleOperators||new RegExp("^((==)|(!=)|(<=)|(>=)|(<>)|(<<)|(>>)|(//)|(\\*\\*))"),x=c.doubleDelimiters||new RegExp("^((\\+=)|(\\-=)|(\\*=)|(%=)|(/=)|(&=)|(\\|=)|(\\^=))"),v=c.tripleDelimiters||new RegExp("^((//=)|(>>=)|(<<=)|(\\*\\*=))");if(c.version&&3==parseInt(c.version,10))var k=c.singleOperators||new RegExp("^[\\+\\-\\*/%&|\\^~<>!@]"),w=c.identifiers||new RegExp("^[_A-Za-z\xa1-\uffff][_A-Za-z0-9\xa1-\uffff]*");else var k=c.singleOperators||new RegExp("^[\\+\\-\\*/%&|\\^~<>!]"),w=c.identifiers||new RegExp("^[_A-Za-z][_A-Za-z0-9]*");var E=c.hangingIndent||l.indentUnit,_=i,z=a;if(c.extra_keywords!=undefined&&(_=_.concat(c.extra_keywords)),c.extra_builtins!=undefined&&(z=z.concat(c.extra_builtins)),c.version&&3==parseInt(c.version,10)){_=_.concat(s.keywords),z=z.concat(s.builtins);var R=new RegExp("^(([rb]|(br))?('{3}|\"{3}|['\"]))","i")}else{_=_.concat(o.keywords),z=z.concat(o.builtins);var R=new RegExp("^(([rub]|(ur)|(br))?('{3}|\"{3}|['\"]))","i")}var S=t(_),T=t(z);return{startState:function(e){return{tokenize:p,scopes:[{offset:e||0,type:"py",align:null}],lastStyle:null,lastToken:null,lambda:!1,dedent:0}},token:function(e,t){var n=t.errorToken;n&&(t.errorToken=!1);var r=y(e,t);t.lastStyle=r;var i=e.current();return i&&r&&(t.lastToken=i),e.eol()&&t.lambda&&(t.lambda=!1),n?r+" "+h:r},indent:function(t,r){if(t.tokenize!=p)return t.tokenize.isString?e.Pass:0;var i=n(t),a=r&&r.charAt(0)==i.type;return null!=i.align?i.align-(a?1:0):a&&t.scopes.length>1?t.scopes[t.scopes.length-2].offset:i.offset},lineComment:"#",fold:"indent"}}),e.defineMIME("text/x-python","python");var l=function(e){return e.split(" ")};e.defineMIME("text/x-cython",{name:"python",extra_keywords:l("by cdef cimport cpdef ctypedef enum exceptextern gil include nogil property publicreadonly struct union DEF IF ELIF ELSE")})});