var fontAuto={
	psWidth:640,
	fontAutoFun:function(){
		var htmlNode=document.documentElement;
		var winWidth=htmlNode.clientWidth;//页面的可视宽度
		//console.log(winWidth,this.psWidth);
		if(winWidth>=this.psWidth){
			htmlNode.style.fontSize="625%";
		}
		else{
			htmlNode.style.fontSize=winWidth/this.psWidth*625+"%";
		}
	},
	init:function(){
		this.fontAutoFun();//默认触发一次
		
		var that=this;
		window.addEventListener('resize',function(){
			that.fontAutoFun();
		});//当屏幕尺寸改变的时候再次触发
	}
	
};

fontAuto.init();
