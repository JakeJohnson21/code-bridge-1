import React from "react";

function Description() {
  return (
    <div className="description__text-content">
      <h2 className="description__title">Intro</h2>
      <p className="description__paragraph">
        There are three files containing data about air traffic, CO2 emission,
        and pre-departure delays of European airports. Four data visualizations
        were created based on these data which are air traffic of airports over
        6 years, the effect of COVID-19 on air traffic, CO2 emission by states,
        and the amount of pre-departure delays by airports.
      </p>
      <p className="description__paragraph">
        {" "}
        To prepare the air traffic data, the missing values were dropped as it
        meant that there was no data received from the airport operators and I
        worked only with the data received from network manager. All columns for
        each dataset were converted to lower case, state names that are not in
        English were replaced, duplicates were checked and found none. I have
        realized that airport traffic of Istanbul Ataturk starts going down
        significantly after 2019 and the data for the air traffic of iGA
        Istanbul Airport starts from 2019. Apparently, Istanbul Ataturk was
        replaced by iGA Istanbul Airport. Therefore, I will combine the data of
        both airports under "Istanbul Airport".{" "}
      </p>
      <p className="description__paragraph">
        Top 10 busiest airports were found by creating a pivot table and data
        filtered for only those airports. I left the year 2022 out of the
        analysis as the data aren't complete yet. Data was filtered again using
        pivot table to find average daily air traffic (arrivals and departures)
        per airport for each year from 2016-2021 and the values were rounded
        down. This data was exported on an excel document and sent over to the
        Software Engineering student. The analysis showed that until 2020, each
        airport had a constant amount of air traffic which had not changed over
        the years. During pandemic, the passenger traffic reduced significantly
        due to flight restrictions.
      </p>
      <p className="description__paragraph">
        For COVID analysis, air traffic data was filtered for years 2020 and up,
        as well as the top 10 airports. A Pivot table was created to find daily
        air traffic for each month from January 2020 to July 2022. Line graph
        was plotted, and following conclusions were made; due to COVID-19, there
        has been a significant decrease in air traffic all across Europe. Air
        traffic has slowed down again after each major variant (Delta-Nov 2020,
        Omicron-Nov 2021). iGA Istanbul Airport, Amsterdam - Schiphol, and
        Paris-Charles-de-Gaulle have recovered quicker compared to other
        airports. As of July 2022, London - Heathrow and Madrid - Barajas
        haven't returned to their pre-COVID days.{" "}
      </p>
      <p className="description__paragraph">
        To prepare the data about delays, all missing values were dropped and
        worked with the remaining data because replacing them would mess up the
        data as almost 73% of the data for delays were missing. The missing
        values could be due to no data entry from the airport operator. A column
        was created to store average delays per flight. For this column used
        flt_dep_ifr_2 column was instead of flt_dep_1 column because it comes
        from the airport operator, same as dly_all_pre_2 values. There are
        slight differences in some rows between both flt_dep columns as one
        comes from the network manager and the other is from airport operator.
        The data was filtered for 2021 because the data from 2022 aren't
        complete and there weren’t many flights during 2020 due to COVID. A
        Pivot table was created to find airports with most delays and a
        horizontal bar graph was plotted. The analysis showed that Luxembourg
        Airport had by far the most delays per flight in 2021, with an average
        of 59 minutes. 5 of the top 15 are German airports, meaning that 33% of
        the delays happen in Germany among the highest ranking. Italy is
        responsible for 27% of top ranked.
      </p>
      <p className="description__paragraph">
        For the analysis of CO2 emission data, a column was created to calculate
        CO2 emissions per flight. States that have highest CO2 emission per
        flight were found. A pivot table was created to find average CO2
        emissions per flight per state for each year from 2010 to 2022. Columns
        were created to store the percentage change of CO2 emissions and traffic
        between years as it might be needed for further analysis. The data was
        filtered for the top 12 states. An area chart was created for each state
        through faceting. The analysis showed that Luxembourg has the highest
        CO2 emissions among other states and have worsened significantly over
        time. Cyprus is the only state that has shown a slight improvement. The
        data shows that most of the states had a slight increase in emissions
        before 2020, which went down during 2020 due to COVID-19. The report was
        sectioned for each analysis to provide easier reading and understanding.
      </p>
    </div>
  );
}

export default Description;
