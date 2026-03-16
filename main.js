const nameTitle = prompt("name your project");
const title = document.querySelector(".projectName");

const htmlEditor = document.querySelector(".editor1");
const cssEditor = document.querySelector(".editor2");
const jsEditor = document.querySelector(".editor3");
const output = document.querySelector(".app-output");

const htmlTab = document.querySelector(".tab1");
const cssTab = document.querySelector(".tab2");
const jsTab = document.querySelector(".tab3");




let currentTab = "html";

if (nameTitle) {
  title.innerText = nameTitle;
} else {
  title.innerText = "Untitled Project";
}

if (currentTab === "html") {
  htmlTab.style.backgroundColor = "#212121";
  htmlTab.style.borderBottom = "none";
  cssTab.style.borderBottom = "solid .5px #3d444d";
  cssTab.style.backgroundColor = "#2b2a33";
  jsTab.style.backgroundColor = "#2b2a33";
  jsTab.style.borderBottom = "solid .5px #3d444d";
  htmlEditor.style.display = "flex";
  cssEditor.style.display = "none";
  jsEditor.style.display = "none";
} else if (currentTab === "css") {
  cssTab.style.backgroundColor = "#212121";
  cssTab.style.borderBottom = "none";
  htmlTab.style.backgroundColor = "#2b2a33";
  htmlTab.style.borderBottom = "solid .5px #3d444d";
  jsTab.style.backgroundColor = "#2b2a33";
  jsTab.style.borderBottom = "solid .5px #3d444d";
  cssEditor.style.display = "flex";
  htmlEditor.style.display = "none";
  jsEditor.style.display = "none";
} else if (currentTab === "js") {
  jsTab.style.backgroundColor = "#212121";
  jsTab.style.borderBottom = "none";
  htmlTab.style.borderBottom = "solid .5px #3d444d";
  htmlTab.style.backgroundColor = "#2b2a33";
  cssTab.style.borderBottom = "solid .5px #3d444d";
  cssTab.style.backgroundColor = "#2b2a33";
  jsEditor.style.display = "flex";
  htmlEditor.style.display = "none";
  cssEditor.style.display = "none";
}
  
output.innerHTML =` <!DOCTYPE html>
                <html>
                <head>
                    <style>${cssEditor.value}</style>
                </head>
                <body>
                    ${htmlEditor.value}
                    <script>${jsEditor.value}<\/script>
                </body>
                </html>`;

function runCode() {
  output.innerHTML = `<!DOCTYPE html>
                <html>
                <head>
                    <style>${cssEditor.value}</style>
                </head>
                <body>
                    ${htmlEditor.value}
                    <script>${jsEditor.value}<\/script>
                </body>
                </html>`;
}

function switchTabs(tabTo) {

  currentTab = tabTo;
  if (currentTab === "html") {
    htmlTab.style.backgroundColor = "#212121";
    htmlTab.style.borderBottom = "none";
    cssTab.style.borderBottom = "solid .5px #3d444d";
    cssTab.style.backgroundColor = "#2b2a33";
    jsTab.style.backgroundColor = "#2b2a33";
    jsTab.style.borderBottom = "solid .5px #3d444d";
    htmlEditor.style.display = "flex";
    cssEditor.style.display = "none";
    jsEditor.style.display = "none";
  } else if (currentTab === "css") {
    cssTab.style.backgroundColor = "#212121";
    cssTab.style.borderBottom = "none";
    htmlTab.style.backgroundColor = "#2b2a33";
    htmlTab.style.borderBottom = "solid .5px #3d444d";
    jsTab.style.backgroundColor = "#2b2a33";
    jsTab.style.borderBottom = "solid .5px #3d444d";
    cssEditor.style.display = "flex";
    htmlEditor.style.display = "none";
    jsEditor.style.display = "none";
  } else if (currentTab === "js") {
    jsTab.style.backgroundColor = "#212121";
    jsTab.style.borderBottom = "none";
    htmlTab.style.borderBottom = "solid .5px #3d444d";
    htmlTab.style.backgroundColor = "#2b2a33";
    cssTab.style.borderBottom = "solid .5px #3d444d";
    cssTab.style.backgroundColor = "#2b2a33";
    jsEditor.style.display = "flex";
    htmlEditor.style.display = "none";
    cssEditor.style.display = "none";
  }
}
