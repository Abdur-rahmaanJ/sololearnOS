alert('\
v1.3.0 ready.\n\
see the irc app. start chatting. see online users.my name is appinv. write name to notify\n\
try changing the background in settings\n\
option to install your own app added\n\
feel free to propose apps to add.\n\
you can customise stuffs under settings\n\
you can sort apps according to category\n\
see the comments in html section');

var apps = 
{
    sololearn:{
        logo:'https://www.sololearn.com/images/fb-story-icon.jpg',
        descrip:'for coders',
        author:'arj',
        label:'sololearn',
        code:'<iframe id="sl" src="https://www.sololearn.com/"></iframe>',
        style:'#sl{color:orange;background-color:black;width:300px;height:200px;}',
        script:"",
        sl_link:"",
        category:"app-edu"
    },
    calculator:{
        logo:'https://image.flaticon.com/icons/svg/712/712785.svg',
        descrip:'calculates stuffs',
        author:'sjoerd',
        label:'calculator',
        code:'<article> <div id=\"calc\"> <div id=\"creator\">Sjoerd Inc.<\/div> <form name=\"inp\"> <input type=\"text\" name=\"ut\" readonly id=\"display\" value=\"\" placeholder=\"0\"> <\/form> <div id=\"advanced\"> <button class=\"xtraNum\" onclick= \"myInput(\'&pi;\',\'M\', \'PI\')\">&pi;<\/button> <button class=\"xtraNum\" onclick= \"myInput(\'e^(\', \'M\', \'exp(\')\">e^x<\/button> <button class=\"xtraNum\" onclick= \"myInput(\'&radic;(\', \'M\', \'sqrt(\')\">&radic;<\/button> <button class=\"xtraNum\" onclick= \"squared()\">x^y<\/button> <button class=\"xtraNum\" onclick= \"myInput(\'1\u00F7(\', \'o\', \'1\/(\')\">1\/x<\/button> <button class=\"xtraNum\" onclick= \"myInput(\'tan(\',\'M\')\">tan<\/button> <button class=\"xtraNum\" onclick= \"myInput(\'sin(\',\'M\')\">sin<\/button> <button class=\"xtraNum\" onclick= \"myInput(\'cos(\',\'M\')\">cos<\/button> <button class=\"xtraNum\" onclick= \"myInput(\'log(\',\'M\')\">log<\/button> <button class=\"xtraNum\" onclick= \"myInput(\'&phi;\',\'M\', \'1.61803398874989\')\">&phi;<\/button> <button class=\"xtraNum\" onclick= \"myInput(\'atan(\',\'M\')\">atan<\/button> <button class=\"xtraNum\" onclick= \"myInput(\'asin(\',\'M\')\">asin<\/button> <button class=\"xtraNum\" onclick= \"myInput(\'acos(\',\'M\')\">acos<\/button> <button class=\"xtraNum\" onclick= \"myInput(\'abs(\',\'M\')\">| x |<\/button> <button class=\"xtraNum\" onclick= \"basicCalc()\">v1.0<\/button> <br><\/div> <div id=\"regular\"> <button class=\"btnN\" onclick= \"myInput(\'1\',\'N\')\">1<\/button> <button class=\"btnN\" onclick= \"myInput(\'2\',\'N\')\">2<\/button> <button class=\"btn\" onclick= \"myInput(\'3\',\'N\')\">3<\/button> <button class= \"txt\" onclick= \"CLR()\">AC<\/button> <button class= \"txt\" onclick= \"DEL()\">DEL<\/button> <br> <button class=\"btnN\" onclick= \"myInput(\'4\',\'N\')\">4<\/button> <button class=\"btnN\" onclick= \"myInput(\'5\',\'N\')\">5<\/button> <button class=\"btnN\" onclick= \"myInput(\'6\',\'N\')\">6<\/button> <button class= \"opr\" onclick= \"myInput(\'+\',\'O\')\">+<\/button> <button class= \"opr\" onclick= \"myInput(\'-\',\'O\')\">-<\/button> <br> <button class=\"btnN\" onclick= \"myInput(\'7\',\'N\')\">7<\/button> <button class=\"btnN\" onclick= \"myInput(\'8\',\'N\')\">8<\/button> <button class=\"btnN\" onclick= \"myInput(\'9\',\'N\')\">9<\/button> <button class= \"opr\" onclick= \"myInput(\'\u00D7\',\'O\',\'*\')\">\u00D7<\/button> <button class= \"opr\" onclick= \"myInput(\'\u00F7\',\'O\',\'\/\')\">\u00F7<\/button> <br> <button class=\"btnD\" onclick= \"myInput(\'.\',\'N\')\">.<\/button> <button class=\"btnN\" onclick= \"myInput(\'0\',\'N\')\">0<\/button> <button class=\"btnR\" onclick= \"myResult()\">=<\/button> <button class=\"bct\" onclick= \"Brackets()\">( )<\/button> <button class=\"Ans\" onclick= \"myInput(\'Ans\', \'n\')\">Ans<\/button> <\/div> <\/div> <\/article> <footer style=\"font-size:12px; font-variant:italic; margin-left:8px;\"> \u00A9 Copyright 2017, All Rights Deserved. <\/footer>',
        style:"form #display { height:30px; width:95%; padding:1px; font-size:25px; letter-spacing:1px; border:2px inset grey; border-radius:5px; margin-bottom:5%;}#calc { width:88%; height:100%; margin:0; padding:5%; border:3px groove grey; border-radius:20px; background-color:grey; position:static;}#regular button { height:40px; width:16.4%; border:1px outset grey; border-radius:3px; font:18px sans-serif; text-align:center; margin:1%;}#advanced button { width:16%; height:15%; margin-left:2%; color:lightGrey; font-size:0,5em; font-size:0,5em; background-color:blue; border:1px outset darkBlue; border-radius:1em; }.btnN { background-color:light-grey;//default border-style:outset;}.opr { background-color:#FE893A;//orange}.txt { background-color:#EAED4F;//yellow}.bct { background-color:orange;}#math { display:none; /*if you set this value to 'block', you can see the magic.*/}#creator { font-family:serif; font-size:0,5%; font-style:italic; color:lightgrey; margin-bottom:1%;}button a:link { color:black; text-decoration:none;}ul.links { display:none;}ul.links.show { display:block;}",
        script:'var x = 0, D = [[],[],[]], br = 0, math = \'\', ans = null;\r\nfunction myInput(n, t, m) {\r\n {\r\n i = inp.ut.value;\r\n if (i == \'Syntax Error\' || i == \'infinity\' || i == \'NaN\' || i == \'undefined\' || (i == \'0\' && (n != \'.\' && t != \'O\')) || i == \'-infinity\') {CLR()}\r\n }\r\n n = n.toString();\r\n D[0].unshift(n);\r\n inp.ut.value += n;\r\n if (m === undefined) {\r\n m = n;\r\n } else {\r\n m = m.toString();\r\n }\r\n \r\n if (t == \"M\" && m != \'1.61803398874989\') {m = \"Math.\" + m}\r\n \r\n if (D[2][0] == \"N\" && t != \"N\" && t != \"O\") {m = \"*\" + m}\r\n if (t == \"n\") {t == \"N\"}\r\n if (t == \"o\") {t == \"O\"}\r\n if (m.endsWith(\"(\")) {br++}\r\n if (m.startsWith(\"(\") && !m.endsWith(\")\")) {br--}\r\n math += m;\r\n D[1].unshift(m);\r\n D[2].unshift(t);\r\n}\r\n\r\nvar Brackets = function() {\r\n if (br === 0) {\r\n br++;\r\n myInput(\'(\', \'o\');\r\n }\r\n else if (br > 0 && (D[2][0] == \'O\' || D[2][0] === \'\')) {\r\n br++;\r\n myInput(\'(\',\'O\');\r\n }\r\n else {\r\n br--;\r\n myInput(\')\',\'N\');\r\n }\r\n};\r\n\r\nfunction CLR() {\r\n inp.ut.value = \'\';\r\n math = \'\';\r\n D = [[],[],[]];\r\n br = 0;\r\n}\r\n\r\nfunction DEL() {\r\n i = inp.ut.value.length;\r\n if (i === 0) {return}\r\n inp.ut.value = inp.ut.value.substr(0, i - D[0][0].length);\r\n math = math.substr(0, math.length - D[1][0].toString().length);\r\n if (D[0][0].endsWith(\')\')) {br++}\r\n if (D[0][0].endsWith(\'(\')) {br--}\r\n D[0].shift();\r\n D[1].shift();\r\n D[2].shift();\r\n}\r\n\r\nfunction myResult() {\r\n if (math === \'\') {return}\r\n for (f=0; f<br; f++) {\r\n Brackets(\'b\');\r\n }\r\n var r;\r\n try {\r\n r = eval(math).toString();\r\n CLR();\r\n }\r\n catch (err) {\r\n inp.ut.value = \"Syntax Error\";\r\n math = \'\';\r\n ans = null;\r\n return;\r\n }\r\n if (r == \'NaN\' || r == \'undefined\') {\r\n ans = null;\r\n }\r\n else {\r\n ans = r;\r\n }\r\n for (f = 0; f < r.length; f++) {\r\n char = r.toString().charAt(f);\r\n myInput(char, \'N\');\r\n }\r\n}\r\n\r\nfunction squared() {\r\nif (math === \'\') {return}\r\n var c1 = \'\';\r\n var c2 = \'\';\r\n var bool = true;\r\n while (bool) {\r\n c1 = D[0][0] + c1;\r\n c2 = D[1][0] + c2;\r\n DEL();\r\n bool = !(D[2].length === 0 || D[0][0].endsWith(\")\") || D[2][0] == \'O\');\r\n }\r\n br++;\r\n c1 = \'(\' + c1 + \')^(\';\r\n c2 = \'Math.pow(\' + c2 + \',\';\r\n inp.ut.value += c1;\r\n math += c2;\r\n D[0].unshift(c1);\r\n D[1].unshift(c2);\r\n D[2].unshift(\'M\');\r\n}\r\n\r\nfunction basicCalc() {\r\n check = confirm(\"You\'re about to open the Basic Calculator. \\nDo you want to continue?\");\r\n if (check) {\r\n window.open(\"https:\/\/code.sololearn.com\/W7Q6qU7jeZ0r\/\", \"_self\");\r\n }\r\n else {return}\r\n}',
        sl_link:"https://code.sololearn.com/W2EtS4tlsc7U/",
        category:"app-util"
    },
    irc:{
        logo:'https://image.flaticon.com/icons/svg/174/174247.svg',
        descrip:'chat for os users',
        author:'arj',
        label:'irc',
        code:'<iframe id="sls" src="https://kiwiirc.com/client/chat.freenode.com/?nick=sololearner|?##sololearnos" style="border:0; width:100%; height:450px;"></iframe>',
        style:'#sls{color:orange;background-color:black;width:400px;}',
        script:"",
        sl_link:"",
        category:"app-chat"
    },
    fcc:{
        logo:'https://avatars0.githubusercontent.com/u/9892522?s=400&v=4',
        descrip:'learn web prog',
        author:'arj',
        label:'fcc',
        code:'<iframe id="os-fcc" src="https://www.freecodecamp.org/"></iframe>',
        style:'#os-fcc{width:400px;}',
        script:"",
        sl_link:"",
        category:"app-edu"
    },
    editor:{
        logo:'https://image.flaticon.com/icons/svg/143/143587.svg',
        descrip:'just note',
        author:'arj',
        label:'editor',
        code:'<div><textarea id="os-textarea"></textarea></div>',
        style:'#os-textarea{height:300px;min-width:300px;max-width:400px;background-color:black;color:#55ff55;}',
        script:"",
        sl_link:"",
        category:"app-util"
    },
    tank:{
        logo:'https://image.flaticon.com/icons/svg/190/190010.svg',
        descrip:'great tank game',
        author:'Алексей Р.',
        label:'tank',
        code:'<div id=\"main\">\r\n <p>Loading...<\/p>\r\n <\/div>\r\n <div id=\"infdiv\">Drag available units into the deployment area.<br\/><br\/>You win, when one of your units gets to the green line at the top of the field.<br\/><br\/>Don\'t let enemies to reach your base.<br\/><br\/>Good luck, commander! May the force be with you!<\/div>\r\n <div id=\"log\"><\/div>',
        style:'#main { padding: 20px; background: lightblue; text-align: center; }#dif { font-weight: bold; font-size: 0.8em;}#log { display:none; position: relative; font-weight: bolder; font-size: 0.8em; text-align: center;}canvas { display: block; border: 3px solid #eee; margin: auto; border-radius: 7px; box-shadow: 0 0 15px;}#info { margin-left: 40px; color: red;}button { border:1px solid white; border-radius: 7px; box-shadow: 0 0 5px, inset 0 0 25px; padding: 10px 40px; background-color: #f3f3f3; font-weight: bold;}#infdiv { display:none; position: relative; margin: auto; width: 80%; min-height: 90%; border: 3px solid lightblue; background-color: white; padding: 10px; text-align: center; border-radius: 10px; box-shadow: 0 0 20px; font-weight: bolder; font-size: 0.9em;}',
        script:"\r\nvar w, h, k, xo, yo,\r\n units = [],\r\n icons = [],\r\n bullets = [],\r\n enemies = [],\r\n explosions = [],\r\n dif = [\' practice\', \' easy\', \' medium\', \' hard\', \' harder\', \' hardcore\', \' pro\', \' deathmatch\', \'godlike\', \'impossible\'],\r\n gameTime = 0,\r\n isGameOver,\r\n enemydep = 1,\r\n firstwave = false,\r\n deployarea = false,\r\n counter = 0,\r\n counter2 = 0,\r\n gameNum =0,\r\n lvl = 0,\r\n inf = function(){\r\n var popup = document.getElementById(\'infdiv\');\r\n if (popup.style.display !== \'block\') {\r\n popup.style.display = \'block\'\r\n } else { \r\n popup.style.display = \'none\'\r\n } \r\n };\r\n \r\n(function () {\r\n function Sprite(url, pos, size, resized, animspeed, frames, _index, once) { \r\n this.pos = pos;\r\n this.size = size; \r\n this.resized = resized;\r\n this.url = url;\r\n this.animspeed = animspeed;\r\n this.frames = frames;\r\n this._index = _index;\r\n this.once = once;\r\n };\r\n\r\n Sprite.prototype = {\r\n \r\n update: function(dt) {\r\n\r\n\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0this._index += this.animspeed*dt;\r\n\r\n\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0},\r\n\r\n\r\n\r\n\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0render: function(ctx) {\r\n \r\n var frame;\r\n\r\n\r\n\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0if(this.animspeed > 0) {\r\n\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0var max = this.frames.length;\r\n\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0var idx = Math.floor(this._index);\r\n\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0frame = this.frames[idx % max];\r\n\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0if(this.once && idx >= max) {\r\n\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0this.done = true;\r\n\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0return;\r\n\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0}\r\n\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0}\r\n\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0else {\r\n\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0frame = 0;\r\n\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0}\r\n\r\n\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0var x = this.pos[0];\r\n \u00A0\u00A0\u00A0\u00A0\u00A0var y = this.pos[1];\u00A0\u00A0\r\n \r\n \u00A0x += frame * this.size[0];\r\n \u00A0\u00A0\u00A0ctx.drawImage(resources.get(this.url),\u00A0x, y,\u00A0this.size[0], this.size[1],\u00A00, 0,\u00A0this.resized[0], this.resized[1]);\r\n\r\n\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0}\r\n\r\n\u00A0\u00A0\u00A0\u00A0};\r\n\r\n\u00A0\u00A0\u00A0\u00A0window.Sprite = Sprite;\r\n})();\r\n\r\n(function () {\r\n function Unit(status, pos, hp, speed, maxspeed, range, damage, reload, angle, defaultangle , dir, sprite ) { \r\n this.status = status;\r\n this.pos = pos;\r\n this.hp = hp;\r\n this.maxhp = hp; \r\n this.speed = speed;\r\n this.maxspeed = maxspeed;\r\n this.range = range;\r\n this.damage = damage;\r\n this.reload = reload;\r\n this.angle = angle;\r\n this.defaultangle = defaultangle;\r\n this.dir = dir;\r\n this.sprite = sprite };\r\n\r\n Unit.prototype = {\r\n\r\n\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0getAngle : function (target){\r\n \r\n var x = this.pos[0] - target[0];\r\n var y = this.pos[1] - target[1];\r\n if (x<0) {\r\n return Math.atan(y\/x)*(180\/Math.PI);\r\n } else {\r\n return Math.atan(y\/x)*(180\/Math.PI) - 180;\r\n } \r\n },\r\n \r\n moveAhead : function (dt) {\r\n var rad = this.angle\/(180\/Math.PI);\r\n this.pos[0] += Math.cos(rad)*this.speed*dt*this.dir;\r\n this.pos[1] += Math.sin(rad)*this.speed*dt*this.dir;\r\n },\r\n \r\n findTarget : function (t) {\r\n for (i=0;i<t.length;i++){\r\n \r\n var dis = this.getDistance(t[i]);\r\n if (dis < this.range && !t[i].destroyed && t[i].time > 0.7 && t[i].pos[1] > k ) {\r\n this.target = t[i];\r\n this.status = \"targetfound\"; \r\n return; \r\n }\r\n }\r\n \r\n },\r\n \r\n avoidCollision : function (list, ownindx, dt) {\r\n \r\n var l = list;\r\n \r\n for (i=0; i<l.length; i++){\r\n if(i == ownindx) continue;\r\n if (this.getDistance (l[i]) < k*5) {\r\n var sec = 3;\r\n \r\n var ownfuturepos = [this.pos[0] + (Math.cos(this.angle\/(180\/Math.PI))*this.speed*sec*this.dir),this.pos[1] + (Math.sin(this.angle\/(180\/Math.PI))*this.speed*sec*this.dir)];\r\n \r\n var allyfuturepos = [l[i].pos[0] + (Math.cos(l[i].angle\/(180\/Math.PI))*l[i].speed*sec*this.dir),l[i].pos[1] + (Math.sin(l[i].angle\/(180\/Math.PI))*l[i].speed*sec*this.dir)];\r\n if (getDistance(ownfuturepos, allyfuturepos ) < k*3 && this.pos[1]*this.dir > l[i].pos[1]*l[i].dir) {\r\n this.speed -= 30* dt;\r\n }\r\n \r\n \r\n };\r\n };\r\n \r\n \r\n },\r\n \r\n getDistance : function (t) {\r\n \r\n return Math.sqrt(Math.pow(this.pos[0]-t.pos[0], 2)+Math.pow(this.pos[1]-t.pos[1], 2));\r\n },\r\n \r\n fireOnTarget : function () {\r\n \r\n var x = this.pos[0] + ((this.sprite.resized[1]\/2*this.dir)*Math.cos(this.angle\/(180\/Math.PI))) ;\r\n var y = this.pos[1] + ((this.sprite.resized[0]\/2*this.dir)*Math.sin(this.angle\/(180\/Math.PI)));\r\n bullets.push({\r\n pos : [x,y],\r\n target : this.target,\r\n speed : k*12,\r\n damage : this.damage,\r\n angle : this.angle,\r\n dir : this.dir,\r\n sprite : new Sprite(\"https:\/\/d30y9cdsu7xlg0.cloudfront.net\/png\/321488-200.png\", [0,0], [200,200], [k*(this.reload+0.5), k*(this.reload+0.5)])\r\n \r\n \r\n \r\n });\r\n \r\n this.lastshot = 0;\r\n \r\n }\r\n\u00A0\u00A0\u00A0\u00A0};\r\n\r\n\u00A0\u00A0\u00A0\u00A0window.Unit= Unit;\r\n})();\r\n\r\nvar getRandom = function (min, max) {\r\n return Math.floor(Math.random() * (max - min + 1)) + min;\r\n };\r\n\r\nvar getDistance = function (own, ally) {\r\n \r\n return Math.sqrt(Math.pow(own[0]-ally[0], 2)+Math.pow(own[1]-ally[1], 2));\r\n } \r\n \r\n \r\nvar deployUnit = function (unit, pos) {\r\n var u = unit;\r\n units.push(new Unit(u[0],u[1],u[2],u[3],u[4],u[5],u[6] ,u[7],u[8],u[9],u[10] ,u[11],u[12],u[13])) ;\r\n units[units.length-1].pos = pos;\r\n deployarea = false;\r\n};\r\n\r\nvar deployEnemy = function (unit, pos) {\r\n var u = unit;\r\n enemies.push(new Unit(u[0],u[1],u[2],u[3],u[4],u[5],u[6] ,u[7],u[8],u[9],u[10] ,u[11],u[12],u[13])) ;\r\n enemies[enemies.length-1].pos = pos;\r\n \r\n};\r\n\r\n\r\n\r\nvar returnToBase = function (icon) {\r\n icon.pos = icon.defaultpos;\r\n icon.dragable = false;\r\n}\r\n\r\nvar gameOver = function (a) {\r\n \r\n var _min = Math.floor(gameTime\/60);\r\n var _sec = (\'0\' + Math.floor(gameTime%60)).slice(-2); \r\n \r\n\r\n switch (a) {\r\n \r\n case \'win\' :\r\n \r\n alert (\"Mission completed! Your time is \" + _min + \':\' + _sec + \'\\n\\nLosses: \'+ counter +\' units.\\n\\nEnemies destroyed: \' + counter2 + \'.\');\r\n \r\n var log_item = \"<p>Game \" + ++gameNum + \": \uD83C\uDFC6 Win \u23F2\" + _min + \':\' + _sec + \' \/\' + dif[lvl] + \' \/\' + \"<\/p>\";\r\n if (lvl< dif.length -1) lvl++;\r\n var log = document.getElementById(\'log\');\r\n log.innerHTML += log_item;\r\n log.style.display = \"block\";\r\n loader ();\r\n break;\r\n \r\n case \'loss\' :\r\n alert (\"Mission failed!\"+\'\\n\\nLosses: \'+ counter +\' units.\\n\\nEnemies destroyed: \' + counter2 + \'.\');\r\n \r\n var log_item = \"<p>Game \" + ++gameNum + \": \uD83D\uDCA9 Fail \u23F2\" + _min + \':\' + _sec + \' \/\' + dif[lvl] + \' \/\' + \"<\/p>\";\r\n if (lvl>0) lvl--;\r\n var log = document.getElementById(\'log\');\r\n log.innerHTML += log_item;\r\n log.style.display = \"block\";\r\n loader();\r\n break;\r\n \r\n }\r\n}\r\n\r\nvar reset = function (){\r\n \r\n units = [];\r\n icons = [];\r\n bullets = [];\r\n enemies = [];\r\n explosions = [];\r\n isGameOver = false;\r\n gameTime = 0;\r\n enemydep = 1;\r\n firstwave = false;\r\n deployarea = false;\r\n counter = 0;\r\n counter2 = 0;\r\n} \r\n \r\nvar xxx = 0, yyy = 0; \r\nvar mouse = {\r\n x : 0,\r\n y : 0,\r\n down : false\r\n} \r\n \r\n\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\r\n\r\nvar startGame = function () {\r\n \r\n reset();\r\n \r\n var log = document.getElementById(\'log\');\r\n var popup = document.getElementById(\'infdiv\');\r\n \r\n log.style.display = \"none\";\r\n popup.style.display = \'none\';\r\n \r\n \r\n var maindiv = document.getElementById(\"main\");\r\n \r\n maindiv.innerHTML = \'<canvas id=\"c\"><\/canvas>\';\r\n \r\n var c = document.getElementById(\"c\");\r\n \r\n var ctx = c.getContext(\"2d\");\r\n \r\n w = window.innerWidth;\r\n h = window.innerHeight; \r\n c.height = h - 46;\r\n \r\n w < c.height ? c.width = w - 46 : c.width = c.height*0.7;\r\n \r\n k = c.width\/26;\r\n \r\n xo = c.offsetLeft;\r\n yo = c.offsetTop; \r\n \r\n \/\/\/\/\r\n \r\n icons = [{\r\n pos : [c.width\/28, c.height - c.height\/8],\r\n defaultpos : [c.width\/28, c.height - c.height\/8],\r\n respawn : false,\r\n respawnrate : 1,\r\n sprite : new Sprite(\'https:\/\/opengameart.org\/sites\/default\/files\/tanks_3.png\', [55, 76], [194, 134], [c.width\/5.5, c.height\/10.5])\r\n },{\r\n pos : [c.width\/3.4, c.height - c.height\/8.5],\r\n defaultpos : [c.width\/3.4, c.height - c.height\/8.5] ,\r\n respawn : false,\r\n respawnrate : 3,\r\n sprite : new Sprite(\'https:\/\/opengameart.org\/sites\/default\/files\/tanks_3.png\', [71, 600], [159, 130], [c.width\/6.5, c.height\/12])\r\n },{\r\n pos : [c.width\/1.85, c.height - c.height\/8.2],\r\n defaultpos : [c.width\/1.85, c.height - c.height\/8.2] ,\r\n respawn : false,\r\n respawnrate : 2,\r\n sprite : new Sprite(\'https:\/\/opengameart.org\/sites\/default\/files\/tanks_3.png\', [52, 269], [205, 124], [c.width\/5.8, c.height\/12]) \r\n }]; \r\n \r\n \/\/\/\r\n \r\n c.addEventListener(\"touchmove\", function(event) {\r\n \r\n var touch = event.touches[0];\r\n xxx = touch.pageX - xo -3;\r\n yyy = touch.pageY - yo -3;\r\n \r\n checkIcons(xxx,yyy);\r\n \r\n event.preventDefault();\r\n }, false); \r\n \r\n c.addEventListener(\"touchend\", function (event) { \r\n \r\n checkDeployment(xxx,yyy);\r\n \r\n }, false); \r\n \r\n c.addEventListener(\"mousemove\", function (event) {\r\n mouse.x = event.pageX - xo - 3;\r\n mouse.y = event.pageY - yo - 3;\r\n }, false);\r\n \r\n c.addEventListener(\"mousedown\", function () {\r\n mouse.down = true;\r\n checkIcons(mouse.x, mouse.y);\r\n \r\n }, false);\r\n \r\n c.addEventListener(\"mouseup\", function () {\r\n mouse.down = false;\r\n checkDeployment (mouse.x, mouse.y);\r\n }, false);\r\n \r\n function checkIcons (xx,yy) {\r\n \r\n if ( xx > icons[0].pos[0] && xx < icons[0].pos[0] +(k*5) && yy > icons[0].pos[1] -(k*3) && yy < icons[0].pos[1] +(k*3)&& icons[0].respawn == false) { \r\n if(!icons[1].dragable && !icons[2].dragable) {\r\n icons[0].dragable = true;\r\n basictank[0] = \'readyfordeploy\';\r\n deployarea = true;\r\n }\r\n }\r\n \r\n if ( xx > icons[1].pos[0] && xx < icons[1].pos[0] +(k*5) && yy > icons[1].pos[1] -(k*3) && yy < icons[1].pos[1] +(k*3) && icons[1].respawn == false ) {\r\n if(!icons[0].dragable && !icons[2].dragable) {\r\n icons[1].dragable = true;\r\n lighttank[0] = \'readyfordeploy\';\r\n deployarea = true;\r\n \r\n }\r\n } \r\n \r\n if ( xx > icons[2].pos[0] && xx < icons[2].pos[0] +(k*5) && yy > icons[2].pos[1] -(k*3) && yy < icons[2].pos[1] +(k*3) && icons[2].respawn == false ) {\r\n if(!icons[0].dragable && !icons[1].dragable) {\r\n icons[2].dragable = true;\r\n ttank[0] = \'readyfordeploy\';\r\n deployarea = true;\r\n \r\n }\r\n } \r\n }\r\n \r\n function checkDeployment (xx,yy){\r\n \r\n var inside = false;\r\n if (xx > c.width\/100 && yy > c.height\/2 && xx < c.width-c.width\/100 - 3 && yy < c.height\/2 + c.height\/3.7) {\r\n inside = true;\r\n } \r\n if (basictank[0] == \'readyfordeploy\' && inside ) {\r\n basictank[0] = \' \';\r\n deployUnit(basictank, [xx,yy]);\r\n units[units.length -1].status = \'acceleration\';\r\n icons[0].pos = [icons[0].defaultpos[0], icons[0].defaultpos[1]+ c.width\/4];\r\n icons[0].dragable = false;\r\n icons[0].respawn = true;\r\n deployarea = false;\r\n } else if (!inside && !icons[0].respawn) {\r\n returnToBase(icons[0]);\r\n basictank[0] = \' \'\r\n }\r\n \r\n if (lighttank[0] == \'readyfordeploy\' && inside) {\r\n lighttank [0] = \' \';\r\n deployUnit(lighttank , [xx,yy]);\r\n units[units.length -1].status = \'acceleration\';\r\n icons[1].pos = [icons[1].defaultpos[0], icons[1].defaultpos[1]+ c.width\/4]; ;\r\n icons[1].dragable = false;\r\n icons[1].respawn = true;\r\n \r\n } else if (!inside && !icons[1].respawn) {\r\n returnToBase(icons[1]);\r\n lighttank [0] = \" \";\r\n }\r\n \r\n if (ttank[0] == \'readyfordeploy\' && inside) {\r\n ttank [0] = \' \';\r\n deployUnit(ttank , [xx,yy]);\r\n units[units.length -1].status = \'acceleration\';\r\n icons[2].pos = [icons[2].defaultpos[0], icons[2].defaultpos[1]+ c.width\/4]; ;\r\n icons[2].dragable = false;\r\n icons[2].respawn = true;\r\n \r\n } else if (!inside && !icons[2].respawn) {\r\n returnToBase(icons[2]);\r\n ttank [0] = \" \";\r\n }\r\n \r\n }\r\n \r\n \r\n lastTime = Date.now();\r\n \r\n \r\n \/\/ units\r\n \/\/ stats -- status, pos, hp, speed, maxspeed, range, damage, reload, angle, defaultangle , dir, sprite\r\n \r\n var basictank = [\'acceleration\', [0,0], 1500, 0, k*1.1, k*7, 399, 1.3, -90, -90, 1, new Sprite(\'https:\/\/opengameart.org\/sites\/default\/files\/tanks_3.png\', [55, 76], [194, 135], [c.width\/11, c.height\/21])];\r\n \r\n var lighttank = [\'acceleration\', [0, 0], 300, 0, k*2.6, k*9.5, 149, 0.9, -90, -90, 1, new Sprite( \"https:\/\/opengameart.org\/sites\/default\/files\/tanks_3.png\", [71, 600], [159, 130], [c.width\/13, c.height\/24])];\r\n \r\n var ttank = [\'acceleration\', [0, 0], 150, 0, k*2.1, k*12.5, 30, 0.15, -90, -90, 1, new Sprite( \"https:\/\/opengameart.org\/sites\/default\/files\/tanks_3.png\", [52, 269], [205, 124], [c.width\/11.6, c.height\/24])];\r\n \/\/enemy units\r\n var enemybasic = [\'acceleration\', [0,0], 1500, 0, k*1.1, k*7, 399, 1.3, -90, -90, -1, new Sprite( \'https:\/\/opengameart.org\/sites\/default\/files\/tanks_3.png\', [365, 76], [194, 135], [c.width\/11, c.height\/21])];\r\n \r\n var enemylight = [\'acceleration\', [200, 200], 300, 0, k*2.6, k*9.5, 149, 0.7, -90, -90, -1, new Sprite( \"https:\/\/opengameart.org\/sites\/default\/files\/tanks_3.png\", [395, 600], [159, 130], [c.width\/13, c.height\/24])];\r\n \r\n var enemyttank = [\'acceleration\', [0, 0], 150, 0, k*2.1, k*12.5, 30, 0.15, -90, -90, -1, new Sprite( \"https:\/\/opengameart.org\/sites\/default\/files\/tanks_3.png\", [362, 269], [205, 124], [c.width\/11.6, c.height\/24])];\r\n \r\n \r\n \r\n main() \r\n \r\n \/\/ The main game loop\r\n\r\n\r\n\r\n function main() {\r\n\r\n\u00A0 \u00A0\u00A0\u00A0var now = Date.now();\r\n\r\n\u00A0 \u00A0\u00A0\u00A0var dt = (now - lastTime) \/1000;\r\n\r\n\u00A0 \u00A0update(dt);\r\n \r\n render();\r\n\r\n\u00A0 \u00A0\u00A0\u00A0lastTime = now;\r\n\r\n\u00A0 \u00A0if\u00A0(!isGameOver)\u00A0requestAnimFrame(main);\r\n\r\n };\r\n \r\n function update(dt) {\r\n\r\n\u00A0\u00A0\u00A0\u00A0gameTime += dt;\r\n \r\n if (Math.floor(gameTime) == 1 && firstwave == false) {\r\n deployEnemy (enemybasic, [c.width\/4,c.height\/5]);\r\n deployEnemy (enemylight, [c.width\/5, c.height\/18]);\r\n deployEnemy (enemybasic, [c.width-(c.width\/4), c.height\/5]);\r\n deployEnemy (enemylight, [c.width-(c.width\/5),c.height\/18]);\r\n deployEnemy (enemyttank, [c.width\/2,c.height\/20]); \r\n \r\n firstwave = true;\r\n } \r\n\r\n if (Math.floor(gameTime) == enemydep*(15-lvl)) {\r\n \r\n deployEnemy (enemybasic, [getRandom(30, c.width -30),getRandom(-20,-40)]);\r\n deployEnemy (enemylight, [getRandom(30, c.width -30) ,getRandom(-20,-40)-(k*2)]);\r\n deployEnemy (enemylight, [getRandom(30, c.width -30),getRandom(-20,-40)-(k*2)]);\r\n deployEnemy (enemylight, [getRandom(30, c.width -30) ,getRandom(-20,-40)-(k*2)]);\r\n deployEnemy (enemyttank, [getRandom(30, c.width -30) ,getRandom(-20,-40)-(k*4)]);\r\n deployEnemy (enemyttank, [getRandom(30, c.width -30) ,getRandom(-20,-40)-(k*4)]);\r\n enemydep++;\r\n } \r\n\r\n\u00A0\u00A0\u00A0\u00A0updateEntities(dt, units);\r\n updateEntities(dt, enemies);\r\n updateBullets(dt);\r\n updateIcons(dt);\r\n\r\n\u00A0 \/\/\u00A0\u00A0\u00A0checkCollisions();\r\n\r\n};\r\n\r\n function updateIcons(dt) {\r\n \r\n for(i=0;i<icons.length;i++) {\r\n if (icons[i].pos[1] > icons[i].defaultpos[1] && icons[i].respawn == true) {\r\n icons[i].pos[1] -= icons[i].respawnrate*k*dt;\r\n } else {\r\n icons[i].respawn = false;\r\n }\r\n }\r\n };\r\n\r\n function updateEntities(dt, list) {\r\n\r\n\u00A0\u00A0\u00A0\u00A0\/\/ Update the tank position\r\n \r\n \r\n \r\n \r\n\u00A0\u00A0\u00A0\u00A0for(var i=0; i<list.length; i++) {\r\n \r\n var u = list[i];\r\n var u2;\r\n \r\n list == units ? u2 = enemies : u2 = units;\r\n \r\n \r\n u.time = u.time + dt || 0;\r\n u.lastshot = u.lastshot + dt || 0;\r\n u.avoidCollision(list, i, dt);\r\n \/\/remove \r\n if (u.destroyed) {\r\n list.splice(i,1);\r\n i--;\r\n if (list == units) {\r\n counter++;\r\n } else {\r\n counter2++;\r\n }\r\n } else if (list == enemies && u.pos[1] > c.height- (c.width\/4 +2*k)) {\r\n \r\n isGameOver = true;\r\n gameOver(\'loss\');\r\n break;\r\n \r\n } else if (\r\n list == units && u.pos[1] < k*2\r\n ) {\r\n isGameOver = true;\r\n gameOver(\'win\');\r\n break;\r\n }\r\n\r\n if ( u.status == \"acceleration\" && u.speed < u.maxspeed ) {\r\n \r\n u.speed += 15*dt;\r\n switch(list) { \r\n case units :\r\n if (u.angle < u.defaultangle ) {\r\n u.angle += 100*dt*u.dir;\r\n } else if (u.angle > u.defaultangle ) { \r\n u.angle -= 100*dt*u.dir;\r\n }\r\n break;\r\n case enemies :\r\n \r\n u.cang = u.defaultangle ;\r\n if (u.cang < -90){\r\n u.cang +=180;\r\n } else if (u.cang > -90){\r\n u.cang -=180;\r\n }\r\n if (u.cang < u.angle ){\r\n u.angle -= 75*dt;\r\n }else if (u.cang > u.angle) { \r\n u.angle += 75*dt;\r\n }\r\n \r\n \r\n \r\n } \r\n }\r\n \r\n \r\n \r\n if (u.time > 1 && !u.target && u.pos[1]>k) {\r\n u.findTarget(u2);\r\n } \r\n \r\n if (u.target && u.target.destroyed){ \r\n u.status = \'acceleration\';\r\n delete u.target;\r\n \r\n } \r\n else if (u.status == \"targetfound\" && !u.target.destroyed) {\r\n \r\n if (u.speed >0) {\r\n u.speed -= u.maxspeed*2*dt;\r\n } else {\r\n u.speed = 0 \r\n }\r\n \r\n \r\n switch (list){\r\n \r\n case units : \r\n u.cang = u.getAngle(u.target.pos);\r\n if (u.cang > u.angle ){\r\n u.angle += 75*dt;\r\n }else if(u.cang< u.angle) { \r\n u.angle -= 75*dt;\r\n }\r\n break;\r\n \r\n case enemies : \r\n u.cang = u.getAngle(u.target.pos);\r\n if (u.cang < -90){\r\n u.cang +=180;\r\n } else if (u.cang > -90){\r\n u.cang -=180;\r\n }\r\n if (u.cang < u.angle ){\r\n u.angle -= 75*dt;\r\n }else if (u.cang > u.angle) { \r\n u.angle += 75*dt;\r\n }\r\n \r\n }\r\n \r\n \r\n if (u.lastshot > u.reload && Math.floor(u.angle) == Math.floor(u.cang) && u.getDistance(u.target) < u.range) {\r\n \r\n u.fireOnTarget();\r\n \r\n }\r\n \r\n } \r\n \r\n if (u.time>0.7 && u.speed > 0) {\r\n \r\n u.moveAhead(dt);\r\n \r\n } \r\n \r\n };\r\n \r\n}\r\n\r\n function updateBullets (dt){\r\n \r\n \/\/ Update all the explosions\r\n\r\n\u00A0\u00A0\u00A0\u00A0for(var i=0; i<explosions.length; i++) {\r\n\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0explosions[i].sprite.update(dt);\r\n\r\n\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\/\/ Remove if animation is done\r\n\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0if(explosions[i].sprite.done) {\r\n\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0explosions.splice(i, 1);\r\n\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0i--;\r\n\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0}\r\n\u00A0\u00A0\u00A0\u00A0}\r\n \r\n\u00A0\u00A0\u00A0\u00A0\/\/ Update all the bullets\r\n\r\n\u00A0\u00A0\u00A0\u00A0for(var i=0; i<bullets.length; i++) {\r\n\r\n\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0var b = bullets[i];\r\n \r\n var rad = b.angle\/(180\/Math.PI);\r\n b.pos[0] += Math.cos(rad)*b.speed*dt*b.dir;\r\n b.pos[1] += Math.sin(rad)*b.speed*dt*b.dir; \r\n\r\n\r\n\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\r\n\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\/\/ Remove the bullet\r\n\r\n\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0if (b.pos[1] < b.target.pos[1]+k && b.pos[1] > b.target.pos[1]-k && b.pos[0] < b.target.pos[0]+k && b.pos[0] > b.target.pos[0]-k ) {\r\n\u00A0\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0bullets.splice(i, 1);\r\n\u00A0\u00A0\u00A0\u00A0 \u00A0\u00A0\u00A0\u00A0\u00A0i--;\u00A0\r\n if (b.target.hp >= 0 && !b.target.destroyed){\r\n b.target.hp -= b.damage;\u00A0\r\n } \r\n if (b.target.hp < 0) { \r\n b.target.destroyed = true;\r\n b.target.hp = 0;\r\n \u00A0\/\/ Add an explosion\r\n\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0explosions.push({\r\n\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0pos: b.target.pos,\r\n\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0sprite: new Sprite(\"https:\/\/hsto.org\/storage2\/aeb\/045\/378\/aeb0453784033c5b9c0a700f5952d84b.png\", [0, 117],\u00A0[39, 39], [k*3.2,k*3.2], 14,\u00A0[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],\u00A0null,\u00A0true)\r\n \u00A0\u00A0\u00A0\u00A0\u00A0});\r\n } \r\n }\u00A0\u00A0\u00A0\u00A0\r\n\u00A0\u00A0\u00A0\u00A0}\u00A0\r\n\r\n \u00A0\u00A0\r\n }\r\n\r\n\r\n\r\n function render() { \r\n \r\n if (!isGameOver) {\r\n \r\n renderArea(ctx); \r\n renderEntities (enemies);\r\n renderEntities (units);\r\n renderEntities (bullets);\r\n renderEntities(explosions);\r\n \r\n \/* ctx.font\u00A0=\u00A0\"20px Arial\";\r\n ctx.fillText( Math.floor(gameTime) ,20,50); *\/\r\n \r\n }\r\n };\r\n \r\n function renderArea (ctx) {\r\n ctx.fillStyle = \"rgba(120,200,120,0.5)\";\r\n ctx.fillRect(0,0,c.width ,c.height)\r\n ctx.fillStyle = \"rgba(50,200,50,0.9)\";\r\n ctx.fillRect(0, 0, c.width, c.height\/20);\r\n ctx.fillStyle = \" rgba(200,50,50,0.7)\";\r\n ctx.fillRect( 0, c.height - c.width\/4 - c.height\/20, c.width , c.height\/20);\r\n\r\n ctx.drawImage(resources.get(\'http:\/\/farm8.staticflickr.com\/7231\/7269527534_4d8ce226de.jpg\'), 0,0, 500, c.width\/4, 0, c.height-c.width\/4, 500, c.width\/4);\r\n ctx.drawImage(resources.get(\'http:\/\/farm8.staticflickr.com\/7231\/7269527534_4d8ce226de.jpg\'), 17,0, 483, c.width\/4, 500, c.height-c.width\/4, 500, c.width\/4);\r\n \r\n ctx.beginPath();\r\n for (var x = c.width\/4; x<c.width; x += c.width\/4){ \r\n \r\n ctx.moveTo( x+0.1, c.height - c.width\/4);\r\n ctx.lineTo( x+0.1,c.height);\r\n };\r\n \r\n ctx.moveTo(0, c.height - c.width\/4);\r\n ctx.lineTo(c.width, c.height - c.width\/4 );\r\n ctx.closePath();\r\n ctx.strokeStyle = \"#eee\";\r\n ctx.stroke();\r\n \r\n if (deployarea === true) {\r\n drawDeployArea();\r\n } \r\n \r\n drawTrLights();\r\n drawIcons(icons);\r\n };\r\n \r\n function drawDeployArea() {\r\n \r\n ctx.beginPath();\r\n ctx.rect(c.width\/100, c.height\/2, c.width-c.width\/100 - 3, c.height\/3.7);\r\n ctx.strokeStyle = \"grey\";\r\n ctx.closePath();\r\n ctx.stroke();\r\n \r\n\r\n }\r\n \r\n function drawTrLights() {\r\n \r\n for (i=0;i<icons.length; i++) {\r\n \r\n if (icons[i].respawn == true) {\r\n ctx.fillStyle = \"red\";\r\n } else {\r\n ctx.fillStyle = \"green\";\r\n }\r\n ctx.fillRect(c.width\/4.8 + c.width\/4*i, c.height - c.width\/4.1, c.width\/30, c.width\/30);\r\n };\r\n };\r\n \r\n function drawIcons(list) {\r\n for(var i=0; i<list.length; i++) {\r\n \r\n if (!list[i].dragable) {\r\n \r\n \u00A0\u00A0\u00A0 ctx.save();\r\n ctx.translate(list[i].pos[0] + list[i].sprite.resized[0]\/2 , list[i].pos[1] + list[i].sprite.resized[1]\/2);\r\n ctx.rotate(Math.PI\/180*(-90));\r\n ctx.translate( - list[i].sprite.resized[0]\/2 , - list[i].sprite.resized[1]\/2 ); list[i].sprite.render(ctx);\r\n ctx.restore();\r\n \r\n } else {\r\n \r\n ctx.save();\r\n \r\n if (mouse.down) {\r\n ctx.translate(mouse.x, mouse.y);\r\n } else {\r\n ctx.translate(xxx , yyy);\r\n }\r\n ctx.rotate(Math.PI\/180*(-90));\r\n ctx.translate( - list[i].sprite.resized[0]\/2 , - list[i].sprite.resized[1]\/2 );\r\n \r\n list[i].sprite.render(ctx);\r\n \r\n list[i].pos = [xxx , yyy]\r\n \r\n ctx.restore(); \r\n } \r\n \u00A0\u00A0\u00A0\u00A0} \r\n };\r\n \r\n function renderEntities(list) {\r\n\r\n \u00A0\u00A0\u00A0\u00A0for(var i=0; i<list.length; i++) {\r\n\r\n\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0renderEntity(list[i]);\r\n \u00A0\u00A0\u00A0\u00A0} \r\n }\r\n\r\nfunction renderEntity(entity) {\r\n\r\n\r\n if (!entity.destroyed) {\r\n \u00A0\u00A0\u00A0\u00A0ctx.save();\r\n ctx.translate( entity.pos[0], entity.pos[1]);\r\n \r\n if (entity.time && entity.time <0.7) {\r\n ctx.scale(1.9 - entity.time*entity.time*1.7, 1.9 - entity.time*entity.time*1.7);\r\n } \r\n \r\n ctx.rotate(Math.PI\/180*(entity.angle));\r\n \r\n ctx.translate(- entity.sprite.resized[0]\/2 , - entity.sprite.resized[1]\/2);\r\n \r\n \u00A0entity.sprite.render(ctx);\r\n renderHP(entity);\r\n \u00A0\u00A0ctx.restore();\r\n }\r\n}\r\n\r\nfunction renderHP (entity) {\r\n \r\n if (entity.time > 0.8){\r\n var hp = entity.hp*100\/entity.maxhp;\r\n if (hp < 0) hp = 0;\r\n if (entity.dir < 0) {\r\n var reverse = entity.sprite.resized[0];\r\n } else {\r\n var reverse = 0;\r\n }\r\n \r\n ctx.beginPath();\r\n ctx.lineWidth = k\/2.5;\r\n ctx.lineCap = \"round\";\r\n ctx.strokeStyle = \"black\";\r\n ctx.moveTo(0 + reverse , 0);\r\n ctx.lineTo(0 + reverse , entity.sprite.resized[1]);\r\n ctx.stroke();\r\n \r\n \r\n ctx.beginPath();\r\n ctx.lineWidth = k\/3.2;\r\n ctx.lineCap = \"round\";\r\n ctx.strokeStyle = \"lightgrey\";\r\n ctx.moveTo(0 + reverse , 0);\r\n ctx.lineTo(0 + reverse , entity.sprite.resized[1]);\r\n ctx.stroke();\r\n \r\n ctx.beginPath();\r\n \r\n ctx.lineWidth = k\/4;\r\n \r\n ctx.lineCap = \"round\";\r\n ctx.strokeStyle = \"rgb(\" + Math.floor(100-hp*2.56) + \",\" + Math.floor(hp*2.56) + \",0)\";\r\n ctx.moveTo(0 + reverse , 0);\r\n ctx.lineTo(0 + reverse , hp\/100*entity.sprite.resized[1]);\r\n ctx.stroke();\r\n ctx.lineWidth = 1;\r\n }\r\n }\r\n \r\n};\r\n\r\n\r\n\r\n\r\n \r\n \r\n\/\/\/\/\/\/\/\/\/\/\/\/\/^^^^^^^^^^^^^^\/\/\/\/\/\/\/\/\/\/\/\/\r\n\r\n var requestAnimFrame = (function(){\r\n\r\n\u00A0\u00A0\u00A0\u00A0return window.requestAnimationFrame ||\r\n\r\n\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0window.webkitRequestAnimationFrame ||\r\n\r\n\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0window.mozRequestAnimationFrame ||\r\n\r\n\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0window.oRequestAnimationFrame ||\r\n\r\n\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0window.msRequestAnimationFrame || \r\n\r\n\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0function (callback){\r\n\r\n\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0window.setTimeout(callback, 1000 \/ 60);\r\n\r\n\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0};\r\n})();\r\n\r\n\/\/\/^^^^^^^\/\/\/\/\/\/\/\/\/\/\/^^^^\/\/\/\/\/\/\/\/\/\r\n \r\n function loader() {\r\n \r\n var maindiv = document.getElementById(\"main\");\r\n \r\n \r\n maindiv.innerHTML = \'<button id=\"start\" onclick=\"startGame ()\">Start Game<\/button><button id=\"info\" onclick=\"inf()\">Info<\/button><br\/><span id=\"dif\">Difficulty:\' + dif[lvl] + \'<\/span>\';\r\n \r\n lastTime = Date.now();\r\n\r\n};\r\n\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\r\n\r\n(function() {\r\n var resourceCache = {}; \r\n var loading = []; var readyCallbacks = [];\r\n \/\/ Load an image url or an array of image urls\r\n function load(urlOrArr) {\r\n if (urlOrArr instanceof Array) { \r\n urlOrArr.forEach(function(url){\r\n _load(url);\r\n });\r\n } else { \r\n _load(urlOrArr);\r\n } \r\n } \r\n \r\n function _load(url) { \r\n if(resourceCache[url]) {\r\n return resourceCache[url];\r\n } else { \r\n var img = new Image(); img.onload = function() { \r\n resourceCache[url] = img; if(isReady()) {\r\n readyCallbacks.forEach(function(func) {\r\n func();\r\n });\r\n }\r\n }; \r\n resourceCache[url] = false; \r\n img.src = url;\r\n }\r\n }\r\n function get(url) {\r\n return resourceCache[url]; } function isReady() { \r\n var ready = true;\r\n for(var k in resourceCache) { \r\n if(resourceCache.hasOwnProperty(k) && !resourceCache[k]) {\r\n ready = false; \r\n }\r\n } \r\n return ready;\r\n } \r\n function onReady(func) { \r\n readyCallbacks.push(func); \r\n }\r\n window.resources = {\r\n load: load,\r\n get: get,\r\n onReady: onReady,\r\n isReady:isReady \r\n };\r\n})();\r\n\r\n resources.load([\r\n \r\n \"http:\/\/farm8.staticflickr.com\/7231\/7269527534_4d8ce226de.jpg\",\r\n \r\n \"https:\/\/opengameart.org\/sites\/default\/files\/tanks_3.png\",\r\n \r\n \"https:\/\/d30y9cdsu7xlg0.cloudfront.net\/png\/321488-200.png\",\r\n\r\n\"https:\/\/hsto.org\/storage2\/aeb\/045\/378\/aeb0453784033c5b9c0a700f5952d84b.png\"\r\n\r\n\r\n\r\n]);\r\n\r\n resources.onReady(loader);",
        sl_link:"https://code.sololearn.com/WGObAy7i6amA/#js",
        category:"app-game"},
    rainbow:{
        logo:'https://image.flaticon.com/icons/svg/306/306125.svg',
        descrip:'simple jquery rainbow tap',
        author:'Just а User',
        label:'rainbow',
        code:'<div class=\"cent\"><marquee>JUST TAP<\/marquee><\/div><br\/>\r\n       <div class=\"div first animateClass\" ><\/div><br\/>\r\n       <div class=\"div second animateClass\"><\/div><br\/>\r\n       <div class=\"div third animateClass\"><\/div><br\/>\r\n       <div class=\"div fourth animateClass\"><\/div><br\/>  \r\n       <div class=\"div fifth animateClass \"><\/div><br\/>\r\n       <div class=\"div sixth animateClass\"><\/div><br\/>\r\n       <div class=\"div seventh animateClass\"><\/div><br\/>\r\n       <small>Special thanks for<a href=\"https:\/\/www.sololearn.com\/Profile\/5664975\/?ref=app\">@Vitaliy Angelov<\/small>',
        style:'.cent { text-align:center; font-weight:bolder;}.div { border-radius:20px;}.first, .second, .third, .fourth, .fifth, .sixth, .seventh { height:35px; width:35px; border:1px solid gray; box-shadow: 3px 2px 10px 1px lightskyblue;}.first { background-color:red; }.second { background-color:orange;}.third { background:yellow;}.fourth { background:green;}.fifth { background:LightSkyBlue;}.sixth { background:blue;}.seventh { background:darkviolet;}',
        script:" $(\".animateClass\").click(function() {\r\n      \r\n      var widthX;\r\n       \r\n      $(this).css(\"width\")==\"35px\"?widthX=\"100%\":widthX=\"35px\";\r\n       \r\n       $(this).animate({\r\n           width: widthX\r\n       },1000);      \r\n   }); ",
        sl_link:"https://code.sololearn.com/W0MBP6IH1qtG/#html",
        category:"app-game"
    
    },
    hanoi:{
        logo:'https://image.flaticon.com/icons/svg/720/720141.svg',
        descrip:'just note',
        author:'Josué Charles',
        label:'hanoi',
        code:'<header id=\"head\"> <h1>Tower of Hanoi<\/h1> <\/header> <article> <div id=\"pile\"> <p id=\"input\"> <label>Discs(value):<\/label> <input id=\"nbD\" type=\"number\" min=\"1\" max=\"99\" size=\"2\" value=\"5\" requered> <button id=\"play\">Play<\/button> <button id=\"validator\" class=\"demo\">Solve<\/button> <button id=\"hlp2\">help<\/button> <br \/> <span id=\"err\">Value must be an integer between 0 and 100!<\/span> <span id=\"hlp\">Enter a number between 0 and 100<\/span> <br \/> <label class=\"demo\">Speed range:<\/label> <input id=\"speed\" class=\"demo\" type=\"range\" min=\"1\" max=\"100\" value=\"5\"> <\/p> <span id=\"hi\"><\/span> <div id=\"tower1\" class=\"tower\"> <\/div> <div id=\"tower2\" class=\"tower\"> <\/div> <div id=\"tower3\" class=\"tower\"> <\/div> <div id=\"base1\" class=\"base\"> <\/div> <div id=\"base2\" class=\"base\"> <\/div> <div id=\"base3\" class=\"base\"> <\/div> <div id=\"spd\"> <label class=\"demo\">Speed value:<\/label> <input id=\"spdVal\" class=\"demo\" type=\"number\" min=\"1\" max=\"100\" value=\"5\"> <\/div> <div id=\"output\"> <ul> <li id=\"moves\"> Moves: <\/li> <li id=\"elTm\"> Times: <\/li> <\/ul> <\/div> <div id=\"alert\"> <button id=\"btnClose\">\u274C<\/button> <p id=\"perfect\"> <\/p> <p id=\"complete\"> <\/p> <h1 class=\"hlp1\">Help<\/h1> <p class=\"hlp1\"> Click a tower for activating a disc and click an other time a tower for moving the activated disc.<br\/>After a game, restart by clicking the button \'Replay\' for the same or a new number of discs. <\/p> <h3 class=\"welcome\">***Tower of hanoi v 1.2***<\/h3> <p class=\"welcome\"> Welcome to the game <em>Tower of Hanoi<\/em>!<br\/>After entering a number of discs, click <i>Play<\/i> for playing or <i>Solve<\/i> for using the solver of the game.<br\/> Date: 2018\/01\/28. <br\/><br \/>Enjoy!!! <\/p> <span id=\"author\">&copy; Josu\u00E9 Charles.<\/span> <\/div> <div id=\"frm\"> <form> <label id=\"lblUser\">Username:<\/label><input id=\"username\" type=\"text\" value=\"\" name=\"username\" size=\"15\"\/ required> <input id=\"submit\" type=\"submit\" value=\"Submit\"> <\/form> <\/div> <\/div> <p id=\"par\"> N.B.<em> If you want to know the rules and more according to Tower of Hanoi, click this <a href=\"https:\/\/code.sololearn.com\/WgtZf6I3lKT3\/?ref=app\">link<\/a> or <a href=\"https:\/\/code.sololearn.com\/WfrFIPEBY2hS\/?ref=app\"> here<\/a><\/em> <\/p> <\/article>',
        style:'#head{ background-color :inherit; height:50px; position:relative; margin:auto; } h1{ text-align:center; position:relative; height:25px; top: 5px;}article{ margin:auto; margin-bottom:15px;}#input{ height:70px; margin:auto; position:relative; }label{ margin-left:25px; margin-top:10px;}#nbD, #spdVal{ width:40px; height:17.5px; border-radius:5px;}#validator{ width:50px; text-align:center; font-size:1.1em; border-radius:5px; margin-left:20px;}#play, #hlp2{ width:60px; text-align:center; font-size:1em; border-radius:5px; margin-left:10px;}#hlp2{ display:none;}#err{ display: none; color:rgb(254, 3, 4);; font-style: italic; font-size:0.8em; margin-left:25px;}#hlp{ display: none; color:rgba(12, 253, 13, 0.8); font-style: italic; font-size:0.8em; margin-left:25px;}#speed{ margin-top:15px; margin-left:10%;}#pile{ width:330px; height:360px; position:relative; background-color:rgba(2, 5, 4, 0.6); margin:auto; color: rgba(250, 251, 252, 0.8); padding-top: 10px;}a{ color: green;}.tower{ height:110px; width: 10px; background-color: gray; display:inline-block; position:absolute; top:120px; }#tower1{ left:50px; }#tower2{ left:160px;}#tower3{ left:270px;}.base{ height:10px; width: 95px; background-color: gray; display:inline-block; position:absolute; top:220px; }#base1{ left:7.5px; }#base2{ left:117.5px;}#base3{ left:227.5px;}.discs{ position:absolute; border: 1px black solid;1 height:15px; border-radius:3px; /* transition:top , left;*/ text-align:center; color:black; }#spd{ position:absolute; top:250px; }#output{ position:absolute; top:270px; }ul{ list-style-type:none;}li{ font-weight:bold; font-size:0.8em;}#moves{ margin-top:10px; margin-bottom:10px;}#par{ text-align:center; }#alert{ color:black; height:310px; width:250px; position:absolute; left:40px; top:30px; border: 1px black solid; background-color:gray; padding: 5px 5px 5px 15px; text-align:justify ; display:none;}#perfect{ color: rgba(0, 255, 0, 0.8); display:none;}#complete { color: rgba(0, 0, 255, 0.8); display:none;}.hlp1{ display: none; }#btnClose{ margin-left:210px; border:none;}#result{ margin-left:inherit; }#author{ position:absolute; top:300px; left:120px; color:black;}.welcome{ display:none;}#frm{ height:100px; width:250px; position:absolute; left:55px; top:10px; border: 1px black solid; background-color:gray; /*rgba(240, 245, 250, 0.95);*/ padding: 20px 5px 5px 15px; text-align:justify ; display:none; }#lblUser{ color:blue; }#username{ width:80px; margin-left: 3px;}#hi{ display:none; font-weight:bold; font-size:0.9em; margin-left:25px; position:absolute ; top:50px; left:15px; color:rgba(250, 0, 250, 0.8);}#submit{ border-radius:3px; width:60px; position:absolute ; left:190px; top:70px;}.cmt{ font-size:0.9em;}',
        script:"\"use strict\"\r\n const T=4, sp=5;\/\/number of towers minus one\r\n let n=5, \/\/number of discs\r\n N,\/\/Number of mimum moves of the discs\r\n lft=$(\"#pile\").width()\/3,\/\/width used in calculations\r\n \r\n tp=$(\".tower\").height()+\r\n $(\".tower\").position().top,\r\n tpj=$(\".tower\").height()-10,\r\n p=Array(T),\r\n pile,\/\/number of towers(3) indexed from 0 to 2.\r\n counter,\/\/counter of moves of the discs\r\n username=\"\",\r\n interv,\/\/interval of time for setInterval \r\n timj=0,\r\n \r\n speed=sp, \/\/ normal speed of move of the discs\r\n \r\n \r\n \r\n discs=Array(n+1),\/\/array \r\n disc, \/\/disk number\r\n hght, \/\/height of the discs\r\n H=Array(T),\/\/height of each pile \r\n HC=Array(T),\/\/height of each tower\r\n \r\n moves=[3, 4, 5],\r\n t=0,\/\/iteraor on the array moves\r\n totalTim,\r\n played=false,\r\n plHlp=true,\r\n begin=false,\r\n intro=true,\r\n beg=0,\r\n tim=0,\r\n \r\n \/\/ Number of moves\r\n bgColor=[\"rgba(0, 255,255, 0.5) \",\"rgba(255, 0, 0, 0.5)\", \r\n \"rgba(0, 255, 0, 0.5)\", \"rgba(0, 0, 255, 0.5)\", \r\n \"rgba(255, 255, 0, 0.5)\", \"rgba(255, 0,255, 0.5)\"],\r\n \r\n \/\/objets JQuery\r\n \r\n $nbD=$(\"#nbD\"),\r\n $speed=$(\"#speed\"),\r\n $validator=$(\"#validator\"),\r\n $spdVal=$(\"#spdVal\"),\r\n $tower1=$(\"#tower1\"),\r\n $tower2=$(\"#tower2\"),\r\n $tower3=$(\"#tower3\"),\r\n $moves=$(\"#moves\"),\r\n $elTm=$(\"#elTm\"),\r\n $pile=$(\"#pile\"),\r\n $play=$(\"#play\"),\r\n $alert=$(\"#alert\"),\r\n $perfect=$(\"#perfect\"),\r\n $complete=$(\"#complete\"),\r\n $hlp1=$(\".hlp1\"),\r\n $welcome=$(\".welcome\"),\r\n $btnClose=$(\"#btnClose\"),\r\n $result=$(\"<ul>\"),\r\n $username=$(\"#username\");\r\n \r\n \r\n $(\".base\").css(\"top\", tp);\r\n \r\n \r\n\r\n \/*\r\n Namespace Hanoi with two features: game tower of Hanoi and its solver. So you can play and vizualize the solution if you want.\r\n *\/\r\n \r\n var Hanoi={\r\n \r\n \r\n init(){\r\n \r\n N=Math.pow(2, n)-1;\r\n H.fill(0, 0, T);\r\n\r\n HC.fill(0, 0, T);\r\n \r\n pile=[0, 0, 1, 2];\r\n\r\n p[1]=[];\r\n\r\n let j=0;\r\n \r\n while(j<n){\r\n p[1].push(n-j);\r\n j++;\r\n }\r\n \r\n for ( let i=2; i<4; i++)\r\n p[i]=Array(n).fill(0, 0, n);\r\n \r\n H[1]=n;\r\n \r\n counter = 1;\r\n \r\n t=0;\r\n \r\n tim+=tim;\r\n \r\n this.createDiscs();\r\n \r\n if(intro){\r\n $alert.show(1000);\r\n $(\".discs\").hide();\r\n $welcome.show();\r\n intro=false;\r\n }\r\n },\r\n \r\n \r\n createDiscs(){\r\n $(\".discs\").remove();\r\n let h=$tower1.height();\r\n hght=Math.floor((h-5)\/n)\r\n \r\n if(hght>15)\r\n hght= 15;\r\n \r\n if(hght<1)\r\n hght=1;\r\n \r\n \r\n \/\/conception discs\r\n for(let i=n;i>0;i--){\r\n discs[i]=$(\"<div>\");\r\n discs[i].html(i)\r\n .addClass(\"discs\")\r\n .height(hght)\r\n .width(20+i*65\/n)\r\n .css({\r\n left:50-(discs[i].width()-10)\/2,\r\n top:tp-hght*(n-i+1),\r\n backgroundColor:bgColor[i%6],\r\n fontSize: hght-1,\r\n transitionDuration: (sp\/speed)+\'s\'\r\n });\r\n $pile.append(discs[i]);\r\n }\r\n \r\n HC[1]=n*hght;\r\n },\r\n \r\n validate(){\r\n let val = $nbD.val();\r\n \r\n if(val>=1 && val<100){\r\n n =parseInt(val);\r\n $(\"#err\").hide();\r\n \r\n Hanoi.init(); \r\n return true;\r\n }\r\n \r\n else{\r\n \r\n $(\"#err\").show();\r\n }\r\n \r\n $(\"#hlp\").hide();\r\n },\r\n \r\n closeAlert(){\r\n \r\n $alert.hide(1000);\r\n $(\".discs\").show();\r\n $welcome.hide()\r\n $hlp1.hide();\r\n $perfect.hide ();\r\n $complete.hide();\r\n \r\n if(played)\r\n if(username.length==0){\r\n $(\"#frm\").show(1000);\r\n } \r\n \r\n },\r\n \r\n formatTime(time){\r\n let yrs=Math.floor(time\/31536000),\r\n dys=Math.floor((time%31536000)\/86400),\r\n hrs=Math.floor((time%86400)\/3600),\r\n \r\n mns=Math.floor((time%3600)\/60),\r\n \r\n s=time%60,\r\n format;\r\n\r\n if(parseInt(s)!=s)\r\n s=(s+\'\').substring(0,(s+\'\').indexOf(\'.\')+4);\r\n \r\n if(yrs>0)\r\n format=yrs+\"years \"+dys+\"days \"+hrs+\"hrs \"+mns+\"mns \"+s+\"s\";\r\n else if(dys>0)\r\n format=dys+\"days \"+hrs+\"hrs \"+mns+\"mns \"+s+\"s\";\r\n else if(hrs>0)\r\n format=hrs+\"hrs \"+mns+\"mns \"+s+\"s\";\r\n else if(mns>0)\r\n format=mns+\"mns \"+s+\"s\";\r\n else\r\n format=s+\"s\";\r\n \r\n return format;\r\n },\r\n \r\n game:{\r\n \r\n play(){\r\n \r\n \r\n if(Hanoi.validate()){\r\n \r\n $(\".demo\").hide(); \r\n clearInterval(interv);\r\n $moves.html(\"Moves: \");\r\n $elTm.html(\"Elapsed times: \")\r\n \r\n $(\"#hlp\").hide();\r\n tim=0;\r\n counter=0;\r\n played=true; \r\n begin=true; \r\n \r\n $(\".discs\").css(\'transition-duration\', \'0s\');\r\n \r\n $(\"#hlp2\").show();\r\n \r\n if(plHlp){\r\n \r\n $alert.show(1000);\r\n $(\".discs\").hide();\r\n $hlp1.show();\r\n plHlp=false;\r\n }\r\n \r\n } \r\n },\r\n \r\n user(){\r\n \r\n username=$username.val();\r\n \r\n if(username.length){\r\n $(\"#frm\").hide();\r\n $(\"#hi\").text(\"Hi \"+username+\"! Thank you for your visit!\");\r\n $(\"#hi\").slideToggle();\r\n }\r\n },\r\n \r\n \r\n tower(twr){\r\n for(let j=1; j<=n; j++){\r\n let h=discs[j].position().top;\r\n if(h==tpj){\r\n disc=j;\r\n \r\n if(!H[twr] || (H[twr] && p[twr][H[twr]-1]>=j)){\r\n \r\n \r\n p[twr][H[twr]]=disc;\r\n H[twr]++; \r\n HC[twr]+=hght;\r\n counter++;\r\n \r\n discs[disc].css({\r\n left:pile[twr]*lft+50-(discs[disc].width()-10)\/2,\r\n top:tp-HC[twr]\r\n });\r\n \r\n \r\n }\r\n return;\r\n }\r\n }\r\n \r\n if(H[twr]!=0 ){\r\n H[twr]--;\r\n HC[twr]-=hght;\r\n \r\n if(begin){\r\n \r\n interv =setInterval(this.timer, 1); \r\n begin=false;\r\n beg=new Date().getTime()\/1000;\r\n }\r\n disc=p[twr][H[twr]];\r\n discs[disc].css(\"top\", tpj);\r\n \r\n }\r\n },\r\n \r\n timer(){\r\n tim=new Date().getTime()\/1000-beg; \r\n \r\n \r\n $elTm.text(\"Elapsed Times: \"+Hanoi.formatTime(tim));\r\n \r\n $moves.text(\"Moves: \"+counter+\"\/\"+N);\r\n \r\n \r\n if(H[2]==n || H[3]==n){\r\n \r\n let per=counter\/tim;\r\n if(parseInt(per)!=per)\r\n per=(per+\'\').substring(0,(per+\'\').indexOf(\'.\')+4);\r\n $result.attr(\"id\", \"result\");\r\n let rslt=\"<li> Your score: \"+counter+\" moves\"+\"<\/li> <li> Duration: \"+Hanoi.formatTime(tim)+\"<\/li><li>Your Speed: \"+per+\"moves\/s<\/li><li>Your performance:\";\r\n \r\n if(counter==N){\r\n if(per<1)\r\n rslt+=\" enough good<\/li>\";\r\n else if(per==1)\r\n rslt+=\" very good<\/li>\";\r\n else\r\n rslt+=\" <b>excellent<\/li>\";\r\n rslt+=\'<br\/><i class=\"cmt\">Please \'+username+\', comment this code with the number of discs, your speed and your performance!<\/i>\';\r\n let perf=\"\uD83D\uDC4F\uD83D\uDC4F\uD83D\uDC4F\uD83D\uDC4F\uD83D\uDC4F\uD83D\uDC4F\uD83D\uDC4FCongratulations \"+username+\"! \uD83D\uDE0C\uD83D\uDE0C\uD83D\uDE0CYou solve the game with a perfect score!!!\";\r\n \r\n \r\n $result.html(rslt);\r\n $alert.show(1000);\r\n $(\".discs\").hide();\r\n $perfect.text(perf)\r\n .append($result)\r\n .show();\r\n $hlp1.hide();\r\n \r\n }\r\n \r\n else {\r\n if(per<1)\r\n rslt+=\" moderately good<\/li>\";\r\n else if(per==1)\r\n rslt+=\" enough good<\/li>\";\r\n else\r\n rslt+=\" very good<\/li>\";\r\n rslt+=\'<br\/><i class=\"cmt\">Please \'+username+\', comment this code with the number of discs, your speed and your performance!<\/i>\';\r\n $result.html(rslt);\r\n let com=\" \uD83D\uDC4Fcongratulations \"+username+\"! You solve the game but \uD83D\uDE1F\uD83D\uDE1Fyour score is not perfect.\"\r\n $alert.show(1000);\r\n $(\".discs\").hide();\r\n $complete.text(com)\r\n .append($result)\r\n .show();\r\n $hlp1.hide();\r\n }\r\n $validator.show();\r\n played=false;\r\n $play.text(\"Replay\");\r\n $(\"#hlp2\").hide();\r\n \r\n clearInterval(interv); \r\n }\r\n \r\n }\r\n },\r\n \r\n solver:{\r\n \r\n validator(){\r\n if(Hanoi.validate()){\r\n clearInterval(interv);\r\n \r\n $(\".demo\").show();\r\n tim=0;\r\n interv = setInterval(this.solve, sp*1000\/speed);\r\n $(\"#hlp\").hide();\r\n $(\"#hlp2\").hide();\r\n played=false; \r\n }\r\n },\r\n \r\n chgSpdRg(){\r\n speed = parseFloat($speed.val());\r\n $spdVal.val(speed);\r\n clearInterval(interv);\r\n if(counter<N){\r\n \r\n interv = setInterval(this.solve, sp*1000\/speed);\r\n } \r\n \r\n },\r\n \r\n chSpdVal(){\r\n speed = parseFloat($(this).val());\r\n if(isNaN(speed) || speed<1)\r\n speed=1;\r\n else if(speed>100)\r\n speed=100;\r\n \r\n $speed.val(speed);\r\n clearInterval(interv);\r\n if(counter<N){\r\n \r\n interv = setInterval(this.solve, sp*1000\/speed);\r\n } \r\n \r\n },\r\n \r\n solve(){\r\n \/\/ disc which is going to move\r\n disc=counter.toString(2).split(\'\').reverse().indexOf(\'1\')+1;\r\n \/\/Let\'s search the towers d and a\r\n let a, d;\r\n [d, a]=\r\n moves[t%3]==3?\r\n (p[1].indexOf(disc)!=-1?[1,2]:[2, 1]):\r\n moves[t%3]==4?\r\n (p[1].indexOf(disc)!=-1?[1,3]:[3, 1]): \r\n (p[2].indexOf(disc)!=-1?[2,3]:[3, 2]);\r\n \r\n t++;\r\n \r\n Hanoi.solver.update(d, a);\r\n \r\n counter++;\r\n if(counter>N){\r\n clearInterval(interv);\r\n \r\n counter--;\r\n }\r\n },\r\n \r\n update(d, a){\r\n \r\n $moves.html(\"Moves: \");\r\n $elTm.html(\"Times: \")\r\n \r\n \r\n H[d]--; \r\n HC[d]-=hght;\r\n p[d][H[d]]=0;\r\n p[a][H[a]]=disc;\r\n H[a]++;\r\n HC[a]+=hght;\r\n \r\n \r\n \r\n discs[disc].css({\r\n left:pile[a]*lft+50-(discs[disc].width()-10)\/2,\r\n top:tp-HC[a]\r\n });\r\n \r\n $moves.html(\"Moves: \"+counter+\"\/\"+N+\" (disc \"+disc+ \": from T\"+d+\" to T\"+a+\")\");\r\n \r\n tim+=sp\/speed;\r\n totalTim=tim+(N-counter)*sp\/speed;\r\n $elTm.html(\"Elapsed Times: \"+Hanoi.formatTime(tim)+\"\/\"+Hanoi.formatTime(totalTim));\r\n \r\n }\r\n }\r\n \r\n \r\n };\r\n \r\n \r\n \r\n \r\n \r\n Hanoi.init();\r\n \r\n $validator.click(function (){\r\n \r\n Hanoi.solver.validator();\r\n }); \r\n \r\n $nbD.keyup(function(){\r\n $(\"#err\").hide();\r\n $(\"#hlp\").show();\r\n });\r\n \/\/for changing the speed of moves \r\n \r\n $speed.change(function (){\r\n Hanoi.solver.chgSpdRg();\r\n });\r\n \r\n $spdVal.keyup (function (){\r\n Hanoi.solver.chgSpdVal();\r\n });\r\n \r\n $btnClose.click(function(){\r\n Hanoi.closeAlert()\r\n });\r\n \r\n \r\n \r\n $play.click(function (){\r\n \r\n Hanoi.game.play();\r\n \r\n });\r\n \r\n $(\"#submit\").click(function(e){\r\n e.preventDefault(); \r\n \r\n Hanoi.game.user();\r\n \r\n });\r\n \r\n \r\n $tower1.click(function (){\r\n \/\/verifier si un disque est active\r\n if(played){\r\n Hanoi.game.tower(1);\r\n \r\n }\r\n \r\n });\r\n \r\n $tower2.click(function (){\r\n \r\n if(played){\r\n Hanoi.game.tower(2)\r\n }\r\n });\r\n \r\n $tower3.click(function (){\r\n if(played){\r\n Hanoi.game.tower(3);\r\n }\r\n \r\n });\r\n\r\n\r\n \r\n $(\"#hlp2\").click(function (){\r\n \r\n $alert.show(1000);\r\n $(\".discs\").hide();\r\n $hlp1.show();\r\n });",
        sl_link:"https://code.sololearn.com/W011B9wP6Vkh/?ref=app",
        category:"app-game"
    },
     qr:{
        logo:'https://image.flaticon.com/icons/svg/299/299342.svg',
        descrip:'for coders',
        author:'Ankur dhutta jha',
        label:'qr',
        code:'<h1>QR GENERATOR :-) Ankur<\/h1><select id=\"type\"><option value=\"\">Text<\/option><option value=\"http:\/\/\">Link<\/option><option value=\"tel%3A\">Call<\/option><\/select><br><textarea id=\"text\" ><\/textarea><br><button onclick=\"make()\" class=\"but\">Create QR<\/button><br><img class=\"img\" src=\"\" id=\"qr\" alt=\"**QR code Appear HERE**\"\/><br><button class=\"but\"><a class=\"a\" href=\"\" id=\"lin\">DOWNLOAD!<\/a><\/button>',
        style:'#text{border-radius: 20px;height:150px;width:100%; background-color: #eddd9e; font-size:40px; font-family:Times new Roman ; color:#eddd9e; text-shadow:3px 2px black;} .img{background-color:#eddd9e;height:300px;width:300px;border:30px solid white;color:red;font-size:40px;} select { width: 40%; padding: 16px 20px; border: none; border-radius: 20px; background-color: #eddd9e; font-size:22px; color:white;}.but{width: 40%; padding: 16px 20px; border: none; border-radius: 20px; background-color: #eddd9e; color:green; font-size:20px; } .a{text-decoration:none ;} h1 { color: white; text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;}',
        script:"alert(\"**instructions**\\n text-simple \\n call-mobile number\\n link-url without http\\n note--download works in browser\");\r\nvar type=document.getElementById(\"type\");\r\nvar text=document.getElementById(\"text\");\r\nvar qr=document.getElementById(\"qr\");\r\nfunction make() {\r\nvar x=text.value;\r\nvar y=type.value;\r\nvar lin=document.getElementById(\"lin\");\r\nqr.src=\"https:\/\/api.qrserver.com\/v1\/create-qr-code\/?data=\"+y+x+\"&size=300x300&margin=1\";\r\nlin.href=\"http:\/\/api.qrserver.com\/v1\/create-qr-code\/?color=000000&bgcolor=FFFFFF&data=\"+y+x+\"&qzone=1&margin=1&size=500x500&ecc=L&download=1\";\r\n} ",
        sl_link:"https://code.sololearn.com/W38Fpplg7CsJ/?ref=app#html",
        category:"app-util"
    },
    find_it:{
        logo:'https://image.flaticon.com/icons/svg/332/332026.svg',
        descrip:'for coders',
        author:'stephanoo',
        label:'find_it',
        code:'<CENTER>\r\n        <h1 class=\"h1\">Treasure Chest Game<\/h1>\r\n        <img id=\"1\" onclick=\"choose(1)\" src=\"http:\/\/fs1.directupload.net\/images\/180209\/temp\/3mh7tb5o.png\">\r\n        <img id=\"2\" onclick=\"choose(2)\" src=\"http:\/\/fs1.directupload.net\/images\/180209\/temp\/3mh7tb5o.png\">\r\n        <img id=\"3\" onclick=\"choose(3)\" src=\"http:\/\/fs1.directupload.net\/images\/180209\/temp\/3mh7tb5o.png\">\r\n        <br><br>\r\n        <h3 id=\"result\"><\/h3>\r\n        <h2 class=\"h2\" onclick=\"g_reset()\">NEW GAME<\/h2>\r\n        <\/CENTER>',
        style:'.h1 { font-family: Trade Winds;}.h2 { width: 25%; background-color: gold; border-style: solid; border-width: 5px; border-color: black;}',
        script:"var end = false;\r\n\r\nfunction choose(no){\r\n    if(!end){\r\n        end = true;\r\n        rNo = Math.floor(Math.random() * 3) + 1; \/\/ random number from 1-3\r\n        var elem = document.getElementById(rNo);\r\n        elem.src = \"http:\/\/fs1.directupload.net\/images\/180209\/temp\/xzjbks5u.png\";\r\n        var res = document.getElementById(\"result\");\r\n        res.innerHTML = no==rNo? \"You Won\" : \"You Lost\";\r\n    }\r\n    \r\n}\r\n\r\nfunction g_reset(){\r\n    end = false;\r\n    var chest1 = document.getElementById(1);\r\n    chest1.src = \"http:\/\/fs1.directupload.net\/images\/180209\/temp\/3mh7tb5o.png\";\r\n    var chest2 = document.getElementById(2);\r\n    chest2.src = \"http:\/\/fs1.directupload.net\/images\/180209\/temp\/3mh7tb5o.png\";\r\n    var chest3 = document.getElementById(3);\r\n    chest3.src = \"http:\/\/fs1.directupload.net\/images\/180209\/temp\/3mh7tb5o.png\";\r\n    var res = document.getElementById(\"result\");\r\n    res.innerHTML = \"\";\r\n}\r\n",
        sl_link:"https://code.sololearn.com/WZFivo0gQ05o/?ref=app",
        category:"app-game"
    },
   
};//APPS

