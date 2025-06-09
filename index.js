// Function Declaration
function saturdayFun(activity="roller-skate"){
  return 'This Saturday,I want to ${activity}!';
}
// Function Expression
const mondayWork = function(activity="go to the office") {
  return `This Monday, I will ${activity}.`;
};
// Arrow Function that return another function
const wrapAdjective = function(flair="*") {
  return function(adjective="special") {
    return `You are ${style}${adjective}${style}!`;
  };
    }

    //Function Expression
    const divide = function(){
      return 2000/100;
    };

    //Arrow Function:one parameter
    const square =x => x*x;
    //Arrow Function:two parameters
    const add =(a,b) =>a+b;