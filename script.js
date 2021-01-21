function mudarImg(a){
	img=document.getElementById('imagens');
	img.className='pos'+a;
}
imagem=1;
setInterval(
	function(){
		mudarImg(imagem);
		imagem++;
		if(imagem>5){
			imagem=1;
		}
	},2000)