var icons = {
  1:'https://image.flaticon.com/icons/svg/124/124555.svg',
  2:'https://image.flaticon.com/icons/svg/178/178158.svg',
  3:'https://image.flaticon.com/icons/svg/139/139689.svg',
  4:'https://image.flaticon.com/icons/svg/234/234788.svg'
};
/*****************************
 * FUNCTIONS
******************************/
function add_style(code, class_){
    $("<style>")
    .prop("type", "text/css")
    .prop("class", class_)
    .html(code)
    .appendTo("head");
}

function add_script(code, class_){
    var JS= document.createElement('script');
    JS.text= code;
    JS.className = class_;
    document.body.appendChild(JS);
}

function add_app(name, logo, author, link, descrip, code, style, script, category){
    if(name === ''){name = 'undef';}
    if(logo === ''){logo = icons[r_int(1,4)];}
    if(author === ''){author = 'undef';}
    if(link === ''){link = 'undef';}
    if(descrip === ''){descrip = 'undef';}
    if(code === ''){code = '<!---->';}
    if(style === ''){style = '/**/';}
    if(script === ''){script = '/**/';}
    apps[name] = {};
    apps[name].logo = logo;
    apps[name].descrip = descrip;
    apps[name].author = author;
    apps[name].label = name;
    apps[name].code = code;
    apps[name].style = style;
    apps[name].script = script;
    apps[name].sl_link = link;
    apps[name].category = category;
}

