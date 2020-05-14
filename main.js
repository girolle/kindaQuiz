function mouseOnElement(elem){
	elem.hover(()=>{elem[0].style.opacity = 0.5;}, ()=>{elem[0].style.opacity = 1;});
}

function stopMouse(id){
	for (let j = 1; j<=4; j+=1) {
		let elem = $("#ans_" + id + "_" + j);
		elem.off();
	}
}

function quizBoxInit(id){
	box = $("#q" + id)
	box.append($('<h2>', {id:('num_'+ id)}))
	if (id) {$('#num_'+ id)[0].innerText = id + "/10";}
	box.append($('<h1>', {id:('question_'+ id)}));
	if (id) {$('#question_0')[0].style.marginTop = "50px";}
	
	$('#question_'+ id)[0].style.fontSize = h1Size;
	$('#question_'+ id)[0].innerText = texts[id][0];
	box.append($('<img>',{id:('img_' + id),src:('images/img_' + id + '.png'), class:"quiz-img"}));

	if (id){
	box.append($('<div>', {id: ('ans-box_'+id), class:"ans-box"}));

	for (let j = 1; j<=4; j+=1) {
		$("#ans-box_" + id).append($('<div>', {id:('ans_' + id + "_" + j), class: "ans-button bottom-border"}));
		$('#ans_' + id + "_" + j)[0].innerText = texts[id][j];
		mouseOnElement($("#ans_" + id + "_"+j));
	}
	$('#ans_' + id + "_" + 4)[0].className =  "ans-button";
	}

	box.append($('<div>', {class: "next-button", id: ("next_"+id)}));
	$("#next_"+id)[0].innerText = "ДАЛЬШЕ";
	if (id) {$("#next_0")[0].innerText = "НАЧАТЬ";}
	mouseOnElement($("#next_"+id));
}

texts = [["Уверены, что вы знаете о цифровом мире почти все?"], [
	"Сколько пользователей было в первый год работы Twitter после запуска социальной сети в 2006 году программистом-недоучкой Джеком Дорси?", 
	"1000", "5000", "20000", "100000", 3
], 
[
	"Слово «робот» произошло от чешского «robota» что означает «работа».А что означает «Цифра»?", 
	"Ноль", "Пустой", "Тишина", "Знак", 1
],
[
	"Самое скачиваемое приложение в AppStore?", 
	"Вконтакте", "Яндекс.Такси", "WhatsApp Messenger", "TikTok", 3
],
[
	"Подключить новый цифровой сервис банка можно онлайн за 5 минут, а сколько приходилось ждать снимок, сделанный самой первой фотокамерой в мире?", 
	"4 часа", "6 часов", "8 часов", "10 часов", 3
], 
[
	"При каком правителе в Российское государство пришел бухгалтерский учет и появилась профессия «бухгалтер»?", 
	"Екатерина II", "Петр I", "Елизавета Петровна", "Александр I", 2
],
[
	"Когда Дуглас Энгельбарт придумал компьютерную мышь?",
	"1953", "1964", "1975", "1986", 2
],
[
	"Почему Facebook получил интерфейс в синем цвете?", 
	"Создатель Марк Цукерберг не различал красный и зеленый цвета", "Дочь нарисовала рисунок и логотип Цукербергу в этом цвете", 
	"Любимый цвет жены Марка", "Получилось случайно – синяя краска попала на эскиз логотипа", 1
], 
[
	"Какой процент людей по статистике пытаются вставить USB-кабель «вверх ногами»?", 
	"23%", "44%", "67%", "86%", 4
], 
[
	'Cколько, по данным Mediascope, в начале 2020 года составляла аудитория Рунета?', 
	'72,4 млн', '85,6 млн', '96,7 млн', '102,3 млн', 3
],
[
	"Кто был изображен на самом первом логотипе Apple?",
	"Стив Джобс", "Исаак Ньютон", "Альберт Эйнштейн", "Авраам Линкольн", 2
]];

for (i = 0; i<= 10; i+=1) {quizBoxInit(i);}

var score = 0;

function start(){
	let box = $("#q0");
	box[0].style.display = "inline-block";
	$("#next_0")[0].style.backgroundColor = "rgb(0, 170, 255)";
			$("#next_0").click(()=>{
				box[0].style.display = "none";
				clickAns(1);
				window.scrollTo(0, 0);
			})
}

