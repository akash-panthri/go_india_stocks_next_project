 
import MarketStoriesOption from './MarketStoriesOption'
import marketStoriesElements from '../../../data/marketStoriesElement.json'
export default function MarketStories({currTab, tabName}) {
  return (
    <div className={` ${currTab === tabName ? "block":"hidden"} sm:block sm:w-4/12 w-[calc(100vw_-_22px)] bg-white p-9`}>
    
   
    {marketStoriesElements.map(marketStoriesElement=>{
      return  <MarketStoriesOption key={marketStoriesElement.id} marketStoriesElement={marketStoriesElement} />
    })}
   
    </div>
  )
}
