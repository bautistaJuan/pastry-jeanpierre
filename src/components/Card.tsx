
export default function Card({ title, imgUrl }: { title: string, imgUrl: string }) {
    return (
        <div className="flex flex-col  w-[11.5rem] sm:w-[15rem] sm:h-[21rem] bg-white shadow-lg hover:shadow-2xl ">
            <figure className="flex justify-center items-center">
                <img src={imgUrl} alt="Card Preview" className=" h-[13rem] sm:h-[15rem] w-[11.5rem] sm:w-[15rem]" />
            </figure>
            <div className="flex flex-col p-4">
                <div className="text-[1rem] sm:text-[1.6rem] font-medium uppercase">{title}</div>
            </div>
        </div>
    )
}
