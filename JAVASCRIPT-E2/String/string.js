

  //!         J s p i d e r s
    //        0 1 2 3 4 5 6 7        index of the jspiders starts from 0

    let  str="Jspiders"

     // lenth will chech the length of string 
console.log(str.length);  

let  str1="Jspiders";
let str2=str1.toLocaleUpperCase()
console.log(str2);

let str3=str1.toLocaleLowerCase();
console.log(str3);

let str4=str1.charAt(1)
console.log(str4);

let str5=str1.slice(2,4)
console.log(str5);

console.log("..................................");

//! subString(  start , end  )
//! 1.if the start index is greater than the end index, the method will automatically swap the two values, meaning it will treat the larger index as the starting point and the smaller index as the ending point.
//! if start is -ve value it will considered as = 0
let str6=str1.substring(2,-1)
console.log(str6);

//! substr( start, length )
//! it accecpt -ve vale and count will start from end like ...-2 ,-1
let str7=str1.substr(2,2)
console.log(str7);

                                 let str8="    Jspiders    "

     // ! it will remove all blank spaces
let str9=str8.trim();
    // it will remove blank spaces at end 
let str10=str8.trimEnd()
    // it will emove blank spaces at start
let str11=str8.trimStart()

console.log(str10);
console.log(str9);
console.log(str8);

                      let st="hellolololo"

                      //! it will replace all lo with p 
   let st1=st.replaceAll("lo", "p")    
                   //!  it will only replace the first lo only  
   let st2=st.replace("lo", "p")     

   console.log(st1);    
   console.log(st);   

   
let st4="Jspiders"
let st5=st4.indexOf("s")
console.log(st5);

