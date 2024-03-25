
//SIDEBAR
const menuItems = document.querySelectorAll('.menu-item');

//MESSAGES
const msgNotification = document.querySelector('#msg-not');
const messages = document.querySelector('.messages');
const msg = messages.querySelectorAll('.msg');
const msgSearch = document.querySelector('#msg-search');

//THEME
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');
const colors = document.querySelectorAll('.choose-color span');
const bg1 = document.querySelector('.bg-1');
const bg2 = document.querySelector('.bg-2');
const bg3 = document.querySelector('.bg-3');

//---------SIDEBAR-----------

// REMOVE ACTIVE CLASS FROM ALL ITEMS
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}


//HIGHLIGHT ACTIVE MENU ITEM WHEN CLICKED
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');

        //SHOW NOTIFICATION POPUP WHEN CLICKED AND REMOVE COUNTER
        if(item.id != 'notifications'){
            document.querySelector('.not-popup').style.display = 'none';
        }
        else{
            document.querySelector('.not-popup').style.display ='block';
            document.querySelector('#notifications .not-count').style.display ='none';
        }
    })
})


//--------------MESSAGES-----------------------
//SEARCH CHATS
const searchMessage = () => {
    const val = msgSearch.value.toLowerCase();
    console.log(val);
    msg.forEach(chat => {
        let name = chat.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            chat.style.display = 'flex';
        }
        else{
            chat.style.display = 'none';
        }
    })
}

//search chat
msgSearch.addEventListener('keyup', searchMessage);

//HIGHLIGHT MSG CARD ON CLICK AND REMOVE COUNTER
msgNotification.addEventListener('click', () => {
    messages.style.boxShadow ='0 0 1rem var(--color-primary)';
    msgNotification.querySelector('.not-count').style.display = 'none';
    setTimeout( () => {
        messages.style.boxShadow = 'none';
    }, 2000)
})

//THEME CUSTOMIZATION----------

//open modal
const openThemeModal = () =>{
    themeModal.style.display = 'grid';
}

const closeThemeModal = (e) => {
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display = 'none';
    }
}

//openclose modal event listener
themeModal.addEventListener('click', closeThemeModal);
theme.addEventListener('click', openThemeModal);

//FONTS--------------------

//remove active class from spans or font size selectors
const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    })
}

fontSizes.forEach(size => {
    
   size.addEventListener('click', () => {
    removeSizeSelector();
    let fontSize;
    size.classList.toggle('active');

    if(size.classList.contains('font-size-1')){
        fontSize = '10px';
        root.style.setProperty('----sticky-top-left', '5.4rem');
        root.style.setProperty('----sticky-top-right', '5.4rem');
    }
    else if(size.classList.contains('font-size-2')){
        fontSize = '13px';
        root.style.setProperty('----sticky-top-left', '5.4rem');
        root.style.setProperty('----sticky-top-right', '-7rem');
    }
    else if(size.classList.contains('font-size-3')){
        fontSize = '16px';
        root.style.setProperty('----sticky-top-left', '-2rem');
        root.style.setProperty('----sticky-top-right', '-17rem');
    }
    else if(size.classList.contains('font-size-4')){
        fontSize = '19px';
        root.style.setProperty('----sticky-top-left', '-5rem');
        root.style.setProperty('----sticky-top-right', '-25rem');
    }
    else if(size.classList.contains('font-size-5')){
        fontSize = '22px';
        root.style.setProperty('----sticky-top-left', '-12rem');
        root.style.setProperty('----sticky-top-right', '-35rem');
    }

     //change font size for the root html element
     document.querySelector('html').style.fontSize = fontSize;
   })
})

//COLORS--------------------

//remove active class from spans or color selectors
const removeColorSelector = () => {
    colors.forEach(color => {
        color.classList.remove('active');
    })
}

colors.forEach(color => {
    
   color.addEventListener('click', () => {
    removeColorSelector();
    let primaryHue;
    color.classList.toggle('active');

    if(color.classList.contains('color-1')){
        primaryHue = 252; 
    }
    else if(color.classList.contains('color-2')){
        primaryHue = 46;        
    }
    else if(color.classList.contains('color-3')){
        primaryHue = 352;  
    }
    else if(color.classList.contains('color-4')){
        primaryHue = 170;    
    }
    else if(color.classList.contains('color-5')){
        primaryHue = 293;  
    }

     //change primary hue for the root html element
     root.style.setProperty('--primary-color-hue', primaryHue);
   })
})


//BACKGROUND THEME--------------------

    let lightColorLightness;
    let whiteColorLightness;
    let darkColorLightness;

    //changes color properties in css
    const changeBg = () => {
        root.style.setProperty('--light-color-lightness', lightColorLightness);
        root.style.setProperty('--white-color-lightness', whiteColorLightness);
        root.style.setProperty('--dark-color-lightness', darkColorLightness);
       }

       //change bg colors
       bg1.addEventListener('click', () => {
        //add active class
        bg1.classList.add('active');
        //remove active class from the others
        bg2.classList.remove('active');
        bg3.classList.remove('active');
        //remove customized changes from local storage
        window.location.reload();
       });

       bg2.addEventListener('click', () => {

        lightColorLightness = '10%';
        whiteColorLightness = '15%';
        darkColorLightness = '95%';

        //add active class
        bg2.classList.add('active');
        //remove active class from the others
        bg1.classList.remove('active');
        bg3.classList.remove('active');
        changeBg();
       });

       bg3.addEventListener('click', () => {
        
        lightColorLightness = '0%';
        whiteColorLightness = '5%';
        darkColorLightness = '95%';

        //add active class
        bg3.classList.add('active');
        //remove active class from the others
        bg2.classList.remove('active');
        bg1.classList.remove('active');
        changeBg();
       })