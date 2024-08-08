
export default function Card({ title, imgUrl, especial }: { title: string, imgUrl: string, especial?: string }) {
    return (
        <div className="p-3 text-center text-white w-[400px] border ">
            <img src={imgUrl} alt="" />
            <h1>{title}</h1>
        </div>
    )
}
