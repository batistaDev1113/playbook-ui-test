import React from "react";
import { Title, Body, Card, CircleIconButton, LineGraph } from "playbook-ui";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";

const data = [
  {
    name: "Revenue",
    data: [
      43934,
      52503,
      57177,
      59200,
      65000,
      70000,
      80050,
      85000,
      90931,
      93098,
      100000,
      120000,
      140000,
      150000,
      157000,
    ],
  },
  {
    name: "Orders",
    data: [],
  },
];

function Commerce() {
  return (
    <div className="dashboard-container">
      <section className="dashboard-commerce">
        <aside style={{ padding: "25px" }}>
          <Body color="lighter" text="DASHBOARD" id="dashboard" />
          <Title text="Commerce Dashboard" id="commerce-title" />
        </aside>

        <Card className="card-container-top">
          <Card className="header-card card">
            {"Key Performance Indicators"}
            <CircleIconButton
              icon="ellipsis-h"
              variant="secondary"
              className="right-inner-icon"
            />
          </Card>
          <section className="cards-middle-section">
            <div className="middle">
              <Card
                className="card small-card first"
                highlight={{ position: "side", color: "windows" }}
              >
                <div>
                  <span className="active">{"Revenue"}</span>

                  <span className="green-positive">
                    <AiOutlineArrowUp className="green-positive" />
                    26%
                  </span>
                </div>
              </Card>
              <Card className="card small-card">
                <div>
                  <span>{"Orders"}</span>

                  <span className="red-negative">
                    <AiOutlineArrowDown className="red-negative" />
                    2%
                  </span>
                </div>
              </Card>
              <Card className="card small-card">{"Profit"}</Card>
              <Card className="card small-card">
                <div>
                  <span>{"Average Check"}</span>
                  <span className="green-positive">
                    <AiOutlineArrowUp className="green-positive" />
                    5%
                  </span>
                </div>
              </Card>
              <Card className="card small-card">
                <div>
                  <span>{"Canceled"}</span>

                  <span className="red-negative">
                    <AiOutlineArrowDown className="red-negative" />
                    18%
                  </span>
                </div>
              </Card>
              <Card className="card small-card">{"Repeat Sales"}</Card>
            </div>

            <Card className="linear-graph-card">
              <LineGraph
                chartData={data}
                id="line-test-2"
                toggleLegendClick={false}
                xAxisCategories={[
                  "5/1",
                  "5/15",
                  "6/1",
                  "6/15",
                  "7/1",
                  "7/15",
                  "8/1",
                  "8/15",
                  "9/1",
                  "9/15",
                  "10/1",
                  "10/15",
                  "11/1",
                  "12/1",
                  "11/15",
                ]}
                yAxisMin={0}
              />
            </Card>
          </section>
        </Card>
      </section>
    </div>
  );
}

export default Commerce;
