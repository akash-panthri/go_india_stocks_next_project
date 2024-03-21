
import OptionFoot from './OptionFoot'
import OptionHead from './OptionHead'



export default function DiscussionFormOption({discussionFormElement}) {
  return (
    <div className='shadow-xl bg-gray-100 py-1 my-5 px-5 sm:py-3' >
    <OptionHead discussionFormElement={discussionFormElement} />
    <div className='sm:mx-40 mx-7 px-4 mb-5'>{discussionFormElement.post_text}

    </div>
    <OptionFoot discussionFormElement={discussionFormElement} />
    </div>
  )
}