function clickAns(id) {
	if (id == 1) {exit(); return;}
	let box = $("#q" + id);
	box[0].style.display = "inline-block";
	let ans = texts[id][5];
	for (let j = 1; j <= 4; j+=1){
		let b = $("#ans_" + id + "_" + j);
		b.click(()=>{
			if (j == ans) {
				b[0].style.backgroundColor = "rgb(76, 200, 100)";
				score += 1;
			}
			else {
				b[0].style.backgroundColor = "rgb(202, 24, 31)";
				$("#ans_" + id + "_" + ans)[0].style.backgroundColor = "rgb(76, 200, 100)";
			}
			b[0].style.opacity = "1";
			stopMouse(id);
			$("#next_"+id)[0].style.backgroundColor = "rgb(0, 170, 255)";
			$("#next_"+id).click(()=>{
				box[0].style.display = "none";
				clickAns(id+1);
				window.scrollTo(0, 0);
			})
		})
	}
}

function points(s){
	if (s == 1) {return("1 балл");}
	else if (s > 1 && s < 5) {return(s + " балла");}
	else  {return(s + " баллов");}

}

function exit(){
	box = $("#finish");
	box.append($('<h1>', {id: 'finish-text'}));
	$('#finish-text')[0].style.marginTop = "50px";
	$('#finish-text')[0].style.fontSize = h1Size;
	$('#finish-text')[0].innerText = "Вы набрали " + points(score);
//	box.append($('<img>',{id:('img_final'),src:('images/finished.png'), class:"quiz-img"}));
	box.append($('<div>', {id: ('text-box'), class:"ans-box"}));
	$('#text-box')[0].style.position = "absolute";
	$('#text-box')[0].style.transform = "translate(-50%, -50%)";
	$('#text-box')[0].style.width = "100%";
	$('#text-box')[0].style.top = "50%";
	$('#text-box')[0].style.left = "50%";
	$("#text-box")[0].style.height= "60%";
	$("#text-box")[0].style.backgroundColor = "rgba(0, 170, 255, 0.3)";
	$("#text-box").append($('<p>', {id: 'text'}));
	$('#text')[0].style.position = "absolute";
	$('#text')[0].style.fontSize = parseInt(h1Size)/1.2 + "px";
	$('#text')[0].style.transform = "translate(-50%, -50%)";
	$('#text')[0].style.width = "80%";
	$('#text')[0].style.top = "50%";
	$('#text')[0].style.left = "50%";



/*	if (score <=5){
	$('#text')[0].innerHTML = "Хммммм, возможно, что-то пошло не так… <p></p><a href = https://girolle.github.io/kindaQuiz/> Попробуйте еще раз:) </a>";
	}
	else */if (score <= 7){
		$('#text')[0].innerHTML = "Поздравляем! Хороший результат, но вам есть куда расширять ваш кругозор.<p></p> Кстати о кругозоре, знаете ли вы, что приложение мобильной бухгалтерии Цифра только за первый месяц скачали более 30 000 пользователей, и оно уверенно вошло в ТОП-30 AppStore сервисов по скачиваниям! <p></p>В чем фишка? Читайте по <a href = 'https://rb.ru/longread/cifra/'> ссылке </a>";
	}
	else { 
		$('#text')[0].innerHTML = "Поздравляем! Вы супер-молодец!	<p></p> Вы знаете почти все о цифровом современном мире. <p></p>А знаете ли вы, что приложение мобильной бухгалтерии Цифра только за первый месяц скачали более 30 000 пользователей, и оно уверенно вошло в ТОП-30 AppStore сервисов по скачиваниям! <p></p>В чем фишка? Читайте по <a href = 'https://rb.ru/longread/cifra/'> ссылке </a>";
	}
	box[0].style.display = "inline-block";
}

start(0);

function emailForm(){
	var form = document.createElement('form');
	form.action = 'send.php';
	form.method='post';
	$("#finish").append(form);
	var input = document.createElement('input');
	input.id = "email-text";
	input.type = 'text';
	input.name = 'email';
	input.placeholder="Укажите ваш email";
	form.append(input);
	var button = document.createElement('input');
	button.type = "submit";
	button.id="email-button";
	button.value = " ";
	form.append(button);
}
emailForm();