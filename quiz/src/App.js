import React from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
  return (
    <section className='App'>
      <TwitterFollowCard 
        isFollowing={true} 
        userName="midudev" 
        name="Miguel Ángel Durán" 
      />
      <TwitterFollowCard 
        isFollowing={false} 
        userName="pherald" 
        name="Pablo Hernandez" 
      />
      <TwitterFollowCard 
        isFollowing={false} 
        userName="rehivax" 
        name="Kenneth Manzano Lepe" 
      />
      <TwitterFollowCard 
        isFollowing={false} 
        userName="lemosdg1" 
        name="Diego Lemos Garcia" 
      />
    </section>
  )
}