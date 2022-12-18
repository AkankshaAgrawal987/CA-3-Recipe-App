// get random meal on page load
window.onload = () => {
    const RandomFood = document.getElementsByClassName('meal-details-content');
    const modal = document.getElementById('modal');
    axios.get('https://www.themealdb.com/api/json/v1/1/random.php').then((res)=>{
        const Foodimage = document.createElement('img');
        let FoodImage = res.data.meals[0].strMealThumb;
        Foodimage.setAttribute('src',FoodImage);
        Foodimage.setAttribute('height','600px');
        Foodimage.setAttribute('id','image')
        Foodimage.onclick = () =>{
            axios.get('https://www.themealdb.com/api/json/v1/1/random.php').then((res)=>{
                document.querySelector('.modalContent').innerHTML = res.data.meals[0].strInstructions;
            }).catch((err)=>{
                console.log('Sorry.')
            })
            modal.style.display = 'block';
        }
        modal.onclick = function(e){
            if(e.target == modal){
                modal.style.display = 'none';
            }
        }
        const Foodname = document.createElement('h1')
        let FoodName = res.data.meals[0].strMeal;
        Foodname.setAttribute('src',FoodName)
        Foodname.innerText = FoodName;
        RandomFood[0].append(Foodimage);
        RandomFood[0].append(Foodname);
    }).catch((err)=>{
        console.log('Product Issue')
    })
};

