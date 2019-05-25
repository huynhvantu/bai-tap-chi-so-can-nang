function xuly(){
	console.log('da vao ham');
	var cannang = document.getElementById('socannang').value;
	var chieucao = document.getElementById('sochieucao').value;
	var BMI = parseInt(cannang)/(parseFloat(chieucao)*parseFloat(chieucao));
	console.log(BMI)
	if(BMI<18){
		ketqua = "underweight";
	}else if (BMI<25.0){
			ketqua = "normal"
	}else if (BMI<30.0){
			ketqua = "Overweight";
	}else{
		ketqua="Obese";
	}
	document.getElementById('ketquala').innerHTML="Chỉ số cân nặng là: " +ketqua;
}