//your code here
function calculateMinCost() {
  //your code here
	let str = document.getElementById("rope-lengths").value;
  let arr = str.split(',');

	let res = 0;
	while(arr.length > 1){
		arr.sort((a,b) =>{
			return a-b;
		});

		let min_first = parseInt(arr.shift());
		let min_second = parseInt(arr.shift());

		let avg = min_first + min_second;

		res += avg;
		arr.push(avg);
	}
	
	let div = document.getElementById("result");
	div.innerText = res;
  return res;
}  
function minCostToFormRope(a){
	a.preventDefault();
	var inputElement=document.querySelector('input').value;
	var arr=inputElement.split(',');
	arr.sort(function(a,b){return a-b});
	var cost =0;

	while(arr.length>1){
		var res=Number(arr[0])+Number(arr[1]);
	arr.splice(0,2);
	arr.push(res);
	cost+=res;
	arr.sort(function(a,b){return a-b});
	}
document.getElementById("result").textContent=cost;
}