export default function platzom(str){
  let translation = str;

  if(wordIsPalindroma(str))
    return intercalarMinMayus(str);
  if(wordTerminaEn(str, "ar"))
    translation = str.slice(0, -2);
  if(wordIniciaEn(translation, 'z'))
    translation += 'pe';
  if(wordTieneMasDeNLetras(str, 10))
  {
    const firstHalf = str.slice(0, Math.round(str.length / 2));
    const secondHalf = str.slice(Math.round(str.length / 2, str.length));
    translation = `${firstHalf}-${secondHalf}`
  }
  return translation;
}

function wordTerminaEn(palabra, terminacion)
{
  if(palabra.toLowerCase().endsWith(terminacion.toLowerCase()))
    return true;
  else
    return false;
}

function wordIniciaEn(palabra, iniciales){
  if(palabra.toLowerCase().startsWith(iniciales.toLowerCase()))
    return true;
  else
    return false;
}

function wordTieneMasDeNLetras (palabra, nLEtras){
  if(palabra.length >= nLEtras)
    return true;
  else
    return false
}

function wordIsPalindroma (palabra){
  if(palabra.split('').reverse().join('') == palabra)
    return true
  else
    false
}

function intercalarMinMayus (palabra){
  const length = palabra.length;
  let nuevaPalabra = '';
  let capitalize = true;

  for(let i = 0; i < length; i++){
    const char = palabra.charAt(i);
    nuevaPalabra += capitalize ? char.toUpperCase() : char.toLowerCase()
    capitalize = !capitalize;
  }
  return nuevaPalabra;
}
