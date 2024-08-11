
export default function Card({ title, imgUrl }: { title: string, imgUrl: string }) {
    return (
        <div className="flex flex-col rounded-2xl w-[22rem] lg:w-96 bg-transparent shadow-sm shadow-[#84466d] mb-7">
            <figure className="flex justify-center items-center rounded-2xl">
                <img src={imgUrl} alt="Card Preview" className="rounded-t-2xl h-[20rem] w-[22rem]" />
            </figure>
            <div className="flex flex-col p-4">
                <div className="text-2xl font-bold uppercase  text-[#30456E] text-center">{title}</div>
            </div>
        </div>
    )
}