function install(apps_) {
    $('#apps').html('');
    for (var x in apps_){
        
        var logo = apps_[x].logo;
        var descrip = apps_[x].descrip;
        var author = apps_[x].author;
        var label = apps_[x].label;
        var style = apps_[x].style;
        var category = apps_[x].category;
        
        // render logo
        //console.log(category);
        var html = "<div class='app-logo-outer "+category+"'>"+
                    "<div id='"+x+"' class='app-logo'><img src='"+logo+"'></div>"+
                    "<div class='app-label'>"+label+"</div>"+
                    "</div>";
        $('#apps').append(html);
        
        //install
        //add_style(style, label);
        
        
    }

}

function append_install(apps_, x){
    if(apps_[x].logo === undefined){apps_[x].logo = ''}
    var logo = apps_[x].logo;
    var descrip = apps_[x].descrip;
    var author = apps_[x].author;
    var label = apps_[x].label;
    var style = apps_[x].style;
    var category = apps_[x].category;
    
    // render logo
    var html = "<div class='app-logo-outer app-"+category+"'>"+
                "<div id='"+x+"' class='app-logo'><img src='"+logo+"'></div>"+
                "<div class='app-label'>"+label+"</div>"+
                "</div>";
    $('#apps').append(html);
    
    //install
    //add_style(style, label);
}

