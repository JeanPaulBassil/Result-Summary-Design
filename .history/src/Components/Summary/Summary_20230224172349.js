import data from "../../data.json"
import './Summary.css'

export default function Summary() {
    const summary = data.map(part => {
        return (
            <div className="part">
                <img src={part.icon} alt={part.category}/>
                <p><b>{part.category}</b></p>
                <p><b>{part.score}</b> / 100</p>
            </div>
        )
    })
    
    return (
        <div className="summary">
            <h3>Summary</h3>
            <div>
                {summary}
            </div>
        </div>
    )
};
