const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let state = 0;

function codeChecker(e){
  if(convert(code[state]) === e.key){
    if(++state === code.length){
      alert("Congratulations, you have found me.")
    }
  }else{
    state = 0;
  }
}

function deprecatedCodeChecker(e){
  if(code[state] == (e.which || e.detail)){
    if(++state == code.length){
      alert("Congratulations, you have found me.")
    }
  }else{
    state = 0;
  }
}

function init() {
  const body = document.querySelector('body');
  body.addEventListener('keydown', deprecatedCodeChecker)
}

function convert(num){
  switch(num){
    case 38:
      return 'ArrowUp';
    case 40:
      return 'ArrowDown';
    case 37:
      return 'ArrowLeft';
    case 39:
      return 'ArrowRight';
    case 66:
      return 'b';
    case 65:
      return 'a';
    default:
      return null;
  }
}