const throttling = () => {
  const search = document.querySelector('.search');
  const showButton = document.querySelector('.showButton');
  const textResult = document.querySelector('.result');
  search.timer = null;
  showButton.timer = null;
  let scrollTimer = null;
  let result;
  let {max, min} = 0;
  let wind;
  let pageTop = window.pageYOffset;

  search.addEventListener('input', (e) => {
    const query = e.target.value;

    if(query.length>3) {
      clearInterval(search.timer);
      search.timer = setTimeout(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => {console.log(json); result = json})
      }, 500);
    }
  });

  showButton.addEventListener('click', () => {
      clearInterval(showButton.timer);
      showButton.timer = setTimeout(()=>{
        textResult.innerHTML=result;
        clearInterval(showButton.timer);
      }, 300);
  });

  document.addEventListener('scroll', () => {
    wind = window.pageYOffset;
    if(max< wind) { max = wind}
    window.scrollTo(0, pageTop);
    clearInterval(scrollTimer);
      scrollTimer = setTimeout(()=> {
        if(max>pageTop) {
          pageTop+=20;
        } else {
          pageTop-=20;

        }
        max = 0;
      }, 300);
  })
}

export default throttling;