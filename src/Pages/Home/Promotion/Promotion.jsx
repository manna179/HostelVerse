import food1 from '../../../assets/foods/food (1).jpg'
import food2 from '../../../assets/foods/food (2).jpg'


const Promotion = () => {
  return (
    <div className='w-11/12 mx-auto '>
        <div className='my-12'>
            <h3 className='text-3xl font-bold text-center mt-12 mb-2'>Taste the World with HostelVerse</h3>
            <p className='text-center font-semibold '>Connecting Cultures, One Stay at a Time</p>
        </div>
      <div className="hero w-full bg-base-200 ">
        <div className="hero-content w-full flex-col lg:flex-row gap-10">
          <img
            src={food1}
            className="w-[50%] rounded-lg shadow-2xl rounded-br-full "
          />
          <div className="w-[50%]">
            <h1 className="text-2xl font-bold">HostelVerse: Food That Feels Like Family</h1>
            <p className="py-6">
            HostelVerse is a vibrant platform connecting hostel communities through the love of food. Discover diverse flavors, share your favorite dishes, and bond with fellow travelers over authentic culinary experiences. Whether you're savoring local delicacies or hosting a shared meal, HostelVerse turns every bite into a moment of connection and joy.
            </p>
           
          </div>
        </div>
      </div>
      <div className="hero w-full bg-base-200 ">
        <div className="hero-content w-full flex-col lg:flex-row-reverse gap-10">
          <img
            src={food2}
            className="w-[50%] rounded-lg shadow-2xl rounded-bl-full "
          />
          <div className="w-[50%]">
            <h1 className="text-2xl font-bold">HostelVerse: Meals That Bring Hearts Together</h1>
            <p className="py-6">
            HostelVerse is a dynamic hub uniting hostel communities through a shared passion for food. Explore global cuisines, share your signature recipes, and create lasting memories with fellow travelers over delicious meals. From tasting regional specialties to hosting communal feasts, HostelVerse transforms every meal into a celebration of culture and togetherness.
            </p>
      
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotion;
