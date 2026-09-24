import FoodCard from "../Components/FoodCard";

const MenuPage = async() => {
    const res = await fetch ('https://phi-lab-server.vercel.app/api/v1/lab/foods/top-foods');
    const data = await res.json();
    const foods = data.data;
    // console.log('menu page', foods);
    return (
        <div>
                <h1>Our Menu</h1>
                <div className="grid grid-cols-3 gap-3">
                    {
                        foods.map(food => <FoodCard key={food.id} food = {food}></FoodCard>)
                    }
                </div>
        </div>
    );
};

export default MenuPage;