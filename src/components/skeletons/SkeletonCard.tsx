import React from 'react';
import { Button, Card, Placeholder } from 'react-bootstrap';

import Flex from '@components/common/Flex';

const SkeletonCard = () => (
  <>
    <Card className="h-md-100">
        <Card.Header className="pb-0">
        <Placeholder as="p" animation="glow">
            <Placeholder xs={4} />
          </Placeholder>
        </Card.Header>

        <Card.Body as={Flex} alignItems="end" justifyContent="between">
          <div className="w-25">
            <Placeholder as="p" animation="glow">
              <Placeholder xs={12} size="lg" />
            </Placeholder>
            <div>
              <Placeholder as="p" animation="glow">
                <Placeholder xs={12} />
              </Placeholder>
            </div>
          </div>

          <div style={{ width: '100%' || "11.5rem", height: 80 }}>
            <Placeholder animation="glow">
              <Placeholder xs={12} className="h-100" />
            </Placeholder>
          </div>
        </Card.Body>
      </Card>
  </>
);

export default SkeletonCard;
