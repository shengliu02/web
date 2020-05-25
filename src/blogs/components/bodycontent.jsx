import React, { Component } from "react";


class BodyContent extends Component{


    constructor(props){
        super(props);
        this.state = {
            images:{
                img_group: require('../images/gp.jpg'),
                img_nightmarket: require('../images/nm.jpg'),
                img_thaihouse: require('../images/thai_house.jpg')

            }
        }
    }

    render(){
        return(
            <div>
                {/* The content here is depends on the */}

                <div className="container">
                    <div className="blog-header">
                        <h4 className="title">
                            Thailand Trip
                        </h4>
                        <p className="date">
                            Updated Date: June 28, 2018.
                        </p>

                    </div>

                    <br/>
                    <br/>

                    <div className="blog-body">
                        {/* all the body paragraphs*/}
                        <h5 className="title">
                            Fuchou – Preparation
                        </h5>
                        <br/>
                        <p className="indent">Before I depart from Fuchou, China. I was nervous and concerned. Yet agitated on the new culture and experience that I would encounter. I used to be afraid of trying new things out, but I told myself that it was my chance to get out from my own comfort zone and broaden my horizon. I have heard of Thailand. A capital of world’s ancient ruins and ornate temples and great night markets in Southeastern Asia. Yes, that was all I knew about Thailand! I did some homework and dropped down all the places I wanted to visit, and rules needed to be obeyed upon in a different country.
                        </p>

                        <img className="blog-photo center" src={this.state.images.img_thaihouse}/>

                       <br/> <br/> <br/>
                        <h5 className="title">
                            Chiang Mai – Night Market Exploration
                        </h5>
                        <br/>
                        <p className="indent">The plane has slowly descended and landed at Chaing Mai International Airport as the sun fell below the horizontal line. I called an Uber driver and headed straight to the hotel and checked in. After settled my luggage at the hotel, it was 9:00 PM. It felt like 80-degrees F, but not as humid as Fuchou. I queried one of the receptionists for the nearest night market and headed toward it. The night market was loaded with variety of merchandise! Thai traditional clothes, scarfs, shoes, and most importantly, the foods! As I walked around, I have tried fried fish wrapped with lotus leaf, fish balls, coconut juice, cooked pancakes, iced rice covered with fruits, and a lot more! It was late, by 11:30 PM, my belly was filled with goodies, and went back to hotel for another exciting day!
                        </p>

                        <img className="blog-photo center"  src={this.state.images.img_nightmarket}/>

                        <br/> <br/> <br/>
                        <h5 className="title">
                            Chiang Mai – Suthep & New Friends
                        </h5>
                        <br/>
                        <p className="indent">It was 9:30 AM. I quickly brushed my teeth, washed my face, and putted my clothes on. We went out to the street and started to look for breakfast. We found a decent Thai restaurant where roast ducks were hanging on the display section. I ordered Roasted Pork Rice with Cucumber. It was delicious, seriously. It was almost 12:30 PM, I formed a group with my friends and started off to Doi Suthep, an ancient temple built in 1383. Certainly, an unknown voice jumped upon to the air, “are you guys going to Doi Suthep as well?”, stranger asked. I replied, “yes, we are looking for a tourist to drive us there”. He continued with “why don’t you guys join us? Our tourist is awesome”! We hesitated for a while and had a debatable conversation with my friends because we believed that it might be a tourist trap. However, I insisted on joining the group, simply because I wanted to go outside of my comfort zone and met new people. I accepted his invitation and joined him in their mini tourist car. “My name is Mr.M, and she is my wife, Mrs.M,” he said (Due to his personal privacy, I shorten their names to Mr.M and Mrs.M). I respectfully introduced myself and my friends. Together, we got to climb, observe, chat along our trip to Stone Snake, Golden Mount Temple, Naga Gates, Golden Buddha Statue, and the fantastic rooftop view with the bluest sky reflecting the Chiang Mai City! Throughout this trip, we got to laugh together with funny jokes, had great beef snacks, and took some photos. After that, we were all exhausted. We headed back down to the city. Though it was only 4 hours with Mr.M and Mrs.M, I have enjoyed so much of the conversations with them and previewed the precious cultures and living habits of the locals as we explored this ancient temple.
                        </p>

                        <img className="blog-photo center"  src={this.state.images.img_group}/>
                        <br/> <br/> <br/>
                    </div>
                </div>

            </div>
        )
    }

}

export default BodyContent

