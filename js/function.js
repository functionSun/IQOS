{
  const $wrap = document.querySelector('#wrap');
  const $header = document.querySelector('header');
  const $logo = document.querySelector('header>.container>.logo:nth-child(2)');
  
  const $gnb = document.querySelector('header > .container > .topmnu_1 > .gnb_2 > li');
  const $icon = document.querySelector('header > .container > .topmnu_1 > .icon_2 > li');
  const $gnb2 = document.querySelector('header > .container > .topmnu_2 > .gnb_1 > li');

  const $on = document.querySelector('.on>a');
  const $visual = document.querySelector('#visual');
  const $visualH2 = document.querySelector('#visual>h2');
 
  $wrap.addEventListener('click', function(evt){
    evt.preventDefault();
  })//앵커 클릭방지


  $on.style.color = 'white';
  $gnb2.nextElementSibling.style.color = 'white';
  $gnb2.nextElementSibling.style.color = 'white';
  
  window.addEventListener('scroll', function(){
    
    const scrollTop = Math.ceil(window.scrollY);
    
    if(scrollTop>0){//아이콘이 검은색이 나와야함
      $header.style.backgroundColor = 'white';
      $logo.style.display = 'block';
      $visual.style.backgroundColor = 'white';
      $visualH2.style.color = 'black';
      $on.style.color = '#555';
      
      $gnb.style.display = 'block';
      $gnb.nextElementSibling.style.display = 'block';
      $icon.style.display = 'block';
      $icon.nextElementSibling.style.display = 'block';
      $icon.nextElementSibling.nextElementSibling.style.display = 'block';
      
      
    }else{//아이콘이 흰색이 나와야함
      $header.style.backgroundColor = 'black';
      $logo.style.display = 'none';
      $visualH2.style.color = 'white';
      $visual.style.backgroundColor = 'black';
      $on.style.color = 'white';
      
      $gnb.style.display = 'none';
      $gnb.nextElementSibling.style.display = 'none';
      $icon.style.display = 'none';
      $icon.nextElementSibling.style.display = 'none';
      $icon.nextElementSibling.nextElementSibling.style.display = 'none';

  }


  
  });
  
  }
  
  {
    const $mnus = document.querySelectorAll('header > .container .topmnu_2 > .gnb.gnb_1 li>a');
    const $after = document.querySelectorAll('.on:after');
    const $logo = document.querySelector('.logo:nth-child(2)>a');

    
  
    const arrTopVal = [];
  
    let nowIdx = 0;
    let oldIdx = nowIdx;
  
    document.querySelectorAll('article').forEach(function($article, idx){
      arrTopVal[idx] = $article.offsetTop;
    });
  
    $mnus.forEach(function($mnu, idx){
      $mnu.addEventListener('click', function(evt){
          evt.preventDefault();
  
          window.scrollTo({top:arrTopVal[idx]-115, behavior:'smooth'});
      });
    });
  
    window.addEventListener('scroll', function(){
      
      const scrollTop = Math.ceil(window.scrollY);
      console.log(`scrollTop = ${scrollTop}`);
  
      for(let i=0;i<$mnus.length;i++){
  
          if(scrollTop >= arrTopVal[i]-120){
  
              oldIdx = nowIdx;
              nowIdx = i;

      
              $mnus[oldIdx].parentElement.classList.remove('on');
              $mnus[nowIdx].parentElement.classList.add('on');
              
          }
        }


      $logo.addEventListener('click', function(evt){
        evt.preventDefault();
        window.scrollTo({top:0, behavior:'smooth'});
    });
  
  });

  
  }
  
  {
  const $slides = document.querySelector('.slides-container');
  const $btnPrev = document.querySelector('section> article > .slides-navigation.prev');
  const $btnNext = document.querySelector('section> article > .slides-navigation.next');
  
  let nowIdx = null;
  
  $btnPrev.style.display = 'none';
  
  $btnPrev.addEventListener('click', function(evt){
      evt.preventDefault();
  
      if(nowIdx>0){
          nowIdx--;
      }
  
      $slides.style.left = -251*nowIdx + 'px';
  
      
      if(nowIdx<1){
        $btnPrev.style.display = 'none';
      }
  
      if(nowIdx<4){
        $btnNext.style.display = 'block';
      }
  
  
  });
  
  $btnNext.addEventListener('click', function(evt){
      evt.preventDefault();
  
      if(nowIdx<4){
       nowIdx++;
      }
  
      $slides.style.left = -251*nowIdx + 'px';
  
      if(nowIdx>0){
        $btnPrev.style.display = 'block';
      }
  
  
      if(nowIdx>3){
        $btnNext.style.display = 'none';
        $btnPrev.style.display = 'block';
      }
  
  });
  }