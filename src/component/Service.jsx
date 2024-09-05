import React from 'react';
import CardCoustom from './CoustomComponent/CardCoustom';
import ui from "../assets/img/ui.svg";
import js from "../assets/img/js.png";
import react from "../assets/img/react.png";
import html from "../assets/img/html.webp";
import { Typography } from '@mui/material';

export default function Service() {
    return (
        <div style={{ textAlign: 'center', margin: '50px' }}>
            <Typography
                variant="h6"
                style={{
                    color: '#7F8C8D',
                    marginBottom: '20px',
                    fontWeight: 500,
                    fontFamily: "'Baloo Paaji', cursive",
                }}
            >
                What I Do ?
            </Typography>
            <Typography
                variant="h3"
                style={{
                    color: '#695aa6',
                    marginBottom: '40px',
                    fontWeight: 800,
                    fontFamily: "'Baloo Paaji', cursive",
                }}
            >
                Service
            </Typography>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', margin: "10px" }}>
                <CardCoustom
                    img={react}
                    title="React Development"
                    description="Build responsive and dynamic web applications using React."
                />
                <CardCoustom
                    img={js}
                    title="JavaScript Programming"
                    description="Master the fundamentals of JavaScript to create interactive websites."
                />
                <CardCoustom
                    img={ui}
                    title="UI Design"
                    description="We provide excellent UI design services for your business."
                />
                <CardCoustom
                    img={html}
                    title="HTML & CSS"
                    description="Learn how to structure and style web pages using HTML & CSS."
                />
            </div>
        </div>
    );
}
