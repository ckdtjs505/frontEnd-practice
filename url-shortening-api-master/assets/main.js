document.documentElement.style.overflowX = "hidden";

const div = document.createElement("div");

const inputBox = document.querySelector(".input-box input");
const outputBox = document.querySelector(".output-box");
const button = document.querySelector(".input-box button");

let urlList = [];

const createShortURLDom = url => {
  console.log(url);
  const urlLink = "https://rel.ink/";
  const containerDom = document.createElement("div");
  const html = `
  <div class="container">
    <div class="input-url">
      ${url.url}
    </div>
    <div class="output-url">     
      <a href="${urlLink}${url.hashid}">${urlLink}${url.hashid}</a>
      <button>Copy</button>
    </div>
  </div>`;
  containerDom.innerHTML = html;
  outputBox.prepend(containerDom);
};

const getShortlyUrl = url => {
  return fetch("https://rel.ink/api/links/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ url: url })
  }).then(response => response.json());
};

button.addEventListener("click", () => {
  if (inputBox.value === "") return alert("값을 입력하세요");

  getShortlyUrl(inputBox.value).then(data => {
    createShortURLDom(data);

    // 데이터의 길이가 3개부터는 한개를 지운다
    if (urlList.length === 3) {
      urlList.shift();
      outputBox.lastChild.remove();
    }

    // 받은데이터를 할당한다.
    urlList.push(data);

    // 할당한 데이터를 브라우저에 저장한다.
    localStorage.setItem("localUrl", JSON.stringify(urlList));
  });
});

// localStorage에는 string으로 저장되어 json parse가 필요
let currentUrlData = JSON.parse(localStorage.getItem("localUrl"));

if (currentUrlData !== null || currentUrlData.lenght <= 3) {
  currentUrlData.forEach(ele => {
    urlList.push(ele);
    createShortURLDom(ele);
  });
}
