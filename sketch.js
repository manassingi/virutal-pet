//Create variables here
var dog,happydog,database,foodS,foodStock;
var lastFeed,feedTime;
var Feed,addFood;
var foodObject;
var dogimg,doghappy;
function preload()
{
  //load images here
  dogimg= loadImage("dog.png")
  doghappy= loadImage("dog1.png")
}

function setup() {
  database=firebase.database();
  createCanvas(800, 700);
  
 dog=createSprite(400,200,50,50);
  dog.addImage(dogimg);
  dog.scale=0.4
  foodStock= database.ref('Food');
  foodStock.on("value",readStock)

  foodObject=new Food()
  Feed= createButton("Feed The Dog")
  Feed.position(700,95);
  Feed.mousePredded(FeedDog);

  addFood=createButton("Add Food")
  addFood.position(800,95);
  addFood.mousePredded(addFoods);
}


function draw() {  
  background("white")
foodObject.display()
  feedTime=database.ref("FeedTime")
  feedTime.on("value",function(data){
    lastFeed.val()
  })

  fill(255,255,255);
  textSize(15);
  if(lastFeed>12){
    text("Last Feed :"+ lastFeed% + "PM",350,30)

  }else if(lastFeed==0){
  text("Last Feed : 12 AM",350,30);
  }else{
    text("Last Feed : "+ "AM",350,30);
  }
   

  drawSprites();
  //add styles here
  text("Food Reamaining :"+ foodS,200,200)
}

function FeedDog(){

dog.addImage(doghappy);
foodObject.updateFoodStock(foodObject.getFoodStock-1);
database.ref("/").update({
Food:foodObject.getFoodStock(),
FeedTime:hour()

})
}
function readStock(data){

  foodS=data.val()
  foodObject.updateFoodStock(foodS)
}

function AddFoods(){

  foodS++
  database.ref("/").update({
    Food:foodS

  })
}
