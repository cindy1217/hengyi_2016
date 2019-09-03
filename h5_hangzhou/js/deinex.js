function getByClass(oPrent,sClass){
	var aEle=oPrent.getElementsByTagName('*');
	var i=0;
	var aResult=[];

	for(i=0;i<aEle.length;i++){
		if(aEle[i].className==sClass){
			aResult.push(aEle[i]);
		}
	}
	return aResult;
}
window.onload=function(){
	var oDiv=document.getElementById('host4');
	var aDiv=getByClass(oDiv,'one01');
	var aLi=oDiv.getElementsByTagName('li');
	oDiv.onclick=function(){
		alert('no')
	}
	for(var j=0;j<aDiv.length;j++){
		aDiv[j].index=j;
		aDiv[j].onmouseover=function(){
			alert('nohao')
			this.className='active'
		}
	}
}