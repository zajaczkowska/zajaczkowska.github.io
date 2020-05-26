localStorage.g1Pts = 0;
localStorage.g2Pts = 0;
var countdownP1 = true;
var countdownP2 = false;
var p1Time = "brak";
var p2Time = "brak";
var player1 = true;
var player2 = false;
var url1 = "url('img/o.png')";
var url2 = "url('img/x.png')";
var tmpurl = null;
var table = [];
var g1Pts = 0;
var g2Pts = 0;
table[0] = 10;
table[1] = 11;
table[2] = 12;
table[3] = 13;
table[4] = 14;
table[5] = 15;
table[6] = 16;
table[7] = 17;
table[8] = 18;
var interval;

function setPlayer(plr)
{    
    localStorage.player = plr;
}

function homePage()
{
	window.location.href="menu.html";
}

function resetGame()
{
	document.getElementById("game").style.display = "block";
	document.getElementById("remis").style.display = "none";
	document.getElementById("win1").style.display = "none";
	document.getElementById("win2").style.display = "none";

	var b0 = document.getElementById("but0");
	var b1 = document.getElementById("but1");
	var b2 = document.getElementById("but2");
	var b3 = document.getElementById("but3");
	var b4 = document.getElementById("but4");
	var b5 = document.getElementById("but5");
	var b6 = document.getElementById("but6");
	var b7 = document.getElementById("but7");
	var b8 = document.getElementById("but8");
	b0.disabled = false;
	b1.disabled = false;
	b2.disabled = false;
	b3.disabled = false;
	b4.disabled = false;
	b5.disabled = false;
	b6.disabled = false;
	b7.disabled = false;
	b8.disabled = false;
	b0.style.backgroundImage = null;
	b1.style.backgroundImage = null;
	b2.style.backgroundImage = null;
	b3.style.backgroundImage = null;
	b4.style.backgroundImage = null;
	b5.style.backgroundImage = null;
	b6.style.backgroundImage = null;
	b7.style.backgroundImage = null;
	b8.style.backgroundImage = null;
	table[0] = 10;
	table[1] = 11;
	table[2] = 12;
	table[3] = 13;
	table[4] = 14;
	table[5] = 15;
	table[6] = 16;
	table[7] = 17;
	table[8] = 18;
	document.getElementById("playerMove").innerHTML = "Gracz 1";
	localStorage.p1Time = localStorage.time;
	localStorage.p2Time = localStorage.time;
	player1 = true;
	countdownP1 = true;
	countdownP2 = false;
	document.getElementById("p1Time").innerHTML = localStorage.p1Time/1000;
	document.getElementById("p2Time").innerHTML = localStorage.p2Time/1000;
	startTime();
		
}

function startGame()
{
	localStorage.url1 = url1;
	localStorage.url2 = url2;
	window.location.href="round.html";
}

function setBoard(brd)
{    
    localStorage.board = brd;
}

function setTime(tme)
{    
    localStorage.time = tme;
}

function reverseColors()
{

}

function pageBack()
{
    window.location.href = "rules.html";
}

function change()
{
    if(localStorage.symbol == "o"){
        localStorage.symbol = "x";
        document.getElementById("sign1").innerHTML = 'X';
        document.getElementById("sign2").innerHTML = 'O';

    }
    else {
        localStorage.symbol = "o";
        document.getElementById("sign1").innerHTML = 'O';
        document.getElementById("sign2").innerHTML = 'X';
    }

}

function chngPlayer(){
	if(player1 == true)
	{
		player1 = false;
		player2 = true;
	}
	else
	{
		player1 = true;
		player2 = false;
	}
}



function butClicked(clicked_id)
{
	var plr = 0;
	var currBut = document.getElementById(clicked_id);
	currBut.disabled = true;
	if(player1 == true)
	{
		plr = 1;
		currBut.style.backgroundImage = localStorage.url1;
		document.getElementById("playerMove").innerHTML = "Gracz 2";
		countdownP1 = false;
		countdownP2 = true;
		
	}
	else
	{
		plr = 2;
		currBut.style.backgroundImage = localStorage.url2;
		document.getElementById("playerMove").innerHTML = "Gracz 1";
		countdownP2 = false;
		countdownP1 = true;
	}
	switch(clicked_id){
			case "but0":
				table[0] = plr;
			break;
			case "but1":
				table[1] = plr;
			break;
			case "but2":
				table[2] = plr;
			break;
			case "but3":
				table[3] = plr;
			break;
			case "but4":
				table[4] = plr;
			break;
			case "but5":
				table[5] = plr;
			break;
			case "but6":
				table[6] = plr;
			break;
			case "but7":
				table[7] = plr;
			break;
			case "but8":
				table[8] = plr;
			break;
	}
			setTimeout(endGame, 100);
			
	chngPlayer();
	

}

