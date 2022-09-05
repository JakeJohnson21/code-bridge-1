import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

function Graph() {
  return (
    <div className="line-chart">
      <Line
        datasetIdKey="id"
        width={400}
        height={180}
        data={{
          labels: ["2016", "2017", "2018", "2019", "2020", "2021"],
          datasets: [
            {
              id: 0,
              label: " Amsterdam -Schiphol",
              data: [
                { x: 1, y: 1339 },
                { x: 2, y: 1392 },
                { x: 3, y: 1400 },
                { x: 4, y: 1395 },
                { x: 5, y: 644 },
                { x: 6, y: 788 },
              ],
              borderColor: "limegreen",
              borderWidth: 2,
              tension: 0.3,
            },
            {
              id: 1,
              label: " Barcelona",
              data: [
                { x: 1, y: 840 },
                { x: 2, y: 886 },
                { x: 3, y: 919 },
                { x: 4, y: 943 },
                { x: 5, y: 334 },
                { x: 6, y: 448 },
              ],
              borderColor: "red",
              borderWidth: 2,
              tension: 0.3,
            },
            {
              id: 2,
              label: " Frankfurt",
              data: [
                { x: 1, y: 1264 },
                { x: 2, y: 1302 },
                { x: 3, y: 1403 },
                { x: 4, y: 1407 },
                { x: 5, y: 580 },
                { x: 6, y: 717 },
              ],
              borderColor: "#9e27b3",
              borderWidth: 2,
              tension: 0.3,
            },
            {
              id: 3,
              label: " Istanbul",
              data: [
                { x: 1, y: 1242 },
                { x: 2, y: 1235 },
                { x: 3, y: 1250 },
                { x: 4, y: 893 },
                { x: 5, y: 504 },
                { x: 6, y: 761 },
              ],
              borderColor: "yellow",
              borderWidth: 2,
              tension: 0.4,
              titleColor: "red",
            },
            {
              id: 4,
              label: " Zürich",
              data: [
                { x: 1, y: 717 },
                { x: 2, y: 722 },
                { x: 3, y: 744 },
                { x: 4, y: 737 },
                { x: 5, y: 287 },
                { x: 6, y: 344 },
              ],
              borderColor: "#ffb14a",
              borderWidth: 2,

              tension: 0.3,
            },
            {
              id: 5,
              label: " London -Heathrow",
              data: [
                { x: 1, y: 1297 },
                { x: 2, y: 1304 },
                { x: 3, y: 1309 },
                { x: 4, y: 1309 },
                { x: 5, y: 559 },
                { x: 6, y: 535 },
              ],
              borderColor: "#1666fa",
              borderWidth: 2,
              tension: 0.3,
            },
            {
              id: 6,
              label: " Madrid -Barajas",
              data: [
                { x: 1, y: 1033 },
                { x: 2, y: 1061 },
                { x: 3, y: 1122 },
                { x: 4, y: 1167 },
                { x: 5, y: 452 },
                { x: 6, y: 596 },
              ],
              borderColor: "hotpink",
              borderWidth: 2,
              tension: 0.3,
            },
            {
              id: 7,
              label: " Munich",
              data: [
                { x: 1, y: 1070 },
                { x: 2, y: 1100 },
                { x: 3, y: 1124 },
                { x: 4, y: 1134 },
                { x: 5, y: 394 },
                { x: 6, y: 412 },
              ],
              borderColor: "#8f46c7",
              borderWidth: 2,
              tension: 0.3,
              color: "#666",
            },
            {
              id: 8,
              label: " Paris -Charles-de-Gaulle",
              data: [
                { x: 1, y: 1309 },
                { x: 2, y: 1322 },
                { x: 3, y: 1337 },
                { x: 4, y: 1383 },
                { x: 5, y: 603 },
                { x: 6, y: 701 },
              ],
              borderColor: "cyan",
              borderWidth: 2,
              tension: 0.3,
            },
            {
              id: 9,
              label: " Rome - Fiumicino",
              data: [
                { x: 1, y: 857 },
                { x: 2, y: 814 },
                { x: 3, y: 842 },
                { x: 4, y: 848 },
                { x: 5, y: 282 },
                { x: 6, y: 312 },
              ],
              borderColor: "turquoise",
              borderWidth: 2,
              tension: 0.3,
            },
          ],
        }}
        options={{
          responsive: true,
          plugins: {
            datalabels: {
              color: "red",
            },
            tooltip: {},
            legend: {
              labels: {
                color: "white",
                boxWidth: 15,
                boxHeight: 15,
                padding: 15,
                font: {
                  size: 10,
                  family: "comfortaa",
                },
              },
              align: "start",
              position: "right",
            },
          },

          scales: {
            y: {
              title: {
                display: true,
                text: "Total arrivals / departures per day",
                padding: 5,
                color: "white",
              },
              ticks: {
                color: "white",
                font: {
                  size: 10,
                },
              },
              grid: {
                color: "silver",
              },
            },
            x: {
              ticks: {
                color: "white",
                font: {
                  size: 10,
                },
              },
              grid: {
                color: "silver",
                borderWidth: 1,
              },
            },
          },
        }}
      />
    </div>
  );
}
export default Graph;
