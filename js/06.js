function zero(){
  return [];
}

function succ(a){
  a.push(true);
  return a;
}

function ten(){
  var a = zero();
  while(a.legnth < 10){
    a = succ(a);
  }
  return a;
}
