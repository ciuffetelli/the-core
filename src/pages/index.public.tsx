import FormLogin from '@/elements/FormLogin'
import Template from '@/templates'

export default function Home() {
  return (
    <Template title='The Core'  className='flex flex-wrap-reverse gap-8 justify-center items-center h-full'>
      <div className='flex flex-1 justify-center'>
        LEFT
      </div>
      <div className='flex flex-1 min-w-fit justify-center'>
        <FormLogin />
      </div>
    </Template>
  )
}
