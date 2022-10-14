let lab1 = [5, 5, 0, 5, 5, 10, 10];
let lab2 = [5, 5, 5, 5, 5, 5, 10];
let lab3 = [5, 9, 10, 15];
let lab4 = [10, 5, 5, 5, 5, 5, 5];
let lab5 = [10, 10, 10, 10];
let lab6 = [5, 5, 10, 5, 5, 10];
let quiz1 = 36;

let sum1 = lab1[0] + lab1[1] + lab1[2] + lab1[3] + lab1[4] + lab1[5] + lab1[6];
let sum2 = lab2[0] + lab2[1] + lab2[2] + lab2[3] + lab2[4] + lab2[5] + lab2[6];
let sum3 = lab3[0] + lab3[1] + lab3[2] + lab3[3];
let sum4 = lab4[0] + lab4[1] + lab4[2] + lab4[3] + lab4[4] + lab4[5] + lab4[6];
let sum5 = lab5[0] + lab5[1] + lab5[2] + lab5[3];
let sum6 = lab6[0] + lab6[1] + lab6[2] + lab6[3] + lab6[4] + lab6[5];

let sums = [sum1, sum2, sum3, sum4, sum5, sum6];
let total_score = 0.6*(sums/240) + 0.4*(quiz1/40);

const results = {
	lab1 : [5, 5, 0, 5, 5, 10, 10],
	lab2 : [5, 5, 5, 5, 5, 5, 10],
	lab3 : [5, 9, 10, 15],
	lab4 : [10, 5, 5, 5, 5, 5, 5],
	lab5 : [10, 10, 10, 10],
	lab6 : [5, 5, 10, 5, 5, 10],
	quiz1 : 36,
	sums : [sum1, sum2, sum3, sum4, sum5, sum6],
	total_score: 0.96,
}

console.log(results)
