import React, { Component, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

const timelineData = [
    {
        role: ' Software Developer',
        accomplishment: 'Exploring Opportunities in Frontend Software Engineering',
        date: 'Present',
        category: {
            tag: 'Career Goal',
            color: 'darkslategrey'
        },
        link: {
            url: 'https://github.com/florinpop17/app-ideas',
            text: 'Contact me'
        }
    },
    {
        role: 'GIS Data Analyst ',
        accomplishment: 'Enhanced data accuracy on Apple Maps by leading the data aggregation across multiple US map data sources: satellite imagery, apple street view photos, and user location data.',
        date: 'May 2018',
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
            <time>{data.date}</time>
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

