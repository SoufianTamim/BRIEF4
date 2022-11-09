// date=======================================================
function date(day , month ,year){

  let leap = year % 400 == 0 || (year % 100 != 0 && year % 4 == 0);
  let case1 = (year>0) && (month ==1 || month == 3 || month == 5 || month == 7
      || month == 8 || month == 10 || month == 12) && (day>=1 && day<=31);
  let case2 = (year>0) && (month == 4 || month == 6 || month == 9 || month == 11)
      && (day>=1 && day<= 30);
  let case3 = (year>0) && (month == 2) && !leap && (day>=1 && day<=28);
  let case4 = (year>0) && (month == 2) && leap && (day>=1 && day<=29);
  
  if(case1 || case2 || case3 || case4){
      return  true;
  }else{
      return false;
  }
  }
  function bouttonClick(){
  let day = document.getElementById('day').value;
  let month = document.getElementById('month').value;
  let year = document.getElementById('year').value;
  if(date(day,month,year)){
  document.getElementById('ex2result').innerHTML = `${day} /  ${month} /  ${year}  est valide.`
  }else{
      document.getElementById('ex2result').innerHTML = `${day} /  ${month} /  ${year}  n'est pas valide.`
  }
  }