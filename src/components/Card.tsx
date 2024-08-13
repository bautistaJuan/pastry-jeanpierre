
export default function Card({ title, imgUrl }: { title: string, imgUrl: string }) {
    return (
        <div className="flex flex-col min-w-[10rem] h-[18rem] items-center sm:w-[24rem] sm:h-[24rem] bg-white sm:bg-white shadow-lg hover:shadow-2xl mt-3">
            <figure>
                <img src={imgUrl} alt="Card Preview" className=" h-[14rem] w-[10rem] sm:h-[19rem]  sm:w-[24rem]" />
            </figure>
            <div className="flex flex-col p-1">
                <div className="text-[.9rem] sm:text-[1.5rem] text-center font-semibold uppercase">{title}</div>
            </div>
        </div>
    )
}
