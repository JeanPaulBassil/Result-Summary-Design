import Description from "../Description/Description";
import Grade from "../Grade/Grade";
import data from "../../data.json";

export default function Result() {
    const score = data.reduce((totalGrade, category) => totalGrade + category.score , 0) / data.length
    
    return (
        <div className="result">
            <h3>Your Result</h3>
            <Grade score={score}/>
            <Description score={score}/>
        </div>
    )
};
