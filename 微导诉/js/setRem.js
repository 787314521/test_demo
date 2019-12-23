// ↓ 设置字体大小
setRem();
function setRem(){
	var indexHtml = document.querySelector("html");
	var indexWidth = indexHtml.getBoundingClientRect().width;
	if(document.documentElement.clientWidth>750){
		indexHtml.style.fontSize =30+ 'px';
//		indexHtml.style.width=645+"px"
	}else{
		// ↓ 保证移动端字体不小于12像素
		indexHtml.style.fontSize = indexWidth / 16 + 'px';
	}
	
}
window.addEventListener("resize", setRem);
window.addEventListener("orientationchange", setRem);