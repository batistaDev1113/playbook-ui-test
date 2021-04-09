import React from "react";
import { Body, Card, User, Avatar } from "playbook-ui";
import { FaAngleRight } from "react-icons/fa";

function Esculations() {
  return (
    <div className="esculation-container">
      <Body
        color="lighter"
        text="THIS WEEKS TICKET ESCULATIONS"
        id="esculations"
      />
      <section className="esculation-inner-container">
        <div className="column-esculation">
          <Card padding="0" className="card esculation">
            <Card
              highlight={{ position: "side", color: "category_2" }}
              className="card esculation-card-parent"
            >
              <Card className=" card esculation-card-header">
                <Body text="NEW" color="lighter" />
                <div className="pb_icon_circle_kit_sm_teal">
                  <span className="card-header-number">25</span>
                </div>
              </Card>
            </Card>
            {/* first card new section */}
            <Card className="card esculation-card-body">
              <User
                className="esculation-user"
                avatarUrl="https://randomuser.me/api/portraits/women/47.jpg"
                name="Missing Part"
                size="sm"
              />
              <Body color="light" className="body-icon">
                <FaAngleRight className="esculation-greater-than" />
              </Body>
            </Card>
            {/* second card new section */}
            <Card className="card esculation-card-body">
              <User
                className="esculation-user"
                avatarUrl="https://randomuser.me/api/portraits/men/33.jpg"
                name="Not perform..."
                size="sm"
              />
              <Body color="light" className="body-icon">
                <FaAngleRight className="esculation-greater-than" />
              </Body>
            </Card>
            {/* third card new section */}
            <Card className="card esculation-card-body">
              <Avatar name="Terry Johnson" size="sm" />
              <User
                className="esculation-user"
                avatarUrl=""
                name="Missing Part"
                size="sm"
              />
              <Body color="light" className="body-icon">
                <FaAngleRight className="esculation-greater-than" />
              </Body>
            </Card>
            {/* fourth card new section */}
            <Card className="card esculation-card-body">
              <User
                className="esculation-user"
                avatarUrl="https://randomuser.me/api/portraits/men/4.jpg"
                name="Missing Part"
                size="sm"
              />
              <Body color="light" className="body-icon">
                <FaAngleRight className="esculation-greater-than" />
              </Body>
            </Card>
            {/* fith card new section */}
            <Card className="card esculation-card-body">
              <Avatar name="Juan Carlos" size="sm" />
              <User
                className="esculation-user"
                avatarUrl=""
                name="Unexpected..."
                size="sm"
              />
              <Body color="light" className="body-icon">
                <FaAngleRight className="esculation-greater-than" />
              </Body>
            </Card>
            {/* last card new section */}
            <Card className="card esculation-card-body">
              <Avatar name="Mary Tabors" size="sm" />
              <User
                className="esculation-user"
                avatarUrl=""
                name="Need Techn..."
                size="sm"
              />
              <Body color="light" className="body-icon">
                <FaAngleRight className="esculation-greater-than" />
              </Body>
            </Card>
            {/* Show More Card */}
            <Card className="card esculation-card-body">
              <Body className="show-more">
                <span>Show More</span>
              </Body>
            </Card>
          </Card>
        </div>

        <div className="column-esculation">
          {/* manager feedback card columns */}
          <Card padding="0" className="card esculation">
            <Card
              highlight={{ position: "side", color: "windows" }}
              className="card esculation-card-parent"
            >
              <Card className=" card esculation-card-header">
                <Body text="MANAGER FEEDBACK" color="lighter" />
                <div className="pb_icon_circle_kit_sm_royal">
                  <span className="card-header-number">5</span>
                </div>
              </Card>
            </Card>
            {/* first card manager feedback section */}
            <Card className="card esculation-card-body">
              <User
                className="esculation-user"
                avatarUrl="https://randomuser.me/api/portraits/men/32.jpg"
                name="Not Perform..."
                size="sm"
              />
              <Body color="light" className="body-icon">
                <FaAngleRight className="esculation-greater-than" />
              </Body>
            </Card>
            {/* second card manager feedback section */}
            <Card className="card esculation-card-body">
              <User
                className="esculation-user"
                avatarUrl="https://randomuser.me/api/portraits/women/88.jpg"
                name="Missing Part"
                size="sm"
              />
              <Body color="light" className="body-icon">
                <FaAngleRight className="esculation-greater-than" />
              </Body>
            </Card>
            {/* third card new section */}
            <Card className="card esculation-card-body">
              <Avatar name="Jennifer Watson" size="sm" />
              <User
                className="esculation-user"
                avatarUrl=""
                name="Missing Part"
                size="sm"
              />
              <Body color="light" className="body-icon">
                <FaAngleRight className="esculation-greater-than" />
              </Body>
            </Card>
            {/* fourth card manager feedback section */}
            <Card className="card esculation-card-body">
              <User
                className="esculation-user"
                avatarUrl="https://randomuser.me/api/portraits/men/12.jpg"
                name="Need Techn..."
                size="sm"
              />
              <Body color="light" className="body-icon">
                <FaAngleRight className="esculation-greater-than" />
              </Body>
            </Card>
            {/* fith card manager feedback section */}
            <Card className="card esculation-card-body">
              <Avatar name="Armando Rodriguez" size="sm" />
              <User
                className="esculation-user"
                avatarUrl=""
                name="Unexpected..."
                size="sm"
              />
              <Body color="light" className="body-icon">
                <FaAngleRight className="esculation-greater-than" />
              </Body>
            </Card>
          </Card>
        </div>

        {/* Processing card columns */}
        <div className="column-esculation">
          {/* processing card columns */}
          <Card padding="0" className="card esculation">
            <Card
              highlight={{ position: "side", color: "warning" }}
              className="card esculation-card-parent"
            >
              <Card className=" card esculation-card-header">
                <Body text="PROCESSING" color="lighter" />
                <div className="pb_icon_circle_kit_sm_yellow">
                  <span className="card-header-number">3</span>
                </div>
              </Card>
            </Card>
            {/* first card processing section */}
            <Card className="card esculation-card-body">
              <User
                className="esculation-user"
                avatarUrl="https://randomuser.me/api/portraits/men/32.jpg"
                name="Not Perform..."
                size="sm"
              />
              <Body color="light" className="body-icon">
                <FaAngleRight className="esculation-greater-than" />
              </Body>
            </Card>
            {/* second card processing section */}
            <Card className="card esculation-card-body">
              <User
                className="esculation-user"
                avatarUrl="https://randomuser.me/api/portraits/women/88.jpg"
                name="Missing Part"
                size="sm"
              />
              <Body color="light" className="body-icon">
                <FaAngleRight className="esculation-greater-than" />
              </Body>
            </Card>
            {/* third card processing section */}
            <Card className="card esculation-card-body">
              <Avatar name="Jennifer Watson" size="sm" />
              <User
                className="esculation-user"
                avatarUrl=""
                name="Missing Part"
                size="sm"
              />
              <Body color="light" className="body-icon">
                <FaAngleRight className="esculation-greater-than" />
              </Body>
            </Card>
            {/* fourth card processing section */}
            <Card className="card esculation-card-body">
              <User
                className="esculation-user"
                avatarUrl="https://randomuser.me/api/portraits/men/12.jpg"
                name="Need Techn..."
                size="sm"
              />
              <Body color="light" className="body-icon">
                <FaAngleRight className="esculation-greater-than" />
              </Body>
            </Card>
          </Card>
        </div>
        {/* awaiting feedback card column */}
        <div className="column-esculation">
          {/* awaiting feedback card columns */}
          <Card padding="0" className="card esculation">
            <Card
              highlight={{ position: "side", color: "category_11" }}
              className="card esculation-card-parent"
            >
              <Card className=" card esculation-card-header">
                <Body text="AWAITING FEEDBACK" color="lighter" />
                <div className="pb_icon_circle_kit_sm_red">
                  <span className="card-header-number">2</span>
                </div>
              </Card>
            </Card>
            {/* first card awaiting fedback section */}
            <Card className="card esculation-card-body">
              <User
                className="esculation-user"
                avatarUrl="https://randomuser.me/api/portraits/men/52.jpg"
                name="Need Techn..."
                size="sm"
              />
              <Body color="light" className="body-icon">
                <FaAngleRight className="esculation-greater-than" />
              </Body>
            </Card>
            {/* second card awaiting feedback section */}
            <Card className="card esculation-card-body">
              <User
                className="esculation-user"
                avatarUrl="https://randomuser.me/api/portraits/men/21.jpg"
                name="Missing Part"
                size="sm"
              />
              <Body color="light" className="body-icon">
                <FaAngleRight className="esculation-greater-than" />
              </Body>
            </Card>
            {/* third card awaiting feedback section */}
            <Card className="card esculation-card-body">
              <Avatar name="Kenny Stuart" size="sm" />
              <User
                className="esculation-user"
                avatarUrl=""
                name="Missing Part"
                size="sm"
              />
              <Body color="light" className="body-icon">
                <FaAngleRight className="esculation-greater-than" />
              </Body>
            </Card>
          </Card>
        </div>
        {/* Approved */}
        <div className="column-esculation">
          <Card padding="0" className="card esculation">
            <Card
              highlight={{ position: "side", color: "category_4" }}
              className="card esculation-card-parent"
            >
              <Card className=" card esculation-card-header">
                <Body text="APPROVED" color="lighter" />
                <div className="pb_icon_circle_kit_sm_green">
                  <span className="card-header-number">15</span>
                </div>
              </Card>
            </Card>
            {/* first card approved section */}
            <Card className="card esculation-card-body">
              <Avatar name="Kenny Matthews" size="sm" />
              <User
                className="esculation-user"
                avatarUrl=""
                name="Missing Part"
                size="sm"
              />
              <Body color="light" className="body-icon">
                <FaAngleRight className="esculation-greater-than" />
              </Body>
            </Card>
            {/* second card approved section */}
            <Card className="card esculation-card-body">
              <Avatar name="Tomas Junior" size="sm" />
              <User
                className="esculation-user"
                avatarUrl=""
                name="Not Perform..."
                size="sm"
              />
              <Body color="light" className="body-icon">
                <FaAngleRight className="esculation-greater-than" />
              </Body>
            </Card>
            {/* third card approved section */}
            <Card className="card esculation-card-body">
              <Avatar name="Manuel Carbajal" size="sm" />
              <User
                className="esculation-user"
                avatarUrl=""
                name="Missing Part"
                size="sm"
              />
              <Body color="light" className="body-icon">
                <FaAngleRight className="esculation-greater-than" />
              </Body>
            </Card>
            {/* fourth card approved section */}
            <Card className="card esculation-card-body">
              <User
                className="esculation-user"
                avatarUrl="https://randomuser.me/api/portraits/women/74.jpg"
                name="Missing Part"
                size="sm"
              />
              <Body color="light" className="body-icon">
                <FaAngleRight className="esculation-greater-than" />
              </Body>
            </Card>
            {/* fith card approved section */}
            <Card className="card esculation-card-body">
              <Avatar name="Kathy Curry" size="sm" />
              <User
                className="esculation-user"
                avatarUrl=""
                name="Unexpected..."
                size="sm"
              />
              <Body color="light" className="body-icon">
                <FaAngleRight className="esculation-greater-than" />
              </Body>
            </Card>
            {/* last card approved section */}
            <Card className="card esculation-card-body">
              <Avatar name="Robert Raynolds" size="sm" />
              <User
                className="esculation-user"
                avatarUrl=""
                name="Need Techn..."
                size="sm"
              />
              <Body color="light" className="body-icon">
                <FaAngleRight className="esculation-greater-than" />
              </Body>
            </Card>
            {/* Show More Card */}
            <Card className="card esculation-card-body">
              <Body className="show-more">
                <span>Show More</span>
              </Body>
            </Card>
          </Card>
        </div>
      </section>
    </div>
  );
}

export default Esculations;
