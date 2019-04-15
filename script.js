var interest = (0.1499/12) + 1;
var payments = [];

function money(value){
    var currAmt = value;
    var newVal, x;
    var count = 0;

    while(currAmt > 0){
        x = getLarge(currAmt);
        if(x > currAmt){
            currAmt = 0;
        }else{
            newVal = currAmt - x;
            currAmt = newVal * interest;
        }
        console.log(currAmt);
        payments.push(currAmt);
        count++;
    }
    console.log(count);
}

function getLarge(val){
    if(val/20 > 20) {
        return val / 20;
    }
    return 20;
}

function getTotal(){
    var total = 0;
    for(var i = 0; i < payments.length; i++){
        total += payments[i];
    }
    console.log(total);
}