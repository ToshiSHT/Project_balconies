import checkNumInputs from "./checkNumInputs";
const changeModalState = (state) => {

    const widowForm = document.querySelectorAll('.balcon_icons_img'),
          windowWidth = document.querySelectorAll('#width'),
          windowHeight = document.querySelectorAll('#height'),
          windowType = document.querySelectorAll('#view_type'),
          windowProfile = document.querySelectorAll('.checkbox');

          checkNumInputs('#width');
          checkNumInputs('#height');

          function bindActionToElems (event, elem, prop) {
            elem.forEach ((item ,i) => {

                item.addEventListener(event, e => {
                    let selectId = false; 
                    switch (item.nodeName) {
                        case 'SPAN':
                            state[prop] = i;
                            break;
                        case 'INPUT' :
                            if (item.getAttribute('type')=== 'checkbox'){
                                i === 0 ? state[prop] = "Холодное" : state[prop] = "Горячие";
                                elem.forEach((box, j) => {
                                    box.checked = false;
                                    if (i == j) {
                                        box.checked = true;
                                    }
                                })
                            } else {
                                state[prop] = item.value;
                            } 
                            break;
                        case 'SELECT':
                            selectId = true;
                            state[prop] = item.value;
                            break;
                     } ;
                     if (!selectId)  state['type'] = 'tree' ;
                     console.log(state);   

                });
    
              });
          

          };

          bindActionToElems('click',widowForm, 'form');
          bindActionToElems('input', windowHeight, 'height');
          bindActionToElems('input', windowWidth, 'width');
          bindActionToElems('change', windowType, 'type');
          bindActionToElems('change', windowProfile, 'profile');
/* 
          widowForm.forEach ((item ,i) => {

            item.addEventListener('click', e => {
                state.form = i;
            });

          });

          windowWidth.addEventListener('input', (e) => {
            state.width = e.target.value;

          }); */



};

export default changeModalState ;