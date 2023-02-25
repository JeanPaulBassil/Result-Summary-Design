export default function Description({score}) {
    const performance = _ => {
        if (score >= 90) return ['Excellent', 'You scored higher than 85% of people']
        else if (score >= 80) return ['Great', 'You scored higher than 65% of people']
        else if (score >= 70) return ['Not enough', "You're above nearly half the people"]
        else return ['Fail', 'Most people passed over you'] 
    }
    
    return (
        <div className="description">           
        <h3>{performance()[0]}</h3>
        <p>{performance()[1]}</p>

        </div>
    )
};
