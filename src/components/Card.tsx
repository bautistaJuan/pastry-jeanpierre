
export default function Card({ title, imgUrl }: { title: string, imgUrl: string }) {
    return (
        <div className="flex flex-col  min-w-[11rem] min-h-[21rem] sm:w-[24rem] sm:h-[24rem] bg-white sm:bg-white shadow-lg hover:shadow-2xl mt-3">
            <figure>
                <img src={imgUrl} alt="Card Preview" className=" h-[17rem] w-[21rem] sm:h-[19rem]  sm:w-[24rem]" />
            </figure>
            <div className="flex flex-col p-4">
                <div className="text-[1rem] sm:text-[1.5rem] text-center uppercase">{title}</div>
            </div>
        </div>
    )
}
