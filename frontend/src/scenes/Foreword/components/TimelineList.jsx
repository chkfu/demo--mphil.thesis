// from package
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useSelector } from 'react-redux';
// from file
import { color, font, timeline_style } from '../../../theme/styleDeclaration';


// styles
const BackgroundStyle_LateQing = {
  borderTop: `2px solid ${timeline_style.border_color.lateqing}`,
  background: color.timeline_darkgrey,
  color: color.text_lightgrey
};

const BackgroundStyle_Beiyang = {
  borderTop: `2px solid ${timeline_style.border_color.beiyang}`,
  background: color.timeline_darkgrey,
  color: color.text_lightgrey
};

const BackgroundStyle_Nationalist = {
  borderTop: `2px solid ${timeline_style.border_color.nationalist}`,
  background: color.timeline_darkgrey,
  color: color.text_lightgrey
};

const ContentArrowStyle = {
  borderRight: `7px solid ${color.timeline_darkgrey}`
};

const TitleStyle = {
  fontFamily: font.content, fontSize: '20px', lineHeight: '40px'
};

const SubTitleStyle = {
  fontFamily: font.content,
  fontSize: '16px'
};

const ContentStyle = {
  fontFamily: font.content,
  fontSize: '14px',
  textAlign: 'justify'
};

const IconStyle = {
  background: color.bg_darkgrey,
};


// function
const borderColorDetector = (date) => {
  const currentDate = Number(date.split('-')[0]);
  if (currentDate < 1912)
    return BackgroundStyle_LateQing;
  if (currentDate >= 1912 && currentDate < 1928)
    return BackgroundStyle_Beiyang;
  if (currentDate >= 1928 && currentDate <= 1949)
    return BackgroundStyle_Nationalist;
  else
    return null;
};


const IconDetector = (date) => {
  const currentDate = Number(date.split('-')[0]);
  if (currentDate < 1912)
    return <TimelineIcon_LateQing />;
  if (currentDate >= 1912 && currentDate < 1928)
    return <TimelineIcon_Beiyang />;
  if (currentDate >= 1928 && currentDate <= 1949)
    return <TimelineIcon_Nationalist />;
  else
    return;
};


const TimelineIcon_LateQing = () => {
  return (
    <img
      style={ {
        width: '100%',
        height: '100%',
        borderRadius: '100%',
        objectFit: "cover",
        boxShadow: '2px 2px 15px 15px rgba(1, 1, 1, 1)'
      } }
      src={ timeline_style.url.lateqing } />
  );
};

const TimelineIcon_Beiyang = () => {
  return (
    <img
      style={ {
        width: '100%',
        height: '100%',
        borderRadius: '100%',
        objectFit: "cover",
        boxShadow: '2px 2px 15px 15px rgba(1, 1, 1, 1)',
      } }
      src={ timeline_style.url.beiyang } />
  );
};

const TimelineIcon_Nationalist = () => {
  return (
    <img
      style={ {
        width: '100%',
        height: '100%',
        borderRadius: '100%',
        objectFit: "cover",
        boxShadow: '2px 2px 15px 15px rgba(1, 1, 1, 1)',
      } }
      src={ timeline_style.url.nationalist } />
  );
};



// components

function ItemBox({ id, title, subtitle, content, date }) {
  return (
    <VerticalTimelineElement
      key={ id }
      contentStyle={ borderColorDetector(date) }
      contentArrowStyle={ ContentArrowStyle }
      date={ date }
      iconStyle={ IconStyle }
      icon={ IconDetector(date) }>

      <h3 style={ TitleStyle }> { title } </h3>
      <h4 style={ SubTitleStyle }> { subtitle } </h4>
      <p style={ ContentStyle }> { content } </p>

    </VerticalTimelineElement>
  );
}


// rendering

function TimelineList({ data }) {


  // redux
  const timelineCategory = useSelector((state) => state.timeline.timelineCategory);
  const timelinePeriod = useSelector((state) => state.timeline.timelinePeriod);

  // if no filter is adopted
  if (timelineCategory === timelinePeriod)
    return (
      <VerticalTimeline>
        { data.data.data.details.map((item, index) => {
          return (
            <ItemBox
              key={ item._id }
              id={ `timeline--${item.title}--${index}` }
              title={ item.title }
              subtitle={ item.subtitle }
              content={ item.content }
              date={ item.date } />
          );
        }) }
      </VerticalTimeline>
    );


  // either one filter is not chosen
  // # Attn: timelineCategory is not item.category but item.subtitle due to mongodb keys design
  if (timelineCategory === 'none' && timelinePeriod !== 'none')
    return (
      <VerticalTimeline>
        { data.data.data.details.map((item, index) => {
          {
            if (item.period === timelinePeriod)
              return <ItemBox
                key={ item._id }
                id={ `timeline--${item.title}--${index}` }
                title={ item.title }
                subtitle={ item.subtitle }
                content={ item.content }
                date={ item.date } />;
          }
        }) }
      </VerticalTimeline>
    );

  if (timelinePeriod === 'none' && timelineCategory !== 'none')
    return (
      <VerticalTimeline>
        { data.data.data.details.map((item, index) => {
          {
            if (item.subtitle === timelineCategory)
              return <ItemBox
                key={ item._id }
                id={ `timeline--${item.title}--${index}` }
                title={ item.title }
                subtitle={ item.subtitle }
                content={ item.content }
                date={ item.date } />;
          }
        }) }
      </VerticalTimeline>
    );


  // if 2 filters are adopted, and 1 or more item displayed
  if (data.data.data.details.length > 0)
    return (
      <VerticalTimeline>
        { data.data.data.details.map((item, index) => {
          if (item.subtitle === timelineCategory && item.period === timelinePeriod)
            return (
              <ItemBox
                key={ item._id }
                id={ `timeline--card--${index}` }
                title={ item.title }
                subtitle={ item.subtitle }
                content={ item.content }
                date={ item.date } />
            );
        })
        }
      </VerticalTimeline>
    );
}

export default TimelineList;
