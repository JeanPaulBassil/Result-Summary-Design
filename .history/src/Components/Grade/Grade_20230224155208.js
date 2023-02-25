import "./Grade.css"

export default function Grade({score}) {
    return (
        <div className="grade">
            <h1>{score}</h1>
            <p>of 100</p>
        </div>
    )
};
