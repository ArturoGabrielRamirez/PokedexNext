import { typesColorChips } from "../utils"

function ChipsTypes({ item }: { item: any }) {
    
    return (item.types.map((type: any) => {
        let color = typesColorChips[type.type.name]
       
        return (
            <div key={type.type.name} className={`text-center border-2 rounded-full ${color}`}>{type.type.name}</div>
        )
    }
    ))
}
export default ChipsTypes
