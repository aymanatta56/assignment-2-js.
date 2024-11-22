
var arr;
var arrIndex;
var num;
var lastNumber = -1 ;



function test()
{
    arr = [`“Be yourself; everyone else is already taken.”
― Oscar Wilde` , 
`“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”
― Marilyn Monroe`,
`“So many books, so little time.”
― Frank Zappa`,
`“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”
― Albert Einstein`,
`“A room without books is like a body without a soul.”
― Marcus Tullius Cicero` ,
`“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”
― Bernard M. Baruch`]




arrIndex = Math.random() * arr.length;


num = Math.trunc(arrIndex);

// console.log(num);

if(num != lastNumber )
{
    document.getElementById("quote").innerHTML = ` <p class="mt-5 fs-4 border-0 border-black p-4 ">`+ arr[num] +`</p>`;
  
}
else if(++num <= arr.length )
 {
    document.getElementById("quote").innerHTML = ` <p class="mt-5 fs-4 border-0 border-black p-4 ">`+ arr[++num] +`</p>`;
  
}
else
{
    console.log("hiiii");
    
}
lastNumber = num ;






    // console.log(arr[num])
   
//     var lastNumber = -1 ;
 
//      if(num != lastNumber)
//      {
//         document.getElementById("quote").innerHTML = ` <p class="mt-5 fs-4 border-0 border-black p-4 ">`+ arr[num] +`</p>`;
//   console.log(num);
  

//      };
//      lastNumber =num ;

    

        // do{

        //     document.getElementById("quote").innerHTML = ` <p class="mt-5 fs-4 border-0 border-black p-4 ">`+ arr[num] +`</p>`;
  
        //     } while( num == lastNumber)
        //     lastNumber = num;

    // document.getElementById("quote").innerHTML = ` <p class="mt-5 fs-4 border-0 border-black p-4 ">`+ arr[num] +`</p>`;
  


}