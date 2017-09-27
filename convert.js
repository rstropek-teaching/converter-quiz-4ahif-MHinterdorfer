var value;
var sourceUnit;
var targetUnit;
var result;

function handleArguments(){
    process.stdout.write('Invalid parameters\n');
    process.exit(-1);
}

function convert(source, target){
    if(source === target) return value;
    switch(source){
        case 'm':
            if(target === 'cm') return value*100;
            if(target === 'mm') return value*1000;
        
        case 'cm':
            if(target === 'mm') return value*10;
            if(target === 'm') return value/100;

        case 'mm':
            if(target === 'cm') return value/10;
            if(target === 'm') return value/1000;

        case 'kg':
            if(target === 'g') return value*1000;

        case 'g':
            if(target === 'kg') return value/1000;

        default:
            handleArguments();
            break;
    }
}

//checking arguments
if(!isNaN(parseFloat(process.argv[2]))){
    value = parseFloat(process.argv[2]);
}else{handleArguments();}
sourceUnit = process.argv[3];
if(process.argv[4] !== 'to') handleArguments();
targetUnit = process.argv[5];

process.stdout.write(value+" " + sourceUnit+" " + "are " + convert(sourceUnit, targetUnit)+" " + targetUnit+"\n" );



