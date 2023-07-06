let coin = document.querySelector(".coin");
const flip = document.getElementById("flip");
const reset = document.getElementById("reset");

const hc = document.getElementById("hc");
const tc = document.getElementById("tc");

let heads = 0;
let tails = 0;

flip.addEventListener("click", () => {
  let i = Math.floor(Math.random() * 2);
  coin.style.animation = "none";
  if (i) {
    setTimeout(function () {
      coin.style.animation = "spin-heads 3s forwards";
    }, 100);
    heads++;
  } else {
    setTimeout(function () {
      coin.style.animation = "spin-tails 3s forwards";
    }, 100);
    tails++;
  }
  setTimeout(updateStates, 3000);
  disableFlipBtn();
});
function updateStates() {
  tc.textContent = tails;
  hc.textContent = heads;
}

function disableFlipBtn() {
  flip.disabled = true;
  setTimeout(function () {
    flip.disabled = false;
  }, 3000);
}

reset.addEventListener("click", () => {
  coin.style.animation = "none";
  heads = 0;
  tails = 0;
  updateStates();
});
