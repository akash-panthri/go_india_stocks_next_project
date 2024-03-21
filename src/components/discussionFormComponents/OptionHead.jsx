 
import HeadLeft from './HeadLeft'
import { formatDistanceToNow } from 'date-fns';

export default function OptionHead({discussionFormElement}) {

const parsedDate = new Date(discussionFormElement.post_time_number);

const formattedTime = formatDistanceToNow(parsedDate, { addSuffix: true });
  return (
    <div className='w-full flex justify-between pr-2 sm:pr-7'>
    
    <HeadLeft discussionFormElement={discussionFormElement} />
    <span className='text-blue-500 sm:pr-9 pr-1 pt-5'> {formattedTime}</span>
    </div>
  )
}
