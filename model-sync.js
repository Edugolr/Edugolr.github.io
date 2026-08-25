(()=>{
  document.title='Föräldraanställning – arbetsmodell v2.2';
  const eyebrow=[...document.querySelectorAll('.hero .eyebrow')][0];
  if(eyebrow) eyebrow.textContent='Arbetsmodell • v2.2 • augusti 2026';

  document.querySelectorAll('.card').forEach(card=>{
    const num=card.querySelector('.num');
    if(num&&num.textContent.trim()==='Semester'){
      num.textContent='Övergång';
      const h=card.querySelector('h3');
      const p=card.querySelector('p');
      if(h) h.textContent='≈ 28 kalenderdagar 🟡';
      if(p) p.textContent='Huvudkandidat: en avslutande övergångsfas inom omsorgsuppdraget med full tillgänglighet för barnet. Exakt längd och semesterjuridiken är ännu inte låsta.';
    }
  });

  const transitionHeading=[...document.querySelectorAll('.section h2')].find(h=>h.textContent.includes('Övergången efter omsorgsperioden'));
  if(transitionHeading){
    const section=transitionHeading.closest('.section');
    const phases=section.querySelectorAll('.phase');
    if(phases[1]) phases[1].innerHTML='<span>Steg 2</span><strong>Övergångsfas</strong><span>≈ 28 kalenderdagar som avslutande del av omsorgsuppdraget. Full tillgänglighet för barnet; exakt längd är fortfarande empirisk.</span>';
    if(phases[2]) phases[2].innerHTML='<span>Steg 3</span><strong>Ordinarie system</strong><span>Arbete, studier eller arbetsmarknadssystem tar över samtidigt som förskola, VAB, SGI och arbetsrätt bär sina respektive funktioner.</span>';
  }

  const economy=document.getElementById('ekonomi');
  if(economy){
    const lines=economy.querySelectorAll('.costLine');
    if(lines[1]) lines[1].innerHTML='<span>Reformkärna efter ny övergångsmodell</span><strong>omräkning pågår</strong>';
    if(lines[2]) lines[2].innerHTML='<span><b>Tidigare break-even (25-dagarsmodellen)</b></span><strong>≈ 1,93 mdkr ⚠️</strong>';
    const warning=economy.querySelector('.warning');
    if(warning) warning.innerHTML='<b>Ekonomin måste synkas med den nya övergångsfasen.</b> Den tidigare reformkostnaden 39,78 mdkr och break-even 1,93 mdkr byggde på 25 betalda semesterdagar efter omsorgsåret. De får inte användas som aktuell baseline innan semester/övergång har lösts juridiskt och räknats om.';
    const principle=economy.querySelector('.principle strong');
    if(principle) principle.textContent='Nästa ekonomiska fråga är att prissätta 12 månaders huvudsakligt omsorgsarbete + övergångsfas utan att dubbelräkna semester, och därefter återställa en symmetrisk break-even-jämförelse.';
  }
})();