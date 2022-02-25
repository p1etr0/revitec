
function goToLocationRevitec() {
  window.open('https://g.page/revitecauto?share', '_blank');
}

function toFormUrlEncoded(str) {
  return encodeURIComponent(str).replace(/[!'()*]/g, function(c) {
    return '%' + c.charCodeAt(0).toString(16);
  }).replace(/%20/g, "+");
}

function enviarMensagem(str){
  window.open(str, '_blank');
}

document.getElementById("submit").onclick = function(e) {
  let inputwpp = document.getElementById("inputwpp").value
  let urlFormatada = "https://api.whatsapp.com/send?phone=55499989164766&text=" + toFormUrlEncoded(inputwpp)
  enviarMensagem(urlFormatada);
}