markHeight = 1.69
markWeight = 78
johnHeight = 1.95
johnWeight = 92

johnBmi = johnWeight / (johnHeight * johnHeight)
markBmi = markWeight / (markHeight * markHeight)
console.log("John's BMI is :",johnBmi)
console.log("Mark's BMI is :",markBmi)

markHigherBMI = markBmi > johnBmi
console.log("Is Mark's BMI higher than John :",markHigherBMI )