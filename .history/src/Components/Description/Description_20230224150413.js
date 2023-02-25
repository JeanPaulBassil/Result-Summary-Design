export default function Description({score}) {
    const {performance, info}= score => {
        if (score >= 90) return ('Excellent', 'You scored higher than 85% of people')
        else if (score >= 80) return 'Great'
        else if (score >= 70) return 'Not enough'
        else return 'Fail'
    }
    
    return (
        <div className="description">           
        <h3>{performance}</h3>

        </div>
    )
};
