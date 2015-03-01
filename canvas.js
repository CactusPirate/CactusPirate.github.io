if(window.addEventListener) 
{ 
	window.addEventListener('load',onLoad,false)
	window.addEventListener('keydown', onKeyDown, false)
};

	var x;
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
			
			//x = Math.random() * canvas.width + 0;
			//y = Math.random() * canvas.height + 0;

			context.font = '40pt Calibri';
			//context.fillStyle = 'blue';
			context.fillText('sick',X(),Y());
			context.fillText('and',X(),Y());
			context.fillText('tired',X(),Y());
			context.fillText('sick',X(),Y());
			context.fillText('and',X(),Y());
			context.fillText('tired',X(),Y());
			context.fillText('sick',X(),Y());
			context.fillText('and',X(),Y());
			context.fillText('tired',X(),Y());
			
			setTimeout(update,1000/30);
		}
		
		initialise();
		update();
}