function callTime()
{
	var getDate=new Date();
	var hr=getDate.getHours();
	if(hr<10)
	hr=parseInt(hr,10);
	var mn=getDate.getMinutes();
	console.log('Time :'+hr + ':' + mn);
}