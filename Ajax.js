var txt = document.getElementsByClassName("input")[0].value;
var xml_data = {
    "content"= "txt";
                }
var jsonText = JSON.stringify(object);

$.ajax({
    type:"POST",
    url:"",
    processData:ture,
    contentType: "application/json;charset=utf-8",//发送信息至服务器时内容的编码类型
    dataType:"json",
    data:JSON.stringify(xml_data),
    success:function()
    var left = document.getElementById("left");
                    var input = document.getElementsByClassName("input")[0];
                    var div = document.createElement("div");
                    var p = document.createElement("p");
                    var btn = document.createElement("input");
                    var content = document.createTextNode(xmlhttp.responseText);
    
                    div.setAttribute("class","add");
                    p.setAttribute("class","hello");
                    btn.setAttribute("class","btn btn-danger btn-sm");
                    btn.setAttribute("type","button");
                    btn.setAttribute("value","删除");
                    btn.setAttribute("onclick","RemoveElement(this)");
    
                    p.appendChild(content);
                    div.appendChild(p);
                    div.appendChild(btn);
                    left.appendChild(div);
                    input.value = "";
})

// function  loadXMLDoc() {
//     var xmlhttp;
//     if (window.XMLHttpRequest) {
//         xmlhttp = new XMLHttpRequest();
//     }
//     else {
//         xmlhttp = new ActiveXObject();//code for IE6,IE5
//     }
//     xmlhttp.onreadystatechange = function () {
//         if (xmlhttp.readystate == 4 && xmlhttp.status == 200){

//                 var left = document.getElementById("left");
//                 var input = document.getElementsByClassName("input")[0];
//                 var div = document.createElement("div");
//                 var p = document.createElement("p");
//                 var btn = document.createElement("input");
//                 var content = document.createTextNode(xmlhttp.responseText);

//                 div.setAttribute("class","add");
//                 p.setAttribute("class","hello");
//                 btn.setAttribute("class","btn btn-danger btn-sm");
//                 btn.setAttribute("type","button");
//                 btn.setAttribute("value","删除");
//                 btn.setAttribute("onclick","RemoveElement(this)");

//                 p.appendChild(content);
//                 div.appendChild(p);
//                 div.appendChild(btn);
//                 left.appendChild(div);
//                 input.value = "";
//             }
//         };
//     xmlhttp.open("GET", "text.txt" + jsonText, true);
//     xmlhttp.setRequestHeader("Content-type","");
//     xmlhttp.send(jsonText);
// }
// addLoadEvent(loadXMLDoc);