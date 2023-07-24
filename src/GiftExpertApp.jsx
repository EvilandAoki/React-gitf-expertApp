import { useState } from "react"
import { AddCategory } from './categories/AddCategory'
import { GiftGrid } from "./giftGrid/GiftGrid"


export const GiftExpertApp = () => {

    const [categories, setcategories] = useState(['One Punch'])

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setcategories([newCategory, ...categories])
    }

    return (
        <>
            {/* titulo */}
            <h1> GiftExpert App </h1>
            {/* Input */}
            <AddCategory
                onNewCategory={event => onAddCategory(event)}
            />
            {/* listado de gifts */}

            {
                categories.map(category => (
                    <GiftGrid key={category} category={category} />
                ))
            }

            {/* gift item */}
        </>
    )
}
