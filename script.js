gsap.fromTo([".one", ".two", ".three", ".four", ".five", ".six", ".seven", ".eight", ".nine"],
  {y: 300, opacity: 0},
  {y: -2000, opacity: 1, ease: "none", duration: 30, stagger: 7, repeat: -1});

gsap.to("#footer", {
  text: "FREE VALET PARKING!",
  duration: 2,
  repeat: -1,
  repeatDelay: .7,
  ease: "power1.in",
  yoyo: true
})
  

const body = document.querySelector("body");
const menu = document.querySelector("#menu");
const findUs = document.querySelector("#findUs");

menu.addEventListener("click", openMenu);
findUs.addEventListener("click", openMenu);
function openMenu() {
    body.classList.add("newClass");
}

const back = document.querySelector("#back");
const forward = document.querySelector("#forward");

const names = ["Chutoro Sashimi", "Katsu Curry", "Mochi", "Okonomyiaki", "Ramen"];
const photos = ["https://cdn.glitch.global/4769546c-c0eb-4805-b3b5-1bf8a0aed3b2/chutoro.jpeg?v=1697952265774",
                "https://cdn.glitch.global/4769546c-c0eb-4805-b3b5-1bf8a0aed3b2/deepfried.jpeg?v=1697952271919", 
                "https://cdn.glitch.global/4769546c-c0eb-4805-b3b5-1bf8a0aed3b2/mochi.jpeg?v=1697952340556", 
                "https://cdn.glitch.global/4769546c-c0eb-4805-b3b5-1bf8a0aed3b2/okonomyiaki.jpeg?v=1697952363741", 
                "https://cdn.glitch.global/4769546c-c0eb-4805-b3b5-1bf8a0aed3b2/ramen.jpeg?v=1697952370917"
               ];
const descriptions = [
  "Selected fat tuna pieces cut in sashimi",
  "Fried breaded chicken, giving it a satisfyingly crunchy texture combined with a sweet punchy sauce.",
  "Handcrafted soft rice cakes, stuffed with matcha or chocolate cream",
  "Savory pancake with cabbages, beef, mayonnaise and dry tuna flakes",
  "Chicken broth plus dashi, rich in umami flavor. Add egg, shrimps or noodles"
];

let currentIndex = 0;

function updateContent(index) {
  picture.src = photos[index];
  document.querySelector("#name").textContent = names[index];
  description.textContent = descriptions[index];
  description.style.width = picture.clientWidth + "px"; 
}

forward.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex >= names.length) {
    currentIndex = 0;
  }
  updateContent(currentIndex);
});

back.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = names.length - 1;
  }
  updateContent(currentIndex);
});

updateContent(currentIndex);






