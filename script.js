window.addEventListener("DOMContentLoaded", () => {
  let  headerHalfs = document.querySelectorAll(".header__half"),
    header = document.querySelector(".header");
    
    window.addEventListener("scroll", checkHeaderHalfs);
  
    checkHeaderHalfs();
  
    function checkHeaderHalfs() {
      if (window.pageYOffset < 200) {
        header.classList.remove("top__slide");
      }
       else {
        header.classList.add("top__slide");
      }
      headerHalfs.forEach((headerHalf) => {
        if (window.pageYOffset < 200) {
          headerHalf.classList.add("shown");
        }
         else {
          headerHalf.classList.remove("shown");
        }
      });
      
    }

    
    function hideItems(items){
      items.forEach(item=>{
        item.classList.add('hide');
        item.classList.remove('show','fade');
      });
    }
    
    function showItems(items,i){
       items[i].classList.remove('hide');
       items[i].classList.add('show','fade');
    }
let toursList=document.querySelector('.tour__links__list'),
tourLinksListTitle=document.querySelector('.tour__links__list__title'),
tourItems=document.querySelectorAll('.tour__item'),
tourLinksActive=document.querySelectorAll('.tour__link','.tour__link__active'),
tourCards=document.querySelectorAll('.tour__card'),
selectDestination=document.querySelector('.select__destination'),
destinations=document.querySelectorAll('.destination__item').values,
selectDuration=document.querySelector('.select__duration'),
selectType=document.querySelector('.select__type'),
toursFilter=document.querySelector('.tours__filter'),

mainContent=document.querySelector('.main__content');

const tourNames=['Paris','Bordeaux','Nice','Berlin','Munich','Drezden','Hamburg','Rome','Venecia','Firenze'],
toursDestinations=['All tours','France','Germany','Italy','Tailand',
'India','USA','Mexica','Canada','Dominicana','Marrocco','Tunis'],
toursDurations=['3','4','5','6','7','8','9','10','11','12','13','14','15','16'];

hideItems(tourCards);



tourLinksListTitle.textContent=toursDestinations[0];


function destinationSelect(target){
  if(target==selectDestination){
    hideItems(tourItems);
    let j=Number(target.selectedIndex);
    tourItems.forEach((tourItem,i)=>{
      if(tourItem.dataset.destination==toursDestinations[j]){
        showItems(tourItems,i);
        tourLinksListTitle.textContent=toursDestinations[j];
      }
      
    });
  }
}

function durationSelect(target,destinationSelect){
  if(target==selectDuration){
    hideItems(tourItems);
    let j=Number(target.selectedIndex);
    tourItems.forEach((tourItem,i)=>{
      if(tourItem.dataset.destination==toursDestinations[j]){
        showItems(tourItems,i);
        tourLinksListTitle.textContent=toursDestinations[j];
      }
      
    });
  }
}

toursFilter.addEventListener('change',(event)=>{
  let target=event.target;
  durationSelect(target,destinationSelect);
  destinationSelect(target,durationSelect);
});














/* 
toursFilter.addEventListener('change',(event)=>{
  let target=event.target;
 
    hideItems(tourItems);
    console.log(target.value);
  
    if(target==selectDestination){
      let j=Number(target.selectedIndex);
    tourItems.forEach((tourItem,i)=>{
      if(tourItem.dataset.destination==toursDestinations[j]){
        showItems(tourItems,i);
        tourLinksListTitle.textContent=toursDestinations[j];
      }
      
    });
  }
    else if(target==selectDuration){
        let j=Number((selectDuration.selectedIndex)+3);
        tourItems.forEach((tourItem,i)=>{
            if(tourItem.dataset.duration==j){
               showItems(tourItems,i);
            }  
 });
}
}); */












 /*  toursFilter.addEventListener('change',(event)=>{
    let target=event.target;
    let j=Number(target.selectedIndex);
    tourLinksListTitle.textContent=toursDestinations[j];
    hideItems(tourItems);
    console.log(target.selectedIndex);
        tourItems.forEach((tourItem,i)=>{
          if(target==selectDestination){
            if(tourItem.dataset.destination==toursDestinations[j]){
              showItems(tourItems,i);
           }  
          }
          if(target==selectDuration){
            if(tourItem.dataset.duration==toursDurations[j]){
              showItems(tourItems,i);
           } 
          }
        });
  }); */





  











/* toursFilter.addEventListener('change',(event)=>{
  let target=event.target;
  
  if(target==selectDestination){
    target.addEventListener('change',()=>{
      let j=Number(target.selectedIndex);
      tourLinksListTitle.textContent=toursDestinations[j];
      hideItems(tourItems);
      tourItems.forEach((tourItem,i)=>{
          if(tourItem.dataset.destination==toursDestinations[j]){
             showItems(tourItems,i);
          }  
        
      });
    });
  }

  else if(target==selectDuration){
    selectDuration.addEventListener('change',()=>{
      let j=Number((selectDuration.selectedIndex)+3);
      tourLinksListTitle.textContent=toursDestinations[j];
      hideItems(tourItems);
      tourItems.forEach((tourItem,i)=>{
          if(tourItem.dataset.duration==j){
             showItems(tourItems,i);
          }  
        
      });
    });
  }

}); */









/* 
function destinationSelect(sel,event){

  if(target==sel){
    let j=Number(target.selectedIndex);
    hideItems(tourItems);
    tourItems.forEach((tourItem,i)=>{
        if(tourItem.dataset.destination==toursDestinations[j]){
           showItems(tourItems,i);
        }  
      
    });
  }
}
tourLinksListTitle.textContent=toursDestinations[j];

toursFilter.addEventListener('change',(event)=>{
  let target=event.target;
  destinationSelect(selectDestination,event);
  destinationSelect(selectDuration,event);

});
 */



















  });


