import 'bulma/css/bulma.css'
import ProfileCard from "./ProfileCard";
import Alexa from './images/alexa.png'
import Cortana from './images/cortana.png'
import Siri from './images/siri.png'

import React from 'react'

export default function App() {
  return (
    <div>
      <h1 class="has-text-danger is-size-3 has-text-weight-bold" >Professional Steroid Users</h1>

      <div class="container">
        <section class="section">
          <div class="columns">
            <div class="column is-3">
              <ProfileCard title="A-Rod" handle="@roids420" image={Alexa} />
            </div>
            <div class="column is-3">
              <ProfileCard title="Barry Bonds" handle="@cheater69" image={Cortana} />
            </div>
            <div class="column is-3">
              <ProfileCard title="Cancesco" handle="@bashbro666" image={Siri} />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
