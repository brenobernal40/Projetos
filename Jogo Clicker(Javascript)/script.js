var point = document.getElementById('point')
var score = document.getElementById('score')
var cooldown = 1000;
var timeprice = 50;
var count = 0
var x = 1
var xautomatic = 1
var cursor = 50;
var farm = 50;
var key = "off"
function up(params) {
    if(count >= cursor){
        x= x + 1
        count = count - cursor
        cursor = cursor * 2
        document.getElementById('cursorbtn').innerText = `${cursor}`
        document.getElementById('score').innerText = `Score:${count}`
        console.log(x)

    }
}
function time(params) {
    if (count > timeprice && count - timeprice >= 0) {
        count  = count - timeprice
        timeprice = timeprice*2
        document.getElementById('score').innerText = `Score:${count}`
        document.getElementById('timebtn').innerText = `${timeprice}`
        if (cooldown == 100) {
            cooldown = 1
             
        }
        else{
    
            cooldown = cooldown -100
        }
        key = 'true'
        ligar()
       console.log(cooldown)
    }
}
function automatic(params) {
    if(count >= 0 && count - farm > 0){
        count = count - farm
        xautomatic = xautomatic + 1
        farm = farm *2
        document.getElementById('automaticbtn').innerText = `${farm}`
        document.getElementById('score').innerText = `Score:${count}`
        console.log(cooldown)
        key = 'true'
       ligar()
        
    }
   
}
function ligar(params) {
    
    if(key == 'true'){
        setInterval(() => {
            console.log(xautomatic)
            count = count + xautomatic
            document.getElementById('score').innerText = `Score:${count}`
        }, cooldown);
    }
    
}

    
   


point.addEventListener("click",() => {
    score.innerText = `Score: ${count}`
    count = count +x
})
