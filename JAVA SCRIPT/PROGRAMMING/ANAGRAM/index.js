let a =prompt('Enter the String1')
let b =prompt('Enter the String1')

let aa=a.split('').sort().join('')
let bb=b.split('').sort().join('')

if(aa==bb){
    console.log('Anagram Number');
}else{
    console.log('Not Anagram');
}