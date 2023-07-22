function getrandom(){
    const randomn = Math.random();
    if (randomn < 0.01) {
        return 'magenta';
    }else if(randomn < 0.02){
        return 'yellow';
    }else if(randomn < 0.03){
        return "blue"
    }else if(randomn < 0.04){
        return 'gray';
    }else if(randomn < 0.05){
        return 'red'
    }else if(randomn < 0.06){
        return 'azure';
    }else if(randomn<0.07){
        return 'green'
    }else if(randomn < 0.08){
        return 'yellow';
    }else if(randomn < 0.09){
        return 'ivory';
    }else if(randomn <0.1){
        return 'teal';
    }else if(randomn < 0.2){
        return 'silver';
    }else if(randomn < 0.3){
        return "purple"
    }else if(randomn < 0.4){
        return 'navy blue';
    }else if(randomn < 0.5){
        return 'pink'
    }else if(randomn < 0.6){
        return 'lime';
    }else if(randomn<0.7){
        return 'cyan'
    }else if(randomn < 0.8){
        return 'khaki';
    }else if(randomn < 0.9){
        return 'wheat';
    }else{
        return 'coral';
    }
}
//console.log(getrandom())

document.querySelector('#red').addEventListener('click', playred);

function playred(){
    botchoice = getrandom();
    let userchoice = 'red';

    if (userchoice === 'red' && botchoice === 'red') {
        document.querySelector('#check').innerHTML = `you chosed ${userchoice} and the machince choice is ${botchoice} you win... Congratulations`;
        document.querySelector('body').style.backgroundColor = 'red';

    }else if(userchoice === 'red' && botchoice === 'yellow'){
        document.querySelector('#check').innerHTML = `you chosed ${userchoice} and the machince choice is ${botchoice} you lose...`;
        document.querySelector('body').style.backgroundColor = 'yellow';

    }else if(userchoice === 'red' && botchoice === 'pink'){
        document.querySelector('#check').innerHTML = `you chosed ${userchoice} and the machince choice is ${botchoice} you draw... try again `;
        document.querySelector('body').style.backgroundColor = 'pink';
    } else if (userchoice === 'red' && botchoice === 'magenta') {
        document.querySelector('#check').innerHTML = `you chosed ${userchoice} and the machince choice is ${botchoice} you lose`;
        document.querySelector('body').style.backgroundColor = 'magenta';

    }else if(userchoice === 'red' && botchoice === 'blue'){
        document.querySelector('#check').innerHTML = `you chosed ${userchoice} and the machince choice is ${botchoice} you lose...`;
        document.querySelector('body').style.backgroundColor = 'blue';

    }else if(userchoice === 'red' && botchoice === 'gray'){
        document.querySelector('#check').innerHTML = `you chosed ${userchoice} and the machince choice is ${botchoice} you draw... try again `;
        document.querySelector('body').style.backgroundColor = 'gray';
    }else if (userchoice === 'red' && botchoice === 'azure') {
        document.querySelector('#check').innerHTML = `you chosed ${userchoice} and the machince choice is ${botchoice} you lose`;
        document.querySelector('body').style.backgroundColor = 'azure';

    }else if(userchoice === 'red' && botchoice === 'green'){
        document.querySelector('#check').innerHTML = `you chosed ${userchoice} and the machince choice is ${botchoice} you lose...`;
        document.querySelector('body').style.backgroundColor = 'green';

    }else if(userchoice === 'red' && botchoice === 'ivory'){
        document.querySelector('#check').innerHTML = `you chosed ${userchoice} and the machince choice is ${botchoice} you lose `;
        document.querySelector('body').style.backgroundColor = 'ivory';
    }
    
    else if (userchoice === 'red' && botchoice === 'teal') {
        document.querySelector('#check').innerHTML = `you chosed ${userchoice} and the machince choice is ${botchoice} you lose`;
        document.querySelector('body').style.backgroundColor = 'teal';

    }else if(userchoice === 'red' && botchoice === 'silver'){
        document.querySelector('#check').innerHTML = `you chosed ${userchoice} and the machince choice is ${botchoice} you lose...`;
        document.querySelector('body').style.backgroundColor = 'silver';

    }else if(userchoice === 'red' && botchoice === 'purple'){
        document.querySelector('#check').innerHTML = `you chosed ${userchoice} and the machince choice is ${botchoice} you lose `;
        document.querySelector('body').style.backgroundColor = 'purple';
    }
    else if (userchoice === 'red' && botchoice === 'navy blue') {
        document.querySelector('#check').innerHTML = `you chosed ${userchoice} and the machince choice is ${botchoice} you lose`;
        document.querySelector('body').style.backgroundColor = 'navy blue';

    }else if(userchoice === 'red' && botchoice === 'lime'){
        document.querySelector('#check').innerHTML = `you chosed ${userchoice} and the machince choice is ${botchoice} you lose...`;
        document.querySelector('body').style.backgroundColor = 'lime';

    }else if(userchoice === 'red' && botchoice === 'cyan'){
        document.querySelector('#check').innerHTML = `you chosed ${userchoice} and the machince choice is ${botchoice} you draw... try again `;
        document.querySelector('body').style.backgroundColor = 'cyan';
    }
    else if (userchoice === 'red' && botchoice === 'khaki') {
        document.querySelector('#check').innerHTML = `you chosed ${userchoice} and the machince choice is ${botchoice} you lose`;
        document.querySelector('body').style.backgroundColor = 'khaki';

    }else if(userchoice === 'red' && botchoice === 'wheat'){
        document.querySelector('#check').innerHTML = `you chosed ${userchoice} and the machince choice is ${botchoice} you lose...`;
        document.querySelector('body').style.backgroundColor = 'wheat';

    }else if(userchoice === 'red' && botchoice === 'coral'){
        document.querySelector('#check').innerHTML = `you chosed ${userchoice} and the machince choice is ${botchoice} you draw... try again `;
        document.querySelector('body').style.backgroundColor = 'coral';
    }

   

}

