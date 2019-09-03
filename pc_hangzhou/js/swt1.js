$(document).ready(function(){
	$('.swt-cont .close').click(function(){
	$('.swt-cont').hide();
	setTimeout("openM()",10000);//10000
});
	$('.swt-left .close').click(function(){
	$('.swt-left').hide();
	setTimeout("openl()",10000);
	});
setTimeout("openl()",10000);//10000
});
 
function openM(){
	$(".swt-cont").show();
 }

function openl(){
	$(".swt-left").show();
}