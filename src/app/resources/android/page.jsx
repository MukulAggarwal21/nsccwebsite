import CardBox from "@/components/card"
import Link from "next/link"



const Page = () => {
  const Resources=[
    {
      id:1,
      playerLink:'',
      link:''
    }
  ]
  return (
    <>
    <section className="bg-white dark:bg-gray-900 mx-auto max-w-screen-xl">
    <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white"> ANDROID RESOURCES
        <div class="flex justify-center mx-auto mt-6">
                <span class="inline-block w-60 h-1 bg-blue-500 rounded-full"></span>
                <span class="inline-block w-12 h-1 mx-1 bg-blue-500 rounded-full"></span>
                <span class="inline-block w-6 h-1 bg-blue-500 rounded-full"></span>
            </div></h1>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4"> 
        {
          Resources.map((resource)=>{
            return(
              <Link key={resource.id} href={resource.link}>
        <CardBox link={resource.playerLink}/>
        </Link>
            )
          })
        }
           </div>                       
    </div>
</section>
</>
  )
}

export default Page
