
let Digit = function(cellSize){
	
	this.size = cellSize;
	this.currentDigit;
	
	this.data = data;
	
}

Digit.prototype.setDigit = function(c){
	this.currentDigit = c;
}

Digit.prototype.draw = function(ctx){

	if(this.currentDigit == undefined)
		return;
	
	let obj = this.data.find( o => o.c === this.currentDigit);
	
	if(obj == undefined){
		return;
	} else {
		dataArray = obj.d;
	}

	ctx.fillStyle = "#f00";
	
	let x, y;
	for(let i = 0; i < dataArray.length; i++){

		let index = dataArray[i];
		
		x = (index % 5) * this.size;
		y = Math.floor(index / 5) * this.size;

		// if you want rectangles
		// ctx.fillRect(x, y, this.size, this.size);
		
		// if you want circles
		ctx.beginPath();
		ctx.arc(offsetX + x + this.size / 2, offsetY + y + this.size / 2, this.size / 3 + 2, 0, 2 * Math.PI, false);
		ctx.fill();
	}
	
}