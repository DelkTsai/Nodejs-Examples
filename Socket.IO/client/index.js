var socket = a.socket;

socket.on('connect', (skt) => {
	console.log(skt);
});

//通知用户进入聊天室
socket.on('user conncet', (data) => {
	var str = data + '进入聊天室';
	a.$content.innerHTML += '<div class="list text-center">\
								<div class="info">'+ str +'</div>\
							</div>';
	a.scroll();
});

//通知用户离开聊天室
socket.on('user disconnect', (data) => {
	var str = data + '离开聊天室';
	a.$content.innerHTML += '<div class="list text-center">\
								<div class="info">'+ str +'</div>\
							</div>';
	a.scroll();
});

//接收消息
socket.on('server message', (data) => {
	// console.log(data);
	a.$content.innerHTML += '<div class="list">\
								<p class="user-name text-left">'+ data.author +'</p>\
								<div class="section">'+ data.text +'</div>\
							</div>';
	a.scroll();
});

//断连通知
socket.on('disconnect', (data) => {
	console.log('server disconnect: ' + JSON.stringify(data));
});

a.$sendBtn.onclick = a.sendMsg.bind(a);