/* 

  const tourTitles=['Paris'],
daysQuantity=[3,4,5,6,7,8,9,10,11,12],
cardTitleClasses=['card__title','tour__duration'];



let createCardTitle=function(){
  const cardTitle=document.createElement('div');
  cardTitle.className=cardTitleClasses[0];
  const cardTitleText=document.createElement('h3');
  cardTitleText.textContent=tourTitles[0];
  const cardTitleDays=document.createElement('span');
  cardTitleDays.className=cardTitleClasses[1];
  cardTitleDays.textContent=` (${daysQuantity[3]} days)`;
  cardTitleText.append(cardTitleDays);
  cardTitle.append(cardTitleText);
  tourCard.append(cardTitle);
};

createCardTitle();

const basicInfoClasses=['basic__info','route','route__list','route__point__title','route__point', 
  'countries__visited','countries__visited__list','countries__visited__title','countries__visited__item',
  'type','type__list','type__title','type__item' ];


let createBasicInfo=function(){
  const basicInfo=document.createElement('div');
  basicInfo.className=basicInfoClasses[0];
  const route=document.createElement('div');
  route.className=basicInfoClasses[1];
  const routeList=document.createElement('ul');
  routeList.className=basicInfoClasses[2];
  const routePointTitle=document.createElement('li');
  routePointTitle.className=basicInfoClasses[3];
  const routePoint=document.createElement('li');
  routePoint.className=basicInfoClasses[4];
  routeList.append(routePointTitle);
  routeList.append(routePoint);

  route.append(routeList);
  basicInfo.append(route);
  tourCard.append(basicInfo);
};

createBasicInfo();

 */


/* 
  card__title 
  tour__duration 
  duration 

  basic__info 
  route 
  route__list 
  route__point__title 
  route__point 
  countries__visited 
  countries__visited__list 
  countries__visited__title 
  countries__visited__item 
  type 
  type__list 
  type__title 
  type__item 

  description__block 
  block__description 
  content__image 
  descr__content 
  descr__title 
  item__title 
  descr__text 

  included 
  included__list 
  included__title 
  included__item 

  not__included 
  not__included__list 
  not__included__title 
  not__included__item 

  tour__program 
  tour__program__list 
  tour__program__title 
  tour__program__item 
  day__number 
  day__descr 

  route__map 

  additional__info 
  additional__info__title 
  children__discount  */
