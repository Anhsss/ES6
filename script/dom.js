//function 키워드로 함수 만들기
// function show(){
//   console.log("안녕하세요")
// }

//es6부터 함수는 화살표 함수로 만들기
const show = () =>{
  //폼 숨기기
  const formSection = document.querySelector('#formSection');
  formSection.style.display= "none";

  //확인 버튼 숨기기
  const bt1 = document.querySelector('.bt1');
  bt1.style.display = "none";
  //1.태그
  let tag = "";
  /* 
  for(let i =1; i<=6; i++){
  //tag = tag + '<div class="divMsg">' + i + '</div>';
  // 탬플릿 문자열
  tag = tag + `<div class="divMsg"><img src="./img/${i}.png" id="msg"></div>`
}
*/
let i = Math.floor(Math.random()*6)+1
tag = `<div class="divMsg"><img src="./img/${i}.png" id="msgImg"></div>`
console.log(tag)
  //2.DOM에서 태그를 넣을 요소 선택
  const divMsg = document.querySelector('#msg')
  

  //3.선택된 요소의 HTML 변경
  divMsg.innerHTML = tag

  //3-1.스타일 변경
// divMsg.style.backgroundColor = "crimson"
  let msgImg = document.querySelector('#msgImg')
  msgImg.style.maxwidth = "100px";
  msgImg.style.maxheight = "100px";

  document.addEventListener("DOMContentLoaded",()=>{
  console.log(i)
  })

}