//for pink

document.querySelector('#pink').addEventListener('click', playpink);

function playpink(){
    botchoice = getrandom();
    let userchoice = 'pink';

    if (userchoice === 'pink' && botchoice === 'red') {
        document.querySelector('#check').innerText = `you chosed ${userchoice} and the machince choice is ${botchoice} you lose`;
        document.querySelector('body').style.backgroundColor = 'red';

    }else if(userchoice === 'pink' && botchoice === 'yellow'){
        document.querySelector('#check').innerHTML = `you chosed ${userchoice} and the machince choice is ${botchoice} you draw... try again`;
        document.querySelector('body').style.backgroundColor = 'yellow';

    }else if(userchoice === 'pink' && botchoice === 'pink'){
        document.querySelector('#check').innerHTML = `you chosed ${userchoice} and the machince choice is ${botchoice} you win... congratulation!` ;
        document.querySelector('body').style.backgroundColor = 'pink';
    }

    //nn
    else if (userchoice === 'pink' && botchoice === 'magenta') {
        document.querySelector('#check').innerHTML = `you chosed ${userchoice} and the machince choice is ${botchoice} you lose`;
        document.querySelector('body').style.backgroundColor = 'magenta';

    }else if(userchoice === 'pink' && botchoice === 'blue'){
        document.querySelector('#check').innerHTML = `you chosed ${userchoice} and the machince choice is ${botchoice} you lose...`;
        document.querySelector('body').style.backgroundColor = 'blue';

    }else if(userchoice === 'pink' && botchoice === 'gray'){
        document.querySelector('#check').innerHTML = `you chosed ${userchoice} and the machince choice is ${botchoice} you draw... try again `;
        document.querySelector('body').style.backgroundColor = 'gray';
    }else if (userchoice === 'pink' && botchoice === 'azure') {
        document.querySelector('#check').innerHTML = `you chosed ${userchoice} and the machince choice is ${botchoice} you lose`;
        document.querySelector('body').style.backgroundColor = 'azure';

    }else if(userchoice === 'pink' && botchoice === 'green'){
        document.querySelector('#check').innerHTML = `you chosed ${userchoice} and the machince choice is ${botchoice} you lose...`;
        document.querySelector('body').style.backgroundColor = 'green';

    }else if(userchoice === 'pink' && botchoice === 'ivory'){
        document.querySelector('#check').innerHTML = `you chosed ${userchoice} and the machince choice is ${botchoice} you lose `;
        document.querySelector('body').style.backgroundColor = 'ivory';
    }
    
    else if (userchoice === 'pink' && botchoice === 'teal') {
        document.querySelector('#check').innerHTML = `you chosed ${userchoice} and the machince choice is ${botchoice} you lose`;
        document.querySelector('body').style.backgroundColor = 'teal';

    }else if(userchoice === 'pink' && botchoice === 'silver'){
        document.querySelector('#check').innerHTML = `you chosed ${userchoice} and the machince choice is ${botchoice} you lose...`;
        document.querySelector('body').style.backgroundColor = 'silver';

    }else if(userchoice === 'pink' && botchoice === 'purple'){
        document.querySelector('#check').innerHTML = `you chosed ${userchoice} and the machince choice is ${botchoice} you lose `;
        document.querySelector('body').style.backgroundColor = 'purple';
    }
    else if (userchoice === 'pink' && botchoice === 'navy blue') {
        document.querySelector('#check').innerHTML = `you chosed ${userchoice} and the machince choice is ${botchoice} you lose`;
        document.querySelector('body').style.backgroundColor = 'navy blue';

    }else if(userchoice === 'pink' && botchoice === 'lime'){
        document.querySelector('#check').innerHTML = `you chosed ${userchoice} and the machince choice is ${botchoice} you lose...`;
        document.querySelector('body').style.backgroundColor = 'lime';

    }else if(userchoice === 'pink' && botchoice === 'cyan'){
        document.querySelector('#check').innerHTML = `you chosed ${userchoice} and the machince choice is ${botchoice} you draw... try again `;
        document.querySelector('body').style.backgroundColor = 'cyan';
    }
    else if (userchoice === 'pink' && botchoice === 'khaki') {
        document.querySelector('#check').innerHTML = `you chosed ${userchoice} and the machince choice is ${botchoice} you lose`;
        document.querySelector('body').style.backgroundColor = 'khaki';

    }else if(userchoice === 'pink' && botchoice === 'wheat'){
        document.querySelector('#check').innerHTML = `you chosed ${userchoice} and the machince choice is ${botchoice} you lose...`;
        document.querySelector('body').style.backgroundColor = 'wheat';

    }else if(userchoice === 'pink' && botchoice === 'coral'){
        document.querySelector('#check').innerHTML = `you chosed ${userchoice} and the machince choice is ${botchoice} you draw... try again `;
        document.querySelector('body').style.backgroundColor = 'coral';
    }

}


