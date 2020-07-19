let urlList = [];

class shortUrl {
  constructor() {
    // localStorage에는 string으로 저장되어 json parse가 필요
    this.currentUrlData = JSON.parse(localStorage.getItem("localUrl"));
    this.buildUI();
    this.eventBind();
  }

  buildUI() {
    this.shortenUrlButton = document.querySelector(".input-box button");
    this.inputBox = document.querySelector(".input-box input");
    this.outputBox = document.querySelector(".output-box");

    // 기존 데이터가 있으면 그려준다.
    if (this.currentUrlData !== null || this.currentUrlData.lenght <= 3) {
      this.currentUrlData.forEach(ele => {
        urlList.push(ele);
        this.createShortUrl(ele);
        this.shortURLDomEvent(ele);
      });
    }
  }

  eventBind() {
    this.shortenUrlButton.addEventListener("click", () => {
      if (this.inputBox.value === "") return alert("값을 입력하세요");

      this.getShortlyUrl(this.inputBox.value).then(data => {
        if (data.hashid === undefined) return alert("유효하지 않은 값을 입력");

        this.createShortUrl(data);
        this.shortURLDomEvent(data);

        // 데이터의 길이가 3개부터는 한개를 지운다
        if (urlList.length === 3) {
          urlList.shift();
          this.outputBox.lastChild.remove();
        }

        // 받은데이터를 할당한다.
        urlList.push(data);

        // 할당한 데이터를 브라우저에 저장한다.
        localStorage.setItem("localUrl", JSON.stringify(urlList));
      });
    });
  }

  createShortUrl(url) {
    const urlLink = `https://rel.ink/${url.hashid}`;
    const containerDom = document.createElement("div");

    containerDom.innerHTML = `
    <div class="container">
      <div class="input-url">
        ${url.url}
      </div>
      <div class="output-url">     
        <a href="${urlLink}" target="_blank">${urlLink}</a>
        <button>Copy</button>
      </div>
    </div>`;

    this.outputBox.prepend(containerDom);
  }

  shortURLDomEvent = () => {
    const newCopybutton = document.querySelector(".output-url button");
    newCopybutton.addEventListener("click", e => {
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
    });
  };

  getShortlyUrl = url => {
    return fetch("https://rel.ink/api/links/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: url })
    }).then(response => response.json());
  };
}