/* let cardTitle={
  title:{
    titletag:'h3',
    titletext:tourTitles[0],
    titleCreate:function(){
       cardTitle=document.createElement(this.titletag);
       cardTitle.textContent=this.titletext;
       console.log(cardTitle);
    }
  },
   tourduration:{
    tourdurationtag:'span',
    class:'tour__duration',
    text:`(${daysQuantity[3]} days)`,
    tourDurationCreate:function(){
      cardTitle.appendChild(document.createElement(this.tourdurationtag));
   }
  }
}; */
/* cardTitle.innerHTML=`<h3>Paris
<small class="tour__duration">(
  <span class="duration">
  6
</span>
days)</small>
</h3>`; */
/* 
function showNewTourCard(){

}

showNewTourCard(); */



/* toursList.addEventListener('click',(event)=>{
  let target=event.target;
  tourLinksActive.forEach((tourLink,i)=>{
    if(target==tourLink){
      
    }
  })
}) */


/* console.log(tourCard.children); */



/* let div=document.createElement('div');
let newTourCardBlock=function(i){

    tourCard.append(div);
    div.classList.add(cardTitle.class);
    
    div.append(document.createElement(cardTitle.tagName));
};

newTourCardBlock(0); */



/* 

titles=['Paris'],
classes=['card__title'],
days=[3,4,5,6,7,8,9,10,11,12,13,14],
tagNames=['h3','small','span'],
cardTitle={
  title:{
    titleTag:tagNames[0],
    text:'Paris'
  },
  duration:{
    durationTag:tagNames[1]
  },
  class:classes[0],

  tagName:tagNames[0],
  class:classes[0],
   title:titles[0],
   days:days[0]
},
 basicInfo={

},scriptionBlock={

},
 included={

},
 notIncluded ={

},

 tourProgram={

 }, 
 routeMap={

 },
 additionalInfo={

 };
let tourCardBlocks= [cardTitle, basicInfo, descriptionBlock, included, notIncluded ,
 tourProgram, routeMap, additionalInfo ];
 de
 */






















//Choose destination country

/*     let destinationCountries=document.querySelectorAll('.destination__country__item'),
    destinationCountriesList=document.querySelector('.destination__countries__list'),
    selectedCountries=document.querySelectorAll('.destination__item'),
    selectCountry=document.querySelector('#select__destination');
    console.log(selectCountry.selectedIndex);

    function hideCountries(){
      destinationCountries.forEach(country=>{
        country.classList.add('hide');
        country.classList.remove('show','fade','destination__chosen');
      });
    }

    function showCountries(i){
      destinationCountries[i].classList.add('show','fade','destination__chosen');
      destinationCountries[i].classList.remove('hide');
    }

    showCountries(0);

    
  selectCountry.addEventListener('change',function(){
    hideCountries();
    let i=Number(selectCountry.selectedIndex);
    showCountries(i);
      
  });
 

  let tourLinksList=document.querySelector('.destination__chosen .tour__links__list'),
  tourLinks=document.querySelectorAll('.destination__chosen .tour__link'),
  tourCards=document.querySelectorAll(' .tour__card');
  
  function hideTourCards(){
    tourCards.forEach((tourCard)=>{
      tourCard.classList.add('hide');
      tourCard.classList.remove('show','fade');
    });
  }
  function showTourCard(i){
      tourCards[i].classList.remove('hide');
      tourCards[i].classList.add('show','fade');
  }
  hideTourCards();

  console.log(tourLinksList);

  tourLinksList.addEventListener('click',(event)=>{
    let target=event.target;
      tourLinks.forEach((tourLink,i)=>{
          if(target==tourLink){
            showTourCard(i);
          }
      });
  });

  let durationValues=document.querySelectorAll('.duration__value').values,
  tourDurations=document.querySelectorAll('.tour__duration .duration'),
  selectDuration=document.querySelector('#select__duration');
 

  function hideTourLinks(){
    tourLinks.forEach((tourLink)=>{
      tourLink.classList.add('hide');
      tourLink.classList.remove('show','fade');
    });
  }
  function showTourLink(i){
      tourLinks[i].classList.remove('hide');
      tourLinks[i].classList.add('show','fade');
  }



  selectDuration.addEventListener('change',function(){
     let j=Number(selectDuration.selectedIndex);
     tourLinks.forEach((tourLink,i)=>{
      if(tourDurations[i]===j){
        hideTourLinks();
        showTourLink(i);
      }
     });
  });
 */































