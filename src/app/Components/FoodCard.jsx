import Image from "next/image";

const FoodCard = ({food}) => {
    const {dish_name, category, image_link} = food;
    return (
        <div className="card bg-base-100 shadow-sm">
  <figure>
    <Image src={image_link} alt="Image Comming" width={90} height={60}></Image>
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {dish_name}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
    );
};

export default FoodCard;