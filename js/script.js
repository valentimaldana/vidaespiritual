function mudouTamanho() {
  if (window.innerWidth >= 768) {
      itens.style.display = 'block'
      itens2.style.display = 'block' 
  } else {
      itens.style.display = 'none'
      itens2.style.display = 'none'
  }

}    

function clickMenu() {
  if (itens.style.display == 'block') {
      itens.style.display = 'none'
  } else {
      itens.style.display = 'block'
  }
 
}

function clickMenu2() {
  if (itens2.style.display == 'block') {
      itens2.style.display = 'none'
  } else {
      itens2.style.display = 'block'
  }
 
}

const scrollToTop = () => {
  window.scrollTo({
 top: 0,
 behavior: 'smooth'
  })
 }



function carregar() {
    //window.alert('Vire o celular na posição horizontal para melhor visualizar o site...')
    //window.alert('Aprecie com moderação ...')
    var msg = window.document.getElementById('msg')
    var bib = window.document.getElementById('bib')
    var img = window.document.getElementById('Imagem')
    var eu = window.document.getElementById('Eu')
    //var salm = window.document.getElementById('salmo')
    var ran = Math.floor(150* Math.random() +1)
    var ran2 = Math.floor(31* Math.random() +1)
    const a = document.querySelector("#salmo")
    const b = document.querySelector("#proverbo")
    a.href = `biblia/salmos/${ran}.html`
    b.href = `biblia/proverbios/${ran2}.html`
    console.log(a)
    console.log(b)

    //salm.innerHTML.href = `biblia/salmos/${ran}.html`
  
    //var eu2 = window.document.getElementById('Eu2')
    var data = new Date()
    var hora = data.getUTCHours()
    var dia = data.getDay()
    //var hora = 10
    
    if (hora >= 0 && hora < 12) {
        var ola = 'Bom Dia'      
    } else if (hora >= 12 && hora < 18) {
        var ola = 'Boa Tarde'
    } else {
        var ola = 'Boa Noite'
    }
    msg.innerHTML = `Agora são ${hora} Horas UTC, ${ola} `
    
    if (hora >= 0 && hora < 12) {
        img.src = 'img/Dia.png'
        //document.body.style.background = '#9c44ac'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'img/Tarde.png'
        //document.body.style.background = '#f2b65f'
    } else {
        img.src = 'img/Noite.png'
        //document.body.style.background = '#8f5162'
    }

    switch (dia) {
        case 0:
          dia = "Domingo";
          break;
        case 1:
          dia = "Segunda";
          break;
        case 2:
           dia = "Terça";
          break;
        case 3:
          dia = "Quarta";
          break;
        case 4:
          dia = "Quinta";
          break;
        case 5:
          dia = "Sexta";
          break;
        case 6:
          dia = "Sábado";
      }


    bib.innerHTML = `Versículo do Dia - Bíblia: ${dia} \u{1F447}`
    //eu2.innerHTML = `\u{1F4A2} Trabalho com elaboração de Site: Contate-me \u{1F4A2}`
    eu.innerHTML = `\u{1F4A2} Elaboração de Sites e Lojas Virtuais \u{1F4A2} <br> Contate-me pelos Links Abaixo \u{1F447}`
     
  }



