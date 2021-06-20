"use strict";
var $inputText = document.querySelector(".input_text");
var $btnConfrim = document.querySelector(".btn_confirm");
var $todoUl = document.querySelector(".todo_box ul");
var $btnItemDel = document.querySelector('.btn_cancle');
$btnConfrim === null || $btnConfrim === void 0 ? void 0 : $btnConfrim.addEventListener('click', makeLIst);
function nowText() {
    var textValue = $inputText.value;
    return textValue;
}
function makeLIst() {
    var value = nowText();
    if (!value) {
        alert("입력안됨");
        return false;
    }
    var todoLi = document.createElement('li');
    var todoItem = document.createElement('div');
    todoItem.classList.add('item');
    var todoCheck = document.createElement('input');
    todoCheck.setAttribute('type', 'checkbox');
    var text = document.createElement('div');
    text.classList.add('text');
    text.innerHTML = value;
    todoItem.appendChild(todoCheck);
    todoItem.appendChild(text);
    var btnCancle = document.createElement('button');
    btnCancle.classList.add('btn_cancle');
    btnCancle.innerHTML = 'x';
    todoLi.appendChild(todoItem);
    todoLi.appendChild(btnCancle);
    $todoUl === null || $todoUl === void 0 ? void 0 : $todoUl.appendChild(todoLi);
    $inputText.value = '';
    btnCancle.addEventListener('click', removeItem);
}
function removeItem() {
    var item = this.parentNode;
    item.remove();
}
//# sourceMappingURL=todo.js.map