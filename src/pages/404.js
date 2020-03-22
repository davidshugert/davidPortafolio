import React, { useEffect, useState } from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import Head from "../components/Head"

const random404 = [
  {
    imageSrc: "/images/404Images/Astronaut.png",
    title: "This Page is Lost in Space",
    description:
      "You thought this mission to the moon would be a quick six month thing. Your neighbor offered to look after your dog. Your high school math teacher was impressed. He once said you wouldn’t amount to anything.You sure showed him. But now here you are, fifty feet from your spaceship with no way to get back. Your dog will be so sad. Your math teacher will be so smug. Pretty devastating.",
    textColor: "black",
    color: "white",
  },
  {
    imageSrc: "/images/404Images/Balloon Lost.png",
    title: "This Page is Lost in the Wind",
    description:
      "The child had looked so excited when the clown had presented a large red balloon. You had seen this, but in the throes of your morning commute you didn’t register it until it was too late. Who asked the government to support a fair right through Main Street during a week day anyway? Your bike barrelled right between the child and the clown and sent the balloon on its merry way. You didn’t turn back to see the damage you had done. Later you saw the balloon floating outside your office window.",
    textColor: "rgb(138, 131, 255)",
    color: "rgb(213, 233, 246)",
  },
  {
    imageSrc: "/images/404Images/Boat Leak.png",
    title: "There’s a Leak in the Website",
    description:
      "The boat had looked good to the naked eye. But you wear a very strong prescription and should have been wearing glasses. As you cling on to the bouey the coast guard had thrown at you, you watch the water rush into you beloved dingy. The leak sprays water higher and higher. Then the boat was swallowed and sunk into the abyss.",
    textColor: "rgb(69, 46, 195)",
    color: "rgb(239, 237, 250)",
  },
  {
    imageSrc: "/images/404Images/Dog Ate.png",
    title: "A Dog Ate this Page",
    description:
      "Your dog is cute but honestly a menace. Where are my shoes? Where is my graduation certificate? Where is the chocolate cake I baked for my Aunt’s birthday? And why did you take your dog to the vet on that same Thursday?!",
    textColor: "#333",
    color: "rgb(255, 228, 234)",
  },
]
const StyledImage = styled.img`
  width: 40%;
`
const Title = styled.h1`
  font-weight: bold;
  font-size: 2em;
`
const Description = styled.p`
  font-size: 1rem;
  max-width: 70%;
  @media (max-width: 768px) {
    max-width: 90%;
  }
  padding-bottom: 1em;
`
const Container = styled.section`
  display: flex;
  justify-content: center;
  vertical-align: middle;
  text-align: center;
  align-items: center;
  flex-direction: column;
  background-color: ${props => props.color || "white"};
  color: ${props => props.textColor || "black"};
  padding: 2em 0em 1em 0em;
  position: relative;
`
const Thanks = styled.a`
  font-style: italic;
  font-size: 0.8em;
  @media (max-width: 768px) {
    font-size: 0.5em;
  }
  margin-top: auto;
  padding-top: 10px;
  margin-right: auto;
  cursor: pointer;
`
const NotFoundPage = () => {
  const [selected404, setSelected404] = useState(random404[1])
  useEffect(() => {
    const randomNumber =
      Math.floor(Math.random() * (random404.length - 1 - 0 + 1)) + 0
    setSelected404(random404[randomNumber])
  }, [])
  return (
    <>
      <Head title="404 Page" />
      <Layout>
        <Container
          color={selected404.color}
          className="container is-fluid"
          textColor={selected404.textColor}
        >
          <StyledImage src={selected404.imageSrc} alt={selected404.title} />
          <Title>{selected404.title}</Title>
          <Description>{selected404.description}</Description>
          <Thanks href="https://www.kapwing.com">
            *Thanks to team Kapwing for their awesome 404 Illustrations
          </Thanks>
        </Container>
      </Layout>
    </>
  )
}

export default NotFoundPage
