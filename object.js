  const hero = {
      alis :'Robbin',
      name : 'Batman',
      catchPhrase :'will make peace',
      message : function(){
          return `${this.name}` and`${this.catchPhrase}`,`${this.message}`,
      }
  }
  console.log(hero.message());
  
  const carOne = {
    color: 'blue',
    status: {
      running: true,
      passengers: 4,
      wiperFluid: 'empty'
    },
    age: 5,
    miles: 50000,
    value: '8000'
  }
  const carTwo = {
    color: 'green',
    status: {
      running: 'yes',
      passengers: 2,
      fuelTank: 'empty'
    },
    value: 9000
  }
  const combinedCar = {
  ...carOne,
  ...carTwo
  }
   const obj = {
       name :"Paul",
       age :27,
       isPresent: true,
   }
   let PaulInfo = {...obj}
      
  
  
  
  

