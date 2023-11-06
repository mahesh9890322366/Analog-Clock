const deg = 6;
const hour = document.querySelector(".hour");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");


const SetClock = ()=>
{
	let day = new Date();
	let hh = day.getHours() * 30;
	let mm = day.getMinutes() * 6;
	let ss = day.getSeconds() * 6;
  
  hour.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  min.style.transform = `rotateZ(${mm}deg)`;
  sec.style.transform = `rotateZ(${ss}deg)`;
  

};

SetClock();
setInterval(SetClock,1000);
const switchTheme = (evt)=>
{
	const switchBtn = evt.target;
	if(switchBtn.textContent.toLowerCase()==="Light")
	{
		switchBtn.textContent = "dark";
		document.documentElement.setAttribute("data-theme","dark");
	} else
	{
		switchBtn.textContent = "Light";
		document.documentElement.setAttribute("data-theme","light");
	}
};
const switchModeBtn  = document.querySelector(".switch-Btn");
switchModeBtn.addEventListener("click",()=>console.log(switchBtn),false);
let currentTheme = "dark";
if(currentTheme)
{
	document.documentElement.setAttribute("data-theme",currentTheme);
	switchModeBtn.style = currentTheme;
}