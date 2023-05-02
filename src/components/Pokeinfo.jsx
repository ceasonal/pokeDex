const Pokeinfo = ({ data }) => {
   
    return (
        <>
        {
            (!data) ? "" : (
                <>
                    <h2>{data.name}</h2>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`} alt=""  style={{width:"100px"}}/>
                    <div className="abilities">
                        {
                            data.abilities.map(poke=>{
                                return(
                                    <>
                                     <div className="group">
                                        <h4>{poke.ability.name}</h4>
                                    </div>
                                    </>
                                )
                            })
                        }
                    </div>
                    <div className="stats">
                        {
                            data.stats.map(poke=>{
                                return(
                                    <>
                                        <h3>{poke.stat.name}:{poke.base_stat} <input type="range" min="0" max="200" value={poke.base_stat} /></h3>
                                       
                                    </>
                                )
                            })
                        }
                    </div>
                </>
            )
        }

        </>
    )
}
export default Pokeinfo