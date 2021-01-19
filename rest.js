function concat(joiner, ...args){
console.log(args)
return args.join(joiner);
}
var res=concat('*',1,2,3);
console.log(res);


function sum(a,b){
  return a+b;
}
console.log(sum(1,2,3,4,5));//takes first three
//calls different arguments
//this the argument call and concatanated
