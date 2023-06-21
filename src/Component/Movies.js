const Movies = (props) => {
  return (
    <div className = "movies">
        <img src = {props.img} alt = "No image" />
        <p>{props.title}</p>
        <p> Year : {props.year}</p>
    </div>
  )
}

export default Movies
// const Movies = ({img,title,year}) => { --> THIS IS ALSO RIGHT
//   return (
//     <div className = "movies">
//         <img src = {img} alt = "No image" />
//         <p>{title}</p>
//         <p> Year : {year}</p>
//     </div>
//   )
// }

// export default Movies