const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];
//codes = 10

function init() {
  let index = 0

  document.body.addEventListener('keydown', function(e){
    const key = e.key

    if (key === codes[index]){
      index++;
      if (index === codes.length){
        alert("You're a cheater!")
        index = 0
      }
    }
    else {
      index = 0
    }
  })
}
