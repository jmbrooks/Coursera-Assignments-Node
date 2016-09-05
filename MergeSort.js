
(function MYAPP () {
    var userArrayInput = [2, 3, 7, -33, 1145, 33, 234, 6, 91, 55, 44, 3, 22, 11, 100, 200, 300, 400, 500, 600, 700, 800];
    var inputedArray = userArrayInput;

    var midArray = function(inputedArray) {
        if (inputedArray.length % 2 === 0) {
            midArray = inputedArray.length * 0.5;
        } else {
            midArray = (inputedArray.length * 0.5) + 0.5;
        }
    };

    var mergeSort = function(inputedArray) {
        var arrayLength = inputedArray.length;
        midArray(inputedArray);

        if (arrayLength <= 1) {
            return inputedArray;
        } else {
            var firstArray = inputedArray.slice(0, midArray);
            var secondArray = inputedArray.slice(midArray, arrayLength);

            var firstArrayLength = firstArray.length;
            var secondArrayLength = secondArray.length;

            for (var i = 0; i < firstArrayLength; i += 1) {
                return;
            }

            for (var j = 0; j < secondArrayLength; j += 1) {
                return;
            }

        }
    };
} () );
