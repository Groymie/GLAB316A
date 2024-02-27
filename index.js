// import "./styles.css";

// Menu data structure

var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    sublinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    sublinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    sublinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
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

const subMenuEl = document.getElementById("sub-menu");
const subMenuHeight = "100%";
const subMenuBGColor = "var(--sub-menu-bg)";
const subMenuPosition = "absolute";

subMenuEl.style.height = subMenuHeight;
subMenuEl.style.backgroundColor = subMenuBGColor;
subMenuEl.classList.add("flex-around");
subMenuEl.style.position = subMenuPosition;
subMenuEl.style.top = "0";

const topMenuLinks = topMenuEl.querySelectorAll("a");
topMenuEl.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(event);

  if (event.target.localName === "a") {
    console.log(event.target.innerText);
  } else {
    return;
  }

  event.target.classList.toggle("active");
  for (let link of topMenuLinks) {
    if (link != event.target) {
      link.classList.remove("active");
    }
  }

  if (event.target.classList.contains("active") == false) {
    let linkName = event.target.innerText.toLowerCase();
    console.log(linkName);
    console.log(typeof linkName);
    if (menuLinks.sublinks != undefined) {
      subMenuEl.style.top = "100%";
    } else {
      subMenuEl.style.top = "0";
    }
  }
});
