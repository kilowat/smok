(()=>{
  const faqPanelInit = ()=>{
    const $faqPanel = document.querySelector("#faq-panel");
    $faqPanel.addEventListener('change', (e) => {
      const $allPanels = document.querySelectorAll('.faq__list');
      for (let $panel of $allPanels) {
        $panel.style.display = 'none';
      }
      const showClass = e.target.value;
      document.querySelector('.'+showClass).style.display = 'block';
    });
  };

  const faqToggle = (item) => {
    const $textWrapper = item.querySelector('.faq__text-wrapp');
    const $text = item.querySelector('.faq__text');
    const fullHeight = $textWrapper.getBoundingClientRect().height; 
  
    if (item.classList.contains('--opened')) {
      $text.style.height = '';
      item.classList.remove('--opened');
    } else {
      item.classList.add('--opened');
      $text.style.height = fullHeight + 'px';
    }
  };
  
  const faqInit = ()=> {
    const $faq = document.querySelector('#faq-toggle');
    if (!$faq) return;
  
    const $items = $faq.querySelectorAll('.faq__item');
  
    for( const item of $items) {
      item.addEventListener('click', ()=>{
        faqToggle(item);
      });
    }
  }
  // ready
  document.addEventListener("DOMContentLoaded", function(event) { 
    faqInit();
    faqPanelInit();
  });
})()

