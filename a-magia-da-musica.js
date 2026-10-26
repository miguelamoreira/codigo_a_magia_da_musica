//página inicial com descrição e respetivo botão
window.onload = function() {
    let description = document.getElementById("description");
    let button = description.querySelector("button");
    button.addEventListener("click", function() {
      description.style.display = "none";     //fecha o plano inicial com a descrição com o clique
    });
};

// interação gaze-based
AFRAME.registerComponent('cursor-listener', {
    init: function () {
      let el = this.el;
      let soundEl = el.querySelector('a-sound');    //seleciona todos os elementos com esta tag associada (objetos musicais)
      let playing = false;
      
      el.addEventListener('mouseenter', function () {    //comportamento de quando o utilizador estiver olhar
        if (!playing) {               
          soundEl.components.sound.playSound();
          playing = true;
        };
      });
      
      el.addEventListener('mouseleave', function () {   //comportamento de quando o utilizador não estiver olhar
        if (playing) {
          soundEl.components.sound.stopSound();
          playing = false;
        };
      });
    }
});
  


