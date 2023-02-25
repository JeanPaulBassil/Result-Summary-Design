import data from "../../data.json"

export default function Summary() {
    const summary = data.map(part => {
        return (
            <img src={part.icon} alt={part.category}/>
        )
    })
    
    return (
        <div className="summary">
            
        </div>
    )
};
