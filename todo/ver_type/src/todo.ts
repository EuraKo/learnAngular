const $inputText = <HTMLInputElement>document.querySelector(".input_text");
const $btnConfrim = document.querySelector(".btn_confirm");
const $todoUl = document.querySelector(".todo_box ul");
const $btnItemDel = document.querySelector('.btn_cancle');

// ok버튼 클릭시 리스트 생성
$btnConfrim?.addEventListener('click', makeLIst);

// 입력 값 받아오기
function nowText() {
    let textValue = $inputText.value; // 입력값
    return textValue;
}
// 리스트 생성
function makeLIst() {
    let value = nowText();
    // let removeFn = removeItem(this.parentNode)

    if (!value) {
        alert("입력안됨");
        return false;
    }
    let todoLi = document.createElement('li');
    let todoItem = document.createElement('div');
    todoItem.classList.add('item');
    let todoCheck = document.createElement('input');
    todoCheck.setAttribute('type', 'checkbox');
    let text = document.createElement('div');
    text.classList.add('text');
    text.innerHTML = value;
    todoItem.appendChild(todoCheck);
    todoItem.appendChild(text);
    let btnCancle = document.createElement('button');
    btnCancle.classList.add('btn_cancle');
    btnCancle.innerHTML = 'x';
    todoLi.appendChild(todoItem)
    todoLi.appendChild(btnCancle);
    $todoUl?.appendChild(todoLi);

    $inputText.value = '';

    // li안에 취소 버튼 클릭 시 삭제
    btnCancle.addEventListener('click', removeItem)
}
interface test{
    myTest : string;
}
//  li 삭제
function removeItem(this:any) {
    let item = this.parentNode;
    item.remove();
}