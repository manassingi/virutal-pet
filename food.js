class Food{


constructor(){

this.foodStock=0
this.lastFeed;
this.image=loadImage("Milk.png")
}

getfeedTime(lastFeed){

    this.lastFeed=lastFeed

}
getFoodStock(){
    returnthis.foodStock
}
updateFoodStock(foodStock){

this.foodStock=foodStock

}
deductFoodStock(){

if(this.foodStock>0){
    this.foodStock=this.foodStock=-1;
}






}
display(){

   var x=80
   var y=80;
   if(this.foodStock!=0){
       for(var i=0 ;i<this.foodStock;i++){
           if(i%10==0){
               x=80;
               y=y+50
           }
           image(this.image,x,y,50,50);
           x=x+30
       }
   }
}
}