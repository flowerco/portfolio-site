export const ItemList = ({ itemData }) => {

  return (
    <>
      {itemData.map((item, index) => {
        return (
          <a key={index} href={item.url} className="flex flex-col rounded-lg h-full w-72 bg-customYellow cursor-pointer">
            <div className="h-2/5">
              <img src={item.image} alt="App pic" className="h-full w-full object-cover object-top rounded-t-lg"/>
            </div>
            <div className="h-3/5 p-4">
              <p className='text-2xl font-bold'>{item.title}</p>
              <p className='text-base'dangerouslySetInnerHTML={{ __html: item.description }} ></p>
            </div>
          </a>
        )
      })}
    </>
  );
}