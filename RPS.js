let possibleplays = [Rock, Paper, Scissors]

function computerPlay() {
    let choice = Math.floor(Math.random() * 3)
    return (possibleplays[choice])
}