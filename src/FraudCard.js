import React from 'react'

// export default function FraudCard(props) {
//   return (
//     <div>
//       <div>Title: {props.title}</div>
//       <div>Handle: {props.handle}</div>
//     </div>
//   )
// }

// THE ABOVE WRITTEN USING DESTRUCTURING
export default function FraudCard({ title, handle, image, description }) {
  // const title = props.title
  // const handle = props.handle

  // THE ABOVE WRITTEN USING DESTRUCTURING
  // const { title, handle } = props

  // COMMON ERROR: UNDEFINED (verify component is receiving the correct data)
  console.log(title, handle)


  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={image} alt="photos"></img>
        </figure>
      </div>

      <div className="card-content">
        <div className="media-content">
          <p className="title is-4">{title}</p>
          <p className="subtitle is-6">{handle}</p>
        </div>
      </div>

      <div className="content">
        {description}
      </div>
    </div>

  )
}

