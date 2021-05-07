
import dotenv from 'dotenv';

// load the environment variables from the .env file
dotenv.config({
  path: '.env'
});
const fs = require('fs');
const fileContents = fs.readFileSync('src/input.json');

console.log("------------------------------------------------------------");
console.log("                      TABLE 1                               ");
console.log("No   BMI             BMI Category             Health Risk   ");
console.log("------------------------------------------------------------");

try {
  const data = JSON.parse(fileContents);
  var owcount : number = 0;
  for(var i:number = 0; i < data.length; i++)
 {
   
    const weight = data[i].WeightKg;
    const heightm = data[i].HeightCm * 0.01;
    const BMI =  (weight/heightm).toFixed(2);
    const BMI1 = Number(BMI);
    var bmicat;
    var healthrisk;

    if(BMI1<18.40){
      bmicat = "UnderWeight";
      healthrisk = "      Malnutrition risk";
    }else if(18.5 <= BMI1  && BMI1 < 24.9){
      bmicat = "NormalWieght";
      healthrisk = "     Low risk";
    }else if(25 <= BMI1  && BMI1 < 29.9){
      bmicat = "OverWieght";
      healthrisk = "       Enhanced risk";
      owcount += 1;
    }
    else if(30 <= BMI1  && BMI1 < 34.9){
      bmicat = "ModeratelyObese";
      healthrisk = "Medium risk";
    }
    else if(35 <= BMI1  && BMI1 < 39.9){
      bmicat = "SeverelyObese";
      healthrisk = "    High risk";
    }
    else if(BMI1>40){
      bmicat = "VerySeverelyObese";
      healthrisk = "Very high risk";
    }
    
    console.log(i+"   "+BMI1+"kg/m2"+"     "+bmicat+"        "+healthrisk);
//  console.log("------------------------------------------------------------");
}
console.log("------------------------------------------------------------");
console.log("total number of over weight =" +owcount);

   
} catch(err) {
  console.error(err);
}
