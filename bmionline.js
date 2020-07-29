var mark = {
		full_name: "London",
		mass:200,
		profession: "boxer",
		height: 5.9,
		bmiCalc: function(){
				this.bmi = this.mass / (this.height * this.height);
				return this.bmi;
		}
};

var john = {
		full_name: "JNewyork",
		mass:200,
		profession: ["wrestler", "Actor"],
		height: 5.10,
		bmiCalc: function(){
				this.bmi = this.mass / (this.height * this.height);
				return this.bmi;
		}
		
};

mark.bmiCalc();
john.bmiCalc();

console.log((mark.bmi > john.bmi)? "Mark's BMI is greater": ((john.bmi > mark.bmi)? "John's BMI is greater": "Both got same BMI" ));
