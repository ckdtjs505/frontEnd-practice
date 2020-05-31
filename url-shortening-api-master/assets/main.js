const div = document.createElement("div");

const inputBox = document.querySelector(".input-box input");
const button = document.querySelector(".input-box button");

const createShortURLDom = url => {
  console.log(url);
  const outputBox = document.querySelector(".output-box");
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
  outputBox.appendChild(containerDom);
};

const getShortlyUrl = url => {
  return fetch("https://rel.ink/api/links/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ url: url })
  }).then(response => response.json());
};

button.addEventListener("click", () => {
  let urlList = [];

  getShortlyUrl(inputBox.value).then(data => {
    let currentUrlData = JSON.parse(localStorage.getItem("localUrl"));
    if (currentUrlData !== null)
      currentUrlData.forEach(ele => {
        urlList.push(ele);
      });
    urlList.push(data);
    localStorage.setItem("localUrl", JSON.stringify(urlList));
    createShortURLDom(data);
  });
});
