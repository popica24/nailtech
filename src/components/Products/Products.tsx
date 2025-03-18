const Products = () => {
  return (
    <>
      {" "}
      <section
        className="section-services relative py-[50px] max-[991px]:py-[40px] max-[767px]:py-[35px]"
        id="services"
      >
        <div className="flex flex-wrap justify-between relative items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
          <div className="flex flex-wrap w-full mb-[-24px]">
            <Product name="Produs 1" description="Descriere" price="200" />
            <Product name="Produs 1" description="Descriere" price="200" />
            <Product name="Produs 1" description="Descriere" price="200" />
            <Product name="Produs 1" description="Descriere" price="200" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;

type ProductProps = {
  image?: string;
  name: string;
  description: string;
  price: string;
};

const Product = (props: ProductProps) => {
  return (
    <div className="montserrat-300 cursor-pointer mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
      <img
        className="h-48 w-full object-cover object-center"
        src="https://images.unsplash.com/photo-1674296115670-8f0e92b1fddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        alt="Product Image"
      />
      <div className="p-4">
        <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">
          {props.name}
        </h2>
        <p className="mb-2 text-base dark:text-gray-300 text-gray-700">
          {props.description}
        </p>
        <div className="flex items-center">
          <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
            RON {props.price}
          </p>
        </div>
      </div>
    </div>
  );
};
