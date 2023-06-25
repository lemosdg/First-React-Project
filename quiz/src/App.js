import React from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {
  return (
    <section className='App'>
      <TwitterFollowCard isFollowing={true} userName="midudev">
        Miguel Ángel Durán
      </TwitterFollowCard>
      <TwitterFollowCard isFollowing={false}>
        Pablo Hernandez
      </TwitterFollowCard>
      <TwitterFollowCard isFollowing={false} userName="rehivax">
        Kenneth Manzano Lepe
      </TwitterFollowCard>
      <TwitterFollowCard isFollowing={false} userName="lemosdg1">
        Diego Lemos Garcia
      </TwitterFollowCard>
    </section>
  )
}