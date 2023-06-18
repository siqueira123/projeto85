canvas = document.getElementById("myCanvas");
ctx=canvas("2d");

greencar_width = 75;
greencar_height=100;

backgroundImage = "parkingLot.jpg";
greencarImage = "car2.png";

greencar_x = 5;
greencar_y=225;//Defina a posição inicial para uma imagem de carro.

function add() {
	background_imgTag = new Image();
	background_imgTag.onload = uploadBackground;
	background_imgTag.src = background_image;
	
	greencar_imgTag = new Image();
	greencar_imgTag.onload = uploadBackground;
	greencar_imgTag.src = greencar_image//carregar carro e imagens de fundo na tela.
}

function uploadBackground() {
	ctx.drawImage(background_imgTag,0,0, canvas.width, canvas.height); //Defina a função ‘uploadBackground’

}

function uploadGreenCar() {
	ctx.drawImage(greencar_imgTag, greencar_x,greencar_y,greencar_width,greencar_height);//Defina a função ‘uploadGreenCar’.

	
}


window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greencar_y >=0)
	{
		greencar_y = greencar_y - 10;
		console.log("whem up arrow is pressed, x=" +greencar_x+ "|y =" +greencar_y);
		uploadBackground();
		uploadGreenCar();
	}
}

function down()
{
	if(greencar_y <=255)
	{
		greencar_y = greencar_y + 10;
		console.log("whem down arrow is pressed, x=" +greencar_x+ "|y =" +greencar_y);
		uploadBackground();
		uploadGreenCar();
	}//Definir função para mover o carro para baixo
}

function left()
{
	if(greencar_x >=0)
	{
		greencar_x = greencar_x - 10;
		console.log("whem left arrow is pressed,|x=" +greencar_x+ "y =" +greencar_y);
		uploadBackground();
		uploadGreenCar();
	}//Definir função para mover o carro para o lado esquerdo
}

function right()
{
	if(greencar_x <=255)
	{
		greencar_x = greencar_x + 10;
		console.log("whem up arrow is pressed, |x=" +greencar_x+ "y =" +greencar_y);
		uploadBackground();
		uploadGreenCar();
	}//Definir função para mover o lado direito do carro
}
