'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = platzom;
function platzom(str) {
  var translation = str;

  if (wordIsPalindroma(str)) return intercalarMinMayus(str);
  if (wordTerminaEn(str, "ar")) translation = str.slice(0, -2);
  if (wordIniciaEn(translation, 'z')) translation += 'pe';
  if (wordTieneMasDeNLetras(str, 10)) {
    var firstHalf = str.slice(0, Math.round(str.length / 2));
    var secondHalf = str.slice(Math.round(str.length / 2, str.length));
    translation = firstHalf + '-' + secondHalf;
  }
  return translation;
}

function wordTerminaEn(palabra, terminacion) {
  if (palabra.toLowerCase().endsWith(terminacion.toLowerCase())) return true;else return false;
}

function wordIniciaEn(palabra, iniciales) {
  if (palabra.toLowerCase().startsWith(iniciales.toLowerCase())) return true;else return false;
}

function wordTieneMasDeNLetras(palabra, nLEtras) {
  if (palabra.length >= nLEtras) return true;else return false;
}

function wordIsPalindroma(palabra) {
  if (palabra.split('').reverse().join('') == palabra) return true;else false;
}

function intercalarMinMayus(palabra) {
  var length = palabra.length;
  var nuevaPalabra = '';
  var capitalize = true;

  for (var i = 0; i < length; i++) {
    var char = palabra.charAt(i);
    nuevaPalabra += capitalize ? char.toUpperCase() : char.toLowerCase();
    capitalize = !capitalize;
  }
  return nuevaPalabra;
}