import React, { Component, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

const timelineData = [
    {
        role: ' Software Developer II',
        accomplishment: 'Led the design and implementation of scalable frontend features including Surveys, AppCenter white-labeling, and a workflow builder for the App Procurement Hub. Partnered with product, design, and backend teams to deliver solutions that enhanced procurement efficiency and user engagement. Utilized Vue.js, Vuex, and modular component architecture to ensure performance, maintainability, and long-term scalability.',
        date: 'Oct 2021 - April 2025',
        category: {
            tag: 'Productiv',
            color: 'darkslategrey'
        },
    },
    {
        role: 'Software Developer',
        accomplishment: 'Lead frontend project developer on building the rebranded Flair airlines website and mobile apps with improved user experience and additional enhancement features.',
        date: 'Oct 2020 – Sept 2021',
        category: {
            tag: '777 Partners',
            color: 'darkslategrey'
        },

    },
    {
        role: 'GIS Data Analyst',
        accomplishment: 'Enhanced data accuracy on Apple Maps by leading the data aggregation across multiple US map data sources: satellite imagery, apple street view photos, and user location data.',
        date: 'May 2018 – Nov 2019',
        category: {
            tag: 'Apple Inc',
            color: '#1DA1F2'
        },

    },
    {
        role: 'Research Associate II',
        accomplishment:
            'Promoted to Research Associate II and studied gene expression on Autism related genes',
        date: 'Sept 2017',
        category: {
            tag: 'UCSF',
            color: '#018f69'
        },
    },
    {
        role: 'Lab Technician III ',
        accomplishment: 'Lab Technician III at the Department of Psychiatry ',
        date: 'April 2016',
        category: {
            tag: 'UCSF',
            color: '#018f69'
        },

    },
    {
        role: "Undergraduate",
        accomplishment: 'Obtained the Bachelor of Science Degree in Animal Science',
        date: 'June 2017',
        category: {
            tag: 'UC Davis',
            color: '#018f69'
        },

    }

]

const TimelineItem = ({ data }) => (
    <div className="timeline-item">
        <div className="timeline-item-content">
            <span className="tag" style={{ background: data.category.color }}>
                {data.category.tag} ||  {data.role}
            </span>
            <div className="pt-3"><time>{data.date}</time></div>
            <p>{data.accomplishment}</p>
            {data.link && (
                <a
                    href={data.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {data.link.text}
                </a>
            )}
            <span className="circle" />
        </div>
    </div>
);

const Timeline = () =>
    timelineData.length > 0 && (
        <div id='timeline' className="timeline-container" style={{
            background: `url("${process.env.PUBLIC_URL + "/images/whaleflip.png"}") no-repeat  fixed`
        }}>
            {timelineData.map((data, idx) => (
                <TimelineItem data={data} key={idx} />
            ))}
        </div>


    );

export default Timeline;

