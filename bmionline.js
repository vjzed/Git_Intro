var mark = {
		full_name: "London",
		mass:200,
		pets: "tiger",
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
		pets: "cats",
		profession: ["wrestler", "Actor"],
		height: 5.10,
		bmiCalc: function(){
				this.bmi = this.mass / (this.height * this.height);
				return this.bmi;
		}
		
};

mark.bmiCalc();
john.bmiCalc();

console.log((mark.bmi > john.bmi)? "London's BMI is greater": ((john.bmi > mark.bmi)? "Newyork's BMI is greater": "Both got same BMI" ));
