const Faq = () => {
  return (
   <div className="w-11/12 mx-auto mb-3">
    <div className="mb-3">
        <h2 className="text-2xl font-bold  text-center ">Questions and Answer</h2>
        <p className="text-center  mt-2">Look at the bottom for know the FAQ</p>
    </div>
     <div className="join join-vertical w-full ">
      <div className="collapse collapse-arrow border-none join-item border-base-300 border">
        <input type="radio" name="my-accordion-4" defaultChecked />
        <div className="collapse-title text-xl font-medium">
        Is it delicious to eat all the food at once?
        </div>
        <div className="collapse-content">
          <p>yes, You can buy the meal for yourself and have to pay for this. </p>
        </div>
      </div>
      <div className="collapse border-none collapse-arrow join-item border-base-300 border">
        <input type="radio" name="my-accordion-4" />
        <div className="collapse-title text-xl font-medium">
          Can I order the meal in bulk?
        </div>
        <div className="collapse-content">
          <p>You can order any kind of meals from the meals page.</p>
        </div>
      </div>
      <div className="collapse border-none collapse-arrow join-item border-base-300 border">
        <input type="radio" name="my-accordion-4" />
        <div className="collapse-title text-xl font-medium">
          Can I review the meal before ordering?
        </div>
        <div className="collapse-content">
          <p>yes,You can review it before you buy the meal but it will be greatness after buy the meals .</p>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Faq;
