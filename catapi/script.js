window.onload = FnGetCatData('Home');
var randomCatImageURL = '';
function FnGetCatData(args) {
    var apiData_URL = "https://cataas.com/api/cats";
    var apiData_Search_URL = "https://cataas.com/api/cats?tags=";
    if(args == 'Search'){
        var inputValue = document.getElementById("myInput").value;
        if (!inputValue) {
            alert("value is empty");
        }
    }
    if(args == 'Reset')
    document.getElementById("myInput").value = '';
    var getDataURL = apiData_URL;
    if(args == 'Search')
    getDataURL = apiData_Search_URL + inputValue;
    fetch(getDataURL).then(function (res) {
        return res.json();
    }).then(function(arrData) {
        FnLoadData(arrData)
    })
    .catch(function (err) {
      console.log(err);
    });
}
function FnLoadData(arrData) {
    var ranNumber = Math.round((Math.random() * arrData.length));
    document.getElementById('catFetchResults').innerHTML = '';
    for(i=0;i<arrData.length;i++){
        var catData = arrData[i];
        if(catData.tags && catData.tags.length > 0){
            var catImg = document.createElement('img')
            document.getElementById('catFetchResults').append(catImg)
            catImg.setAttribute('id',catData.id);
            catImg.src = 'https://cataas.com/cat/' + catData.id;
            if(i == ranNumber)
            randomCatImageURL = catImg.src;
        }
    }
}
function FnShowModal(){
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById('modalImg');
    modal.style.display = "block";
    modalImg.src = randomCatImageURL;
}
function FnCloseModal(){
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}