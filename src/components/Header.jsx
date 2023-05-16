import React from 'react'

export default function Header() {
  return (
   <nav>
    <h1>TechStar.</h1>
    <main>
        <link to={"/"}> Home </link>
        <link to={"/contact"}> Contact </link>
        <link to={"/about"}> About </link>
        <link to={"/brands"}> Brands </link>
        <link to={"/services"}> Services </link>
    </main>
   </nav>
  )
}
