import '@/Components/BrewCard/BrewCard.css'
export default function BrewCard({ brew }) {
    const imgLocation = '/brewImages/'

    return (

        <div className='brew-card'>
            <img className='brew-image' src={imgLocation + brew.brew_image} alt='Brew Image'></img>
            <h1 className='brew-name'>{brew.brew_name}</h1>
            <div className='brew-text-container'>
                <p className='brew-style'><span className="brew-word-style">Style:</span> {brew.brew_style}</p>
                <p className='brew-abv'><span className="brew-word-style">ABV: </span>{brew.brew_abv}%</p>
                <p className='brew-description'><span className="brew-word-style">Tasting Notes: </span>{brew.brew_description}</p>
            </div>
        </div>
    );
}