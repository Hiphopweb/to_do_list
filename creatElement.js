function addElement() {
    var left = document.getElementById("left");
    var input = document.getElementsByClassName("input")[0];
    var txt = input.value;
    var text = document.createTextNode(txt);
    var div = document.createElement("div");
    var p = document.createElement("p");
    var btn = document.createElement("input");

    div.setAttribute("class","add");
    p.setAttribute("class","hello");
    btn.setAttribute("class","btn btn-danger btn-sm");
    btn.setAttribute("type","button");
    btn.setAttribute("value","删除");
    btn.setAttribute("onclick","RemoveElement(this)");

    p.appendChild(text);
    div.appendChild(p);
    div.appendChild(btn);
    left.appendChild(div);

    input.value = "";
}
addLoadEvent(addElement);