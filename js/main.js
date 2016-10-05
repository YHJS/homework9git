function cleaning() {
    document.getElementById("task1-3").innerHTML = "";
    document.getElementById("task4").innerHTML = "";
}

// --- task 2 ----
function getSumArray(myArr) {

    var myArr = document.getElementById("input-field-array").value.split(","),
        sumArr = 0;
    for (var i = 0; i < myArr.length; i++) {
        sumArr += +myArr[i];
    }
    document.getElementById("task1-3").innerHTML = sumArr;
}

// --- task 3 ----
function getReverseArray(myArr) {
    var myArr = document.getElementById("input-field-array").value.split(","),
        reversArr = myArr.reverse();
    document.getElementById("task1-3").innerHTML = reversArr;
}

// --- task 4,5 ----

function ChengeArr(array, number, act) {
var array = document.getElementById("input-field-array").value.split(","),
    number = document.getElementById("input-field-number").value,
    act = document.getElementById("input-field-symbol").value,
    nArr = [],
    i = 0;
    switch (act) {
        case "add" :
            array.push(number);
            document.getElementById("task1-3").innerHTML = array;
            break;
        case "remove" :
            for (i = 0; i <= array.length; i++) {
                if (array[i] !== number) {
                    nArr.push(array[i]);
                }
            }
            document.getElementById("task1-3").innerHTML = nArr;
            break;
        default: alert("Такие значения не поддерживаются");
    }
}

// --- task advance ----

function wordReverse (sentence) {
    var sentence = document.getElementById("input-field-sentence").value,
        arrWords,
        splitReverseWord,
        newSentence = "",
        i,
        y = 0;
    arrWords = sentence.split(" ");
    for(i = 1; i<= arrWords.length; i++) {
        splitReverseWord = arrWords[y].split("").reverse().join('');
        y++;
        newSentence += splitReverseWord + " ";
    }
    document.getElementById("task4").innerHTML = newSentence;
}
