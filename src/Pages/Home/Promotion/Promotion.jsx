import food1 from '../../../assets/foods/food (1).jpg'
import food2 from '../../../assets/foods/food (2).jpg'


const Promotion = () => {
  return (
    <div className='w-11/12 mx-auto'>
        <div>
            <h3 className='text-3xl font-bold text-center mt-12 mb-4'>Taste the World with HostelVerse</h3>
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
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotion;
