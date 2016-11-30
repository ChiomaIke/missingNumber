module.exports = {
	findMissing: function(arr1,arr2) {
   
    isMatch = false,
    missing = null;
	if(arr1.length===0 && arr2.length===0){
  return 0;
  }
  for (var i = 0; i < arr2.length; i++ ) {
   
    for ( j = 0; j < arr1.length; j++ ) {
        if (arr2[i] == arr1[j]){
		isMatch=true;
		break;
    }
    else{
      isMatch=false;
    }
   
    
	}
	if ( isMatch===false ) missing = arr2[i];
	}
 
 if(missing===null) return 0;
 else return missing;
 }
 }
 