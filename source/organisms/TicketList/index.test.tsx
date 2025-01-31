import React from 'react';
import renderer, { ReactTestRenderer } from 'react-test-renderer';

import TicketList, { Props } from '.';

describe('TicketList Molecule', () => {
  let tree: ReactTestRenderer;

  beforeAll(() => {
    const props: Props = {
      onSelectTicket: jest.fn(),
      tickets: [
        {
          amount: 1,
          movie: {
            date: '2017-09-27T05:06:56Z',
            genre: 'Drama|War',
            image: 'http://dummyimage.com/1459x751.png/cc0000/ffffff',
            inventory: 4,
            price: 28.704,
            title: 'Long Live Death (Viva la muerte)',
            _id: { $oid: '5b8701a1fc13ae6569000000' },
          },
        },
        {
          amount: 2,
          movie: {
            date: '2017-12-10T15:20:41Z',
            genre: 'Drama',
            image: 'http://dummyimage.com/1567x1523.jpg/dddddd/000000',
            inventory: 3,
            price: 10.622,
            title: 'Home',
            _id: { $oid: '5b8701a1fc13ae6569000001' },
          },
        },
      ],
    };
    tree = renderer.create(<TicketList {...props} />);
  });

  it('renders correctly', () => {
    expect(tree).toBeTruthy();
  });
});
