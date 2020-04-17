const text = baffle(".data");
text.set({
    characters : '░░▓ ░▒░<▒ ▓▓░▓> >▒█ ▓>▒▒░ ░░▒░ ▒▓█ ██░█ ▓░▒▓',
    speed : 120
  });


    const data = document.querySelector('.data');
    data.addEventListener('mouseover', ()=> {
        text.start();
        text.reveal(9000);
    })
