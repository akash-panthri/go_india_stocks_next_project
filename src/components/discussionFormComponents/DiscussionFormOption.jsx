
import OptionFoot from './OptionFoot'
import OptionHead from './OptionHead'



export default function DiscussionFormOption({discussionFormElement}) {
  return (
    <div className='shadow-xl bg-gray-100 py-3 mb-11 px-3 sm:px-5 sm:py-3 mt-3 text-xs sm:text-2xl' >
    <OptionHead discussionFormElement={discussionFormElement} />
    <div className='mx-3 sm:mx-40 px-4 sm:px-4 mb-5'>{discussionFormElement.post_text}

    </div>
    <OptionFoot discussionFormElement={discussionFormElement} />
    </div>
  )
}
