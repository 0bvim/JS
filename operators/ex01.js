const	grade = 59;
let	message;

if (grade >= 80)
{
	message = "Congratulations!!!";
}
else if (grade >= 60)
{
	message = "You're on our wait list";
}
else
{
	message = "Reproved :'("
}

console.log(message);
