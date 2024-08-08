import { Items } from "../types/items-props";
import Card from "./Card";

type TypeItem = 'servicios' | 'especial';

export default function Services({ items, type }: { items: Items[], type?: TypeItem }) {

    const itemsSinDescription = items.filter(item => !item.description)
    const itemsConDescription = items.filter(item => item.description)

    return (
        <>
            {
                itemsConDescription.map((item, index) => (
                    item.description === type ? (
                        <Card key={index} title={item.title} imgUrl={item.file.url} />
                    ) : null
                ))
            }
            {
                !type && itemsSinDescription.map((item, index) => (
                    <Card key={index} title={item.title} imgUrl={item.file.url} />
                ))
            }
        </>
    )
}
