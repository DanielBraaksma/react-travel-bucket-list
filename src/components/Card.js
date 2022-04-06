export default function Card (props) {
    console.log(props)
    return (
         <div className="card">
            <img src={props.item.imageUrl} />
         </div>
    )
}
