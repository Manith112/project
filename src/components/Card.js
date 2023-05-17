export function Card({title, thumbnail}){
    return(
        <div class="card">
            <img src={thumbnail} class="card-img-top" alt="..."/>
            <div class="card-body">
    
            <p class="card-text">{title}</p>
    
  </div>
</div>
    )
}
