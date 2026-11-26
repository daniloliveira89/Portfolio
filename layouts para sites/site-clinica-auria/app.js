const paths = {
 heart:'<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/>',
 shield:'<path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6l8-3Z"/><path d="m8 12 3 3 5-6"/>',
 spark:'<path d="m12 2 2.8 7.2L22 12l-7.2 2.8L12 22l-2.8-7.2L2 12l7.2-2.8L12 2Z"/>',
 chat:'<path d="M21 11.5A8.5 8.5 0 0 1 12.5 20a9 9 0 0 1-4-.9L3 21l1.9-5.5a9 9 0 0 1-.9-4A8.5 8.5 0 0 1 12.5 3 8.5 8.5 0 0 1 21 11.5Z"/><path d="M8 10h9M8 14h6"/>',
 tooth:'<path d="M5 4c3-2 4 0 7 0s4-2 7 0c5 4-1 17-3 17s-1-9-4-9-2 9-4 9S0 8 5 4Z"/>',
 smile:'<circle cx="12" cy="12" r="9"/><path d="M7 14s1.5 4 5 4 5-4 5-4M8 8h.01M16 8h.01"/>'
};
document.querySelectorAll('[data-icon]').forEach(el=>{el.innerHTML=`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[el.dataset.icon]}</svg>`});
const menuButton=document.querySelector('.menu-button'), mobileNav=document.querySelector('#mobile-nav');
function closeMenu(){menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Abrir menu');mobileNav.hidden=true;}
menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')==='true';menuButton.setAttribute('aria-expanded',String(!open));menuButton.setAttribute('aria-label',open?'Abrir menu':'Fechar menu');mobileNav.hidden=open;});
mobileNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
matchMedia('(min-width: 961px)').addEventListener('change',e=>{if(e.matches)closeMenu();});
const treatmentInfo={
 prevencao:{title:'Prevenção e saúde bucal',description:'O acompanhamento começa pela compreensão da sua rotina e das necessidades do seu sorriso.',items:['Avaliação da saúde dos dentes e gengivas','Orientação de higiene bucal individualizada','Planejamento de cuidados preventivos']},
 estetica:{title:'Estética do sorriso',description:'Um planejamento que considera a saúde bucal, suas expectativas e as características do seu sorriso.',items:['Conversa sobre suas expectativas','Avaliação de possibilidades estéticas','Orientação sobre indicações e limitações']},
 ortodontia:{title:'Ortodontia',description:'O cuidado com o alinhamento dos dentes começa com uma avaliação completa e um planejamento individual.',items:['Avaliação do alinhamento e da mordida','Discussão das alternativas de tratamento','Acompanhamento da evolução do cuidado']},
 reabilitacao:{title:'Reabilitação oral',description:'Um olhar conjunto para os dentes, a mastigação e o conforto no dia a dia.',items:['Avaliação das necessidades funcionais','Planejamento das opções de reabilitação','Orientação sobre manutenção e acompanhamento']}
};
const dialog=document.querySelector('#info-dialog');
function showDialog(info,privacy=false){document.querySelector('#dialog-title').textContent=info.title;document.querySelector('#dialog-description').textContent=info.description;document.querySelector('#dialog-list').replaceChildren(...info.items.map(text=>{const li=document.createElement('li');li.textContent=text;return li}));document.querySelector('#dialog-eyebrow').textContent=privacy?'SOBRE ESTA DEMONSTRAÇÃO':'CUIDADO INDIVIDUAL';document.querySelector('#dialog-note').textContent=privacy?'Não informe dados reais ou informações de saúde no formulário demonstrativo.':'A indicação, as etapas e os resultados variam conforme avaliação clínica individual. Este conteúdo não substitui uma consulta.';document.querySelector('#dialog-cta').hidden=privacy;dialog.showModal();}
document.querySelectorAll('[data-treatment]').forEach(button=>button.addEventListener('click',()=>{const key=button.dataset.treatment;showDialog(treatmentInfo[key]);document.querySelector('#interest').value=treatmentInfo[key].title;}));
document.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
document.querySelector('#dialog-cta').addEventListener('click',()=>dialog.close());
document.querySelector('#privacy-button').addEventListener('click',()=>showDialog({title:'Sua privacidade',description:'Este site apresenta uma clínica fictícia e funciona como demonstração de design e navegação.',items:['O formulário não envia informações a um servidor e não salva dados no navegador.','As fontes são carregadas pelo Google Fonts; a hospedagem e esse serviço podem receber dados técnicos de acesso.','Nenhuma solicitação de consulta é encaminhada a uma clínica.']},true));
document.querySelector('#phone').addEventListener('input',e=>{const d=e.target.value.replace(/\D/g,'').slice(0,11);e.target.value=d.length>6?`(${d.slice(0,2)}) ${d.slice(2,-4)}-${d.slice(-4)}`:d.length>2?`(${d.slice(0,2)}) ${d.slice(2)}`:d.length?`(${d}`:'';});
document.querySelector('#appointment-form').addEventListener('submit',e=>{e.preventDefault();const status=document.querySelector('#form-status');status.textContent='Simulação concluída! Em um site real, a equipe receberia sua solicitação e entraria em contato para combinar a avaliação. Nenhum dado foi enviado e nenhum horário foi reservado.';status.hidden=false;status.focus();e.target.reset();});
document.querySelector('#year').textContent=new Date().getFullYear();
