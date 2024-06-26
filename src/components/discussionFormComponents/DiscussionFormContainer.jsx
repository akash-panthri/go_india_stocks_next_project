import DiscussionFormOption from "./DiscussionFormOption";
import discussionFormElements from '../../../data/discussionFormElement.json'
export default function DiscussionForm({currTab, tabName}) {
  return (
    <div className={` ${currTab === tabName ?"block":  "hidden"} sm:block sm:w-8/12 w-[calc(100vw_-_22px)] sm:h-auto sm:px-16 px-1 bg-white`} >
   
    {discussionFormElements.map(discussionFormElement=>{
      return <DiscussionFormOption key={discussionFormElement.id} discussionFormElement={discussionFormElement} />
    })}
    </div>
  )
}
