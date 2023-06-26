import React from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
  return (
    <article>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8X_5ZQeRpoUjSzx7zxD90DlfpOMgtVZZldc2GgIOFMU9wGAbSR8ui&usqp=CAE&s' alt='lugo'/>
      <section>
        <TwitterFollowCard></TwitterFollowCard>
      </section>
    </article>
  )
}