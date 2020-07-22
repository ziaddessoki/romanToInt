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

romanToInt('XXXIII')