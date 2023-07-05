setInterval(() => {
    var top_distance = Math.floor(Math.random()*700)
    var left_distance = Math.floor(Math.random()*1400)
   document.getElementById('alvo').style.top = `${top_distance}px`
   document.getElementById('alvo').style.left= `${left_distance}px`
   //parte de fora
   document.getElementById('alvo-fora').style.top = `${top_distance-35}px`
   document.getElementById('alvo-fora').style.left= `${left_distance-35}px`
   document.getElementById('alvo').style.backgroundColor = 'rgb(224, 5, 5)'
   document.getElementById('alvo-fora').style.border = '20px solid rgb(224, 5, 5)'


}, 1000);
function ganhou(){
    window.alert('Parabéns vc acertou!')}