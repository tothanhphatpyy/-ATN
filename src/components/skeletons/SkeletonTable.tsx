import React, { useState } from "react";
import { Card, Placeholder, Table } from "react-bootstrap";
import PropTypes from "prop-types";
import Flex from "@components/common/Flex";

const SkeletonTable = () => {
  const [layout, setLayout] = useState("tableView");
  

  const thElements = Array.from({ length: 5 }, (_, index) => (
    <th key={index}>
      <Placeholder as="p" animation="glow" className="">
        <Placeholder xs={7} />
      </Placeholder>
    </th>
  ));

  const tbaleRows = Array.from({ length: 3 }).map((_, index) => (
    <tr key={index}>{thElements}</tr>
  ));
  return (
    <div>
      <Card>
        <Card.Header className="border-bottom border-200 px-0">
          <div className="row justify-content-between container-fluid">
            <div className="col-8">
              <Placeholder as="p" animation="glow">
                <Placeholder xs={2} />
                <Placeholder xs={3} className="ms-2" />
              </Placeholder>
            </div>
            <div className="col-4">
              <Placeholder as="p" animation="glow" className="">
                <Placeholder xs={2} />
                <Placeholder xs={2} className="ms-2" />
                <Placeholder xs={2} className="ms-2" />
                <Placeholder xs={2} className="ms-2" />
              </Placeholder>
            </div>
          </div>
        </Card.Header>
        {layout === "tableView" && (
          <div>
            <Card.Body className="p-0">
              <div className="table-responsive scrollbar">
                <Table>
                  <thead className="bg-light text-800 align-middle">
                    <tr>{thElements}</tr>
                  </thead>
                  <tbody>{tbaleRows}</tbody>
                </Table>
              </div>
            </Card.Body>
            <Card.Footer className="d-flex container-fluid align-items-center justify-content-between">
              <Placeholder as="p" animation="glow" className='row' >
                <Placeholder xs={12} className="ms-3"/>
              </Placeholder>
              <Flex>
                <Placeholder as="p" animation="glow">
                  <Placeholder.Button xs={2} />
                </Placeholder>
                <Placeholder as={Card.Text} animation="glow">
                  <Placeholder.Button
                    variant="primary"
                    xs={12}
                    className="ms-2"
                  />
                </Placeholder>
              </Flex>
            </Card.Footer>
          </div>
          )}
      </Card>
    </div>
  );
};

SkeletonTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

export default SkeletonTable;