//for yellow

document.querySelector('#yellow').addEventListener('click', playyellow);

function playyellow(){
    botchoice = getrandom();
    let userchoice = 'yellow';

    if (userchoice === 'yellow' && botchoice === 'red') {
        document.querySelector('#check').innerText = `you chosed ${userchoice} and the machince choice is ${botchoice} you lose`;
        document.querySelector('body').style.backgroundColor = 'red';

    }else if(userchoice === 'yellow' && botchoice === 'yellow'){
        document.querySelector('#check').innerHTML = `you chosed ${userchoice} and the machince choice is ${botchoice} you win... congratulation!`;
        document.querySelector('body').style.backgroundColor = 'yellow';

    }else if(userchoice === 'yellow' && botchoice === 'pink'){
        document.querySelector('#check').innerHTML = `you chosed ${userchoice} and the machince choice is ${botchoice} you draw... try again` ;
        document.querySelector('body').style.backgroundColor = 'pink';
    }

    //yello
    else if (userchoice === 'yellow' && botchoice === 'magenta') {
        document.querySelector('#check').innerHTML = `you chosed ${userchoice} and the machince choice is ${botchoice} you lose`;
        document.querySelector('body').style.backgroundColor = 'magenta';

    }else if(userchoice === 'yellow' && botchoice === 'blue'){
        document.querySelector('#check').innerHTML = `you chosed ${userchoice} and the machince choice is ${botchoice} you lose...`;
        document.querySelector('body').style.backgroundColor = 'blue';

    }else if(userchoice === 'yellow' && botchoice === 'gray'){
        document.querySelector('#check').innerHTML = `you chosed ${userchoice} and the machince choice is ${botchoice} you draw... try again `;
        document.querySelector('body').style.backgroundColor = 'gray';
    }else if (userchoice === 'yellow' && botchoice === 'azure') {
        document.querySelector('#check').innerHTML = `you chosed ${userchoice} and the machince choice is ${botchoice} you lose`;
        document.querySelector('body').style.backgroundColor = 'azure';

    }else if(userchoice === 'yellow' && botchoice === 'green'){
        document.querySelector('#check').innerHTML = `you chosed ${userchoice} and the machince choice is ${botchoice} you lose...`;
        document.querySelector('body').style.backgroundColor = 'green';

    }else if(userchoice === 'yellow' && botchoice === 'ivory'){
        document.querySelector('#check').innerHTML = `you chosed ${userchoice} and the machince choice is ${botchoice} you lose `;
        document.querySelector('body').style.backgroundColor = 'ivory';
    }
    
    else if (userchoice === 'yellow' && botchoice === 'teal') {
        document.querySelector('#check').innerHTML = `you chosed ${userchoice} and the machince choice is ${botchoice} you lose`;
        document.querySelector('body').style.backgroundColor = 'teal';

    }else if(userchoice === 'yellow' && botchoice === 'silver'){
        document.querySelector('#check').innerHTML = `you chosed ${userchoice} and the machince choice is ${botchoice} you lose...`;
        document.querySelector('body').style.backgroundColor = 'silver';

    }else if(userchoice === 'yellow' && botchoice === 'purple'){
        document.querySelector('#check').innerHTML = `you chosed ${userchoice} and the machince choice is ${botchoice} you lose `;
        document.querySelector('body').style.backgroundColor = 'purple';
    }
    else if (userchoice === 'yellow' && botchoice === 'navy blue') {
        document.querySelector('#check').innerHTML = `you chosed ${userchoice} and the machince choice is ${botchoice} you lose`;
        document.querySelector('body').style.backgroundColor = 'navy blue';

    }else if(userchoice === 'yellow' && botchoice === 'lime'){
        document.querySelector('#check').innerHTML = `you chosed ${userchoice} and the machince choice is ${botchoice} you lose...`;
        document.querySelector('body').style.backgroundColor = 'lime';

    }else if(userchoice === 'yellow' && botchoice === 'cyan'){
        document.querySelector('#check').innerHTML = `you chosed ${userchoice} and the machince choice is ${botchoice} you draw... try again `;
        document.querySelector('body').style.backgroundColor = 'cyan';
    }
    else if (userchoice === 'yellow' && botchoice === 'khaki') {
        document.querySelector('#check').innerHTML = `you chosed ${userchoice} and the machince choice is ${botchoice} you lose`;
        document.querySelector('body').style.backgroundColor = 'khaki';

    }else if(userchoice === 'yellow' && botchoice === 'wheat'){
        document.querySelector('#check').innerHTML = `you chosed ${userchoice} and the machince choice is ${botchoice} you lose...`;
        document.querySelector('body').style.backgroundColor = 'wheat';

    }else if(userchoice === 'yellow' && botchoice === 'coral'){
        document.querySelector('#check').innerHTML = `you chosed ${userchoice} and the machince choice is ${botchoice} you draw... try again `;
        document.querySelector('body').style.backgroundColor = 'coral';
    }

}