//Swtch from Roman to Integer

const romanToInt = (input)=>{
  let arr = input.split('')
  let output= 0;
  for(let i =0;i<arr.length;i++){
    switch(arr[i]){
      case'I':
        if(arr[i+1]==='V'){output += 4;}
        else if (arr[i+1]==='X'){output += 9;}
        else{output += 1;}
        break;
      case 'V':
        output +=5;
        break; 
      case'X':
        if(arr[i+1]==='L'){output += 40;}
        else if (arr[i+1]==='C'){output += 90;}
        else{output += 10;}
        break; 
      case 'L':
        output +=50;
        break; 
      case'C':
        if(arr[i+1]==='D'){output += 400;}
        else if (arr[i+1]==='M'){output += 900;}
        else{output += 100;}
        break; 
      case 'D':
        output +=500;
        break;     
      default:
        total += 1000;
        break;  
    }
 }return output;
}

const romanToInt2 = (input)=>{
  let map = {
    "I":1,
    "V":5,
    "X":10,
    "L":50,
    "C":100,
    "D":500,
    "M":1000
  };
  let total = 0;
  for(let i =0;i<input.length;i++){
    map[input[i]]< map[input[i+1]]? total-=map[input[i]] : total+=map[input[i]]
  }
  return total;
}

romanToInt2("XI")