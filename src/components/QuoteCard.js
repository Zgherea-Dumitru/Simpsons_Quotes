
export default function QuoteCard({quote, character, image, characterDirection}) {
    return(
        <div>
            <h1>{character}</h1>
            <p>{quote}</p>
            <img src={image} alt={character}/>
        </div>
    )
}