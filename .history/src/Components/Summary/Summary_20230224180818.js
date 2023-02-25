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
                <div className="secGrade">
                    <p>{part.score}</p>
                    <p>/ 100</p>
                </div>
            </div>
        )
    })
    
    return (
        <div className="summary">
            <h3>Summary</h3>
            <div>
                {summary}
            </div>
            <div className="button">

            </div>
        </div>
    )
};
