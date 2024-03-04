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
// console.log(`this is subMenuEl ${subMenuEl.id}`);
// console.log(`this is subMenuEl's type ${typeof subMenuEl}`);
// for (sub in subMenuEl) {
//   console.log(`here is a sub ${sub}`)
// }
const subMenuHeight = "100%";
const subMenuBGColor = "var(--sub-menu-bg)";
const subMenuPosition = "absolute";

subMenuEl.style.height = subMenuHeight;
subMenuEl.style.backgroundColor = subMenuBGColor;
subMenuEl.classList.add("flex-around");
subMenuEl.style.position = subMenuPosition;
subMenuEl.style.top = "0";

const buildSubmenu = (arrayOfLinks) => {
  for (let i = 0; i < subMenuEl.children.length; i++) {
    subMenuEl.removeChild(subMenuEl.children[i]);
  }

  for (const link of arrayOfLinks) {
    const linkToAppend = document.createElement("a");
    linkToAppend.setAttribute("href", link.href);
    linkToAppend.innerText = link.text;
    subMenuEl.appendChild(linkToAppend);
  }
};

const topMenuLinks = topMenuEl.querySelectorAll("a");
topMenuEl.addEventListener("click", (event) => {
  event.preventDefault();
  // console.log(event);
  const lookupObj = { catalog: 1, orders: 2, account: 3 };

  if (event.target.localName === "a") {
    console.log(event.target.innerText);
  } else {
    return;
  }

  if (event.target.classList.contains("active") == false) {
    console.log(event.target.classList.contains("active"));
    let linkName = event.target.innerText.toLowerCase();
    // console.log(linkName);
    // console.log(typeof linkName);
    if (linkName != "about") {
      // console.log("here is the " + menuLinks.sublinks);
      buildSubmenu(menuLinks[lookupObj[linkName]].sublinks);
      subMenuEl.style.top = "100%";
    }
  } else {
    subMenuEl.style.top = "0";
  }

  event.target.classList.toggle("active");
  for (let link of topMenuLinks) {
    if (link != event.target) {
      link.classList.remove("active");
    }
  }
});

// console.log(`Number of children: ${subMenuEl.children}`)

for (child in subMenuEl.children) {
  console.log(child.id);
}
