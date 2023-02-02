import { useState } from "react"

const Panels = () => {
    const [selected, setSelected] = useState(0);
    const panels = [
        {
            title: "Panel A",
            color: "bg-red-400"
        }, {
            title: "Panel B",
            color: "bg-yellow-400"
        }, {
            title: "Panel C",
            color: "bg-orange-400"
        }, {
            title: "Panel D",
            color: "bg-blue-400"
        }, {
            title: "Panel E",
            color: "bg-green-400"
        },
    ]
    return (
        <div className="mt-10">
            <div className="flex justify-between gap-2 transition">
            {panels.map((panel, index) =>{
                return (
                    <button className={`${panel.color} ${index === selected && 'flex-grow'} relative w-10 h-80 rounded-3xl min-w-fit transition transition-all ease-in-out duration-500`}
                        onClick={()=> setSelected(index)}>
                        <span className={`${index !== selected && 'hidden'} absolute left-4 bottom-4`}>{panel.title}</span>
                    </button>
                )
            })}
            </div>
            
        </div>
    )
}

export default Panels;