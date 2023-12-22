export function isNumeric(value) {
    // Use parseFloat to convert the value to a number
    const numericValue = parseFloat(value);
  
    // Check if the parsed value is a valid number and not NaN
    // Also, check if the original string contains only numeric characters
    return !isNaN(numericValue) && /^\d+(\.\d+)?$/.test(value);
  }
  
  //option when true is A-Z, false is Z-A
export function alphabetize(list, option = true){
  

    return (list.slice().sort((a,b)=>{
      let first = a.name.toLowerCase()
      let second = b.name.toLowerCase()

      var comparison = 0
      let i = 0
      while (comparison==0){
        let charA = first.charAt(i) || ' ';
        let charB = second.charAt(i) || ' ';
        if(charA<charB){
            comparison = option?(-1):(1)
            
        }
        if (charA>charB){
          comparison = option?(1):(-1)
          
        }
        i++;
        
      }

      return comparison
    }))

    
  }

  export function sortByPrice(list, option = true){
  

    return (list.slice().sort((a,b)=>{
      let first = a.name.toLowerCase()
      let second = b.name.toLowerCase()

      var comparison = 0
      let i = 0
      while (comparison==0){
        let charA = first.charAt(i) || ' ';
        let charB = second.charAt(i) || ' ';
        if(charA<charB){
            comparison = option?(-1):(1)
            
        }
        if (charA>charB){
          comparison = option?(1):(-1)
          
        }
        i++;
        
      }

      return comparison
    }))

    
  }