function endGame(){
	var b0 = document.getElementById("but0");
	var b1 = document.getElementById("but1");
	var b2 = document.getElementById("but2");
	var b3 = document.getElementById("but3");
	var b4 = document.getElementById("but4");
	var b5 = document.getElementById("but5");
	var b6 = document.getElementById("but6");
	var b7 = document.getElementById("but7");
	var b8 = document.getElementById("but8");
	if((table[0] == table[3] && table[3] == table[6]) || (table[1] == table[4] && table[4] == table[7]) || (table[2] == table[5] && table[5] == table[8]) ||
	   (table[0] == table[1] && table[1] == table[2]) || (table[3] == table[4] && table[4] == table[5]) || (table[6] == table[7] && table[7] == table[8]) || 
	   (table[0] == table[4] && table[4] == table[8]) || (table[2] == table[4] && table[4] == table[6]))
	{
		
		if(player1 == false)
		{
			document.getElementById("game").style.display = "none";
			document.getElementById("win1").style.display = "block";
			g1Pts++;
			localStorage.g1Pts = g1Pts;
			clearInterval(interval);
		}
		else
		{
			document.getElementById("game").style.display = "none";
			document.getElementById("win2").style.display = "block";
			g2Pts++;
			localStorage.g2Pts = g2Pts;
			clearInterval(interval);
		}
		
		b0.disabled = true;
		b1.disabled = true;
		b2.disabled = true;
		b3.disabled = true;
		b4.disabled = true;
		b5.disabled = true;
		b6.disabled = true;
		b7.disabled = true;
		b8.disabled = true;
	}
	else if(b0.disabled == true && b1.disabled == true && b2.disabled == true && 
		   b3.disabled == true && b4.disabled == true && b5.disabled == true && 
		   b6.disabled == true && b7.disabled == true && b8.disabled == true)
		   {
		       clearInterval(interval);
			   document.getElementById("game").style.display = "none";
			   document.getElementById("remis").style.display = "block";

		   }
	updateScore();
}


function createTable()
{
	var i =0;
	var j = 0;
	for( i; i<11; i++)
	{
		var idName = "field";
		var butName = "but";
		
		idName = idName + i;
		var div = document.createElement("div");
		div.setAttribute('class', "float");
		div.setAttribute('id', idName);
		document.getElementById("game").appendChild(div);
		if(i != 3 && i != 7)
		{
		butName = butName + j;
		var but = document.createElement("button");
		but.setAttribute('class', "fields");
		but.setAttribute('id', butName);
		but.addEventListener('click', function(){butClicked(this.id)});
		document.getElementById(idName).appendChild(but);
		j+=1;
		}
	}
	
}

function timer(par)
{
	localStorage.time = par;
	if(par == 30000)
	{
		p1Time = 30000;
		p2Time = 30000;
	}
	else if(par == 60000)
	{
		p1Time = 60000;
		p2Time = 60000;
	}
	else if(par == 10)
	{
		p1Time = null;
		p2Time = null;
	}
	else
	{
		alert("Nie wybrano czasu");
	}
	localStorage.p1Time = p1Time;
	localStorage.p2Time = p2Time;
}

function swapSign()
{
	
	
	document.getElementById("buts1").style.backgroundImage = url2;
	document.getElementById("buts2").style.backgroundImage = url1;
	tmpurl = url1;
	url1 = url2;
	url2 = tmpurl;
	localStorage.url1 = url1;
	localStorage.url2 = url2;
	
}

function updateScore()
{
	document.getElementById("g1Pts").innerHTML = localStorage.g1Pts;
	document.getElementById("g2Pts").innerHTML = localStorage.g2Pts;
}


function startTime()
{
	clearInterval(interval);
	console.log(localStorage.p1Time);
	console.log(localStorage.p2Time);
	if((localStorage.p1Time == "30000" && localStorage.p2Time == "30000") || (localStorage.p1Time == "60000" && localStorage.p2Time == "60000"))
		{
			
	document.getElementById("p1Time").innerHTML = localStorage.p1Time/1000;
	document.getElementById("p2Time").innerHTML = localStorage.p2Time/1000;
	
	
		interval = setInterval(function(){
			if(countdownP1 == true)
			{
				document.getElementById("p1Time").innerHTML = localStorage.p1Time/1000;
				localStorage.p1Time -= 100;
					if(localStorage.p1Time < 0)
					{
						clearInterval(interval);
						g2Pts++;
						document.getElementById("game").style.display = "none";
						document.getElementById("win2").style.display = "block";
					}
			}
			else
			{
				document.getElementById("p2Time").innerHTML = localStorage.p2Time/1000;
				localStorage.p2Time -= 100;
					if(localStorage.p2Time < 0)
					{
						clearInterval(interval);
						g1Pts++;
						document.getElementById("game").style.display = "none";
						document.getElementById("win1").style.display = "block";
					}
			}
		
		
		}, 100);
		}
		else
		{
			document.getElementById("p1Time").innerHTML = "Bez ograniczeń";
			document.getElementById("p2Time").innerHTML = "Bez ograniczeń";
		
		}
	localStorage.g1Pts = g1Pts;
	localStorage.g2Pts = g2Pts;
	updateScore();
	
}