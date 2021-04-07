import React from "react";
import "../App.css";
import { Card, Title, Body, ProgressSimple, DashboardValue } from "playbook-ui";
import { GrTicket, GrNotes } from "react-icons/gr";
import { CgCloseR } from "react-icons/cg";
import { AiOutlineWarning } from "react-icons/ai";

function Pipeline() {
  return (
    <div className="pipeline-container">
      <div className="inner-pipeline-container">
        <section className="inner-section-pipeline-left">
          <Card className="card">
            <Title text="Pipeline Chart" id="pipeline-title" />
          </Card>
          <Card className="card pipeline-card">
            <Body text="Add to Cart" color="lighter" />
            <ProgressSimple align="left" percent={100} width="300px" />
            <Body text="100%" color="lighter" />
            <Body text="2,577" />
          </Card>
          <Card className="card pipeline-card">
            <Body text="Shopping Cart" color="lighter" />
            <ProgressSimple align="left" percent={79} width="300px" />
            <Body text="79" color="lighter" />
            <Body text="2,023" />
          </Card>
          <Card className="card pipeline-card">
            <Body text="Payment Methods" color="lighter" />
            <ProgressSimple align="left" percent={59} width="300px" />
            <Body text="59%" color="lighter" />
            <Body text="1,567" />
          </Card>
          <Card className="card pipeline-card">
            <Body text="Delivery Methods" color="lighter" />
            <ProgressSimple align="left" percent={56} width="300px" />
            <Body text="56%" color="lighter" />
            <Body text="1,252" />
          </Card>
          <Card className="card pipeline-card">
            <Body text="Confirm" color="lighter" />
            <ProgressSimple align="left" percent={49} width="300px" />
            <Body text="49%" color="lighter" />
            <Body text="1,182" />
          </Card>
          <Card className="card pipeline-card">
            <Body text="Delivery" color="lighter" />
            <ProgressSimple align="left" percent={46} width="300px" />
            <Body text="46%" color="lighter" />
            <Body text="1,098" />
          </Card>
        </section>
        {/* right section of pipeline */}
        <div className="inner-section-pipeline-right">
          <section className="section1">
            <Card className="card pipeline-card-right ">
              <div className="inner-section1">
                <div className="green-background background">
                  <span className="card-header-number ticket-icon">
                    <GrTicket className="icon-1" />
                  </span>
                </div>
                <div className="card-value">
                  <DashboardValue statValue={{ value: "1,428" }} />
                  <Body text="Tickets(YTD)" color="lighter" />
                </div>
              </div>
            </Card>
          </section>
          <section className="section2">
            <Card className="card pipeline-card-right ">
              <div className="inner-section2">
                <div className="red-background background">
                  <span className="card-header-number ticket-icon ">
                    <CgCloseR className="icon-3" />
                  </span>
                </div>
                <div className="card-value">
                  <DashboardValue statValue={{ value: "25" }} />
                  <Body text="Overdue(YTD)" color="lighter" />
                </div>
              </div>
            </Card>
          </section>
          <section className="section3">
            <Card className="card pipeline-card-right ">
              <div className="inner-section3">
                <div className="teal-background background">
                  <span className="card-header-number ticket-icon ">
                    <GrNotes className="icon-2" />
                  </span>
                </div>
                <div className="card-value">
                  <DashboardValue statValue={{ value: "97" }} />
                  <Body text="Closed Without Action(YTD)" color="lighter" />
                </div>
              </div>
            </Card>
          </section>

          <section className="section4">
            <Card className="card pipeline-card-right">
              <div className="inner-section4">
                <div className="yellow-background background">
                  <span className="card-header-number ticket-icon ">
                    <AiOutlineWarning className="icon-4" />
                  </span>
                </div>
                <div className="card-value">
                  <DashboardValue statValue={{ value: "896" }} />
                  <Body text="Esculated(YTD)" color="lighter" />
                </div>
              </div>
            </Card>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Pipeline;
