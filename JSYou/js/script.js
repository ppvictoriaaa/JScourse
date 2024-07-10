// let counter = 0;

// const btnClick = (el) => {
//   counter++;
//   el.innerHTML = counter;
// };

// let spans = document.getElementsByTagName("span");
// for (let i = 0; i <= spans.length; i++) {
//   spans[i].style.color = "red";
//   spans[i].title = spans[i].innerText;
// }

let int = setInterval(func, 1000);

count = 0;
function func() {
  document.getElementById("timer").innerHTML = "Count " + count;
  count++;
}

function stop() {
  clearInterval(int);
}
