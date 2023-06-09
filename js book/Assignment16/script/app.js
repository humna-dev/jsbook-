function deleteRow(e){
    var pr=e.parentNode.parentNode
    pr.remove()
}
var img=document.getElementById('img')
function imageChange(){
    img.src='https://images.priceoye.pk/apple-iphone-14-pakistan-priceoye-3j7db.jpg'
}

function restoreImage(){
     img.src='https://images.priceoye.pk/apple-iphone-14-pakistan-priceoye-3j7db.jpg'

}
var counter=document.getElementById('counter').innerHTML

function increment(){
    counter=parseInt(counter)+1
    document.getElementById('counter').innerHTML=counter
}

function decrement(){
    counter=parseInt(counter)-1
    document.getElementById('counter').innerHTML=counter

}