////Get all the countries from the Asia continent /region using the Filter function

const xhr=new XMLHttpRequest();
xhr.open("GET","https://restcountries.com/v3.1/all");
xhr.send();
xhr.responseType="json";
xhr.onload=function displayResult(){
    const countries=xhr.response;
    var m="Asia";
    const asiacountry=countries.filter(country=>country.region===m);
          const name=asiacountry.filter(n=>
            console.log(n.name.common));
          
    // console.log(name);
 }
 


// //Get all the countries with population of less than 2 lacs using Filter function
const xhr=new XMLHttpRequest();
xhr.open("GET","https://restcountries.com/v3.1/all");
xhr.send();
xhr.responseType="json";
xhr.onload=function displayResult(){
    const countries=xhr.response;
    //console.log(countries);
    var m="200000";
    const population=countries.filter(country=>country.population<m);
          const name=population.filter(n=>
            console.log(n.population,n.name.common));
          
    // console.log(name);
 }


 // //Print the total population of countries using reduce function 

 const xhr=new XMLHttpRequest();
xhr.open("GET","https://restcountries.com/v3.1/all");
xhr.send();
xhr.responseType="json";
xhr.onload=function displayResult(){
    const countries=xhr.response;
    //console.log(countries);

    const population=countries.reduce((acc,curr)=> acc+curr.population,0);
      console.log(population);}              


// //Print the following details name, capital, flag using forEach function.
const xhr=new XMLHttpRequest();
xhr.open("GET","https://restcountries.com/v3.1/all");
xhr.send();
xhr.responseType="json";
xhr.onload=function displayResult(){
    const countries=xhr.response;

          countries.forEach(n=>{
            console.log(n.name.common,n.capital,n.flags.png);})
          
    // console.log(name);
 }
 
 // //Print the country which use US Dollars as currency.
  
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all") 
request.send() 
request.onload=function(){ 
    if(request.status>=200 && request.status<300){ 
        var data=JSON.parse(request.response); 
        
         for(let i=0;i<data.length;i++){ 
            let isCurrency = data[i].currencies !== undefined; 
            if(isCurrency){ 
                let currencyObj = data[i].currencies; 
                let isUSD = currencyObj.USD !== undefined; 
                if(isUSD){ 
                    console.log("Currency USD Country: ",data[i].name.common); } } } } }