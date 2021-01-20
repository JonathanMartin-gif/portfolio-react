import React from 'react';
import Content from '../components/Content';
import Hero from '../components/Hero';

function AboutPage(props){
 return(
  <div>
   <Hero title={props.title}/>
   <Content>
    <p>Hello, my name is Jonathan Martin. I am 29 years old. I currently live in Blair, Nebraska. I'm married with 7 kids. I'm always inspiring to strive for a better life for me and my family. I got into coding a few years ago and loved it, but as we all know life happens, and get sidetracked on our goals. Now I'm going full force into the rabbit hole called Software Development/ Software Engineering.</p>
    <p>What made my passion for Software Engineering, was that you can create anything you put your mind to. My dream job is to work for Google as a software engineer and I will strive to accomplish my goals. I talk with other experienced developers daily through discord and other platforms. I am more than willing to work with other developers on any project. I love to make the world better with my creativity and determination. I am currently going to be doing the Thinkful Software Engineering Immersion course and I have already made study groups. As well as help other people through the prep course who have problems with it. I look at it as paying it forward. Taken the knowledge I have and sharing it with others.
    The services I can provide are communication, teamwork, test-driven development, and implementation of applications. Always willing to learn more and push me as a software engineer.</p>
    <p>I have a lot of different interests other than web development. I love to produce music and mix music as a DJ. DJ'ing is a hobby of mine that I have been doing for 14 years and counting. Also, another one of my interests is to go hunting. Hunting is so rewarding when you get a deer and able to provide for your family.</p>
   </Content>
  </div>
 )
}


export default AboutPage;