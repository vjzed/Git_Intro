var london = {
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

var newyork = {
		full_name: "Newyork",
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

console.log((london.bmi > newyork.bmi)? "London's BMI is greater": ((newyork.bmi > london.bmi)? "Newyork's BMI is greater": "Both got same BMI" ));
