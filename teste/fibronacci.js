var x= 1
var y= 0
var z= 0

for(var i=0;i<5;i++){
    z= x+y
    x= y
    y= z

    console.log(y)
}