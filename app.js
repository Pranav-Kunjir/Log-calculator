let current_number = ""
let current_log = ""
let sum = 0
all_log = []
all_ans = []
function update_the_current_log (num) {
	let curr_number = document.getElementById("number");
	let curr_log = document.getElementById("log"); 
	current_number += num;
	curr_number.innerHTML = current_number;
	let logBase10 = Math.log10(current_number);
	let roundedLog = logBase10.toFixed(4);

	let previousLog = curr_log.innerHTML
	if(previousLog.charAt(0) == "-"){
		curr_log.innerHTML = "-"+roundedLog;
	}else {
		curr_log.innerHTML = roundedLog;
	}
}
function add_the_numbers (argument) {
	let curr_number = document.getElementById("number").removeAttribute('id');
	let curr_log = document.getElementById("log"); 
	let x = Number(curr_log.innerHTML)
	all_log.push(x)
	console.log(x)
	curr_log.removeAttribute('id')
	let table = document.getElementById('calculator')
	let row = table.insertRow(-1)
	let cell1 = row.insertCell("0")
	let cell2 = row.insertCell("1")
	cell1.id = 'number';
	cell2.id = 'log';
	cell1.classList.add("num-style")
	cell2.classList.add("num-style")
	cell1.innerHTML = "+"
	cell2.innerHTML = "0"
	current_number = ""
	current_log = ""
	sum = 0
}
function sub_the_numbers (argument) {
	let curr_number = document.getElementById("number").removeAttribute('id');
	let curr_log = document.getElementById("log"); 
	let x = Number(curr_log.innerHTML)
	all_log.push(x)
	console.log(curr_log.innerHTML)
	curr_log.removeAttribute('id')
	let table = document.getElementById('calculator')
	let row = table.insertRow(-1)
	let cell1 = row.insertCell("0")
	let cell2 = row.insertCell("1")
	cell1.id = 'number';
	cell2.id = 'log';
	cell1.classList.add("num-style")
	cell2.classList.add("num-style")
	cell1.innerHTML = "-"
	cell2.innerHTML = "-"
	current_number = ""
	current_log = ""
	sum = 0

}
function easy_part (argument) {
	let curr_number = document.getElementById("number").removeAttribute('id');
	let curr_log = document.getElementById("log"); 
	let x = Number(curr_log.innerHTML)
	all_log.push(x)
	console.log(x)
	curr_log.removeAttribute('id')
	let table = document.getElementById('calculator')
	let row1 = table.insertRow(-1)
	let cell1 = row1.insertCell("0")
	let cell2 = row1.insertCell("1")
	let row2 = table.insertRow(-1)
	let cell3 = row2.insertCell("0")
	let cell4 = row2.insertCell("1")
	cell3.id = 'number';
	cell4.id = 'log';
	cell1.id = 'Ans';
	cell2.id = 'anslog';
	cell1.classList.add("num-style")
	cell2.classList.add("num-style")
	cell3.classList.add("num-style")
	cell4.classList.add("num-style")
	current_number = ""
	current_log = ""
	console.log(all_log)
	for(let i = 0; i < all_log.length; i++){
		sum += Number(all_log[i]); 
	}
	all_log.length = 0
	let roundedLog = sum.toFixed(4);
	console.log(sum)
	cell1.innerHTML = "Ans"
	cell2.innerHTML = sum
	sum = 0
}
function deleteallcalculation () {
	var tableHeaderRowCount = 1;
	var table = document.getElementById('calculator');
	var rowCount = table.rows.length;
	for (var i = tableHeaderRowCount; i < rowCount; i++) {
	    table.deleteRow(tableHeaderRowCount);
	} 
	let row = table.insertRow(-1)
	let cell1 = row.insertCell("0")
	let cell2 = row.insertCell("1")
	cell1.id = 'number';
	cell2.id = 'log';
	cell1.classList.add("num-style")
	cell2.classList.add("num-style")
	sum = 0
	all_log.length = 0
}
function antilogBase10(logValue) {
  var antilogValue = Math.pow(10, logValue);
  let roundedLog = antilogValue.toFixed(4)
  return roundedLog;
}
function antilogoftheanser () {
	let ans = document.getElementById("Ans").removeAttribute('id');
	let ans_log = document.getElementById("anslog");
	console.log(ans_log.innerHTML)
	let x = Number(ans_log.innerHTML)
	console.log(x)
	let Antilog = antilogBase10(x)
	ans_log.removeAttribute('id')
	let table = document.getElementById('calculator')
	let row1 = table.insertRow(-1)
	let cell1 = row1.insertCell("0")
	let cell2 = row1.insertCell("1")
	let row2 = table.insertRow(-1)
	let cell3 = row2.insertCell("0")
	let cell4 = row2.insertCell("1")
	cell3.id = 'number';
	cell4.id = 'log';
	cell1.classList.add("num-style")
	cell2.classList.add("num-style")
	cell3.classList.add("num-style")
	cell4.classList.add("num-style")
	current_number = ""
	current_log = ""
	cell1.innerHTML = "Antilog"
	cell2.innerHTML = Antilog
	sum = 0
	all_log.length = 0
}

function n1 () {
	let num = "1"
	update_the_current_log(num); 

}
function n2 () {
	let num = "2"
	update_the_current_log(num);
}
function n3 () {
	let num = "3"
	update_the_current_log(num);
}
function n4 () { 
	let num = "4"
	update_the_current_log(num);
}
function n5 () {
	let num = "5"
	update_the_current_log(num);
}	
function n6 () {
	let num = "6"
	update_the_current_log(num);
}
function n7 () {
	let num = "7"
	update_the_current_log(num);
}
function n8 () {
	let num = "8"
	update_the_current_log(num);
}
function n9 () {
	let num = "9"
	update_the_current_log(num);
}
function n0 () {
	let num = "0"
	update_the_current_log(num);
}
function nequal () {
	console.log('=')
	easy_part() 
}
function ndot () {
	let num = "."
	update_the_current_log(num);
	
}
function nc () {
	console.log('c')
	deleteallcalculation() 
}
function nplus () {
	console.log('+') 
	add_the_numbers()
}
function ndash () {
	console.log('-') 
	sub_the_numbers()
}
function nantilog () {
	console.log('anti')
	antilogoftheanser() 
}		
