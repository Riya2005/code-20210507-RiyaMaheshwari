"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
// load the environment variables from the .env file
dotenv_1.default.config({
    path: '.env'
});
var fs = require('fs');
var fileContents = fs.readFileSync('src/input.json');
console.log("------------------------------------------------------------");
console.log("                      TABLE 1                               ");
console.log("No   BMI             BMI Category             Health Risk   ");
console.log("------------------------------------------------------------");
try {
    var data = JSON.parse(fileContents);
    for (var i = 0; i < data.length; i++) {
        var weight = data[i].WeightKg;
        var heightm = data[i].HeightCm * 0.01;
        var BMI = (weight / heightm).toFixed(2);
        var BMI1 = Number(BMI);
        var bmicat;
        var healthrisk;
        if (BMI1 < 18.40) {
            bmicat = "UnderWeight";
            healthrisk = "      Malnutrition risk";
        }
        else if (18.5 <= BMI1 && BMI1 < 24.9) {
            bmicat = "NormalWieght";
            healthrisk = "     Low risk";
        }
        else if (25 <= BMI1 && BMI1 < 29.9) {
            bmicat = "OverWieght";
            healthrisk = "Enhanced risk";
        }
        else if (30 <= BMI1 && BMI1 < 34.9) {
            bmicat = "ModeratelyObese";
            healthrisk = "Medium risk";
        }
        else if (35 <= BMI1 && BMI1 < 39.9) {
            bmicat = "SeverelyObese";
            healthrisk = "    High risk";
        }
        else if (BMI1 > 40) {
            bmicat = "VerySeverelyObese";
            healthrisk = "Very high risk";
        }
        console.log(i + "   " + BMI1 + "kg/m2" + "     " + bmicat + "        " + healthrisk);
        //  console.log("------------------------------------------------------------");
    }
    console.log("------------------------------------------------------------");
}
catch (err) {
    console.error(err);
}
