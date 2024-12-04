
//! syncronus operation

//! .............execute line by line............like
// console.log("1st line execute than");
// console.log("2nd line ");

//! in asynchronus both can exicute one time
   //! eg.    ..  cricket score.....
   //!                       many people can search at a time and get output at same time.



//    promiese

  //! setTimeOut
// console.log("i am 1st line ");
// console.log("i am 2nd line ");

// setTimeout(()=>{
//     console.log("i am settimeout... i will exicute only one after the given time");
// },5000)
// console.log("i am 3rd line ");


//! setInterval
// console.log("i am 1st line ");
// console.log("i am 2nd line ");

// setInterval(()=>{
//     console.log("i am settimeout... i will exicute only one after the given time");
// },2000)
// setInterval(()=>{
//         console.log("i am settimeout");
//     },3000)
// console.log("i am 3rd line ");


//!  promises have 3 states 
   //!             1. resolved  2. rejected  3. pending   

// let p1=new Promise((resolve,reject)=>{
//         reject("i am reject")
//     resolve("hi iam resolved");

    
// });

        //!..  1. then, 2. catch  3. fillay block

        //! if promise is resolve > then() and finally() bloclk will get exicuted
        //! if promise is rejected then catch() and finally() block will get exicuted
        //! if not resolve nor rejected then promise is pending and non of block will get exicuted

 //! then block
//         p1.then((val)=>{
//             console.log(val);
//         })
// //! catch
//         p1.catch((val)=>{
//             console.log(val);
//         })
//         p1.finally(()=>{
//                 console.log();
//                 console.log(" pending state");
//         })

// console.log(p1);

//!
//         let p1=new Promise((resolve,reject)=>{
//         resolve("resolve");
//         reject("reject");
// })

// p1.then((res)=>{
//         console.log(res);
// })
// p1.catch((rej)=>{
//         console.log(rej);
// });
// p1.finally(()=>{
//         console.log("finally exicuted")
// },)

 
// let pro=new Promise((resolve,reject)=>{
//         resolve("resolved")
//        reject("rejected")
// })
//! other way to write
// pro.then((res)=>{
// console.log(res);
// }).catch((val)=>{
//         console.log(val);
// }).finally(()=>{
//         console.log("i am finally");
// })

//! static modification of promise
    //!   1.all-(all resolve) > then(),    
    //! it will check all the promise.... hence it take time  then .... after promises log will get exicuted 

  /*               console.log("i am before promise");

let p1=new Promise((res,rej)=>{
res("promis resolve 1st");
})

let p2=new Promise((res,rej)=>{
        res("promis resolve 2nd");
                 /*  rej("i am rej then catch will exicute") */
// })

// let p3=new Promise((res,rej)=>{
//  res("promis resolve 3rd");
//  })       

//  Promise.all([p1,p2,p3]).then((val){
// console.log(val);
//  }).catch((cal)=>{
//         console.log("i am catch ");
//  }).finally(()=>{
//         console.log("i am finally");
//  })

                     /*console.log("i am after promis"); */

//!      2. allsettled -( resolve or  rejected then only then block will get exicuted )

// let p1=new Promise((res,rej)=>{
//         res("promis resolve 1st");
//         })
        
//         let p2=new Promise((res,rej)=>{
//                 rej("promis reject 2nd");
//                          /*  rej("i am rej then catch will exicute") */
//         })
        
//         let p3=new Promise((res,rej)=>{
//          res("promis resolve 3rd");
//          })       
        
//          Promise.allSettled([p1,p2,p3])
//          .then((val)=>{
//         console.log(val);
//          }).catch((cal)=>{
//                 console.log("i am catch ");
//          }).finally(()=>{
//                 console.log("i am finally");
//          })
      
         //! any  -- any promise which is.. resolve state then() block will get exicuted in p1, p2, p3 .. else catch block  ... 

       /*    let p1=new Promise((res,rej)=>{
                 rej("promis resolve 1st");
                     })
                      
                     let p2=new Promise((res,rej)=>{
                           res("promis res 2nd"); */

              //                          /*  rej("i am rej then catch will exicute")
                /*      })
                      
                      let p3=new Promise((res,rej)=>{
                      res("promis resolve 3rd");
                       })       
                      
                        Promise.any([p1,p2,p3])
                       .then((val)=>{
                     console.log(val);
                      }).catch((cal)=>{
                       console.log("i am catch ");
                       }).finally(()=>{
                              console.log("i am finally");
                 }) 
 */

//!    race- the first promise will get exicuted ..either resolve or rejected 
                   /*      let p1=new Promise((res,rej)=>{
                 rej("promis rej 1st");
                     })
                      
                     let p2=new Promise((res,rej)=>{
                           res("promis res 2nd"); */

                                      //!    rej("i am rej then catch will exicute")
                   //  })
                      
                    /*   let p3=new Promise((res,rej)=>{
                      res("promis resolve 3rd");
                       })       
                      
                        Promise.race([p1,p2,p3])
                       .then((val)=>{
                     console.log(val);
                      }).catch((cal)=>{
                       console.log("i am catch ");
                       }).finally(()=>{
                              console.log("i am finally");
                 })  */

         //! example for static methods
               /*   let ddlj=new Promise((res,rej)=>{
                     setTimeout(()=>{
                      res("DDLJ was Blockbuster");
                     },4000)
                 })

                 let maharaja=new Promise((res,rej)=>{
                     setTimeout(()=>{
                            res("maharaja was hit movie");
                     },3000)
                 })

                 let mirzapur3=new Promise((res,rej)=>{
                     setTimeout(()=>{
                            rej("mirzapur is flop movie... money waste");
                     },2000)
                 })

                 let res=Promise.any([ddlj,maharaja,mirzapur3])
                 res.then((val)=>{
                     console.log(val);
                 }).catch(()=>{
                     console.log("error...catch");
                 }).finally(()=>{
                     console.log("watched all movie.. finally ");
                 }) */

   //! promise chainning
   
