 let nameProject = prompt('give your project a name!');
 if (nameProject == '' || nameProject === null) {
    nameProject = 'untitled-project';
 }
const header = document.querySelector('.header');
header.innerText =  ' title: ' + nameProject;
const htmlEditor = document.querySelector('.htmlEditor');
const cssEditor = document.querySelector('.cssEditor');
const jaEditor = document.querySelector('.jsEditor');
const editor = document.querySelector('.editors');
const htmlBtnTab = document.querySelector('.html');
const cssBtnTab = document.querySelector('.css');
const jsBtnTab = document.querySelector('.js');
const outputBtnTab = document.querySelector('.output');
const output = document.querySelector('.outputEditor');
let loc = 0;
editor.style.left =  -loc + 'vw';
function moveTabs(move) {
   // Tab to edit
   loc = move;
   console.log(loc)
   editor.style.left =  -loc + 'vw';

if (loc === 0) {
   htmlBtnTab.style.borderTopWidth = '2px';
   cssBtnTab.style.borderTopWidth = '.3px';
jsBtnTab.style.borderTopWidth = '.3px';
outputBtnTab.style.borderTopWidth = '.3px';
     
} else if (loc === 100) {
   cssBtnTab.style.borderTopWidth = '2px';
   jsBtnTab.style.borderTopWidth = '.3px';
   htmlBtnTab.style.borderTopWidth = '.3px';
   outputBtnTab.style.borderTopWidth = '.3px';
} else if (loc === 200) {
   jsBtnTab.style.borderTopWidth = '2px';
   htmlBtnTab.style.borderTopWidth = '.3px';

   cssBtnTab.style.borderTopWidth = '.3px';
outputBtnTab.style.borderTopWidth = '.3px';

} else if (loc === 300) {
   outputBtnTab.style.borderTopWidth = '2px';
   cssBtnTab.style.borderTopWidth = '.3px';
jsBtnTab.style.borderTopWidth = '.3px';
htmlBtnTab.style.borderTopWidth = '.3px';
run()
}
}
function run() {
output.innerHTML = htmlEditor.value + '<style type="text/css" media="all">' + cssEditor.value + '</style>' + '<script>' + jsEditor + '</script>'
}