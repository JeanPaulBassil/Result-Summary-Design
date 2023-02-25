import data from "../../data.json"
import './Summary.css'

export default function Summary() {
    const summary = data.map(part => {
        return (
            <div className={`part ${part.color}`}>
                <div>
                    <img className="icon" src={part.icon} alt={part.category}/>
                    <h4>{part.category}</h4>
                </div>
                <p>{part.score} / 100</p>
            </div>
        )
    })
    
    return (
        <div className="summary">
            <h3>Summary</h3>
            <div>
                {summary}
            </div>
            <p>Button</p>
        </div>
    )
};
