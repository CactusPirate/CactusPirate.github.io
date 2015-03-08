if(window.addEventListener) 
{ 
	window.addEventListener('load',onLoad,false)
	window.addEventListener('keydown', onKeyDown, false)
};

	var x = 0;
	var y;

function onKeyDown()
{
	var keyCode = event.keyCode;
	//alert(keyCode);
	if(keyCode == 38)//up
	{
		//code
	}

}

function X()
{
	var random = Math.random() * canvas.width + 0;
	return random 
}

function Y()
{
	var random = Math.random() * canvas.height + 0;
	return random 
}

function onLoad()
{
	var canvas;
	var context;

		function initialise()
		{
			canvas = document.getElementById('canvas');
			if (!canvas)
			{
				alert('Error: I cannot find the canvas element!');
				return;
			}
			if(!canvas.getContext)
			{
				alert('Error: no canvas.getContext!');
				return;
			}
			context = canvas.getContext('2d');
			if(!context)
			{
				alert('Error: failed to getContext!');
				return;
			}
		}
		
		function update()
		{
			canvas.width = window.innerWidth - 20;
			canvas.height = window.innerHeight - 25;
			
			context.font = '40pt Times New Roman';
			//context.fillStyle = 'blue';
			context.fillText('follow',X(),Y());
			context.fillText('your',X(),Y());
			context.fillText('dreams',X(),Y());
			
			
			context.font = '100pt Times New Roman';
			context.fillText('follow your dreams follow your dreams follow your dreams follow your dreams follow your dreams follow your dreams follow your dreams follow your dreams follow your dreams follow your dreams follow your dreams follow your dreams',x,(canvas.height / 2));

			x = x - 2;
			if (x < (0 - context.width))
			{
				x = 0;
			}

			setTimeout(update,1000/20);
		}
		
		initialise();
		update();
}