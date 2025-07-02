const d=document.getElementById("display");
const add = v => d.value +=v;
const clearDisplay = () =>d.value = "";
const calculate = () => d.value = eval(d.value) ||"";