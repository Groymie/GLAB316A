// import "./styles.css";

// Menu data structure

var menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];

const mainEl = document.querySelector("main");
const mainElColor = "var(--main-bg)";

mainEl.style.backgroundColor = mainElColor;

const h1 = document.createElement("h1");
h1.innerText = "DOM Manipulation";
mainEl.appendChild(h1);

mainEl.classList.add("flex-ctr");

const topMenuEl = document.getElementById("top-menu");
const topMenuElHeight = "100%";
const topMenuElBackgroundColor = "var(--top-menu-bg)";
topMenuEl.style.height = topMenuElHeight;
topMenuEl.style.backgroundColor = topMenuElBackgroundColor;
topMenuEl.classList.add("flex-around");

for (let i = 0; i < menuLinks.length; i++) {
  const a = document.createElement("a");
  a.setAttribute("href", menuLinks[i]["href"]);
  a.innerText = menuLinks[i]["text"];
  topMenuEl.appendChild(a);
}
