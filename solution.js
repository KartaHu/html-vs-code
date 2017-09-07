


// function isUniform(arr){
// 	var first = arr[0];
// 	for(var i = 1; i < arr.length; i++){
// 		if(arr[i] !== first){
// 			return false;
// 		}
// 	}
// 	return true;
// }

 function isUniform(arr){
 	var first = arr[0];
 	
	 	if(arr.forEach(function(element){
		if(element !== first){
			return false;
		}
 	}) !== true){
			 return true;
		 }
 	return true;
 }


