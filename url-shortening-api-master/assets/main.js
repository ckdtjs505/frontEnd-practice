document.documentElement.style.overflowX = "hidden";

const inputBox = document.querySelector(".input-box input");
const outputBox = document.querySelector(".output-box");
const button = document.querySelector(".input-box button");

let urlList = [];

const createShortURLDom = url => {
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

const shortURLDomEvent = () => {
  const newCopybutton = document.querySelector(".output-url button");
  newCopybutton.addEventListener("click", copyButtonHandler);
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
    if (data.hashid === undefined) return alert("유효하지 않은 값을 입력");

    createShortURLDom(data);
    shortURLDomEvent(data);

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

const copyButtonHandler = e => {
  let tempEle = document.createElement("textarea");
  tempEle.innerText = e.target.previousSibling.previousSibling.innerText;
  e.target.innerText = "Copied!";
  e.target.style.backgroundColor = "#3A3053";

  // 복사
  document.body.appendChild(tempEle);
  tempEle.select();
  document.execCommand("copy");
  tempEle.remove();

  // 2초뒤 상태 복귀
  setTimeout(() => {
    e.target.innerText = "Copy";
    e.target.style.backgroundColor = "#2BD1D1";
  }, 2000);
};

// localStorage에는 string으로 저장되어 json parse가 필요
let currentUrlData = JSON.parse(localStorage.getItem("localUrl"));

if (currentUrlData !== null || currentUrlData.lenght <= 3) {
  currentUrlData.forEach(ele => {
    urlList.push(ele);
    createShortURLDom(ele);
    shortURLDomEvent(ele);
  });
}