function r_int(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

//FUNCTIONS
/*****************************
 * READY
******************************/
$(function() {
    /*****************************
     * INIT
    ******************************/
    $('#app-holder').hide();
    $('#app-add').hide();
    install(apps);
    $('body').css('background-image', 'url(https://i.pinimg.com/736x/0a/58/4b/0a584b8a68560bb617b95180f0e38c70.jpg)' );
    
     $('#install-code').val("<div id='ss'>jknjk</div>");
        $('#install-style').val("#ss{color:red;background-color:black;}");
        $('#install-script').val("$('#ss').click(function(){alert('ok');});");
    
    //entry 
    /*
    $('.os-enter').click(function(){
        $('#os-cover').hide();
    }); */
    
    //dynamic click listener for logos
    $('#apps').on('click', '.app-logo', function(){
        //alert('on');
        $('#app-holder').show();
        var app = $(this).attr('id');
        //alert(apps[app]['code']);
        var code = apps[app].code;
        var link = apps[app].sl_link;
        var logo = apps[app].logo;
        var by = apps[app].author;
        $('#app-now-img').attr("src",logo);
        $( "#app-load" ).html(code);
        $('#app-now-title').html('<a href="'+link+'" target="_blank">'+app+' by '+by+'</a>');
        add_style(apps[app].style, app);
        add_script(apps[app].script, app);
        $('#apps').hide();
    });
       
    //ui close button
    $('.app-close').click(function(){
        $(this).parent().parent().hide();
        $('#apps').show();
        if($(this).parent().parent().attr('id') === 'app-holder'){
            var id_rem = $('#app-now-title').text().split(' ')[0];
            //alert(id_to_rem);
            $('.'+id_rem).remove();
            $('#app-load').html('');
        }
    });
    
    //form button click
    $('#install-app').click(function(){
       
        var name = $('#install-name').val();
        var logo = $('#install-logo').val();
        var descrip = $('#install-descrip').val();
        var author = $('#install-author').val();
        var code = $('#install-code').val();
        var style = $('#install-style').val();
        var script = $('#install-script').val();
        var link = $('#install-link').val();
        var category = 'app-'+$('#install-category').val();
        //alert(category);
        
        add_app(name, logo, author, link, descrip, code, style, script, category);
        append_install(apps, name);
        //$('#ccc').text(JSON.stringify(apps[name], null, 4));
    });
    
    //status bar
    $('#s-add-app').click(function(){
        $('#app-add').show();
    });
    
    //settings
    $('#s-settings').click(function(){
        $('#settings').show();
    });
    $('.os-bg').click(function(){
        //alert(id);
        $('body').css('background-image', 'none');
        $('body').css('background-color', $(this).css('backgroundColor'));
    });
    $('.os-img').click(function(){
        $('body').css('background-image', 'url(' + $(this).attr('src') + ')' );
        $('body').css('background-size', 'cover' );
    });
    $('.os-label-c').click(function(){
        $('body').css('color', $(this).css('color') );
    });
    
    $('body').on('click', '.b', function(){
        $( ".b" ).removeClass( "foc" );
        var id = $(this).attr('id');
        $(this).addClass('foc');
        
        switch (id) {
            case 'see-all':
                $('.app-edu').show();
                $('.app-util').show();
                $('.app-game').show();
                $('.app-chat').show();
                break;
            case 'see-edu':
                $('.app-edu').show();
                $('.app-util').hide();
                $('.app-game').hide();
                $('.app-chat').hide();
                break;
            case 'see-util':
                $('.app-edu').hide();
                $('.app-util').show();
                $('.app-game').hide();
                $('.app-chat').hide();
                break;
            case 'see-chat':
                $('.app-edu').hide();
                $('.app-util').hide();
                $('.app-game').hide();
                $('.app-chat').show();
                break;
            case 'see-game':
                $('.app-edu').hide();
                $('.app-util').hide();
                $('.app-game').show();
                $('.app-chat').hide();
                break;
            
        }
    });
});
