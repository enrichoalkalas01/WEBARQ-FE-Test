function bubble(arr) {
	let t;
	for ( let i = 0; i < arr.length; i++ ) {
		for ( let j = 0; j < arr.length - 1; j++ ) {
			if ( arr[j] > arr[j+1] ) {
				t = arr[j];
				arr[j] = arr[j+1];
				arr[j + 1] = t; 
			}
		}
	}

	return arr;
}

function selection (arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        let min = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        if (min !== i) {
            let tmp = arr[i];
            arr[i] = arr[min];
            arr[min] = tmp;
        }
    }
    return arr;
}

function insertion (arr) {
	for (let i = 1; i < arr.length; i++) {
		let j = i - 1
		let temp = arr[i]
		while (j >= 0 && arr[j] > temp) {
	  		arr[j + 1] = arr[j]
	  		j--
		}
		arr[j+1] = temp
	}

	return arr
}


function merge (arr1, arr2) {
	let sorted = [];

	while (arr1.length && arr2.length) {
		if (arr1[0] < arr2[0]) sorted.push(arr1.shift());
		else sorted.push(arr2.shift());
	};

  	return sorted.concat(arr1.slice().concat(arr2.slice()));
};

function quick(arr) {
	if(arr.length < 2) {
		return arr;
	}

	var pivot = arr[0];
	var lesserarr = [];
	var greaterarr = [];

	for (var i = 1; i < arr.length; i++) {
		if ( arr[i] > pivot ) {
		  greaterarr.push(arr[i]);
		} else {
		  lesserarr.push(arr[i]);
		}
	}

	return quick(lesserarr).concat(pivot, quick(greaterarr));
}

console.log(bubble([3,2,5,1,7,6,4,8,10,9]));
console.log(selection([3,2,5,1,7,6,4,8,10,9]));
console.log(insertion([3,2,5,1,7,6,4,8,10,9]));
console.log(merge([2, 5, 10, 57], [9, 12, 13]));
console.log(quick([3,2,5,1,7,6,4,8,10,9]));