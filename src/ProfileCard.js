import React from 'react'

// export default function ProfileCard(props) {
//   return (
//     <div>
//       <div>Title: {props.title}</div>
//       <div>Handle: {props.handle}</div>
//     </div>
//   )
// }

// THE ABOVE WRITTEN USING DESTRUCTURING
export default function ProfileCard({ title, handle, image }) {
  // const title = props.title
  // const handle = props.handle

  // THE ABOVE WRITTEN USING DESTRUCTURING
  // const { title, handle } = props

  // COMMON ERROR: UNDEFINED (verify component is receiving the correct data)
  console.log(title, handle)


  return (
    <div class="card">
      <div class="card-image">
        <figure class="image is-1by1">
          <img src={image} alt="photos"></img>
        </figure>
      </div>

      <div class="card-content">
        <div class="media-content">
          <p class="title is-4">{title}</p>
          <p class="subtitle is-6">{handle}</p>
        </div>
      </div>
    </div>

  )
}