//    let pro1=new Promise((res,rej)=>{
//        setTimeout(() => {
//               rej("i am parent res")
//        },4000);
//    })

//    pro1.then((val)=>{
//        console.log(val);
//        setTimeout(() => {
//               res("i am chilD res")
//        },2000).catch(()=>{
//        console.log("pro is not resolve");
//    }).finally(()=>{
//        console.log("i am finally");
//    })
// })
//    pro1.catch((val)=>{
// console.log(val);
//    }).finally(()=>{
//     console.log("parent finally");
//    }) 
    

   // there are 4 sataic methos of promise
   // i.e. all , allsettled, any and race

   //! all

  /*  let p1=new Promise((resolve,reject)=>{
        resolve("i am resolve of p1")
   });
   let p2=new Promise((resolve,reject)=>{
    resolve("i am resolve of p2")
});
let p3=new Promise((resolve,reject)=>{
    resolve("i am resolve of p3")
});

let resP=Promise.all([p1,p2,p3]);
resP.then(()=>{
    console.log("i am then block i will exicute if all promises are resolve");
}).catch(()=>{
    console.log(" catch : >>i am then block and i will exicute if any of promise is in rejected state");
}).finally(()=>{
    console.log("finally: >> i will exicuted if promise is resolve or rejected");
}) */

    //! allsettled

   /*  let p1=new Promise((resolve,reject)=>{
        reject("i am resolve of p1")
   });
   let p2=new Promise((resolve,reject)=>{
    reject("i am resolve of p2")
});
let p3=new Promise((resolve,reject)=>{
    resolve("i am resolve of p3")
});

let resP=Promise.allSettled([p1,p2,p3]);
resP.then(()=>{
    console.log("i am then block :>>i will exicute if all promises are in resolve or reject state i.e. allsettled");
}).catch(()=>{
    console.log(" catch : >>i am then block and i will exicute if any of promise is not rejected or resolved");
}).finally(()=>{
    console.log("finally: >> i will exicuted if promise is resolve or rejected");
}) */

    //!    any

//     let p1=new Promise((resolve,reject)=>{
//         reject("i am resolve of p1")
//    });
//    let p2=new Promise((resolve,reject)=>{
//     resolve("i am resolve of p2")
// });
// let p3=new Promise((resolve,reject)=>{
    
//         resolve("i am resolve of p3")
// });

// let resP=Promise.any([p1,p2,p3]);
// resP.then(()=>{
//     console.log("i am then block :>>i will exicute if atleast one promise is in resolve state");
// }).catch(()=>{
//     console.log(" catch : >>i am then block and i will exicute if all promise is rejected");
// }).finally(()=>{
//     console.log("finally: >> i will exicuted if promise is resolve or rejected");
// })


//!  race
console.log(".............race.............");

// let p1=new Promise((resolve,reject)=>{
    
//     setTimeout(()=>{
//         reject("i am resolve of p1")
//     },3000)
// });
// let p2=new Promise((resolve,reject)=>{
// resolve("i am resolve of p2")
// });
// let p3=new Promise((resolve,reject)=>{
// reject("i am resolve of p3")
// });

// let resP=Promise.race([p1,p2,p3]);
// resP.then(()=>{
// console.log("i am then block :>>i will exicute if come on top ");
// }).catch(()=>{
// console.log(" catch : >>i am then block and i will exicute i will exicute if come on top");
// }).finally(()=>{
// console.log("finally: >> i will exicuted if promise is resolve or rejected");
// })

// setInterval(()=>{
// console.log("hello");
// },500)
// setInterval(()=>{
//     console.log("hiiiiiii");
//     },500)

console.log(".........practise............");

// let rpo1=new Promise((res,rej)=>{
//     res("promise is resolve")
// }).then((res)=>{
//     console.log("promise is resolve .....then block");
// }).catch((rej)=>{
//     console.log(rej);
// }).finally((val)=>{
//     console.log("i am finally");
// })

// let rpo2=new Promise((res,rej)=>{
//     rej("promise is rejected")
// }).then((res)=>{
//     console.log("promise is resolve ..... hence then block");
// }).catch((rej)=>{
//     console.log("promise is rejected .....hence catch block");
// }).finally(()=>{
//     console.log("i am finally");
// })

// let driver=Promise.all([rpo1,rpo2]).then((res)=>{
//     console.log("promise is resolve ..... hence then block");
// }).catch((rej)=>{
//     console.log("promise is rejected .....hence catch block");
// }).finally(()=>{
//     console.log("i am finally");
// })
 

// let prom1=new Promise((res,rej)=>{
//     res("promise is resolve")
// }).then((val)=>{
//     console.log("i willl execute if promise is resolve")
// let prom2=new Promise((res,rej)=>{
//     res("inner promise is resolve")
// })

// }).then((val)=>{
//     console.log("i will execute i promise is rejected");
// }).finally((val)=>{
//     console.log("i am finally");
// })
  

let prom1 = new Promise((res, rej) => {
    res("promise is resolved");  // Resolving the first promise
}).then((val) => {
    console.log("I will execute if promise is resolved:", val);

    // Create and return the inner promise
    let prom2 = new Promise((res, rej) => {
        res("inner promise is resolved"); // Resolving the inner promise
    });

    return prom2; // Return the inner promise for chaining
}).then((val) => {
    console.log("I will execute if inner promise is resolved:", val);
}).catch((err) => {
    console.log("I will execute if any promise is rejected:", err);
}).finally(() => {
    console.log("I am finally");
});

