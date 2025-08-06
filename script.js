const togglePairs = [
    {btnId: 'item1', textId: 'text1'},
    {btnId: 'item2', textId: 'text2'},
    {btnId: 'item3', textId: 'text3'},
    {btnId: 'item4', textId: 'text4'},
    {btnId: 'item5', textId: 'text5'},
    {btnId: 'item6', textId: 'text6'},
    {btnId: 'item7', textId: 'text7'},
    {btnId: 'item8', textId: 'text8'}
   ];

   togglePairs.forEach(({btnId, textId}) => {
    const btn = document.getElementById(btnId);
    const text = document.getElementById(textId);
    btn.addEventListener('click', () => {
      // Hide all other text divs
      togglePairs.forEach(({textId: otherTextId}) => {
        if(otherTextId !== textId){
          const otherText = document.getElementById(otherTextId);
          otherText.style.maxHeight = '0';
          otherText.style.opacity = '0';
          otherText.style.overflow = 'hidden';
        }
      });
      // Toggle current text div
      if(text.style.maxHeight && text.style.maxHeight !== '0px'){
        text.style.maxHeight = '0';
        text.style.opacity = '0';
        text.style.overflow = 'hidden';
      } else {
        text.style.maxHeight = text.scrollHeight + 'px';
        text.style.opacity = '1';
        text.style.overflow = 'visible';
      }
    });
   });

   function toggleDiv(id) {
    const el = document.getElementById(id);
    el.style.display = el.style.display === 'none' ? 'flex' : 'none';
  }

