document.write("<div id='saurav'><\/div>");
var id='1XD84Bz1UcWrBS2PTBOcEJRbS5L1pT2r7y7drodVpjAY';
var gid = '262345370';
var source='B2:B2';
var url = 'https://docs.google.com/spreadsheets/d/'+id+'/gviz/tq?tqx=out:json&tq&gid='+gid+'&single=true&range='+source;
fetch(url)
  .then(response => response.text())
  .then(data => document.getElementById("saurav").innerHTML=myItems(data.slice(47, -2))  
  );
function myItems(jsonString){
  var json = JSON.parse(jsonString);
  var table = ""
 json.table.cols.forEach(colonne => table += '' + colonne.label + "")
  table += ''
  json.table.rows.forEach(ligne => {
    table += ''
    ligne.c.forEach(cellule => {
        try{var valeur = cellule.f ? cellule.f : cellule.v}
        catch(e){var valeur = ''}
        table += "" + valeur + ""
      }
    )
    table += ''
    }
  )
  table += ''
  return table
}
  
