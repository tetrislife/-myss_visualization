
function scolor(nuit){

if(nuit){
 backgroundColor = inverColor([255,255,255,100]);
// dynamic
 cityHabitText = inverColor([255,255,20,50]);
// text habit city
 cityTextFill = inverColor([255,0,0,100]);
// circles habit city
 cityHabitFill = inverColor([100,0,0,10]);
 parcoursCirclesFill = inverColor([0,0,110,50]);
 rightTextBlue = inverColor([0,0,150,80]);
 rightTextRed = inverColor([150,0,0,100]);
 cityHighlight = rightTextRed;
 city =inverColor([0,0,180,20]);
// dynamic

 parcoursStroke=inverColor([200,200,20,80]);
 parcoursFill = inverColor([130,10,10,180]);
 innerCercleS = inverColor([50,0,100,80]);
 navBar = inverColor([30,50,150,100]);
}
else{
   backgroundColor = [255,255,255,100];
   cityHabitText = [255,255,20,50];
  // text habit city
   cityTextFill = [255,0,0,100];
  // circles habit city
   cityHabitFill = [100,0,0,10];
   parcoursCirclesFill = [0,0,110,50];
   rightTextBlue = [0,0,150,80];
   rightTextRed = [150,0,0,100];
   cityHighlight = rightTextRed;
   city =[0,0,180,20];
   parcoursStroke=[200,200,20,80];
   parcoursFill = [130,10,10,180];
   innerCercleS = [50,0,100,80];
   navBar = [30,50,150,100];
}


 inverColor = (array) =>{
   t =[];
  t[0]=255-array[0];
  t[1]=255-array[1];
  t[2]=255-array[2];
  t[3]=array[3];
  return t;
}


}